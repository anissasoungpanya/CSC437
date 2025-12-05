import{i as k,O as j,r as f,h as x,a as u,x as o,b as v,V as T,n as d,d as L,f as Y,c as D,e as $,_ as q,s as A}from"./headings.css-ssStuQj-.js";var U=Object.defineProperty,Z=(s,r,t,a)=>{for(var e=void 0,i=s.length-1,n;i>=0;i--)(n=s[i])&&(e=n(r,t,e)||e);return e&&U(r,t,e),e};const C=class C extends k{constructor(){super(...arguments),this._authObserver=new j(this,"parks:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(r=>{this._user=r.user})}render(){var r;return o`
      <header>
        <h1>National Parks</h1>
        <p>
          Select a park to explore hikes, viewpoints, lodging, wildlife and
          foliage.
        </p>
        ${(r=this._user)!=null&&r.authenticated?o`
              <div class="auth-info">
                <span
                  >Logged in as:
                  ${this._user.username}</span
                >
                <a href="/login.html" @click=${this.handleSignOut}>Sign out</a>
              </div>
            `:o`
              <div class="auth-info">
                <a href="/login.html">Log in</a>
              </div>
            `}
      </header>
    `}handleSignOut(r){r.preventDefault(),this.dispatchEvent(new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signout"]})),window.location.href="/login.html"}};C.styles=[f.styles,x.styles,u`
      :host {
        display: block;
        padding: 2rem 1rem;
        background: var(--color-header-bg, #0b1220);
        border-bottom: 1px solid var(--color-border, #1f2937);
      }
      header {
        max-width: 1200px;
        margin: 0 auto;
      }
      h1 {
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
        color: var(--color-text-header, #f8fafc);
      }
      p {
        color: var(--color-muted, #94a3b8);
        margin-bottom: 1rem;
      }
      .auth-info {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: 1rem;
      }
      .auth-info a {
        color: var(--color-accent, #38bdf8);
        text-decoration: none;
      }
      .auth-info a:hover {
        text-decoration: underline;
      }
    `];let g=C;Z([v()],g.prototype,"_user");const P=class P extends k{render(){return o`
      <section aria-labelledby="featured-title">
        <h2 id="featured-title">Featured Parks</h2>

        <div class="grid">
          <!-- Yosemite -->
          <article class="card">
            <img src="/images/yosemite.jpeg" alt="Yosemite National Park" />
            <div class="box">
              <h3>
                <a href="/app/park/yosemite">Yosemite National Park</a>
              </h3>
              <p class="meta">
                California | Granite cliffs, waterfalls, giant sequoias
              </p>
            </div>
          </article>

          <!-- Zion -->
          <article class="card">
            <img src="/images/zion.jpeg" alt="Zion National Park" />
            <div class="box">
              <h3><a href="/app/park/zion">Zion National Park</a></h3>
              <p class="meta">
                Utah | Slot canyons, soaring sandstone, river hikes
              </p>
            </div>
          </article>

          <!-- Channel Islands -->
          <article class="card">
            <img
              src="/images/channel.jpeg"
              alt="Channel Islands National Park"
            />
            <div class="box">
              <h3>
                <a href="/app/park/channel">Channel Islands National Park</a>
              </h3>
              <p class="meta">
                California | Sea caves, wildlife, remote beaches
              </p>
            </div>
          </article>
        </div>
      </section>
    `}};P.styles=[f.styles,x.styles,u`
      :host {
        display: block;
        padding: 2rem 1rem;
        max-width: 1200px;
        margin: 0 auto;
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
      }
      .card {
        border-radius: 1rem;
        overflow: hidden;
        background: var(--color-card, #111827);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        transition: transform 0.2s, box-shadow 0.2s;
      }
      .card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
      }
      .card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }
      .box {
        padding: 1.5rem;
      }
      h3 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }
      h3 a {
        color: var(--color-text-header, #f8fafc);
        text-decoration: none;
      }
      h3 a:hover {
        color: var(--color-accent, #38bdf8);
      }
      .meta {
        color: var(--color-muted, #94a3b8);
        font-size: 0.9rem;
        line-height: 1.5;
      }
    `];let w=P;var M=Object.defineProperty,B=Object.getOwnPropertyDescriptor,_=(s,r,t,a)=>{for(var e=a>1?void 0:a?B(r,t):r,i=s.length-1,n;i>=0;i--)(n=s[i])&&(e=(a?n(r,t,e):n(e))||e);return a&&e&&M(r,t,e),e};const O=class O extends T{get park(){return this.model.park}get error(){return this.model.error}constructor(){super("parks:model")}attributeChangedCallback(r,t,a){super.attributeChangedCallback(r,t,a),r==="park-id"&&a&&a!==t&&this.dispatchMessage(["park/request",{parkId:a}])}get parkName(){return this.parkId?`${{yosemite:"Yosemite",zion:"Zion",channel:"Channel Islands"}[this.parkId]||this.parkId.charAt(0).toUpperCase()+this.parkId.slice(1)} National Park`:""}render(){if(!this.parkId)return o`<p>No park specified</p>`;if(this.error)return o`<p>Error: ${this.error}</p>`;if(!this.park)return o`<p>Loading park data...</p>`;const t={yosemite:"https://www.nps.gov/yose/index.htm",zion:"https://www.nps.gov/zion/index.htm",channel:"https://www.nps.gov/chis/index.htm"}[this.parkId]||"https://www.nps.gov";return o`
      <nav class="breadcrumb">
        <a href="/app">Home</a>
        <span>›</span>
        <span>${this.parkName}</span>
        <span class="spacer"></span>
        <a class="edit" href="/app/park/${this.parkId}/edit">Edit</a>
      </nav>
      <h1>${this.parkName}</h1>
      <park-grid .park=${this.park}></park-grid>
      <p class="learn-more">
        To learn more about ${this.parkName}, visit their website
        <a href=${t} target="_blank" rel="noreferrer">here</a>.
      </p>
    `}};O.styles=[f.styles,x.styles,u`
      :host {
        display: block;
        padding: 2rem 1rem;
        max-width: 1200px;
        margin: 0 auto;
      }
      h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: var(--color-text-header, #f8fafc);
      }
      nav.breadcrumb {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        color: var(--color-muted, #94a3b8);
        font-size: 0.95rem;
        margin-bottom: 0.5rem;
      }
      nav.breadcrumb a {
        color: var(--color-accent, #38bdf8);
        text-decoration: none;
      }
      nav.breadcrumb a:hover {
        text-decoration: underline;
      }
      nav.breadcrumb .spacer {
        flex: 1;
      }
      nav.breadcrumb .edit {
        font-weight: 600;
      }
      .learn-more {
        margin-top: 2rem;
        font-size: 1rem;
      }
      .learn-more a {
        color: var(--color-accent, #38bdf8);
        text-decoration: none;
      }
      .learn-more a:hover {
        text-decoration: underline;
      }
    `];let h=O;_([d({attribute:"park-id"})],h.prototype,"parkId",2);_([v()],h.prototype,"park",1);_([v()],h.prototype,"error",1);var H=Object.defineProperty,J=Object.getOwnPropertyDescriptor,F=(s,r,t,a)=>{for(var e=a>1?void 0:a?J(r,t):r,i=s.length-1,n;i>=0;i--)(n=s[i])&&(e=(a?n(r,t,e):n(e))||e);return a&&e&&H(r,t,e),e};const b=class b extends T{get park(){return this.model.park}constructor(){super("parks:model")}attributeChangedCallback(r,t,a){super.attributeChangedCallback(r,t,a),r==="park-id"&&a&&a!==t&&this.dispatchMessage(["park/request",{parkId:a}])}handleSubmit(r){this.parkId&&this.dispatchMessage(["park/save",{parkId:this.parkId,park:r.detail},{onSuccess:()=>D.dispatch(this,"history/navigate",{href:`/app/park/${this.parkId}`}),onFailure:t=>console.error("Save failed:",t.message)}])}render(){var r;return this.parkId?o`
      <main>
        <h1>Edit ${this.parkId}</h1>
        <mu-form
          .init=${this.park}
          @mu-form:submit=${this.handleSubmit}
          class="card"
        >
          <label>
            <span>Park Name</span>
            <input name="name" .value=${((r=this.park)==null?void 0:r.name)??""} />
          </label>
          <label>
            <span>Park Id (read-only)</span>
            <input name="parkId" .value=${this.parkId} readonly />
          </label>
          <button type="submit">Save</button>
        </mu-form>
      </main>
    `:o`<p>No park specified</p>`}};b.uses=L({"mu-form":Y.Element}),b.styles=[f.styles,x.styles,u`
      main {
        max-width: 720px;
        margin: 0 auto;
        padding: 2rem 1rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }
      .card {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1.25rem;
        background: var(--color-card, #0b1220);
        border: 1px solid var(--color-border, #1f2937);
        border-radius: 8px;
      }
      label {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      input {
        padding: 0.5rem;
        border-radius: 4px;
        border: 1px solid var(--color-border, #1f2937);
        background: var(--color-card, #0b1220);
        color: var(--color-text, #e5e7eb);
      }
      button {
        padding: 0.75rem 1.5rem;
        background: var(--color-accent, #38bdf8);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: 700;
      }
      button:hover {
        opacity: 0.9;
      }
    `];let m=b;F([d({attribute:"park-id"})],m.prototype,"parkId",2);F([v()],m.prototype,"park",1);var K=Object.defineProperty,I=(s,r,t,a)=>{for(var e=void 0,i=s.length-1,n;i>=0;i--)(n=s[i])&&(e=n(r,t,e)||e);return e&&K(r,t,e),e};const z=class z extends k{constructor(){super(...arguments),this._authObserver=new j(this,"parks:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(r=>{var t;this._user=r.user,this.src&&((t=this._user)!=null&&t.authenticated)&&this.hydrate(this.src)}),this.park?this.data=this.park:this.src&&this.hydrate(this.src)}get authorization(){var r;return((r=this._user)==null?void 0:r.authenticated)&&{Authorization:`Bearer ${this._user.token}`}}async hydrate(r){const t={"Content-Type":"application/json",...this.authorization};try{const a=await fetch(r,{headers:t});if(!a.ok){a.status===401?(console.error("Unauthorized - please log in"),this.data=void 0):console.error(`Failed to load data: ${a.status} ${a.statusText}`);return}this.data=await a.json()}catch(a){console.error("Network error loading park data:",a),this.data=void 0}}renderSection(r,t,a,e){const i=(e==null?void 0:e.allowHref)??!1,n=(e==null?void 0:e.linkLabel)??"";return o`
      <section>
        <h2>
          <svg class="icon" aria-hidden="true">
            <use href="/icons/outdoors.svg#${t}"></use>
          </svg>
          ${r}
        </h2>
        <div class="grid">
          ${a.map(p=>o`
              <park-card
                href=${i?p.href??void 0:void 0}
                subtitle=${p.subtitle??""}
                img-src=${p.imgSrc??""}
              >
                ${n&&i&&p.href?o`${p.title} – <a href=${p.href} target="_blank" rel="noreferrer">${n}</a>`:o`${p.title}`}
              </park-card>
            `)}
        </div>
      </section>
    `}render(){var n;const r=this.park??this.data;if(!r)return(n=this._user)!=null&&n.authenticated?o`<p>Loading...</p>`:o`<p>
          Please <a href="/login.html">log in</a> to view park data.
        </p>`;const t=r.hikes??[],a=r.viewpoints??[],e=r.lodging??[],i=r.activities??[];return o`
      ${this.renderSection("Top Hikes","icon-hike",t)}
      ${this.renderSection("Top Viewpoints","icon-view",a)}
      ${this.renderSection("Top Lodging","icon-bed",e,{allowHref:!0,linkLabel:"Book here"})}
      ${this.renderSection("Top Activities","icon-activity",i)}
    `}};z.styles=u`
    section {
      margin-bottom: 2rem;
    }
    h2 {
      text-align: left;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    h2 .icon {
      width: 1em;
      height: 1em;
      display: inline-block;
      vertical-align: middle;
    }
    .grid {
      display: grid;
      gap: 16px;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    }
  `;let c=z;I([d()],c.prototype,"src");I([d({attribute:!1})],c.prototype,"park");I([v()],c.prototype,"data");var Q=Object.defineProperty,S=(s,r,t,a)=>{for(var e=void 0,i=s.length-1,n;i>=0;i--)(n=s[i])&&(e=n(r,t,e)||e);return e&&Q(r,t,e),e};const N=class N extends k{render(){return o`
      <article class="card">
        ${this.imgSrc?o`<img src="${this.imgSrc}" alt="" />`:o`<img alt="" />`}
        <div class="box">
          <h3>
            ${this.href?o`<a href="${this.href}"><slot></slot></a>`:o`<slot></slot>`}
          </h3>
          ${this.subtitle?o`<p class="meta">${this.subtitle}</p>`:null}
        </div>
      </article>
    `}};N.styles=[f.styles,u`
      :host {
        display: block;
      }
      article.card {
        border-radius: 1rem;
        overflow: hidden;
        background: var(--color-card, #111827);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        transition: transform 0.2s, box-shadow 0.2s;
      }
      article.card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
      }
      .box {
        padding: 12px;
      }
      h3 {
        font-size: 1rem;
        line-height: 1.3;
        margin-bottom: 4px;
      }
      h3 a {
        color: var(--color-text-header, #f8fafc);
        text-decoration: none;
      }
      h3 a:hover {
        color: var(--color-accent, #38bdf8);
        text-decoration: underline;
      }
      p.meta {
        color: var(--color-muted, #94a3b8);
        font-size: 0.9rem;
      }
    `];let l=N;S([d({attribute:"img-src"})],l.prototype,"imgSrc");S([d()],l.prototype,"href");S([d()],l.prototype,"subtitle");const R={};function W(s,r,t){switch(s[0]){case"park/request":{const{parkId:a}=s[1];return[{...r,park:void 0,error:void 0},X(a,t).then(e=>["park/load",{park:e}]).catch(e=>["park/error",{error:e.message}])]}case"park/load":{const{park:a}=s[1];return{...r,park:a,error:void 0}}case"park/error":return{...r,error:s[1].error};case"park/save":{const[,a,e]=s,{parkId:i,park:n}=a,p=r.park||{};return[r,G(i,{...p,...n},t,e).then(y=>["park/load",{park:y}]).catch(y=>["park/error",{error:y.message}])]}default:return r}}function X(s,r){const t=$.headers(r);return fetch(`/api/parks/${s}`,{headers:t}).then(a=>{if(a.status===200)return a.json();throw new Error(`Failed to load park (${a.status})`)})}function G(s,r,t,a){return fetch(`/api/parks/${s}`,{method:"PUT",headers:{"Content-Type":"application/json",...$.headers(t)},body:JSON.stringify(r)}).then(e=>{if(e.status===200)return e.json();throw new Error(`Failed to save park (${e.status})`)}).then(e=>{var i;return(i=a==null?void 0:a.onSuccess)==null||i.call(a),e}).catch(e=>{var i;throw(i=a==null?void 0:a.onFailure)==null||i.call(a,e),e})}const E=[{path:"/app/park/:parkId/edit",view:s=>o`
      <park-edit park-id=${s.parkId}></park-edit>
    `},{path:"/app/park/:parkId",view:s=>o`
      <park-view park-id=${s.parkId}></park-view>
    `},{path:"/app",view:()=>o` <home-view></home-view> `},{path:"/",redirect:"/app"}];L({"mu-auth":$.Provider,"mu-history":D.Provider,"mu-store":class extends A.Provider{constructor(){super(W,R,"parks:auth")}},"mu-switch":class extends q.Element{constructor(){super(E,"parks:history","parks:auth")}},"parks-header":g,"home-view":w,"park-view":h,"park-edit":m,"park-grid":c,"park-card":l});
