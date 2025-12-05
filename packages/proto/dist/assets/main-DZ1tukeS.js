import{i as b,O as N,r as m,h as k,a as l,x as n,b as f,V as j,n as p,d as T,f as q,c as D,e as w,_ as A,s as L}from"./headings.css-ssStuQj-.js";var U=Object.defineProperty,Z=(s,r,a,t)=>{for(var e=void 0,i=s.length-1,o;i>=0;i--)(o=s[i])&&(e=o(r,a,e)||e);return e&&U(r,a,e),e};const S=class S extends b{constructor(){super(...arguments),this._authObserver=new N(this,"parks:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(r=>{this._user=r.user})}render(){var r;return n`
      <header>
        <h1>National Parks</h1>
        <p>
          Select a park to explore hikes, viewpoints, lodging, wildlife and
          foliage.
        </p>
        ${(r=this._user)!=null&&r.authenticated?n`
              <div class="auth-info">
                <span
                  >Logged in as:
                  ${this._user.username}</span
                >
                <a href="/login.html" @click=${this.handleSignOut}>Sign out</a>
              </div>
            `:n`
              <div class="auth-info">
                <a href="/login.html">Log in</a>
              </div>
            `}
      </header>
    `}handleSignOut(r){r.preventDefault(),this.dispatchEvent(new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signout"]})),window.location.href="/login.html"}};S.styles=[m.styles,k.styles,l`
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
    `];let v=S;Z([f()],v.prototype,"_user");const C=class C extends b{render(){return n`
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
    `}};C.styles=[m.styles,k.styles,l`
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
    `];let y=C;var M=Object.defineProperty,B=Object.getOwnPropertyDescriptor,$=(s,r,a,t)=>{for(var e=t>1?void 0:t?B(r,a):r,i=s.length-1,o;i>=0;i--)(o=s[i])&&(e=(t?o(r,a,e):o(e))||e);return t&&e&&M(r,a,e),e};const P=class P extends j{get park(){return this.model.park}get error(){return this.model.error}constructor(){super("parks:model")}attributeChangedCallback(r,a,t){super.attributeChangedCallback(r,a,t),r==="park-id"&&t&&t!==a&&this.dispatchMessage(["park/request",{parkId:t}])}get parkName(){return this.parkId?`${{yosemite:"Yosemite",zion:"Zion",channel:"Channel Islands"}[this.parkId]||this.parkId.charAt(0).toUpperCase()+this.parkId.slice(1)} National Park`:""}render(){if(!this.parkId)return n`<p>No park specified</p>`;if(this.error)return n`<p>Error: ${this.error}</p>`;if(!this.park)return n`<p>Loading park data...</p>`;const a={yosemite:"https://www.nps.gov/yose/index.htm",zion:"https://www.nps.gov/zion/index.htm",channel:"https://www.nps.gov/chis/index.htm"}[this.parkId]||"https://www.nps.gov";return n`
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
        <a href=${a} target="_blank" rel="noreferrer">here</a>.
      </p>
    `}};P.styles=[m.styles,k.styles,l`
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
    `];let d=P;$([p({attribute:"park-id"})],d.prototype,"parkId",2);$([f()],d.prototype,"park",1);$([f()],d.prototype,"error",1);var H=Object.defineProperty,J=Object.getOwnPropertyDescriptor,F=(s,r,a,t)=>{for(var e=t>1?void 0:t?J(r,a):r,i=s.length-1,o;i>=0;i--)(o=s[i])&&(e=(t?o(r,a,e):o(e))||e);return t&&e&&H(r,a,e),e};const g=class g extends j{get park(){return this.model.park}constructor(){super("parks:model")}attributeChangedCallback(r,a,t){super.attributeChangedCallback(r,a,t),r==="park-id"&&t&&t!==a&&this.dispatchMessage(["park/request",{parkId:t}])}handleSubmit(r){this.parkId&&this.dispatchMessage(["park/save",{parkId:this.parkId,park:r.detail},{onSuccess:()=>D.dispatch(this,"history/navigate",{href:`/app/park/${this.parkId}`}),onFailure:a=>console.error("Save failed:",a.message)}])}render(){var r;return this.parkId?n`
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
    `:n`<p>No park specified</p>`}};g.uses=T({"mu-form":q.Element}),g.styles=[m.styles,k.styles,l`
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
    `];let u=g;F([p({attribute:"park-id"})],u.prototype,"parkId",2);F([f()],u.prototype,"park",1);var K=Object.defineProperty,_=(s,r,a,t)=>{for(var e=void 0,i=s.length-1,o;i>=0;i--)(o=s[i])&&(e=o(r,a,e)||e);return e&&K(r,a,e),e};const O=class O extends b{constructor(){super(...arguments),this._authObserver=new N(this,"parks:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(r=>{var a;this._user=r.user,this.src&&((a=this._user)!=null&&a.authenticated)&&this.hydrate(this.src)}),this.park?this.data=this.park:this.src&&this.hydrate(this.src)}get authorization(){var r;return((r=this._user)==null?void 0:r.authenticated)&&{Authorization:`Bearer ${this._user.token}`}}async hydrate(r){const a={"Content-Type":"application/json",...this.authorization};try{const t=await fetch(r,{headers:a});if(!t.ok){t.status===401?(console.error("Unauthorized - please log in"),this.data=void 0):console.error(`Failed to load data: ${t.status} ${t.statusText}`);return}this.data=await t.json()}catch(t){console.error("Network error loading park data:",t),this.data=void 0}}renderSection(r,a,t,e){const i=(e==null?void 0:e.allowHref)??!1;return n`
      <section>
        <h2>
          <svg class="icon" aria-hidden="true">
            <use href="/icons/outdoors.svg#${a}"></use>
          </svg>
          ${r}
        </h2>
        <div class="grid">
          ${t.map(o=>n`
              <park-card
                href=${i?o.href??void 0:void 0}
                subtitle=${o.subtitle??""}
                img-src=${o.imgSrc??""}
              >
                ${o.title}
              </park-card>
            `)}
        </div>
      </section>
    `}render(){var o;const r=this.park??this.data;if(!r)return(o=this._user)!=null&&o.authenticated?n`<p>Loading...</p>`:n`<p>
          Please <a href="/login.html">log in</a> to view park data.
        </p>`;const a=r.hikes??[],t=r.viewpoints??[],e=r.lodging??[],i=r.activities??[];return n`
      ${this.renderSection("Top Hikes","icon-hike",a)}
      ${this.renderSection("Top Viewpoints","icon-view",t)}
      ${this.renderSection("Top Lodging","icon-bed",e,{allowHref:!0})}
      ${this.renderSection("Top Activities","icon-activity",i)}
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
  `;let h=O;_([p()],h.prototype,"src");_([p({attribute:!1})],h.prototype,"park");_([f()],h.prototype,"data");var Q=Object.defineProperty,I=(s,r,a,t)=>{for(var e=void 0,i=s.length-1,o;i>=0;i--)(o=s[i])&&(e=o(r,a,e)||e);return e&&Q(r,a,e),e};const z=class z extends b{render(){return n`
      <article class="card">
        ${this.imgSrc?n`<img src="${this.imgSrc}" alt="" />`:n`<img alt="" />`}
        <div class="box">
          <h3>
            ${this.href?n`<a href="${this.href}"><slot></slot></a>`:n`<slot></slot>`}
          </h3>
          ${this.subtitle?n`<p class="meta">${this.subtitle}</p>`:null}
        </div>
      </article>
    `}};z.styles=[m.styles,l`
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
    `];let c=z;I([p({attribute:"img-src"})],c.prototype,"imgSrc");I([p()],c.prototype,"href");I([p()],c.prototype,"subtitle");const R={};function W(s,r,a){switch(s[0]){case"park/request":{const{parkId:t}=s[1];return[{...r,park:void 0,error:void 0},X(t,a).then(e=>["park/load",{park:e}]).catch(e=>["park/error",{error:e.message}])]}case"park/load":{const{park:t}=s[1];return{...r,park:t,error:void 0}}case"park/error":return{...r,error:s[1].error};case"park/save":{const[,t,e]=s,{parkId:i,park:o}=t,Y=r.park||{};return[r,G(i,{...Y,...o},a,e).then(x=>["park/load",{park:x}]).catch(x=>["park/error",{error:x.message}])]}default:return r}}function X(s,r){const a=w.headers(r);return fetch(`/api/parks/${s}`,{headers:a}).then(t=>{if(t.status===200)return t.json();throw new Error(`Failed to load park (${t.status})`)})}function G(s,r,a,t){return fetch(`/api/parks/${s}`,{method:"PUT",headers:{"Content-Type":"application/json",...w.headers(a)},body:JSON.stringify(r)}).then(e=>{if(e.status===200)return e.json();throw new Error(`Failed to save park (${e.status})`)}).then(e=>{var i;return(i=t==null?void 0:t.onSuccess)==null||i.call(t),e}).catch(e=>{var i;throw(i=t==null?void 0:t.onFailure)==null||i.call(t,e),e})}const E=[{path:"/app/park/:parkId/edit",view:s=>n`
      <park-edit park-id=${s.parkId}></park-edit>
    `},{path:"/app/park/:parkId",view:s=>n`
      <park-view park-id=${s.parkId}></park-view>
    `},{path:"/app",view:()=>n` <home-view></home-view> `},{path:"/",redirect:"/app"}];T({"mu-auth":w.Provider,"mu-history":D.Provider,"mu-store":class extends L.Provider{constructor(){super(W,R,"parks:auth")}},"mu-switch":class extends A.Element{constructor(){super(E,"parks:history","parks:auth")}},"parks-header":v,"home-view":y,"park-view":d,"park-edit":u,"park-grid":h,"park-card":c});
