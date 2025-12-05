import{i as f,O as S,r as m,h as v,a as p,x as i,b,V as I,n as d,c as P,d as z,_ as j,s as N,e as T}from"./headings.css-CBpl_qwk.js";var Y=Object.defineProperty,A=(s,r,a,t)=>{for(var e=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(e=n(r,a,e)||e);return e&&Y(r,a,e),e};const y=class y extends f{constructor(){super(...arguments),this._authObserver=new S(this,"parks:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(r=>{this._user=r.user})}render(){var r;return i`
      <header>
        <h1>National Parks</h1>
        <p>
          Select a park to explore hikes, viewpoints, lodging, wildlife and
          foliage.
        </p>
        ${(r=this._user)!=null&&r.authenticated?i`
              <div class="auth-info">
                <span
                  >Logged in as:
                  ${this._user.username}</span
                >
                <a href="/login.html" @click=${this.handleSignOut}>Sign out</a>
              </div>
            `:i`
              <div class="auth-info">
                <a href="/login.html">Log in</a>
              </div>
            `}
      </header>
    `}handleSignOut(r){r.preventDefault(),this.dispatchEvent(new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signout"]})),window.location.href="/login.html"}};y.styles=[m.styles,v.styles,p`
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
    `];let u=y;A([b()],u.prototype,"_user");const w=class w extends f{render(){return i`
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
    `}};w.styles=[m.styles,v.styles,p`
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
    `];let g=w;var q=Object.defineProperty,D=Object.getOwnPropertyDescriptor,O=(s,r,a,t)=>{for(var e=t>1?void 0:t?D(r,a):r,o=s.length-1,n;o>=0;o--)(n=s[o])&&(e=(t?n(r,a,e):n(e))||e);return t&&e&&q(r,a,e),e};const $=class $ extends I{get park(){return this.model.park}constructor(){super("parks:model")}attributeChangedCallback(r,a,t){super.attributeChangedCallback(r,a,t),r==="park-id"&&t&&t!==a&&this.dispatchMessage(["park/request",{parkId:t}])}get parkName(){return this.parkId?`${{yosemite:"Yosemite",zion:"Zion",channel:"Channel Islands"}[this.parkId]||this.parkId.charAt(0).toUpperCase()+this.parkId.slice(1)} National Park`:""}render(){return this.parkId?i`
      <h1>${this.parkName}</h1>
      <park-grid .park=${this.park}></park-grid>
    `:i`<p>No park specified</p>`}};$.styles=[m.styles,v.styles,p`
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
    `];let l=$;O([d({attribute:"park-id"})],l.prototype,"parkId",2);O([b()],l.prototype,"park",1);var L=Object.defineProperty,k=(s,r,a,t)=>{for(var e=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(e=n(r,a,e)||e);return e&&L(r,a,e),e};const _=class _ extends f{constructor(){super(...arguments),this._authObserver=new S(this,"parks:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(r=>{var a;this._user=r.user,this.src&&((a=this._user)!=null&&a.authenticated)&&this.hydrate(this.src)}),this.park?this.data=this.park:this.src&&this.hydrate(this.src)}get authorization(){var r;return((r=this._user)==null?void 0:r.authenticated)&&{Authorization:`Bearer ${this._user.token}`}}async hydrate(r){const a={"Content-Type":"application/json",...this.authorization};try{const t=await fetch(r,{headers:a});if(!t.ok){t.status===401?(console.error("Unauthorized - please log in"),this.data=void 0):console.error(`Failed to load data: ${t.status} ${t.statusText}`);return}this.data=await t.json()}catch(t){console.error("Network error loading park data:",t),this.data=void 0}}renderSection(r,a,t){return i`
      <section>
        <h2>
          <svg class="icon" aria-hidden="true">
            <use href="/icons/outdoors.svg#${a}"></use>
          </svg>
          ${r}
        </h2>
        <div class="grid">
          ${t.map(e=>i`
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
    `}render(){var n;const r=this.park??this.data;if(!r)return(n=this._user)!=null&&n.authenticated?i`<p>Loading...</p>`:i`<p>
          Please <a href="/login.html">log in</a> to view park data.
        </p>`;const a=r.hikes??[],t=r.viewpoints??[],e=r.lodging??[],o=r.activities??[];return i`
      ${this.renderSection("Top Hikes","icon-hike",a)}
      ${this.renderSection("Top Viewpoints","icon-view",t)}
      ${this.renderSection("Top Lodging","icon-bed",e)}
      ${this.renderSection("Top Activities","icon-activity",o)}
    `}};_.styles=p`
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
  `;let c=_;k([d()],c.prototype,"src");k([d({attribute:!1})],c.prototype,"park");k([b()],c.prototype,"data");var Z=Object.defineProperty,x=(s,r,a,t)=>{for(var e=void 0,o=s.length-1,n;o>=0;o--)(n=s[o])&&(e=n(r,a,e)||e);return e&&Z(r,a,e),e};const C=class C extends f{render(){return i`
      <article class="card">
        ${this.imgSrc?i`<img src="${this.imgSrc}" alt="" />`:i`<img alt="" />`}
        <div class="box">
          <h3>
            ${this.href?i`<a href="${this.href}"><slot></slot></a>`:i`<slot></slot>`}
          </h3>
          ${this.subtitle?i`<p class="meta">${this.subtitle}</p>`:null}
        </div>
      </article>
    `}};C.styles=[m.styles,p`
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
    `];let h=C;x([d({attribute:"img-src"})],h.prototype,"imgSrc");x([d()],h.prototype,"href");x([d()],h.prototype,"subtitle");const F={};function U(s,r,a){switch(s[0]){case"park/request":{const{parkId:t}=s[1];return[{...r,park:void 0,error:void 0},B(t,a).then(e=>["park/load",{park:e}]).catch(e=>["park/error",{error:e.message}])]}case"park/load":{const{park:t}=s[1];return{...r,park:t,error:void 0}}case"park/error":return{...r,error:s[1].error};default:return r}}function B(s,r){const a=P.headers(r);return fetch(`/api/parks/${s}`,{headers:a}).then(t=>{if(t.status===200)return t.json();throw new Error(`Failed to load park (${t.status})`)})}const M=[{path:"/app/park/:parkId",view:s=>i`
      <park-view park-id=${s.parkId}></park-view>
    `},{path:"/app",view:()=>i` <home-view></home-view> `},{path:"/",redirect:"/app"}];z({"mu-auth":P.Provider,"mu-history":T.Provider,"mu-store":class extends N.Provider{constructor(){super(U,F,"parks:auth")}},"mu-switch":class extends j.Element{constructor(){super(M,"parks:history","parks:auth")}},"parks-header":u,"home-view":g,"park-view":l,"park-grid":c,"park-card":h});
