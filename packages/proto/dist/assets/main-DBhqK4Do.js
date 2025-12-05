import{i as g,O as j,r as m,h as k,a as c,x as o,b,V as N,n as p,d as z,f as q,c as T,e as $,_ as A,s as L}from"./headings.css-ssStuQj-.js";var U=Object.defineProperty,Z=(i,r,a,t)=>{for(var e=void 0,s=i.length-1,n;s>=0;s--)(n=i[s])&&(e=n(r,a,e)||e);return e&&U(r,a,e),e};const I=class I extends g{constructor(){super(...arguments),this._authObserver=new j(this,"parks:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(r=>{this._user=r.user})}render(){var r;return o`
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
    `}handleSignOut(r){r.preventDefault(),this.dispatchEvent(new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signout"]})),window.location.href="/login.html"}};I.styles=[m.styles,k.styles,c`
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
    `];let f=I;Z([b()],f.prototype,"_user");const C=class C extends g{render(){return o`
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
    `}};C.styles=[m.styles,k.styles,c`
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
    `];let y=C;var M=Object.defineProperty,B=Object.getOwnPropertyDescriptor,D=(i,r,a,t)=>{for(var e=t>1?void 0:t?B(r,a):r,s=i.length-1,n;s>=0;s--)(n=i[s])&&(e=(t?n(r,a,e):n(e))||e);return t&&e&&M(r,a,e),e};const S=class S extends N{get park(){return this.model.park}constructor(){super("parks:model")}attributeChangedCallback(r,a,t){super.attributeChangedCallback(r,a,t),r==="park-id"&&t&&t!==a&&this.dispatchMessage(["park/request",{parkId:t}])}get parkName(){return this.parkId?`${{yosemite:"Yosemite",zion:"Zion",channel:"Channel Islands"}[this.parkId]||this.parkId.charAt(0).toUpperCase()+this.parkId.slice(1)} National Park`:""}render(){return this.parkId?o`
      <h1>${this.parkName}</h1>
      <park-grid .park=${this.park}></park-grid>
    `:o`<p>No park specified</p>`}};S.styles=[m.styles,k.styles,c`
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
    `];let l=S;D([p({attribute:"park-id"})],l.prototype,"parkId",2);D([b()],l.prototype,"park",1);var J=Object.defineProperty,K=Object.getOwnPropertyDescriptor,F=(i,r,a,t)=>{for(var e=t>1?void 0:t?K(r,a):r,s=i.length-1,n;s>=0;s--)(n=i[s])&&(e=(t?n(r,a,e):n(e))||e);return t&&e&&J(r,a,e),e};const v=class v extends N{get park(){return this.model.park}constructor(){super("parks:model")}attributeChangedCallback(r,a,t){super.attributeChangedCallback(r,a,t),r==="park-id"&&t&&t!==a&&this.dispatchMessage(["park/request",{parkId:t}])}handleSubmit(r){this.parkId&&this.dispatchMessage(["park/save",{parkId:this.parkId,park:r.detail},{onSuccess:()=>T.dispatch(this,"history/navigate",{href:`/app/park/${this.parkId}`}),onFailure:a=>console.error("Save failed:",a.message)}])}render(){var r;return this.parkId?o`
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
    `:o`<p>No park specified</p>`}};v.uses=z({"mu-form":q.Element}),v.styles=[m.styles,k.styles,c`
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
    `];let u=v;F([p({attribute:"park-id"})],u.prototype,"parkId",2);F([b()],u.prototype,"park",1);var Q=Object.defineProperty,w=(i,r,a,t)=>{for(var e=void 0,s=i.length-1,n;s>=0;s--)(n=i[s])&&(e=n(r,a,e)||e);return e&&Q(r,a,e),e};const P=class P extends g{constructor(){super(...arguments),this._authObserver=new j(this,"parks:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(r=>{var a;this._user=r.user,this.src&&((a=this._user)!=null&&a.authenticated)&&this.hydrate(this.src)}),this.park?this.data=this.park:this.src&&this.hydrate(this.src)}get authorization(){var r;return((r=this._user)==null?void 0:r.authenticated)&&{Authorization:`Bearer ${this._user.token}`}}async hydrate(r){const a={"Content-Type":"application/json",...this.authorization};try{const t=await fetch(r,{headers:a});if(!t.ok){t.status===401?(console.error("Unauthorized - please log in"),this.data=void 0):console.error(`Failed to load data: ${t.status} ${t.statusText}`);return}this.data=await t.json()}catch(t){console.error("Network error loading park data:",t),this.data=void 0}}renderSection(r,a,t){return o`
      <section>
        <h2>
          <svg class="icon" aria-hidden="true">
            <use href="/icons/outdoors.svg#${a}"></use>
          </svg>
          ${r}
        </h2>
        <div class="grid">
          ${t.map(e=>o`
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
        </p>`;const a=r.hikes??[],t=r.viewpoints??[],e=r.lodging??[],s=r.activities??[];return o`
      ${this.renderSection("Top Hikes","icon-hike",a)}
      ${this.renderSection("Top Viewpoints","icon-view",t)}
      ${this.renderSection("Top Lodging","icon-bed",e)}
      ${this.renderSection("Top Activities","icon-activity",s)}
    `}};P.styles=c`
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
  `;let d=P;w([p()],d.prototype,"src");w([p({attribute:!1})],d.prototype,"park");w([b()],d.prototype,"data");var R=Object.defineProperty,_=(i,r,a,t)=>{for(var e=void 0,s=i.length-1,n;s>=0;s--)(n=i[s])&&(e=n(r,a,e)||e);return e&&R(r,a,e),e};const O=class O extends g{render(){return o`
      <article class="card">
        ${this.imgSrc?o`<img src="${this.imgSrc}" alt="" />`:o`<img alt="" />`}
        <div class="box">
          <h3>
            ${this.href?o`<a href="${this.href}"><slot></slot></a>`:o`<slot></slot>`}
          </h3>
          ${this.subtitle?o`<p class="meta">${this.subtitle}</p>`:null}
        </div>
      </article>
    `}};O.styles=[m.styles,c`
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
    `];let h=O;_([p({attribute:"img-src"})],h.prototype,"imgSrc");_([p()],h.prototype,"href");_([p()],h.prototype,"subtitle");const W={};function X(i,r,a){switch(i[0]){case"park/request":{const{parkId:t}=i[1];return[{...r,park:void 0,error:void 0},G(t,a).then(e=>["park/load",{park:e}]).catch(e=>["park/error",{error:e.message}])]}case"park/load":{const{park:t}=i[1];return{...r,park:t,error:void 0}}case"park/error":return{...r,error:i[1].error};case"park/save":{const[,t,e]=i,{parkId:s,park:n}=t,Y=r.park||{};return[r,H(s,{...Y,...n},a,e).then(x=>["park/load",{park:x}]).catch(x=>["park/error",{error:x.message}])]}default:return r}}function G(i,r){const a=$.headers(r);return fetch(`/api/parks/${i}`,{headers:a}).then(t=>{if(t.status===200)return t.json();throw new Error(`Failed to load park (${t.status})`)})}function H(i,r,a,t){return fetch(`/api/parks/${i}`,{method:"PUT",headers:{"Content-Type":"application/json",...$.headers(a)},body:JSON.stringify(r)}).then(e=>{if(e.status===200)return e.json();throw new Error(`Failed to save park (${e.status})`)}).then(e=>{var s;return(s=t==null?void 0:t.onSuccess)==null||s.call(t),e}).catch(e=>{var s;throw(s=t==null?void 0:t.onFailure)==null||s.call(t,e),e})}const E=[{path:"/app/park/:parkId/edit",view:i=>o`
      <park-edit park-id=${i.parkId}></park-edit>
    `},{path:"/app/park/:parkId",view:i=>o`
      <park-view park-id=${i.parkId}></park-view>
    `},{path:"/app",view:()=>o` <home-view></home-view> `},{path:"/",redirect:"/app"}];z({"mu-auth":$.Provider,"mu-history":T.Provider,"mu-store":class extends L.Provider{constructor(){super(X,W,"parks:auth")}},"mu-switch":class extends A.Element{constructor(){super(E,"parks:history","parks:auth")}},"parks-header":f,"home-view":y,"park-view":l,"park-edit":u,"park-grid":d,"park-card":h});
