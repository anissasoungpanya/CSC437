import{i as k,O as N,r as m,h as w,a as g,x as s,b as f,V as T,n as p,d as A,f as Y,c as L,e as S,_ as H,s as F}from"./headings.css-ssStuQj-.js";var Z=Object.defineProperty,q=(i,e,a,r)=>{for(var t=void 0,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=n(e,a,t)||t);return t&&Z(e,a,t),t};const j=class j extends k{constructor(){super(...arguments),this._authObserver=new N(this,"parks:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(e=>{this._user=e.user})}render(){var e;return s`
      <header>
        <h1>National Parks</h1>
        <p>
          Select a park to explore hikes, viewpoints, lodging, wildlife and
          foliage.
        </p>
        ${(e=this._user)!=null&&e.authenticated?s`
              <div class="auth-info">
                <span
                  >Logged in as:
                  ${this._user.username}</span
                >
                <a href="/login.html" @click=${this.handleSignOut}>Sign out</a>
              </div>
            `:s`
              <div class="auth-info">
                <a href="/login.html">Log in</a>
              </div>
            `}
      </header>
    `}handleSignOut(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signout"]})),window.location.href="/login.html"}};j.styles=[m.styles,w.styles,g`
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
    `];let v=j;q([f()],v.prototype,"_user");const P=class P extends k{render(){return s`
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
    `}};P.styles=[m.styles,w.styles,g`
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
    `];let x=P;var B=Object.defineProperty,M=Object.getOwnPropertyDescriptor,$=(i,e,a,r)=>{for(var t=r>1?void 0:r?M(e,a):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(r?n(e,a,t):n(t))||t);return r&&t&&B(e,a,t),t};const _=class _ extends T{get park(){return this.model.park}get error(){return this.model.error}constructor(){super("parks:model")}attributeChangedCallback(e,a,r){super.attributeChangedCallback(e,a,r),e==="park-id"&&r&&r!==a&&this.dispatchMessage(["park/request",{parkId:r}])}get parkName(){return this.parkId?`${{yosemite:"Yosemite",zion:"Zion",channel:"Channel Islands"}[this.parkId]||this.parkId.charAt(0).toUpperCase()+this.parkId.slice(1)} National Park`:""}render(){if(!this.parkId)return s`<p>No park specified</p>`;if(this.error)return s`<p>Error: ${this.error}</p>`;if(!this.park)return s`<p>Loading park data...</p>`;const a={yosemite:"https://www.nps.gov/yose/index.htm",zion:"https://www.nps.gov/zion/index.htm",channel:"https://www.nps.gov/chis/index.htm"}[this.parkId]||"https://www.nps.gov",r=R(this.parkId,this.park);return s`
      <nav class="breadcrumb">
        <a href="/app">Home</a>
        <span>›</span>
        <span>${this.parkName}</span>
        <span class="spacer"></span>
        <a class="edit" href="/app/park/${this.parkId}/edit">Edit</a>
      </nav>
      <h1>${this.parkName}</h1>
      <park-grid .park=${r}></park-grid>
      <p class="learn-more">
        To learn more about ${this.parkName}, visit their website
        <a href=${a} target="_blank" rel="noreferrer">here</a>.
      </p>
    `}};_.styles=[m.styles,w.styles,g`
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
    `];let d=_;$([p({attribute:"park-id"})],d.prototype,"parkId",2);$([f()],d.prototype,"park",1);$([f()],d.prototype,"error",1);function R(i,e){if(!i)return e;const r={yosemite:{lodging:[{title:"Yosemite Valley Lodge",imgSrc:"/images/yosemite/lodging/yv-lodge.jpg",subtitle:"Base in Yosemite Valley near Yosemite Falls. Classic lodge rooms, dining, and easy shuttle access to the Valley floor sights.",href:"https://www.travelyosemite.com/lodging/yosemite-valley-lodge/"},{title:"The Ahwahnee",imgSrc:"/images/yosemite/lodging/ahwahnee.jpg",subtitle:"Historic grand hotel with iconic dining room and Half Dome views. Premium lodging right in the Valley.",href:"https://www.travelyosemite.com/lodging/the-ahwahnee/"},{title:"Wawona Hotel",imgSrc:"/images/yosemite/lodging/wawona.jpg",subtitle:"Victorian-era charm near the Mariposa Grove. Quiet setting south of the Valley, porches and meadow views.",href:"https://www.travelyosemite.com/lodging/wawona-hotel/"}],viewpoints:[{title:"Tunnel View",imgSrc:"/images/yosemite/viewpoints/tunnel-view.jpg",subtitle:"On Wawona Road just east of the tunnel. Classic vista of El Capitan, Bridalveil Fall, and Half Dome.",href:""},{title:"Glacier Point",imgSrc:"/images/yosemite/viewpoints/glacier-point.jpg",subtitle:"At the end of Glacier Point Road. Panoramic overlook above Yosemite Valley with Half Dome front and center.",href:""},{title:"Taft Point",imgSrc:"/images/yosemite/viewpoints/taft-point.jpg",subtitle:"Short hike from Glacier Point Road. Dramatic cliffs and fissures with sweeping westward Valley views.",href:""}]},zion:{lodging:[{title:"Zion Lodge",imgSrc:"/images/zion/lodging/zion-lodge.jpg",subtitle:"Inside Zion Canyon along the scenic drive. Cabins and lodge rooms with trail and shuttle access at your doorstep.",href:"https://www.zionlodge.com/"},{title:"Cable Mountain Lodge",imgSrc:"/images/zion/lodging/cable-mountain.jpg",subtitle:"At the park entrance in Springdale by the shuttle stop. Suites with kitchenettes and pool, easy canyon access.",href:"https://cablemountainlodge.com/"},{title:"Cliffrose Springdale",imgSrc:"/images/zion/lodging/cliffrose.jpg",subtitle:"Riverside resort feel in Springdale, a short walk to the park gate. Lush grounds and red rock views.",href:"https://www.cliffrosespringdale.com/"}],viewpoints:[{title:"Canyon Overlook",imgSrc:"/images/zion/viewpoints/canyon-overlook.jpg",subtitle:"East side of the Zion-Mt. Carmel Tunnel on UT-9. Short trail to a wide view of lower Zion Canyon.",href:""},{title:"Watchman (Canyon Junction Bridge)",imgSrc:"/images/zion/viewpoints/watchman.jpg",subtitle:"Near Canyon Junction Bridge on the Scenic Drive. Iconic sunset shot of the Watchman and Virgin River.",href:""},{title:"Timber Creek Overlook",imgSrc:"/images/zion/viewpoints/timber-creek.jpg",subtitle:"Kolob Canyons section, at the end of Kolob Canyons Rd. Wide western views over red rock ridges.",href:""}]},channel:{lodging:[{title:"Scorpion Canyon Campground",imgSrc:"/images/channel/lodging/scorpion-canyon.jpg",subtitle:"On Santa Cruz Island near Scorpion Anchorage. Island camping close to trails and kayak launches.",href:"https://www.nps.gov/chis/planyourvisit/camping.htm"},{title:"Anacapa Island Campground",imgSrc:"/images/channel/lodging/anacapa-campground.jpg",subtitle:"On Anacapa Island above the landing cove. Clifftop primitive sites with ocean panoramas.",href:"https://www.nps.gov/chis/planyourvisit/camping.htm"},{title:"Ventura Harbor Hotels",imgSrc:"/images/channel/lodging/ventura-harbor-hotels.jpg",subtitle:"On the mainland near Island Packers dock. Convenient stays before/after island boat trips.",href:"https://www.islandpackers.com/"}],viewpoints:[{title:"Inspiration Point (Anacapa)",imgSrc:"/images/channel/viewpoints/inspiration-point.jpg",subtitle:"On Anacapa Island near the western tip. Views of the sea arch and the chain of Channel Islands.",href:""},{title:"Potato Harbor Overlook (Santa Cruz)",imgSrc:"/images/channel/viewpoints/potato-harbor.jpg",subtitle:"North coast of Santa Cruz Island, reached from Scorpion area trails. Turquoise cove and cliffs.",href:""},{title:"Cavern Point (Santa Cruz)",imgSrc:"/images/channel/viewpoints/cavern-point.jpg",subtitle:"Clifftop near Scorpion Anchorage on Santa Cruz. Wide coastal views and marine wildlife spotting.",href:""}]}}[i];return r?{...e,hikes:e.hikes??[],activities:e.activities??[],lodging:r.lodging??e.lodging??[],viewpoints:r.viewpoints??e.viewpoints??[]}:e}var W=Object.defineProperty,U=Object.getOwnPropertyDescriptor,D=(i,e,a,r)=>{for(var t=r>1?void 0:r?U(e,a):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(r?n(e,a,t):n(t))||t);return r&&t&&W(e,a,t),t};const b=class b extends T{get park(){return this.model.park}constructor(){super("parks:model")}attributeChangedCallback(e,a,r){super.attributeChangedCallback(e,a,r),e==="park-id"&&r&&r!==a&&this.dispatchMessage(["park/request",{parkId:r}])}handleSubmit(e){this.parkId&&this.dispatchMessage(["park/save",{parkId:this.parkId,park:e.detail},{onSuccess:()=>L.dispatch(this,"history/navigate",{href:`/app/park/${this.parkId}`}),onFailure:a=>console.error("Save failed:",a.message)}])}render(){var e;return this.parkId?s`
      <main>
        <h1>Edit ${this.parkId}</h1>
        <mu-form
          .init=${this.park}
          @mu-form:submit=${this.handleSubmit}
          class="card"
        >
          <label>
            <span>Park Name</span>
            <input name="name" .value=${((e=this.park)==null?void 0:e.name)??""} />
          </label>
          <label>
            <span>Park Id (read-only)</span>
            <input name="parkId" .value=${this.parkId} readonly />
          </label>
          <button type="submit">Save</button>
        </mu-form>
      </main>
    `:s`<p>No park specified</p>`}};b.uses=A({"mu-form":Y.Element}),b.styles=[m.styles,w.styles,g`
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
    `];let u=b;D([p({attribute:"park-id"})],u.prototype,"parkId",2);D([f()],u.prototype,"park",1);var G=Object.defineProperty,C=(i,e,a,r)=>{for(var t=void 0,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=n(e,a,t)||t);return t&&G(e,a,t),t};const z=class z extends k{constructor(){super(...arguments),this._authObserver=new N(this,"parks:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(e=>{var a;this._user=e.user,this.src&&((a=this._user)!=null&&a.authenticated)&&this.hydrate(this.src)}),this.park?this.data=this.park:this.src&&this.hydrate(this.src)}get authorization(){var e;return((e=this._user)==null?void 0:e.authenticated)&&{Authorization:`Bearer ${this._user.token}`}}async hydrate(e){const a={"Content-Type":"application/json",...this.authorization};try{const r=await fetch(e,{headers:a});if(!r.ok){r.status===401?(console.error("Unauthorized - please log in"),this.data=void 0):console.error(`Failed to load data: ${r.status} ${r.statusText}`);return}this.data=await r.json()}catch(r){console.error("Network error loading park data:",r),this.data=void 0}}renderSection(e,a,r,t){const o=(t==null?void 0:t.allowHref)??!1,n=(t==null?void 0:t.linkLabel)??"";return s`
      <section>
        <h2>
          <svg class="icon" aria-hidden="true">
            <use href="/icons/outdoors.svg#${a}"></use>
          </svg>
          ${e}
        </h2>
        <div class="grid">
          ${r.map(l=>s`
              <park-card
                href=${o?l.href??void 0:void 0}
                subtitle=${l.subtitle??""}
                img-src=${l.imgSrc??""}
              >
                ${n&&o&&l.href?s`${l.title} –
                      <a href=${l.href} target="_blank" rel="noreferrer"
                        >${n}</a
                      >`:s`${l.title}`}
              </park-card>
            `)}
        </div>
      </section>
    `}render(){var n;const e=this.park??this.data;if(!e)return(n=this._user)!=null&&n.authenticated?s`<p>Loading...</p>`:s`<p>
          Please <a href="/login.html">log in</a> to view park data.
        </p>`;const a=e.hikes??[],r=e.viewpoints??[],t=e.lodging??[],o=e.activities??[];return s`
      ${this.renderSection("Top Hikes","icon-hike",a)}
      ${this.renderSection("Top Viewpoints","icon-view",r)}
      ${this.renderSection("Top Lodging","icon-bed",t,{allowHref:!0,linkLabel:"Book here"})}
      ${this.renderSection("Top Activities","icon-activity",o)}
    `}};z.styles=g`
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
  `;let c=z;C([p()],c.prototype,"src");C([p({attribute:!1})],c.prototype,"park");C([f()],c.prototype,"data");var J=Object.defineProperty,I=(i,e,a,r)=>{for(var t=void 0,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=n(e,a,t)||t);return t&&J(e,a,t),t};const O=class O extends k{render(){return s`
      <article class="card">
        ${this.imgSrc?s`<img src="${this.imgSrc}" alt="" />`:s`<img alt="" />`}
        <div class="box">
          <h3>
            ${this.href?s`<a href="${this.href}"><slot></slot></a>`:s`<slot></slot>`}
          </h3>
          ${this.subtitle?s`<p class="meta">${this.subtitle}</p>`:null}
        </div>
      </article>
    `}};O.styles=[m.styles,g`
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
    `];let h=O;I([p({attribute:"img-src"})],h.prototype,"imgSrc");I([p()],h.prototype,"href");I([p()],h.prototype,"subtitle");const K={};function Q(i,e,a){switch(i[0]){case"park/request":{const{parkId:r}=i[1];return[{...e,park:void 0,error:void 0},V(r,a).then(t=>["park/load",{park:t}]).catch(t=>["park/error",{error:t.message}])]}case"park/load":{const{park:r}=i[1];return{...e,park:r,error:void 0}}case"park/error":return{...e,error:i[1].error};case"park/save":{const[,r,t]=i,{parkId:o,park:n}=r,l=e.park||{};return[e,X(o,{...l,...n},a,t).then(y=>["park/load",{park:y}]).catch(y=>["park/error",{error:y.message}])]}default:return e}}function V(i,e){const a=S.headers(e);return fetch(`/api/parks/${i}`,{headers:a}).then(r=>{if(r.status===200)return r.json();throw new Error(`Failed to load park (${r.status})`)})}function X(i,e,a,r){return fetch(`/api/parks/${i}`,{method:"PUT",headers:{"Content-Type":"application/json",...S.headers(a)},body:JSON.stringify(e)}).then(t=>{if(t.status===200)return t.json();throw new Error(`Failed to save park (${t.status})`)}).then(t=>{var o;return(o=r==null?void 0:r.onSuccess)==null||o.call(r),t}).catch(t=>{var o;throw(o=r==null?void 0:r.onFailure)==null||o.call(r,t),t})}const E=[{path:"/app/park/:parkId/edit",view:i=>s`
      <park-edit park-id=${i.parkId}></park-edit>
    `},{path:"/app/park/:parkId",view:i=>s`
      <park-view park-id=${i.parkId}></park-view>
    `},{path:"/app",view:()=>s` <home-view></home-view> `},{path:"/",redirect:"/app"}];A({"mu-auth":S.Provider,"mu-history":L.Provider,"mu-store":class extends F.Provider{constructor(){super(Q,K,"parks:auth")}},"mu-switch":class extends H.Element{constructor(){super(E,"parks:history","parks:auth")}},"parks-header":v,"home-view":x,"park-view":d,"park-edit":u,"park-grid":c,"park-card":h});
