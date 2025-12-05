import{i as c,O as _,r as g,h as v,a as h,x as t,b as S,n as p,d as z,_ as I,c as N,e as O}from"./headings.css-Z1P8jqc_.js";var P=Object.defineProperty,j=(o,a,r,s)=>{for(var e=void 0,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=n(a,r,e)||e);return e&&P(a,r,e),e};const k=class k extends c{constructor(){super(...arguments),this._authObserver=new _(this,"parks:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(a=>{this._user=a.user})}render(){var a;return t`
      <header>
        <h1>National Parks</h1>
        <p>
          Select a park to explore hikes, viewpoints, lodging, wildlife and
          foliage.
        </p>
        ${(a=this._user)!=null&&a.authenticated?t`
              <div class="auth-info">
                <span
                  >Logged in as:
                  ${this._user.username}</span
                >
                <a href="/login.html" @click=${this.handleSignOut}>Sign out</a>
              </div>
            `:t`
              <div class="auth-info">
                <a href="/login.html">Log in</a>
              </div>
            `}
      </header>
    `}handleSignOut(a){a.preventDefault(),this.dispatchEvent(new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signout"]})),window.location.href="/login.html"}};k.styles=[g.styles,v.styles,h`
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
    `];let u=k;j([S()],u.prototype,"_user");const x=class x extends c{render(){return t`
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
    `}};x.styles=[g.styles,v.styles,h`
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
    `];let f=x;var T=Object.defineProperty,Y=(o,a,r,s)=>{for(var e=void 0,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=n(a,r,e)||e);return e&&T(a,r,e),e};const y=class y extends c{get src(){return`/api/parks/${this.parkId}`}get parkName(){return this.parkId?`${{yosemite:"Yosemite",zion:"Zion",channel:"Channel Islands"}[this.parkId]||this.parkId.charAt(0).toUpperCase()+this.parkId.slice(1)} National Park`:""}render(){return this.parkId?t`
      <h1>${this.parkName}</h1>
      <park-grid src=${this.src}></park-grid>
    `:t`<p>No park specified</p>`}};y.styles=[g.styles,v.styles,h`
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
    `];let m=y;Y([p({attribute:"park-id"})],m.prototype,"parkId");var A=Object.defineProperty,C=(o,a,r,s)=>{for(var e=void 0,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=n(a,r,e)||e);return e&&A(a,r,e),e};const w=class w extends c{constructor(){super(...arguments),this._authObserver=new _(this,"parks:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(a=>{var r;this._user=a.user,this.src&&((r=this._user)!=null&&r.authenticated)&&this.hydrate(this.src)}),this.src&&this.hydrate(this.src)}get authorization(){var a;return((a=this._user)==null?void 0:a.authenticated)&&{Authorization:`Bearer ${this._user.token}`}}async hydrate(a){const r={"Content-Type":"application/json",...this.authorization};try{const s=await fetch(a,{headers:r});if(!s.ok){s.status===401?(console.error("Unauthorized - please log in"),this.data=void 0):console.error(`Failed to load data: ${s.status} ${s.statusText}`);return}this.data=await s.json()}catch(s){console.error("Network error loading park data:",s),this.data=void 0}}renderSection(a,r,s){return t`
      <section>
        <h2>
          <svg class="icon" aria-hidden="true">
            <use href="/icons/outdoors.svg#${r}"></use>
          </svg>
          ${a}
        </h2>
        <div class="grid">
          ${s.map(e=>t`
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
    `}render(){var i;if(!this.data)return(i=this._user)!=null&&i.authenticated?t`<p>Loading...</p>`:t`<p>
          Please <a href="/login.html">log in</a> to view park data.
        </p>`;const{hikes:a,viewpoints:r,lodging:s,activities:e}=this.data;return t`
      ${this.renderSection("Top Hikes","icon-hike",a)}
      ${this.renderSection("Top Viewpoints","icon-view",r)}
      ${this.renderSection("Top Lodging","icon-bed",s)}
      ${this.renderSection("Top Activities","icon-activity",e)}
    `}};w.styles=h`
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
  `;let l=w;C([p()],l.prototype,"src");C([S()],l.prototype,"data");var L=Object.defineProperty,b=(o,a,r,s)=>{for(var e=void 0,i=o.length-1,n;i>=0;i--)(n=o[i])&&(e=n(a,r,e)||e);return e&&L(a,r,e),e};const $=class $ extends c{render(){return t`
      <article class="card">
        ${this.imgSrc?t`<img src="${this.imgSrc}" alt="" />`:t`<img alt="" />`}
        <div class="box">
          <h3>
            ${this.href?t`<a href="${this.href}"><slot></slot></a>`:t`<slot></slot>`}
          </h3>
          ${this.subtitle?t`<p class="meta">${this.subtitle}</p>`:null}
        </div>
      </article>
    `}};$.styles=[g.styles,h`
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
    `];let d=$;b([p({attribute:"img-src"})],d.prototype,"imgSrc");b([p()],d.prototype,"href");b([p()],d.prototype,"subtitle");const Z=[{path:"/app/park/:parkId",view:o=>t`
      <park-view park-id=${o.parkId}></park-view>
    `},{path:"/app",view:()=>t` <home-view></home-view> `},{path:"/",redirect:"/app"}];z({"mu-auth":O.Provider,"mu-history":N.Provider,"mu-switch":class extends I.Element{constructor(){super(Z,"parks:history","parks:auth")}},"parks-header":u,"home-view":f,"park-view":m,"park-grid":l,"park-card":d});
