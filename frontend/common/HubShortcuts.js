// SpaceStation only: the hub's ⌘⇧] / ⌘⇧[ tab switching, shared by the two documents it spans —
// the hub (`frontend/land.js`) acts on the shortcut, the notebook editor (`frontend/editor.js`)
// only forwards it.
//
// Every notebook tab is an iframe with its own document, so a keydown inside the editor never
// reaches the hub. The editor therefore posts the keystroke up to its parent frame. Both sides
// listen in the CAPTURE phase, so the key lands before CodeMirror or xterm can claim it, and both
// call preventDefault, so the browser switches notebook tabs instead of its own.
//
// ⌘ only. On a Windows/Linux keyboard ⌃⇧[ / ⌃⇧] already folds cells in the editor, and Chrome's own
// tab switching there is ⌃Tab, which a page cannot override anyway.

export const SWITCH_TAB_MESSAGE = "spacestation switch tab"

/** @returns {number?} +1 for the next tab, -1 for the previous one, null when this is not the shortcut. */
export const tab_switch_delta = (/** @type {KeyboardEvent} */ e) => {
    if (!e.metaKey || !e.shiftKey || e.ctrlKey || e.altKey) return null
    // `code` is the physical key: it holds up on layouts where ⇧] is not `}`. `key` is the fallback
    // for layouts where the brackets sit on a different physical key.
    if (e.code === "BracketRight" || e.key === "}" || e.key === "]") return +1
    if (e.code === "BracketLeft" || e.key === "{" || e.key === "[") return -1
    return null
}

/**
 * Call `on_switch(±1)` whenever the shortcut is pressed anywhere in this document.
 * @param {(delta: number) => void} on_switch
 * @returns {() => void} unsubscribe
 */
export const listen_for_tab_switch = (on_switch) => {
    const on_keydown = (/** @type {KeyboardEvent} */ e) => {
        const delta = tab_switch_delta(e)
        if (delta == null) return
        e.preventDefault()
        e.stopPropagation()
        on_switch(delta)
    }
    window.addEventListener("keydown", on_keydown, { capture: true })
    return () => window.removeEventListener("keydown", on_keydown, { capture: true })
}

// A cross-origin parent throws on `.location.origin`, which is exactly the test we want: only the
// hub hosting this editor gets the keystroke. An editor embedded in someone else's page keeps its
// browser's tab shortcuts.
const hosted_by_same_origin_parent = () => {
    if (window.self === window.top) return false
    try {
        return window.parent.location.origin === window.location.origin
    } catch (e) {
        return false
    }
}

/**
 * Called by the notebook editor: when it is running as a hub tab, hand the shortcut to the hub.
 * @returns {() => void} unsubscribe
 */
export const forward_tab_switch_to_hub = () => {
    if (!hosted_by_same_origin_parent()) return () => {}
    return listen_for_tab_switch((delta) => {
        window.parent.postMessage({ type: SWITCH_TAB_MESSAGE, delta }, window.location.origin)
    })
}
