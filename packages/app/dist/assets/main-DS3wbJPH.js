import{i as b,O as Y,r as d,h as k,a as h,x as n,b as u,V as O,n as c,d as T,f as R,c as L,e as S,_ as G,s as Z}from"./headings.css-ssStuQj-.js";var M=Object.defineProperty,N=(o,e,r,t)=>{for(var a=void 0,i=o.length-1,s;i>=0;i--)(s=o[i])&&(a=s(e,r,a)||a);return a&&M(e,r,a),a};const _="parks:theme",$=class $ extends b{constructor(){super(...arguments),this._theme="light",this._authObserver=new Y(this,"parks:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(r=>{this._user=r.user});const e=typeof localStorage<"u"&&localStorage.getItem(_)||null;this.applyTheme(e||this._theme)}render(){var e;return n`
      <header>
        <div class="bar">
          <div>
            <h1>National Parks</h1>
            <p>
              Select a park to explore hikes, viewpoints, lodging, wildlife and
              foliage.
            </p>
            ${(e=this._user)!=null&&e.authenticated?n`
                  <div class="auth-info">
                    <span
                      >Logged in as:
                      ${this._user.username}</span
                    >
                    <a href="/login.html" @click=${this.handleSignOut}
                      >Sign out</a
                    >
                  </div>
                `:n`
                  <div class="auth-info">
                    <a href="/login.html">Log in</a>
                  </div>
                `}
          </div>
          <div>
            <label class="toggle">
              <input
                type="checkbox"
                .checked=${this._theme==="dark"}
                @change=${this.handleToggle}
              />
              Dark mode
            </label>
          </div>
        </div>
      </header>
    `}applyTheme(e){this._theme=e,typeof document<"u"&&(document.documentElement.dataset.theme=e,document.body.classList.toggle("dark-mode",e==="dark")),typeof localStorage<"u"&&localStorage.setItem(_,e)}handleToggle(e){const r=e.target.checked;this.applyTheme(r?"dark":"light")}handleSignOut(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signout"]})),window.location.href="/login.html"}};$.styles=[d.styles,k.styles,h`
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
      .bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        flex-wrap: wrap;
      }
      .toggle {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        color: var(--color-muted, #94a3b8);
        font-weight: 600;
      }
      .toggle input {
        width: 1.1rem;
        height: 1.1rem;
        accent-color: var(--color-accent, #38bdf8);
      }
    `];let g=$;N([u()],g.prototype,"_user");N([u()],g.prototype,"_theme");const I=class I extends b{render(){return n`
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
    `}};I.styles=[d.styles,k.styles,h`
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
    `];let x=I;var q=Object.defineProperty,B=Object.getOwnPropertyDescriptor,C=(o,e,r,t)=>{for(var a=t>1?void 0:t?B(e,r):e,i=o.length-1,s;i>=0;i--)(s=o[i])&&(a=(t?s(e,r,a):s(a))||a);return t&&a&&q(e,r,a),a};const j=class j extends O{get park(){return this.model.park}get error(){return this.model.error}constructor(){super("parks:model")}attributeChangedCallback(e,r,t){super.attributeChangedCallback(e,r,t),e==="park-id"&&t&&t!==r&&this.dispatchMessage(["park/request",{parkId:t}])}get parkName(){return this.parkId?`${{yosemite:"Yosemite",zion:"Zion",channel:"Channel Islands"}[this.parkId]||this.parkId.charAt(0).toUpperCase()+this.parkId.slice(1)} National Park`:""}render(){if(!this.parkId)return n`<p>No park specified</p>`;if(this.error)return n`<p>Error: ${this.error}</p>`;if(!this.park)return n`<p>Loading park data...</p>`;const r={yosemite:"https://www.nps.gov/yose/index.htm",zion:"https://www.nps.gov/zion/index.htm",channel:"https://www.nps.gov/chis/index.htm"}[this.parkId]||"https://www.nps.gov",t=W(this.parkId,this.park);return n`
      <nav class="breadcrumb">
        <a href="/app">Home</a>
        <span>›</span>
        <span>${this.parkName}</span>
        <span class="spacer"></span>
        <a class="edit" href="/app/park/${this.parkId}/edit">Edit</a>
      </nav>
      <h1>${this.parkName}</h1>
      <park-grid .park=${t}></park-grid>
      <p class="learn-more">
        To learn more about ${this.parkName}, visit their website
        <a href=${r} target="_blank" rel="noreferrer">here</a>.
      </p>
    `}};j.styles=[d.styles,k.styles,h`
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
    `];let p=j;C([c({attribute:"park-id"})],p.prototype,"parkId",2);C([u()],p.prototype,"park",1);C([u()],p.prototype,"error",1);function W(o,e){if(!o)return e;const t={yosemite:{activities:[{title:"Rock Climbing",imgSrc:"/images/yosemite/activities/climbing.jpg",subtitle:"World-class granite walls throughout the Valley. Guided climbs and lessons available for all levels.",href:""},{title:"Mariposa Grove (Giant Sequoias)",imgSrc:"/images/yosemite/activities/mariposa-grove.jpg",subtitle:"Stroll among giant sequoias near the park’s south entrance. Big Trees Loop and Grizzly Giant trails.",href:""},{title:"Raft the Merced River",imgSrc:"/images/yosemite/activities/merced-rafting.jpg",subtitle:"Seasonal rafting through Yosemite Valley with views of El Capitan and Yosemite Falls. Rentals when flows allow.",href:""}],lodging:[{title:"Yosemite Valley Lodge",imgSrc:"/images/yosemite/lodging/yv-lodge.jpg",subtitle:"Base in Yosemite Valley near Yosemite Falls. Classic lodge rooms, dining, and easy shuttle access to the Valley floor sights.",href:"https://www.travelyosemite.com/lodging/yosemite-valley-lodge/"},{title:"The Ahwahnee",imgSrc:"/images/yosemite/lodging/ahwahnee.jpg",subtitle:"Historic grand hotel with iconic dining room and Half Dome views. Premium lodging right in the Valley.",href:"https://www.travelyosemite.com/lodging/the-ahwahnee/"},{title:"Wawona Hotel",imgSrc:"/images/yosemite/lodging/wawona.jpg",subtitle:"Victorian-era charm near the Mariposa Grove. Quiet setting south of the Valley, porches and meadow views.",href:"https://www.travelyosemite.com/lodging/wawona-hotel/"}],viewpoints:[{title:"Tunnel View",imgSrc:"/images/yosemite/viewpoints/tunnel-view.jpg",subtitle:"On Wawona Road just east of the tunnel. Classic vista of El Capitan, Bridalveil Fall, and Half Dome.",href:""},{title:"Glacier Point",imgSrc:"/images/yosemite/viewpoints/glacier-point.jpg",subtitle:"At the end of Glacier Point Road. Panoramic overlook above Yosemite Valley with Half Dome front and center.",href:""},{title:"Taft Point",imgSrc:"/images/yosemite/viewpoints/taft-point.jpg",subtitle:"Short hike from Glacier Point Road. Dramatic cliffs and fissures with sweeping westward Valley views.",href:""}]},zion:{activities:[{title:"Canyoneering",imgSrc:"/images/zion/activities/canyoneering.jpg",subtitle:"Guided slot-canyon adventures in Zion’s backcountry. Permits required for many technical routes.",href:""},{title:"Cycling Zion Canyon",imgSrc:"/images/zion/activities/cycling.jpg",subtitle:"Ride the Scenic Drive when traffic is limited. Rent bikes in Springdale; shuttles carry bikes too.",href:""},{title:"Scenic Shuttle Tour",imgSrc:"/images/zion/activities/scenic-shuttle.jpg",subtitle:"Hop-on, hop-off stops along Zion Canyon Scenic Drive. Great for viewpoints and short walks.",href:""}],lodging:[{title:"Zion Lodge",imgSrc:"/images/zion/lodging/zion-lodge.jpg",subtitle:"Inside Zion Canyon along the scenic drive. Cabins and lodge rooms with trail and shuttle access at your doorstep.",href:"https://www.zionlodge.com/"},{title:"Cable Mountain Lodge",imgSrc:"/images/zion/lodging/cable-mountain.jpg",subtitle:"At the park entrance in Springdale by the shuttle stop. Suites with kitchenettes and pool, easy canyon access.",href:"https://cablemountainlodge.com/"},{title:"Cliffrose Springdale",imgSrc:"/images/zion/lodging/cliffrose.jpg",subtitle:"Riverside resort feel in Springdale, a short walk to the park gate. Lush grounds and red rock views.",href:"https://www.cliffrosespringdale.com/"}],viewpoints:[{title:"Canyon Overlook",imgSrc:"/images/zion/viewpoints/canyon-overlook.jpg",subtitle:"East side of the Zion-Mt. Carmel Tunnel on UT-9. Short trail to a wide view of lower Zion Canyon.",href:""},{title:"Watchman (Canyon Junction Bridge)",imgSrc:"/images/zion/viewpoints/watchman.jpg",subtitle:"Near Canyon Junction Bridge on the Scenic Drive. Iconic sunset shot of the Watchman and Virgin River.",href:""},{title:"Timber Creek Overlook",imgSrc:"/images/zion/viewpoints/timber-creek.jpg",subtitle:"Kolob Canyons section, at the end of Kolob Canyons Rd. Wide western views over red rock ridges.",href:""}]},channel:{activities:[{title:"Sea Kayaking & Caves",imgSrc:"/images/channel/activities/sea-kayaking.jpg",subtitle:"Paddle sea arches and caves (conditions permitting) near Santa Cruz and Anacapa Islands. Guided trips from Scorpion Anchorage.",href:""},{title:"Snorkeling & Diving",imgSrc:"/images/channel/activities/snorkeling.jpg",subtitle:"Kelp forests and abundant marine life in the Channel Islands Marine Sanctuary. Best near Scorpion Anchorage and Landing Cove.",href:""},{title:"Wildlife Watching",imgSrc:"/images/channel/activities/wildlife-watching.jpg",subtitle:"Look for whales, dolphins, sea lions, and island foxes; seabirds nest on cliffs. Best from boats and coastal trails.",href:""}],lodging:[{title:"Scorpion Canyon Campground",imgSrc:"/images/channel/lodging/scorpion-canyon.jpg",subtitle:"On Santa Cruz Island near Scorpion Anchorage. Island camping close to trails and kayak launches.",href:"https://www.nps.gov/chis/planyourvisit/camping.htm"},{title:"Anacapa Island Campground",imgSrc:"/images/channel/lodging/anacapa-campground.jpg",subtitle:"On Anacapa Island above the landing cove. Clifftop primitive sites with ocean panoramas.",href:"https://www.nps.gov/chis/planyourvisit/camping.htm"},{title:"Ventura Harbor Hotels",imgSrc:"/images/channel/lodging/ventura-harbor-hotels.jpg",subtitle:"On the mainland near Island Packers dock. Convenient stays before/after island boat trips.",href:"https://www.islandpackers.com/"}],viewpoints:[{title:"Inspiration Point (Anacapa)",imgSrc:"/images/channel/viewpoints/inspiration-point2.jpg",subtitle:"On Anacapa Island near the western tip. Views of the sea arch and the chain of Channel Islands.",href:""},{title:"Potato Harbor Overlook (Santa Cruz)",imgSrc:"/images/channel/viewpoints/potato-harbor.jpg",subtitle:"North coast of Santa Cruz Island, reached from Scorpion area trails. Turquoise cove and cliffs.",href:""},{title:"Cavern Point (Santa Cruz)",imgSrc:"/images/channel/viewpoints/cavern-point.jpg",subtitle:"Clifftop near Scorpion Anchorage on Santa Cruz. Wide coastal views and marine wildlife spotting.",href:""}]}}[o];return t?{...e,hikes:e.hikes??[],activities:t.activities??e.activities??[],lodging:t.lodging??e.lodging??[],viewpoints:t.viewpoints??e.viewpoints??[]}:e}var F=Object.defineProperty,H=Object.getOwnPropertyDescriptor,A=(o,e,r,t)=>{for(var a=t>1?void 0:t?H(e,r):e,i=o.length-1,s;i>=0;i--)(s=o[i])&&(a=(t?s(e,r,a):s(a))||a);return t&&a&&F(e,r,a),a};const v=class v extends O{get park(){return this.model.park}constructor(){super("parks:model")}attributeChangedCallback(e,r,t){super.attributeChangedCallback(e,r,t),e==="park-id"&&t&&t!==r&&this.dispatchMessage(["park/request",{parkId:t}])}handleSubmit(e){this.parkId&&this.dispatchMessage(["park/save",{parkId:this.parkId,park:e.detail},{onSuccess:()=>L.dispatch(this,"history/navigate",{href:`/app/park/${this.parkId}`}),onFailure:r=>console.error("Save failed:",r.message)}])}render(){var e;return this.parkId?n`
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
    `:n`<p>No park specified</p>`}};v.uses=T({"mu-form":R.Element}),v.styles=[d.styles,k.styles,h`
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
    `];let m=v;A([c({attribute:"park-id"})],m.prototype,"parkId",2);A([u()],m.prototype,"park",1);var K=Object.defineProperty,U=(o,e,r,t)=>{for(var a=void 0,i=o.length-1,s;i>=0;i--)(s=o[i])&&(a=s(e,r,a)||a);return a&&K(e,r,a),a};const P=class P extends b{renderSection(e,r,t,a){return t!=null&&t.length?n`
      <section>
        <h2>
          <svg class="icon" aria-hidden="true">
            <use href="/icons/outdoors.svg#${r}"></use>
          </svg>
          ${e}
        </h2>
        <div class="grid">
          ${t.map(i=>n`
              <park-card
                href=${i.href}
                subtitle=${i.subtitle??""}
                img-src=${i.imgSrc??""}
                link-label=${a??""}
              >
                ${i.title}
              </park-card>
            `)}
        </div>
      </section>
    `:null}render(){const e=this.park;if(!e)return n`<p>Loading park details...</p>`;const r=e.hikes??[],t=e.viewpoints??[],a=e.lodging??[],i=e.activities??[];return n`
      ${this.renderSection("Top Hikes","icon-hike",r)}
      ${this.renderSection("Top Viewpoints","icon-view",t)}
      ${this.renderSection("Top Lodging","icon-bed",a,"Book here")}
      ${this.renderSection("Top Activities","icon-activity",i)}
    `}};P.styles=[d.styles,h`
      :host {
        display: block;
      }
      section {
        margin-bottom: 2rem;
      }
      h2 {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1.5rem;
        margin-bottom: 1rem;
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
    `];let f=P;U([c({attribute:!1})],f.prototype,"park");var J=Object.defineProperty,w=(o,e,r,t)=>{for(var a=void 0,i=o.length-1,s;i>=0;i--)(s=o[i])&&(a=s(e,r,a)||a);return a&&J(e,r,a),a};const z=class z extends b{render(){const e=!!(this.linkLabel&&this.href);return n`
      <article class="card">
        ${this.imgSrc?n`<img src="${this.imgSrc}" alt="" />`:n`<img alt="" />`}
        <div class="box">
          <h3>
            ${e?n`<span class="title-text"><slot></slot></span>`:this.href?n`<a href="${this.href}"><slot></slot></a>`:n`<slot></slot>`}
          </h3>
          ${this.subtitle?n`<p class="meta">${this.subtitle}</p>`:null}
          ${e?n`<p class="cta">
                <a href="${this.href}" target="_blank" rel="noopener noreferrer"
                  >${this.linkLabel}</a
                >
              </p>`:null}
        </div>
      </article>
    `}};z.styles=[d.styles,h`
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
      article.card img {
        display: block;
        width: 100%;
        aspect-ratio: 4 / 3;
        object-fit: cover;
        background: #0f172a;
      }
      .box {
        padding: 12px;
      }
      h3 {
        font-size: 1rem;
        line-height: 1.3;
        margin-bottom: 4px;
      }
      .title-text {
        color: var(--color-text-header, #f8fafc);
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
      p.cta {
        margin-top: 8px;
      }
      p.cta a {
        color: var(--color-accent, #38bdf8);
        font-weight: 600;
        text-decoration: none;
      }
      p.cta a:hover {
        text-decoration: underline;
      }
    `];let l=z;w([c({attribute:"img-src"})],l.prototype,"imgSrc");w([c()],l.prototype,"href");w([c()],l.prototype,"subtitle");w([c({attribute:"link-label"})],l.prototype,"linkLabel");const V={};function Q(o,e,r){switch(o[0]){case"park/request":{const{parkId:t}=o[1];return[{...e,park:void 0,error:void 0},E(t,r).then(a=>["park/load",{park:a}]).catch(a=>["park/error",{error:a.message}])]}case"park/load":{const{park:t}=o[1];return{...e,park:t,error:void 0}}case"park/error":return{...e,error:o[1].error};case"park/save":{const[,t,a]=o,{parkId:i,park:s}=t,D=e.park||{};return[e,X(i,{...D,...s},r,a).then(y=>["park/load",{park:y}]).catch(y=>["park/error",{error:y.message}])]}default:return e}}function E(o,e){const r=S.headers(e);return fetch(`/api/parks/${o}`,{headers:r}).then(t=>{if(t.status===200)return t.json();throw new Error(`Failed to load park (${t.status})`)})}function X(o,e,r,t){return fetch(`/api/parks/${o}`,{method:"PUT",headers:{"Content-Type":"application/json",...S.headers(r)},body:JSON.stringify(e)}).then(a=>{if(a.status===200)return a.json();throw new Error(`Failed to save park (${a.status})`)}).then(a=>{var i;return(i=t==null?void 0:t.onSuccess)==null||i.call(t),a}).catch(a=>{var i;throw(i=t==null?void 0:t.onFailure)==null||i.call(t,a),a})}const ee=[{path:"/app/park/:parkId/edit",view:o=>n`
      <park-edit park-id=${o.parkId}></park-edit>
    `},{path:"/app/park/:parkId",view:o=>n`
      <park-view park-id=${o.parkId}></park-view>
    `},{path:"/app",view:()=>n` <home-view></home-view> `},{path:"/",redirect:"/app"}];T({"mu-auth":S.Provider,"mu-history":L.Provider,"mu-store":class extends Z.Provider{constructor(){super(Q,V,"parks:auth")}},"mu-switch":class extends G.Element{constructor(){super(ee,"parks:history","parks:auth")}},"parks-header":g,"home-view":x,"park-view":p,"park-edit":m,"park-grid":f,"park-card":l});
