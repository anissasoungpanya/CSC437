import{i as b,O as N,r as m,h as k,a as l,x as o,b as f,V as z,n as p,d as T,f as q,c as D,e as $,_ as A,s as L}from"./headings.css-ssStuQj-.js";var U=Object.defineProperty,Z=(i,r,t,a)=>{for(var e=void 0,s=i.length-1,n;s>=0;s--)(n=i[s])&&(e=n(r,t,e)||e);return e&&U(r,t,e),e};const C=class C extends b{constructor(){super(...arguments),this._authObserver=new N(this,"parks:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(r=>{this._user=r.user})}render(){var r;return o`
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
    `}handleSignOut(r){r.preventDefault(),this.dispatchEvent(new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signout"]})),window.location.href="/login.html"}};C.styles=[m.styles,k.styles,l`
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
    `];let v=C;Z([f()],v.prototype,"_user");const S=class S extends b{render(){return o`
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
    `}};S.styles=[m.styles,k.styles,l`
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
    `];let y=S;var M=Object.defineProperty,B=Object.getOwnPropertyDescriptor,w=(i,r,t,a)=>{for(var e=a>1?void 0:a?B(r,t):r,s=i.length-1,n;s>=0;s--)(n=i[s])&&(e=(a?n(r,t,e):n(e))||e);return a&&e&&M(r,t,e),e};const P=class P extends z{get park(){return this.model.park}get error(){return this.model.error}constructor(){super("parks:model")}attributeChangedCallback(r,t,a){super.attributeChangedCallback(r,t,a),r==="park-id"&&a&&a!==t&&this.dispatchMessage(["park/request",{parkId:a}])}get parkName(){return this.parkId?`${{yosemite:"Yosemite",zion:"Zion",channel:"Channel Islands"}[this.parkId]||this.parkId.charAt(0).toUpperCase()+this.parkId.slice(1)} National Park`:""}render(){return this.parkId?this.error?o`<p>Error: ${this.error}</p>`:this.park?o`
      <nav class="breadcrumb">
        <a href="/app">Home</a>
        <span>›</span>
        <span>${this.parkName}</span>
        <span class="spacer"></span>
        <a class="edit" href="/app/park/${this.parkId}/edit">Edit</a>
      </nav>
      <h1>${this.parkName}</h1>
      <park-grid .park=${this.park}></park-grid>
    `:o`<p>Loading park data...</p>`:o`<p>No park specified</p>`}};P.styles=[m.styles,k.styles,l`
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
    `];let d=P;w([p({attribute:"park-id"})],d.prototype,"parkId",2);w([f()],d.prototype,"park",1);w([f()],d.prototype,"error",1);var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,F=(i,r,t,a)=>{for(var e=a>1?void 0:a?K(r,t):r,s=i.length-1,n;s>=0;s--)(n=i[s])&&(e=(a?n(r,t,e):n(e))||e);return a&&e&&J(r,t,e),e};const g=class g extends z{get park(){return this.model.park}constructor(){super("parks:model")}attributeChangedCallback(r,t,a){super.attributeChangedCallback(r,t,a),r==="park-id"&&a&&a!==t&&this.dispatchMessage(["park/request",{parkId:a}])}handleSubmit(r){this.parkId&&this.dispatchMessage(["park/save",{parkId:this.parkId,park:r.detail},{onSuccess:()=>D.dispatch(this,"history/navigate",{href:`/app/park/${this.parkId}`}),onFailure:t=>console.error("Save failed:",t.message)}])}render(){var r;return this.parkId?o`
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
    `:o`<p>No park specified</p>`}};g.uses=T({"mu-form":q.Element}),g.styles=[m.styles,k.styles,l`
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
    `];let u=g;F([p({attribute:"park-id"})],u.prototype,"parkId",2);F([f()],u.prototype,"park",1);var Q=Object.defineProperty,_=(i,r,t,a)=>{for(var e=void 0,s=i.length-1,n;s>=0;s--)(n=i[s])&&(e=n(r,t,e)||e);return e&&Q(r,t,e),e};const O=class O extends b{constructor(){super(...arguments),this._authObserver=new N(this,"parks:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(r=>{var t;this._user=r.user,this.src&&((t=this._user)!=null&&t.authenticated)&&this.hydrate(this.src)}),this.park?this.data=this.park:this.src&&this.hydrate(this.src)}get authorization(){var r;return((r=this._user)==null?void 0:r.authenticated)&&{Authorization:`Bearer ${this._user.token}`}}async hydrate(r){const t={"Content-Type":"application/json",...this.authorization};try{const a=await fetch(r,{headers:t});if(!a.ok){a.status===401?(console.error("Unauthorized - please log in"),this.data=void 0):console.error(`Failed to load data: ${a.status} ${a.statusText}`);return}this.data=await a.json()}catch(a){console.error("Network error loading park data:",a),this.data=void 0}}renderSection(r,t,a){return o`
      <section>
        <h2>
          <svg class="icon" aria-hidden="true">
            <use href="/icons/outdoors.svg#${t}"></use>
          </svg>
          ${r}
        </h2>
        <div class="grid">
          ${a.map(e=>o`
              <park-card
                href=${e.href}
                subtitle=${e.subtitle??""}
                img-src=${e.imgSrc??""}
              >
                ${e.title}
              </park-card>
            `)}
        </div>
      </section>
    `}render(){var n;const r=this.park??this.data;if(!r)return(n=this._user)!=null&&n.authenticated?o`<p>Loading...</p>`:o`<p>
          Please <a href="/login.html">log in</a> to view park data.
        </p>`;const t=r.hikes??[],a=r.viewpoints??[],e=r.lodging??[],s=r.activities??[];return o`
      ${this.renderSection("Top Hikes","icon-hike",t)}
      ${this.renderSection("Top Viewpoints","icon-view",a)}
      ${this.renderSection("Top Lodging","icon-bed",e)}
      ${this.renderSection("Top Activities","icon-activity",s)}
    `}};O.styles=l`
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
  `;let h=O;_([p()],h.prototype,"src");_([p({attribute:!1})],h.prototype,"park");_([f()],h.prototype,"data");var R=Object.defineProperty,I=(i,r,t,a)=>{for(var e=void 0,s=i.length-1,n;s>=0;s--)(n=i[s])&&(e=n(r,t,e)||e);return e&&R(r,t,e),e};const j=class j extends b{render(){return o`
      <article class="card">
        ${this.imgSrc?o`<img src="${this.imgSrc}" alt="" />`:o`<img alt="" />`}
        <div class="box">
          <h3>
            ${this.href?o`<a href="${this.href}"><slot></slot></a>`:o`<slot></slot>`}
          </h3>
          ${this.subtitle?o`<p class="meta">${this.subtitle}</p>`:null}
        </div>
      </article>
    `}};j.styles=[m.styles,l`
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
    `];let c=j;I([p({attribute:"img-src"})],c.prototype,"imgSrc");I([p()],c.prototype,"href");I([p()],c.prototype,"subtitle");const W={};function X(i,r,t){switch(i[0]){case"park/request":{const{parkId:a}=i[1];return[{...r,park:void 0,error:void 0},G(a,t).then(e=>["park/load",{park:e}]).catch(e=>["park/error",{error:e.message}])]}case"park/load":{const{park:a}=i[1];return{...r,park:a,error:void 0}}case"park/error":return{...r,error:i[1].error};case"park/save":{const[,a,e]=i,{parkId:s,park:n}=a,Y=r.park||{};return[r,H(s,{...Y,...n},t,e).then(x=>["park/load",{park:x}]).catch(x=>["park/error",{error:x.message}])]}default:return r}}function G(i,r){const t=$.headers(r);return fetch(`/api/parks/${i}`,{headers:t}).then(a=>{if(a.status===200)return a.json();throw new Error(`Failed to load park (${a.status})`)})}function H(i,r,t,a){return fetch(`/api/parks/${i}`,{method:"PUT",headers:{"Content-Type":"application/json",...$.headers(t)},body:JSON.stringify(r)}).then(e=>{if(e.status===200)return e.json();throw new Error(`Failed to save park (${e.status})`)}).then(e=>{var s;return(s=a==null?void 0:a.onSuccess)==null||s.call(a),e}).catch(e=>{var s;throw(s=a==null?void 0:a.onFailure)==null||s.call(a,e),e})}const E=[{path:"/app/park/:parkId/edit",view:i=>o`
      <park-edit park-id=${i.parkId}></park-edit>
    `},{path:"/app/park/:parkId",view:i=>o`
      <park-view park-id=${i.parkId}></park-view>
    `},{path:"/app",view:()=>o` <home-view></home-view> `},{path:"/",redirect:"/app"}];T({"mu-auth":$.Provider,"mu-history":D.Provider,"mu-store":class extends L.Provider{constructor(){super(X,W,"parks:auth")}},"mu-switch":class extends A.Element{constructor(){super(E,"parks:history","parks:auth")}},"parks-header":v,"home-view":y,"park-view":d,"park-edit":u,"park-grid":h,"park-card":c});
