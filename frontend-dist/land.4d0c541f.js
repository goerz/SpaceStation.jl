import"./frontend.273ac9b7.js";var e=globalThis,t={},n={},a=e.parcelRequire94c2;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,a.call(l.exports,l,l.exports),l.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequire94c2=a);var l=a.register;l("eFdO5",function(e,t){e.exports=Promise.all([import("a4Bpq"),import("40eaD")]).then(()=>a("jHfCa"))}),l("ij8WE",function(e,t){e.exports=import("9qLMb").then(()=>a("nD8bM"))}),l("iCed3",function(e,t){e.exports=import("aZARi").then(()=>a("hiQgq"))});var o=a("cNaMA");let r=async(e,t)=>{let n=await fetch(e,t);if(!n.ok)throw Error(`${e} \u{2192} ${n.status}`);return await n.text()},i=async(e,t)=>{let n=await fetch(e,t);if(!n.ok)throw Error(`${e} \u{2192} ${n.status}`);return await n.json()},s=e=>e.split("/").pop(),c=(e,{action:t="Confirm",danger:n=!1}={})=>new Promise(a=>{let l=document.createElement("dialog");l.className="land-confirm";let o=document.createElement("p");o.textContent=e;let r=document.createElement("div");r.className="buttons";let i=document.createElement("button");i.textContent="Cancel";let s=document.createElement("button");s.textContent=t,s.className=`go ${n?"danger":""}`,r.append(i,s),l.append(o,r),document.body.append(l);let c=e=>{l.close(),l.remove(),a(e)};i.onclick=()=>c(!1),s.onclick=()=>c(!0),l.oncancel=e=>{e.preventDefault(),c(!1)},l.onclick=e=>e.target===l&&c(!1),l.showModal(),i.focus()}),u="spacestation-homebase",d=e=>null==e?e:`${e}#homebase=${encodeURIComponent(window.location.origin+window.location.pathname+window.location.search)}`,p=new URL(import.meta.resolve("gx1Fc")).href,m="spacestation recent workspaces",h=()=>{try{let e=JSON.parse(localStorage.getItem(m)??"[]");return Array.isArray(e)?e:[]}catch{return[]}},b=e=>{localStorage.setItem(m,JSON.stringify([e,...h().filter(t=>t!==e)].slice(0,8)))},f="spacestation terminals by workspace",$="spacestation terminals",g="spacestation ssh connect timeout",w=e=>Math.max(3,Math.min(180,Math.round(Number(e)||25))),v=()=>{let e=Number(localStorage.getItem(g));return Number.isFinite(e)&&e>=3?w(e):25},y=({entry:e,on_open_notebook:t,on_open_file:n,on_create_in:a,on_delete:l,depth:r})=>{let[i,s]=(0,o.useState)(!1);if("dir"===e.type)return(0,o.html)`<li class="dir ${i?"open":""}">
            <div class="entry-row">
                <button class="entry" onClick=${()=>s(!i)}><span class="icon chevron"></span>${e.name}</button>
                <button class="row-action" title="New notebook or file in ${e.name}/" onClick=${()=>a(e.path)}>+</button>
            </div>
            ${i?(0,o.html)`<ul>
                      ${e.children.map(e=>(0,o.html)`<${y}
                                  key=${e.path}
                                  entry=${e}
                                  on_open_notebook=${t}
                                  on_open_file=${n}
                                  on_create_in=${a}
                                  on_delete=${l}
                                  depth=${r+1}
                              />`)}
                  </ul>`:null}
        </li>`;let c="notebook"===e.type;return(0,o.html)`<li class=${c?"notebook":"file"}>
        <div class="entry-row">
            <button
                class="entry ${c?"":"quiet"}"
                title=${e.path}
                onClick=${()=>c?t(e.path):n(e.path)}
            >
                <span class="icon ${c?"pluto-dot":""}"></span>${e.name}
            </button>
            <button class="row-action danger" title="Delete ${e.name}" onClick=${()=>l(e)}>✕</button>
        </div>
    </li>`},k=({on_cancel:e,tunneled:t})=>{let[n,a]=(0,o.useState)(null),[l,r]=(0,o.useState)(null),[u,m]=(0,o.useState)([]),[f,$]=(0,o.useState)(v),[y,k]=(0,o.useState)({}),[S,C]=(0,o.useState)({}),[_,E]=(0,o.useState)([]),R=(0,o.useRef)(new Set),I=(0,o.useRef)(new Set);(0,o.useEffect)(()=>{i("./api/v1/ssh_hosts").then(m).catch(()=>{})},[]),(0,o.useEffect)(()=>{localStorage.setItem(g,String(f)),fetch(`./api/v1/remote/config?connect_timeout=${encodeURIComponent(f)}`,{method:"POST"}).catch(()=>{})},[f]);let O=(0,o.useCallback)(async e=>{R.current.delete(e);try{let t=await i(`./api/v1/remote/open?host=${encodeURIComponent(e)}`,{method:"POST"});for(k(n=>({...n,[e]:t}));"ready"!==t.state&&"error"!==t.state;){if(await new Promise(e=>setTimeout(e,1500)),R.current.has(e))return;t=await i(`./api/v1/remote/status?host=${encodeURIComponent(e)}`),k(n=>({...n,[e]:t}))}"ready"===t.state&&null!=t.url&&window.open(d(t.url),"_blank")}catch(t){if(R.current.has(e))return;k(n=>({...n,[e]:{state:"error",detail:String(t),url:null}}))}},[]),T=(0,o.useCallback)(async e=>{R.current.add(e);try{await fetch(`./api/v1/remote/cancel?host=${encodeURIComponent(e)}`,{method:"POST"})}catch(e){}k(t=>{let n={...t};return delete n[e],n}),E(t=>t.filter(t=>"remote"!==t.kind||t.host!==e))},[]),P=(0,o.useCallback)(async e=>{I.current.delete(e);try{let t=await i(`./api/v1/local/open?path=${encodeURIComponent(e)}`,{method:"POST"});for(C(n=>({...n,[e]:t}));"ready"!==t.state&&"error"!==t.state;){if(await new Promise(e=>setTimeout(e,1e3)),I.current.has(e))return;t=await i(`./api/v1/local/status?path=${encodeURIComponent(e)}`),C(n=>({...n,[e]:t}))}"ready"===t.state&&null!=t.url&&(b(e),window.open(d(t.url),"_blank"))}catch(t){if(I.current.has(e))return;C(n=>({...n,[e]:{state:"error",detail:String(t),url:null}}))}},[]),x=(0,o.useCallback)(async e=>{I.current.add(e);try{await fetch(`./api/v1/local/shutdown?path=${encodeURIComponent(e)}`,{method:"POST"})}catch(e){}C(t=>{let n={...t};return delete n[e],n}),E(t=>t.filter(t=>"local"!==t.kind||t.path!==e))},[]),N=(0,o.useCallback)(async e=>{if(await c(`Shut down the workspace server for ${s(e)}?

Its running notebooks will stop. Files stay on disk and outputs are cached in their .pluto-cache.toml sidecars, so reopening restores everything.`,{action:"Shut down"})){try{await fetch(`./api/v1/local/shutdown?path=${encodeURIComponent(e)}`,{method:"POST"})}catch(e){}C(t=>{let n={...t};return delete n[e],n}),E(t=>t.filter(t=>"local"!==t.kind||t.path!==e))}},[]),L=(0,o.useCallback)(async e=>{if(!t)return P(e);try{await i(`./api/v1/workspace/open?path=${encodeURIComponent(e)}`,{method:"POST"}),b(e),window.location.reload()}catch(e){r(String(e))}},[t,P]),U=(0,o.useCallback)(e=>"remote"===e.kind?T(e.host):"ready"===e.state?N(e.path):x(e.path),[T,N,x]);(0,o.useEffect)(()=>{let e=!0,t=async()=>{let[t,n]=await Promise.all([i("./api/v1/local/list").catch(()=>[]),i("./api/v1/remote/list").catch(()=>[])]);e&&E([...t.map(e=>({kind:"local",key:`local:${e.path}`,name:s(e.path)||e.path,sub:e.path,state:e.state,url:e.url,path:e.path})),...n.map(e=>({kind:"remote",key:`remote:${e.host}`,name:e.host,sub:"SSH remote",state:e.state,url:e.url,host:e.host}))])};t();let n=setInterval(t,3e3);return()=>{e=!1,clearInterval(n)}},[]);let j=(0,o.useCallback)(async e=>{try{a(await i(null==e?"./api/v1/browse":`./api/v1/browse?path=${encodeURIComponent(e)}`)),r(null)}catch(e){r(String(e))}},[]);(0,o.useEffect)(()=>{j(null)},[]);let M=h(),A=null==n?[]:[{name:"/",path:"/"},...n.path.split("/").filter(e=>""!==e).map((e,t,n)=>({name:e,path:"/"+n.slice(0,t+1).join("/")}))];return(0,o.html)`<div class="workspace-opener">
        <div class="bubble opener-card">
            <header>
                <img class="land-logo opener-logo" src=${p} alt="SpaceStation" />
                <h1>Space<span class="land-accent">Station</span></h1>
                <p class="subtitle">Open a folder as your workspace — notebooks inside it open as tabs.</p>
                ${null==e?null:(0,o.html)`<button class="opener-cancel" title="Close — back to your workspace" onClick=${e}><span class="opener-cancel-icon"></span></button>`}
            </header>

            ${!t&&_.length>0?(0,o.html)`<section>
                      <h2>Running Workspaces</h2>
                      <div class="recent-grid">
                          ${_.map(e=>(0,o.html)`<div class="recent-card running-card ${"ready"===e.state?"":"running-busy"}" key=${e.key}>
                                  ${null!=e.url?(0,o.html)`<a class="running-open" href=${d(e.url)} target="_blank" rel="opener" title=${`Open ${e.name}`}>
                                            <span class="recent-icon">${"remote"===e.kind?"🛰":"🗂"}</span>
                                            <span class="recent-name">${e.name}</span>
                                            <span class="recent-path">${e.sub}</span>
                                        </a>`:(0,o.html)`<div class="running-open is-busy">
                                            <span class="recent-icon">${"remote"===e.kind?"🛰":"🗂"}</span>
                                            <span class="recent-name">${e.name}</span>
                                            <span class="recent-path">${e.state}…</span>
                                        </div>`}
                                  <button
                                      class="running-shutdown"
                                      title=${"error"===e.state?"Dismiss":"ready"!==e.state?"Cancel":"remote"===e.kind?"Disconnect":"Shut down this workspace"}
                                      onClick=${()=>U(e)}
                                  >
                                      ✕
                                  </button>
                              </div>`)}
                      </div>
                  </section>`:null}

            ${M.length>0?(0,o.html)`<section>
                      <h2>Recent</h2>
                      <div class="recent-grid">
                          ${M.map(e=>(0,o.html)`<button class="recent-card" title=${e} onClick=${()=>L(e)}>
                                  <span class="recent-icon">🗂</span>
                                  <span class="recent-name">${s(e)}</span>
                                  <span class="recent-path">${e}</span>
                              </button>`)}
                      </div>
                  </section>`:null}

            <section>
                <h2>Browse</h2>
                ${null==n?(0,o.html)`<p class="subtitle">loading…</p>`:(0,o.html)`
                          <nav class="breadcrumbs">
                              ${A.map((e,t)=>(0,o.html)`<button
                                          class="crumb ${t===A.length-1?"current":""}"
                                          onClick=${()=>j(e.path)}
                                          title=${e.path}
                                      >
                                          ${e.name}</button
                                      >${t<A.length-1&&"/"!==e.name?(0,o.html)`<span class="crumb-sep">/</span>`:null}`)}
                          </nav>
                          <div class="dir-grid">
                              ${n.dirs.map(e=>(0,o.html)`<button class="dir-pill" title=${`${n.path}/${e}`} onClick=${()=>j(`${n.path}/${e}`)}>
                                      <span class="dir-icon">📁</span>${e}
                                  </button>`)}
                              ${0===n.dirs.length?(0,o.html)`<p class="subtitle">no subfolders</p>`:null}
                          </div>
                          <div class="opener-actions">
                              <button class="open-this-folder" onClick=${()=>L(n.path)}>
                                  Open <strong>${s(n.path)||"/"}</strong> as workspace
                              </button>
                              <form
                                  class="paste-path"
                                  onSubmit=${e=>{e.preventDefault();let t=e.target.elements.path.value.trim();""!==t&&j(t)}}
                              >
                                  <input name="path" type="text" placeholder="…or paste a folder path and press Enter" autocomplete="off" />
                              </form>
                          </div>
                      `}
            </section>
            ${!t&&u.length>0?(0,o.html)`<section>
                      <h2>SSH Remotes</h2>
                      <p class="subtitle small">
                          Click a host: the whole Land (files, kernels, terminal) runs on that machine over an SSH tunnel. First contact installs the
                          server there; after that it reconnects instantly.
                      </p>
                      <label
                          class="ssh-timeout"
                          title="How long to wait for an SSH connection — including the banner from a slow ProxyJump login node — before giving up."
                      >
                          Connection timeout
                          <input
                              type="number"
                              min="3"
                              max="180"
                              step="1"
                              value=${f}
                              onChange=${e=>$(w(e.target.value))}
                          />
                          <span class="unit">s</span>
                          <span class="ssh-timeout-hint">Raise this if a host fails with “timed out reaching … slow SSH hop”.</span>
                      </label>
                      <div class="dir-grid">
                          ${u.map(e=>{let t=y[e],n=null!=t&&"ready"!==t.state&&"error"!==t.state;return t?.state==="ready"&&null!=t.url?(0,o.html)`<a class="dir-pill remote-ready" href=${d(t.url)} target="_blank" rel="opener" title=${t.detail}>
                                        <span class="dir-icon">🛰</span>${e} →
                                    </a>`:(0,o.html)`<button
                                        class="dir-pill ${n?"remote-busy":""} ${t?.state==="error"?"remote-error":""}"
                                        title=${t?.detail??`Open a workspace on ${e}`}
                                        onClick=${()=>O(e)}
                                    >
                                        <span class="dir-icon">🛰</span>${n?`${e}: ${t.state}\u{2026}`:t?.state==="error"?`${e}: failed (retry)`:e}
                                    </button>`})}
                      </div>
                      ${Object.entries(y).filter(([e,t])=>"ready"!==t.state&&"error"!==t.state).map(([e,t])=>(0,o.html)`<div class="remote-progress" key=${e}>
                                  <span class="remote-spinner"></span>
                                  <div class="remote-progress-text">
                                      <strong>Connecting to ${e} — ${t.state}</strong>
                                      <span>${t.detail}</span>
                                      ${"installing"===t.state?(0,o.html)`<span class="remote-progress-note">First-time setup compiles a lot of Julia — this is the slow step. Leave this page open; it will connect by itself.</span>`:null}
                                  </div>
                                  <button class="remote-cancel" title="Cancel this connection" onClick=${()=>T(e)}>Cancel</button>
                              </div>`)}
                      ${Object.values(y).some(e=>"error"===e.state)?(0,o.html)`<p class="opener-error">${Object.entries(y).filter(([e,t])=>"error"===t.state).map(([e,t])=>`${e}: ${t.detail}`).join(" · ")}</p>`:null}
                  </section>`:null}
            ${Object.entries(S).filter(([e,t])=>"ready"!==t.state&&"error"!==t.state).map(([e,t])=>(0,o.html)`<div class="remote-progress" key=${e}>
                        <span class="remote-spinner"></span>
                        <div class="remote-progress-text">
                            <strong>Starting ${s(e)} — ${t.state}</strong>
                            <span>${t.detail}</span>
                        </div>
                        <button class="remote-cancel" title="Cancel this launch" onClick=${()=>x(e)}>Cancel</button>
                    </div>`)}
            ${Object.values(S).some(e=>"error"===e.state)?(0,o.html)`<p class="opener-error">
                      ${Object.entries(S).filter(([e,t])=>"error"===t.state).map(([e,t])=>`${s(e)}: ${t.detail}`).join(" · ")}
                  </p>`:null}
            ${null==l?null:(0,o.html)`<p class="opener-error">${l}</p>`}
        </div>
    </div>`},S=({tid:e,cwd:t,visible:n})=>{let l=(0,o.useRef)(null),r=(0,o.useRef)(!1),s=(0,o.useRef)(null),c=(0,o.useRef)(null),u=(0,o.useRef)(null),d=(0,o.useRef)(null),p=(0,o.useRef)(null),m=(0,o.useRef)(null),h=(0,o.useCallback)(()=>{clearTimeout(c.current),c.current=setTimeout(()=>{let e=l.current,t=s.current;if(null!=e&&null!=t&&null!==e.offsetParent&&!(e.clientWidth<24)&&!(e.clientHeight<24))try{t.fit()}catch{}},120)},[]);return(0,o.useEffect)(()=>{n&&(r.current?h():null!=l.current&&(r.current=!0,(async()=>{let[{Terminal:n},{FitAddon:o},r]=await Promise.all([a("eFdO5"),a("ij8WE"),i("./api/v1/config").catch(()=>null)]),c=getComputedStyle(document.documentElement),b=new n({fontSize:13,fontFamily:"JuliaMono, SFMono-Regular, Menlo, Consolas, monospace",cursorBlink:!0,scrollback:5e3,...r?.windows?{windowsPty:{backend:"conpty"}}:{},theme:{background:c.getPropertyValue("--terminal-bg").trim()||"#1f1f1f",foreground:c.getPropertyValue("--terminal-fg").trim()||"#dddddd"}}),f=new o;if(b.loadAddon(f),s.current=f,d.current=b,null==l.current){try{b.dispose()}catch{}d.current=null;return}b.open(l.current);let $=null;b.attachCustomKeyEventHandler(e=>"keydown"!==e.type||!((e.metaKey||e.ctrlKey)&&("c"===e.key||"C"===e.key)&&b.hasSelection())||(navigator.clipboard?.writeText(b.getSelection()).catch(()=>{}),!1));let g=async e=>{let t=Array.from(e.clipboardData?.items??[]).find(e=>e.type?.startsWith("image/")),n=t?.getAsFile()??Array.from(e.clipboardData?.files??[]).find(e=>e.type?.startsWith("image/"));if(null!=n){e.preventDefault(),e.stopPropagation();try{let e=new Uint8Array(await n.arrayBuffer()),t="";for(let n=0;n<e.length;n+=32768)t+=String.fromCharCode.apply(null,e.subarray(n,n+32768));let a=n.type.split("/")[1]||"png";$?.readyState===WebSocket.OPEN&&$.send(`2:${a}:${btoa(t)}`)}catch{}}};b.element?.addEventListener("paste",g,{capture:!0}),m.current=()=>b.element?.removeEventListener("paste",g,{capture:!0});try{await document.fonts?.ready}catch{}if(null!=l.current&&null!==l.current.offsetParent&&l.current.clientWidth>=24&&l.current.clientHeight>=24)try{f.fit()}catch{}h();let w="https:"===window.location.protocol?"wss":"ws",v=t?`&cwd=${encodeURIComponent(t)}`:"",y=`&rows=${b.rows}&cols=${b.cols}`;u.current=$=new WebSocket(`${w}://${window.location.host}/terminal?tid=${e}${v}${y}`),$.binaryType="arraybuffer",$.onmessage=e=>{if("string"!=typeof e.data)return void b.write(new Uint8Array(e.data));let t=null;try{t=JSON.parse(e.data)}catch{}if(null!=t){if(Number.isFinite(t.rows)&&Number.isFinite(t.cols)&&(b.rows!==t.rows||b.cols!==t.cols))try{b.resize(t.cols,t.rows)}catch{}t.replayed&&(()=>{let e=l.current;if(null!=e&&null!==e.offsetParent&&e.clientWidth>=24&&e.clientHeight>=24)try{f.fit()}catch{}$?.readyState===WebSocket.OPEN&&$.send(`1:${b.rows},${b.cols}`)})()}},$.onopen=()=>h(),$.onclose=()=>b.write("\r\n\x1b[2m[disconnected — the shell is still running; reload to reattach]\x1b[0m\r\n"),b.onData(e=>$.readyState===WebSocket.OPEN&&$.send("0:"+e)),b.onResize(({rows:e,cols:t})=>$.readyState===WebSocket.OPEN&&$.send(`1:${e},${t}`));let k=new ResizeObserver(()=>h());k.observe(l.current),p.current=k})()))},[n,h]),(0,o.useEffect)(()=>()=>{clearTimeout(c.current),m.current?.(),m.current=null;try{p.current?.disconnect()}catch{}p.current=null;let e=u.current;if(null!=e){e.onclose=null,e.onmessage=null,e.onopen=null,e.onerror=null;try{e.close()}catch{}}u.current=null;try{d.current?.dispose()}catch{}d.current=null,s.current=null},[]),(0,o.html)`<div class="terminal-host" ref=${l}></div>`},C=new Map,_=({path:e,visible:t})=>{let n=(0,o.useRef)(null),l=(0,o.useRef)(null),s=(0,o.useRef)(!1),[c,u]=(0,o.useState)(!1),[d,p]=(0,o.useState)("loading…"),m=(0,o.useCallback)(async()=>{let t=l.current;if(null!=t)try{await i(`./api/v1/file/save?path=${encodeURIComponent(e)}`,{method:"POST",body:t.state.doc.toString()}),C.set(e,!1),u(!1),p("saved"),setTimeout(()=>p(""),1500)}catch(e){p(String(e))}},[e]);return(0,o.useEffect)(()=>{t&&!s.current&&null!=n.current&&(s.current=!0,(async()=>{try{let t=await a("iCed3"),o=await r(`./api/v1/file?path=${encodeURIComponent(e)}`),i=t.HighlightStyle.define([{tag:t.tags.keyword,color:"var(--cm-color-keyword)"},{tag:t.tags.comment,color:"var(--cm-color-comment)",fontStyle:"italic"},{tag:t.tags.string,color:"var(--cm-color-string)"},{tag:t.tags.number,color:"var(--cm-color-literal)"},{tag:t.tags.literal,color:"var(--cm-color-literal)"},{tag:t.tags.macroName,color:"var(--cm-color-macro)"},{tag:t.tags.variableName,color:"var(--cm-color-variable)"},{tag:t.tags.heading,color:"var(--cm-color-md)",fontWeight:"700"},{tag:t.tags.link,color:"var(--cm-color-link)"}],{all:{color:"var(--cm-color-editor-text)"}}),s=e.split(".").pop()?.toLowerCase(),c="jl"===s?[t.julia()]:"md"===s?[t.markdown()]:"toml"===s?(()=>{try{return[t.StreamLanguage.define(t.toml)]}catch{return[]}})():"css"===s?[t.css()]:"js"===s||"mjs"===s?[t.javascript()]:"html"===s?[t.html()]:"py"===s?[t.python()]:[],d=new t.EditorView({state:t.EditorState.create({doc:o,extensions:[t.lineNumbers(),t.history(),t.drawSelection(),t.indentOnInput(),t.bracketMatching(),t.highlightActiveLine(),t.syntaxHighlighting(i),...c,t.keymap.of([{key:"Mod-s",run:()=>(m(),!0)},...t.defaultKeymap,...t.historyKeymap]),t.EditorView.updateListener.of(t=>{t.docChanged&&(C.set(e,!0),u(!0))}),t.EditorView.theme({},{dark:window.matchMedia("(prefers-color-scheme: dark)").matches})]}),parent:n.current});if(null==n.current){try{d.destroy()}catch{}return}l.current=d,p("")}catch(e){p(String(e))}})())},[t]),(0,o.useEffect)(()=>()=>{try{l.current?.destroy()}catch{}l.current=null},[]),(0,o.html)`<div class="file-pane">
        <div class="file-toolbar">
            <span class="file-path" title=${e}>${e}</span>
            <span class="file-status">${c?"●":""} ${d}</span>
            <button class="file-save ${c?"dirty":""}" onClick=${m} title="Save (Ctrl/Cmd+S)">Save</button>
        </div>
        <div class="file-editor" ref=${n}></div>
    </div>`};(0,o.render)((0,o.html)`<${()=>{let[e,t]=(0,o.useState)(null),[n,a]=(0,o.useState)(!1),[l,d]=(0,o.useState)([]),[m,h]=(0,o.useState)([]),[b,g]=(0,o.useState)(null),[w,v]=(0,o.useState)(null),[E,R]=(0,o.useState)(()=>Number(localStorage.getItem("spacestation sidebar width"))||290),[I,O]=(0,o.useState)(()=>"true"===localStorage.getItem("spacestation sidebar hidden")),[T,P]=(0,o.useState)(()=>"true"===localStorage.getItem("spacestation terminal open")),[x,N]=(0,o.useState)(()=>Number(localStorage.getItem("spacestation terminal height"))||280),[L,U]=(0,o.useState)(()=>Number(localStorage.getItem("spacestation terminal width"))||420),[j,M]=(0,o.useState)(()=>"right"===localStorage.getItem("spacestation terminal dock")?"right":"bottom"),A=(0,o.useRef)(!1);T&&(A.current=!0);let[D,H]=(0,o.useState)(!1),[W,F]=(0,o.useState)(!1),z=(0,o.useRef)(null);(0,o.useEffect)(()=>{if(!W)return;let e=e=>{null==z.current||z.current.contains(e.target)||F(!1)},t=e=>{"Escape"===e.key&&F(!1)};return document.addEventListener("pointerdown",e),document.addEventListener("keydown",t),()=>{document.removeEventListener("pointerdown",e),document.removeEventListener("keydown",t)}},[W]);let J=(0,o.useRef)(!1),q=(0,o.useRef)(null);if(null==q.current){let e=window.location.hash.match(/[#&]homebase=([^&]+)/);if(e)try{q.current=decodeURIComponent(e[1])}catch(e){}}let[V,B]=(0,o.useState)(!1);(0,o.useEffect)(()=>{i("./api/v1/config").then(e=>B(!!(e&&e.tunneled))).catch(()=>{})},[]),(0,o.useEffect)(()=>{n&&(window.name=u)},[n]),(0,o.useEffect)(()=>{document.title=n?"SpaceStation (launcher)":e?.root?`SpaceStation \u{2014} ${s(e.root)}`:"SpaceStation"},[n,e]);let K=(0,o.useCallback)(()=>{if(V)return void fetch("./api/v1/workspace/close",{method:"POST"}).finally(()=>window.location.reload());try{if(window.opener&&!window.opener.closed)return void window.opener.focus()}catch(e){}if(q.current){let e=null;try{e=window.open("",u)}catch(e){}if(null==e)return void window.open(q.current,u);let t=!1;try{t="about:blank"===e.location.href}catch(e){}if(t)try{e.location.href=q.current}catch(e){}try{e.focus()}catch(e){}return}H(!0)},[V]),[X,Y]=(0,o.useState)([]),[G,Q]=(0,o.useState)(null),Z=(0,o.useRef)(null),ee=(0,o.useRef)(-1);(0,o.useEffect)(()=>{let t=e?.root??null;if(null==t||Z.current===t)return;let n=(e=>{if("string"!=typeof e||0===e.length)return[];try{let t=JSON.parse(localStorage.getItem(f)??"{}"),n=t&&"object"==typeof t&&!Array.isArray(t)?t[e]:null;if(!Array.isArray(n)){let e=JSON.parse(localStorage.getItem($)??"[]");Array.isArray(e)&&e.length>0&&(n=e,localStorage.removeItem($))}if(!Array.isArray(n))return[];return n.filter(e=>e&&"string"==typeof e.tid).map(e=>({tid:e.tid,label:e.label??"Terminal"}))}catch{return[]}})(t);Z.current=t,Y(n),Q(n.length?n[n.length-1].tid:null);let a=n.map(e=>parseInt(String(e.label??"").replace(/[^0-9]/g,""),10)).filter(e=>!isNaN(e));ee.current=a.length?Math.max(...a):0},[e?.root]),(0,o.useEffect)(()=>{localStorage.setItem("spacestation sidebar width",String(E)),localStorage.setItem("spacestation sidebar hidden",String(I)),localStorage.setItem("spacestation terminal open",String(T)),localStorage.setItem("spacestation terminal height",String(x)),localStorage.setItem("spacestation terminal width",String(L)),localStorage.setItem("spacestation terminal dock",j)},[E,I,T,x,L,j]),(0,o.useEffect)(()=>{let t=e?.root??null;null!=t&&Z.current===t&&((e,t)=>{if("string"!=typeof e||0===e.length)return;let n={};try{let e=JSON.parse(localStorage.getItem(f)??"{}");e&&"object"==typeof e&&!Array.isArray(e)&&(n=e)}catch{}n[e]=t.map(e=>({tid:e.tid,label:e.label})),localStorage.setItem(f,JSON.stringify(n))})(t,X)},[X,e?.root]),(0,o.useEffect)(()=>{let e=e=>{let t=!1;for(let e of C.values())if(e){t=!0;break}t&&(e.preventDefault(),e.returnValue="")};return window.addEventListener("beforeunload",e),()=>window.removeEventListener("beforeunload",e)},[]);let et=(0,o.useCallback)(e=>{e.preventDefault();let t="bottom"===j;document.body.classList.add(t?"resizing-v":"resizing");let n=e=>t?N(Math.max(120,Math.min(window.innerHeight-220,window.innerHeight-e.clientY-12))):U(Math.max(240,Math.min(window.innerWidth-420,window.innerWidth-e.clientX-12))),a=()=>{document.body.classList.remove("resizing-v"),document.body.classList.remove("resizing"),window.removeEventListener("pointermove",n),window.removeEventListener("pointerup",a)};window.addEventListener("pointermove",n),window.addEventListener("pointerup",a)},[j]),en=(0,o.useCallback)((e,t,n="notebook")=>{h(a=>a.some(t=>t.id===e)?a:[...a,{id:e,path:t,kind:n}]),g(e)},[]),ea=(0,o.useCallback)(e=>{en(`file:${e}`,e,"file")},[en]),el=(0,o.useCallback)(()=>{if(e?.root==null||Z.current!==e.root)return;ee.current+=1;let t="term-"+Math.random().toString(36).slice(2,12);Y(e=>[...e,{tid:t,label:`Terminal ${ee.current}`}]),Q(t),P(!0)},[e?.root]),eo=(0,o.useCallback)(e=>{fetch(`./api/v1/terminal/close?tid=${encodeURIComponent(e)}`,{method:"POST"}).catch(()=>{}),Y(t=>{let n=t.filter(t=>t.tid!==e);return Q(t=>t===e?n.length?n[n.length-1].tid:null:t),n})},[]);(0,o.useEffect)(()=>{T&&e?.root!=null&&Z.current===e.root&&0===X.length&&el()},[T,X.length,e?.root]);let er=(0,o.useCallback)(async()=>{try{let e=await fetch("./api/v1/workspace");if(404===e.status)a(!0),t(null);else if(e.ok)a(!1),t(await e.json());else throw Error(`workspace request failed: ${e.status}`);let n=await i("./api/v1/notebooks");d(n),J.current||(J.current=!0,n.forEach(e=>en(e.notebook_id,e.path))),v(null)}catch(e){v(String(e))}},[en]);(0,o.useEffect)(()=>{er();let e=setInterval(er,1e4);return()=>clearInterval(e)},[]);let ei=(0,o.useCallback)(e=>{e.preventDefault(),document.body.classList.add("resizing");let t=e=>R(Math.max(180,Math.min(560,e.clientX-12))),n=()=>{document.body.classList.remove("resizing"),window.removeEventListener("pointermove",t),window.removeEventListener("pointerup",n)};window.addEventListener("pointermove",t),window.addEventListener("pointerup",n)},[]),es=(0,o.useCallback)(async e=>{try{let t=await r(`./open?path=${encodeURIComponent(e)}`,{method:"POST"});en(t,e),er()}catch(e){v(String(e))}},[en,er]),ec=(0,o.useCallback)(async()=>{if(null==e)return;let t=prompt("Notebook file name (created in the workspace):","new notebook.jl");if(null!=t)try{let n=await r("./new",{method:"POST"}),a=`${e.root}/${t.endsWith(".jl")?t:t+".jl"}`;await r(`./move?id=${encodeURIComponent(n)}&newpath=${encodeURIComponent(a)}`,{method:"POST"}),en(n,a),er()}catch(e){v(String(e))}},[e,en,er]),eu=(0,o.useCallback)(async e=>{if(e.startsWith("file:")){let t=e.slice(5);if(C.get(t)&&!await c("This file has unsaved changes. Close anyway?",{action:"Close without saving",danger:!0}))return;C.delete(t)}h(t=>{let n=t.filter(t=>t.id!==e);return g(t=>t===e?n.length>0?n[n.length-1].id:null:t),n})},[]),ed=(0,o.useCallback)(async e=>{let t=prompt(`New file in ${e.split("/").pop()}/ \u{2014} a name ending in .jl becomes a Pluto notebook:`,"notebook.jl");if(null==t||""===t.trim())return;let n=`${e}/${t.trim()}`;try{if(t.trim().endsWith(".jl")){let e=await r("./new",{method:"POST"});await r(`./move?id=${encodeURIComponent(e)}&newpath=${encodeURIComponent(n)}`,{method:"POST"}),en(e,n)}else await i(`./api/v1/file/new?path=${encodeURIComponent(n)}`,{method:"POST"}),ea(n);er()}catch(e){v(String(e))}},[en,ea,er]),ep=(0,o.useCallback)(async e=>{let t="notebook"===e.type?"notebook (it will be shut down if running; its output cache is deleted too)":"file";if(await c(`Delete ${e.name}?

This permanently deletes the ${t}. There is no trash.`,{action:"Delete",danger:!0}))try{await i(`./api/v1/file/delete?path=${encodeURIComponent(e.path)}`,{method:"POST"}),h(t=>t.filter(t=>t.path!==e.path)),C.delete(e.path),er()}catch(e){v(String(e))}},[er]),em=(0,o.useCallback)(async e=>{if(await c("Shut down this notebook session? The file stays on disk; outputs are cached.",{action:"Shut down"}))try{await r(`./shutdown?id=${encodeURIComponent(e)}`,{method:"POST"}),eu(e),er()}catch(e){v(String(e))}},[eu,er]),eh=T&&"tab"===j,eb=(0,o.useCallback)(()=>{let e=!T;P(e),e&&"tab"===j&&g("__terminal__"),e||g(e=>"__terminal__"===e?null:e)},[T,j]),ef=(0,o.useCallback)(()=>{let e="bottom"===j?"right":"right"===j?"tab":"bottom";"tab"===e?(P(!0),g("__terminal__")):"tab"===j&&g(e=>"__terminal__"===e?null:e),M(e)},[j]),e$=t=>(0,o.html)`
        <div class="terminal-tabs">
            <div class="terminal-tab-scroller">
                ${(Z.current===e?.root?X:[]).map(e=>(0,o.html)`<div class="tab terminal-tab ${e.tid===G?"active":""}" key=${e.tid}>
                        <button class="title" title=${e.label} onClick=${()=>Q(e.tid)}>
                            <span class="tab-term-icon">⌨</span>${e.label}
                        </button>
                        <button class="close" title="Close terminal" onClick=${()=>eo(e.tid)}>×</button>
                    </div>`)}
                <button class="new-terminal-tab" title="New terminal" onClick=${el}>
                    <span class="nt-icon">⌨</span><span class="nt-plus">＋</span>
                </button>
            </div>
        </div>
        <div class="terminal-bodies">
            ${(Z.current===e?.root?X:[]).map(n=>(0,o.html)`<div key=${n.tid} class="terminal-body ${n.tid===G?"active":""}">
                    <${S} tid=${n.tid} cwd=${e?.root} visible=${t&&n.tid===G} />
                </div>`)}
        </div>
    `,eg=(0,o.useCallback)(async()=>{if(!await c("Shut down the SpaceStation server?\n\nRunning notebooks and the integrated terminal will stop. SSH remote servers keep running and can be reattached later.",{action:"Shut down"}))return;fetch("./api/v1/shutdown",{method:"POST"}).catch(()=>{});let e=async()=>{try{return await fetch("./ping",{method:"GET",cache:"no-store"}),!0}catch{return!1}},t=Date.now()+8e3;for(;Date.now()<t;)if(await new Promise(e=>setTimeout(e,400)),!await e()){document.body.innerHTML='<div style="font: 15px/1.6 system-ui, sans-serif; padding: 3rem; text-align: center; color: #888">SpaceStation has shut down. You can close this tab.</div>';return}v("Shutdown was requested, but the server is still responding — it may not have shut down.")},[]);return n||D?(0,o.html)`<${k} on_cancel=${n?null:()=>H(!1)} tunneled=${V} />`:(0,o.html)`
        <div id="land">
            ${I?(0,o.html)`<button id="sidebar-reopen" title="Show sidebar" onClick=${()=>O(!1)}>☰</button>`:(0,o.html)`<aside style=${`width: ${E}px`}>
                <header class="bubble">
                    <div class="header-row">
                        <button class="land-logo-button" title="Back to homebase (open &amp; manage workspaces)" onClick=${K}>
                            <img class="land-logo" src=${p} alt="SpaceStation" />
                        </button>
                        <div class="header-text">
                            <h1 title=${e?.root??""}>Space<span class="land-accent">Station</span></h1>
                        </div>
                        <div class="header-buttons">
                            <div class="header-menu" ref=${z}>
                                <button class="header-button menu-button ${W?"active":""}" title="More actions" aria-haspopup="menu" aria-expanded=${W} onClick=${()=>F(e=>!e)}><span class="menu-dots"></span></button>
                                ${W?(0,o.html)`<div class="header-menu-popover" role="menu">
                                          <button class="header-menu-item danger" role="menuitem" onClick=${()=>{F(!1),eg()}}>⏻ Shut down server</button>
                                      </div>`:null}
                            </div>
                            <button class="header-button collapse-button" title="Hide sidebar" onClick=${()=>O(!0)}><span class="collapse-icon"></span></button>
                        </div>
                    </div>
                </header>
                <section class="files bubble">
                    <h2>
                        Workspace
                        ${e?.git==null?null:(0,o.html)`<span
                                  class="git-branch"
                                  title=${e.git.detached?`Detached HEAD at ${e.git.branch}`:`On branch ${e.git.branch}`}
                              >
                                  <span class="git-branch-icon"></span><span class="git-branch-name">${e.git.branch}</span>
                              </span>`}
                        ${null==e?null:(0,o.html)`<button class="row-action h2-action" title="New notebook or file in the workspace root" onClick=${()=>ed(e.root)}>+</button>`}
                    </h2>
                    <ul class="tree">
                        ${null==e?null:e.entries.map(e=>(0,o.html)`<${y}
                                          key=${e.path}
                                          entry=${e}
                                          on_open_notebook=${es}
                                          on_open_file=${ea}
                                          on_create_in=${ed}
                                          on_delete=${ep}
                                          depth=${0}
                                      />`)}
                    </ul>
                </section>
                <section class="running bubble">
                    <h2>Running</h2>
                    <ul>
                        ${l.map(e=>(0,o.html)`<li>
                                <button class="entry" title=${e.path} onClick=${()=>en(e.notebook_id,e.path)}>
                                    <span class="icon running-dot"></span>${s(e.path)}
                                </button>
                                <button class="shutdown" title="Shut down this notebook" onClick=${()=>em(e.notebook_id)}>✕</button>
                            </li>`)}
                    </ul>
                </section>
                <footer>
                    <button class="new-notebook" onClick=${ec}>+ New notebook</button>
                </footer>
            </aside>`}
            ${I?null:(0,o.html)`<div id="sidebar-resizer" onPointerDown=${ei}></div>`}
            <main>
                <div class="main-split ${j}">
                    <div class="editor-card">
                        <nav id="tabs">
                            <div class="tab-scroller">
                                ${m.map(e=>(0,o.html)`<div class="tab ${e.id===b?"active":""}" key=${e.id}>
                                        <button class="title" title=${e.path} onClick=${()=>g(e.id)}>${s(e.path)}</button>
                                        <button class="close" title="Close tab (notebook keeps running)" onClick=${()=>eu(e.id)}>×</button>
                                    </div>`)}
                                ${eh?(0,o.html)`<div class="tab terminal-tab ${"__terminal__"===b?"active":""}" key="__terminal__">
                                          <button class="title" title="Terminal" onClick=${()=>g("__terminal__")}>
                                              <span class="tab-term-icon">⌨</span>Terminal
                                          </button>
                                          <button class="close" title="Hide terminal" onClick=${()=>{P(!1),g(e=>"__terminal__"===e?null:e)}}>×</button>
                                      </div>`:null}
                            </div>
                            <button class="terminal-toggle ${T?"active":""}" title="Toggle the integrated terminal (runs in the workspace folder)" onClick=${eb}>⌨ Terminal</button>
                            ${T?(0,o.html)`<button
                                      class="terminal-toggle dock-toggle"
                                      title=${"bottom"===j?"Move terminal to the right":"right"===j?"Embed terminal as an editor tab":"Dock terminal to the bottom"}
                                      onClick=${ef}
                                  >
                                      ${"bottom"===j?"◨":"right"===j?"▭":"⬓"}
                                  </button>`:null}
                        </nav>
                        <div id="frames">
                            ${m.map(e=>"file"===e.kind?(0,o.html)`<div key=${e.id} class="pane ${e.id===b?"active":""}">
                                          <${_} path=${e.path} visible=${e.id===b} />
                                      </div>`:(0,o.html)`<iframe key=${e.id} src=${`./edit?id=${e.id}`} class=${e.id===b?"active":""}></iframe>`)}
                            ${eh?(0,o.html)`<div class="pane terminal-area-pane ${"__terminal__"===b?"active":""}">
                                      ${e$(eh&&"__terminal__"===b)}
                                  </div>`:null}
                            ${0===m.length&&"__terminal__"!==b?(0,o.html)`<div class="empty-state">
                                      <p>Open a notebook from the workspace on the left, or create a new one.</p>
                                      <p class="hint">Agents can work here too: edit any notebook file, or use <code>pluto-collab</code>.</p>
                                  </div>`:null}
                        </div>
                    </div>
                    ${A.current?(0,o.html)`
                              <div
                                  id="terminal-resizer"
                                  style=${T&&"tab"!==j?"":"display: none"}
                                  onPointerDown=${et}
                              ></div>
                              <div
                                  id="terminal-panel"
                                  class="bubble"
                                  style=${T&&"tab"!==j?"bottom"===j?`height: ${x}px`:`width: ${L}px`:"display: none"}
                              >
                                  ${"tab"!==j?e$(T&&"tab"!==j):null}
                              </div>
                          `:null}
                </div>
            </main>
            ${null==w?null:(0,o.html)`<div id="land-error">${w}</div>`}
        </div>
    `}} />`,document.querySelector("#land-app"));