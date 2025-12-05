import{i as v,O as D,r as p,h as b,a as d,x as s,b as w,V as O,n as h,d as _,f as L,c as N,e as S,_ as R,s as Y}from"./headings.css-ssStuQj-.js";var G=Object.defineProperty,Z=(i,e,r,a)=>{for(var t=void 0,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=n(e,r,t)||t);return t&&G(e,r,t),t};const $=class $ extends v{constructor(){super(...arguments),this._authObserver=new D(this,"parks:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(e=>{this._user=e.user})}render(){var e;return s`
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
    `}handleSignOut(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signout"]})),window.location.href="/login.html"}};$.styles=[p.styles,b.styles,d`
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
    `];let m=$;Z([w()],m.prototype,"_user");const I=class I extends v{render(){return s`
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
    `}};I.styles=[p.styles,b.styles,d`
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
    `];let y=I;var q=Object.defineProperty,M=Object.getOwnPropertyDescriptor,x=(i,e,r,a)=>{for(var t=a>1?void 0:a?M(e,r):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(a?n(e,r,t):n(t))||t);return a&&t&&q(e,r,t),t};const j=class j extends O{get park(){return this.model.park}get error(){return this.model.error}constructor(){super("parks:model")}attributeChangedCallback(e,r,a){super.attributeChangedCallback(e,r,a),e==="park-id"&&a&&a!==r&&this.dispatchMessage(["park/request",{parkId:a}])}get parkName(){return this.parkId?`${{yosemite:"Yosemite",zion:"Zion",channel:"Channel Islands"}[this.parkId]||this.parkId.charAt(0).toUpperCase()+this.parkId.slice(1)} National Park`:""}render(){if(!this.parkId)return s`<p>No park specified</p>`;if(this.error)return s`<p>Error: ${this.error}</p>`;if(!this.park)return s`<p>Loading park data...</p>`;const r={yosemite:"https://www.nps.gov/yose/index.htm",zion:"https://www.nps.gov/zion/index.htm",channel:"https://www.nps.gov/chis/index.htm"}[this.parkId]||"https://www.nps.gov",a=W(this.parkId,this.park);return s`
      <nav class="breadcrumb">
        <a href="/app">Home</a>
        <span>›</span>
        <span>${this.parkName}</span>
        <span class="spacer"></span>
        <a class="edit" href="/app/park/${this.parkId}/edit">Edit</a>
      </nav>
      <h1>${this.parkName}</h1>
      <park-grid .park=${a}></park-grid>
      <p class="learn-more">
        To learn more about ${this.parkName}, visit their website
        <a href=${r} target="_blank" rel="noreferrer">here</a>.
      </p>
    `}};j.styles=[p.styles,b.styles,d`
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
    `];let l=j;x([h({attribute:"park-id"})],l.prototype,"parkId",2);x([w()],l.prototype,"park",1);x([w()],l.prototype,"error",1);function W(i,e){if(!i)return e;const a={yosemite:{activities:[{title:"Rock Climbing",imgSrc:"/images/yosemite/activities/climbing.jpg",subtitle:"World-class granite walls throughout the Valley. Guided climbs and lessons available for all levels.",href:""},{title:"Mariposa Grove (Giant Sequoias)",imgSrc:"/images/yosemite/activities/mariposa-grove.jpg",subtitle:"Stroll among giant sequoias near the park’s south entrance. Big Trees Loop and Grizzly Giant trails.",href:""},{title:"Raft the Merced River",imgSrc:"/images/yosemite/activities/merced-rafting.jpg",subtitle:"Seasonal rafting through Yosemite Valley with views of El Capitan and Yosemite Falls. Rentals when flows allow.",href:""}],lodging:[{title:"Yosemite Valley Lodge",imgSrc:"/images/yosemite/lodging/yv-lodge.jpg",subtitle:"Base in Yosemite Valley near Yosemite Falls. Classic lodge rooms, dining, and easy shuttle access to the Valley floor sights.",href:"https://www.travelyosemite.com/lodging/yosemite-valley-lodge/"},{title:"The Ahwahnee",imgSrc:"/images/yosemite/lodging/ahwahnee.jpg",subtitle:"Historic grand hotel with iconic dining room and Half Dome views. Premium lodging right in the Valley.",href:"https://www.travelyosemite.com/lodging/the-ahwahnee/"},{title:"Wawona Hotel",imgSrc:"/images/yosemite/lodging/wawona.jpg",subtitle:"Victorian-era charm near the Mariposa Grove. Quiet setting south of the Valley, porches and meadow views.",href:"https://www.travelyosemite.com/lodging/wawona-hotel/"}],viewpoints:[{title:"Tunnel View",imgSrc:"/images/yosemite/viewpoints/tunnel-view.jpg",subtitle:"On Wawona Road just east of the tunnel. Classic vista of El Capitan, Bridalveil Fall, and Half Dome.",href:""},{title:"Glacier Point",imgSrc:"/images/yosemite/viewpoints/glacier-point.jpg",subtitle:"At the end of Glacier Point Road. Panoramic overlook above Yosemite Valley with Half Dome front and center.",href:""},{title:"Taft Point",imgSrc:"/images/yosemite/viewpoints/taft-point.jpg",subtitle:"Short hike from Glacier Point Road. Dramatic cliffs and fissures with sweeping westward Valley views.",href:""}]},zion:{activities:[{title:"Canyoneering",imgSrc:"/images/zion/activities/canyoneering.jpg",subtitle:"Guided slot-canyon adventures in Zion’s backcountry. Permits required for many technical routes.",href:""},{title:"Cycling Zion Canyon",imgSrc:"/images/zion/activities/cycling.jpg",subtitle:"Ride the Scenic Drive when traffic is limited. Rent bikes in Springdale; shuttles carry bikes too.",href:""},{title:"Scenic Shuttle Tour",imgSrc:"/images/zion/activities/scenic-shuttle.jpg",subtitle:"Hop-on, hop-off stops along Zion Canyon Scenic Drive. Great for viewpoints and short walks.",href:""}],lodging:[{title:"Zion Lodge",imgSrc:"/images/zion/lodging/zion-lodge.jpg",subtitle:"Inside Zion Canyon along the scenic drive. Cabins and lodge rooms with trail and shuttle access at your doorstep.",href:"https://www.zionlodge.com/"},{title:"Cable Mountain Lodge",imgSrc:"/images/zion/lodging/cable-mountain.jpg",subtitle:"At the park entrance in Springdale by the shuttle stop. Suites with kitchenettes and pool, easy canyon access.",href:"https://cablemountainlodge.com/"},{title:"Cliffrose Springdale",imgSrc:"/images/zion/lodging/cliffrose.jpg",subtitle:"Riverside resort feel in Springdale, a short walk to the park gate. Lush grounds and red rock views.",href:"https://www.cliffrosespringdale.com/"}],viewpoints:[{title:"Canyon Overlook",imgSrc:"/images/zion/viewpoints/canyon-overlook.jpg",subtitle:"East side of the Zion-Mt. Carmel Tunnel on UT-9. Short trail to a wide view of lower Zion Canyon.",href:""},{title:"Watchman (Canyon Junction Bridge)",imgSrc:"/images/zion/viewpoints/watchman.jpg",subtitle:"Near Canyon Junction Bridge on the Scenic Drive. Iconic sunset shot of the Watchman and Virgin River.",href:""},{title:"Timber Creek Overlook",imgSrc:"/images/zion/viewpoints/timber-creek.jpg",subtitle:"Kolob Canyons section, at the end of Kolob Canyons Rd. Wide western views over red rock ridges.",href:""}]},channel:{activities:[{title:"Sea Kayaking & Caves",imgSrc:"/images/channel/activities/sea-kayaking.jpg",subtitle:"Paddle sea arches and caves (conditions permitting) near Santa Cruz and Anacapa Islands. Guided trips from Scorpion Anchorage.",href:""},{title:"Snorkeling & Diving",imgSrc:"/images/channel/activities/snorkeling.jpg",subtitle:"Kelp forests and abundant marine life in the Channel Islands Marine Sanctuary. Best near Scorpion Anchorage and Landing Cove.",href:""},{title:"Wildlife Watching",imgSrc:"/images/channel/activities/wildlife-watching.jpg",subtitle:"Look for whales, dolphins, sea lions, and island foxes; seabirds nest on cliffs. Best from boats and coastal trails.",href:""}],lodging:[{title:"Scorpion Canyon Campground",imgSrc:"/images/channel/lodging/scorpion-canyon.jpg",subtitle:"On Santa Cruz Island near Scorpion Anchorage. Island camping close to trails and kayak launches.",href:"https://www.nps.gov/chis/planyourvisit/camping.htm"},{title:"Anacapa Island Campground",imgSrc:"/images/channel/lodging/anacapa-campground.jpg",subtitle:"On Anacapa Island above the landing cove. Clifftop primitive sites with ocean panoramas.",href:"https://www.nps.gov/chis/planyourvisit/camping.htm"},{title:"Ventura Harbor Hotels",imgSrc:"/images/channel/lodging/ventura-harbor-hotels.jpg",subtitle:"On the mainland near Island Packers dock. Convenient stays before/after island boat trips.",href:"https://www.islandpackers.com/"}],viewpoints:[{title:"Inspiration Point (Anacapa)",imgSrc:"/images/channel/viewpoints/inspiration-point.jpg",subtitle:"On Anacapa Island near the western tip. Views of the sea arch and the chain of Channel Islands.",href:""},{title:"Potato Harbor Overlook (Santa Cruz)",imgSrc:"/images/channel/viewpoints/potato-harbor.jpg",subtitle:"North coast of Santa Cruz Island, reached from Scorpion area trails. Turquoise cove and cliffs.",href:""},{title:"Cavern Point (Santa Cruz)",imgSrc:"/images/channel/viewpoints/cavern-point.jpg",subtitle:"Clifftop near Scorpion Anchorage on Santa Cruz. Wide coastal views and marine wildlife spotting.",href:""}]}}[i];return a?{...e,hikes:e.hikes??[],activities:a.activities??e.activities??[],lodging:a.lodging??e.lodging??[],viewpoints:a.viewpoints??e.viewpoints??[]}:e}var F=Object.defineProperty,B=Object.getOwnPropertyDescriptor,A=(i,e,r,a)=>{for(var t=a>1?void 0:a?B(e,r):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=(a?n(e,r,t):n(t))||t);return a&&t&&F(e,r,t),t};const f=class f extends O{get park(){return this.model.park}constructor(){super("parks:model")}attributeChangedCallback(e,r,a){super.attributeChangedCallback(e,r,a),e==="park-id"&&a&&a!==r&&this.dispatchMessage(["park/request",{parkId:a}])}handleSubmit(e){this.parkId&&this.dispatchMessage(["park/save",{parkId:this.parkId,park:e.detail},{onSuccess:()=>N.dispatch(this,"history/navigate",{href:`/app/park/${this.parkId}`}),onFailure:r=>console.error("Save failed:",r.message)}])}render(){var e;return this.parkId?s`
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
    `:s`<p>No park specified</p>`}};f.uses=_({"mu-form":L.Element}),f.styles=[p.styles,b.styles,d`
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
    `];let g=f;A([h({attribute:"park-id"})],g.prototype,"parkId",2);A([w()],g.prototype,"park",1);var H=Object.defineProperty,K=(i,e,r,a)=>{for(var t=void 0,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=n(e,r,t)||t);return t&&H(e,r,t),t};const P=class P extends v{renderSection(e,r,a){return a!=null&&a.length?s`
      <section>
        <h2>
          <svg class="icon" aria-hidden="true">
            <use href="/icons/outdoors.svg#${r}"></use>
          </svg>
          ${e}
        </h2>
        <div class="grid">
          ${a.map(t=>s`
              <park-card
                href=${t.href}
                subtitle=${t.subtitle??""}
                img-src=${t.imgSrc??""}
              >
                ${t.title}
              </park-card>
            `)}
        </div>
      </section>
    `:null}render(){const e=this.park;if(!e)return s`<p>Loading park details...</p>`;const r=e.hikes??[],a=e.viewpoints??[],t=e.lodging??[],o=e.activities??[];return s`
      ${this.renderSection("Top Hikes","icon-hike",r)}
      ${this.renderSection("Top Viewpoints","icon-view",a)}
      ${this.renderSection("Top Lodging","icon-bed",t)}
      ${this.renderSection("Top Activities","icon-activity",o)}
    `}};P.styles=[p.styles,d`
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
    `];let u=P;K([h({attribute:!1})],u.prototype,"park");var U=Object.defineProperty,C=(i,e,r,a)=>{for(var t=void 0,o=i.length-1,n;o>=0;o--)(n=i[o])&&(t=n(e,r,t)||t);return t&&U(e,r,t),t};const z=class z extends v{render(){return s`
      <article class="card">
        ${this.imgSrc?s`<img src="${this.imgSrc}" alt="" />`:s`<img alt="" />`}
        <div class="box">
          <h3>
            ${this.href?s`<a href="${this.href}"><slot></slot></a>`:s`<slot></slot>`}
          </h3>
          ${this.subtitle?s`<p class="meta">${this.subtitle}</p>`:null}
        </div>
      </article>
    `}};z.styles=[p.styles,d`
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
    `];let c=z;C([h({attribute:"img-src"})],c.prototype,"imgSrc");C([h()],c.prototype,"href");C([h()],c.prototype,"subtitle");const J={};function V(i,e,r){switch(i[0]){case"park/request":{const{parkId:a}=i[1];return[{...e,park:void 0,error:void 0},Q(a,r).then(t=>["park/load",{park:t}]).catch(t=>["park/error",{error:t.message}])]}case"park/load":{const{park:a}=i[1];return{...e,park:a,error:void 0}}case"park/error":return{...e,error:i[1].error};case"park/save":{const[,a,t]=i,{parkId:o,park:n}=a,T=e.park||{};return[e,X(o,{...T,...n},r,t).then(k=>["park/load",{park:k}]).catch(k=>["park/error",{error:k.message}])]}default:return e}}function Q(i,e){const r=S.headers(e);return fetch(`/api/parks/${i}`,{headers:r}).then(a=>{if(a.status===200)return a.json();throw new Error(`Failed to load park (${a.status})`)})}function X(i,e,r,a){return fetch(`/api/parks/${i}`,{method:"PUT",headers:{"Content-Type":"application/json",...S.headers(r)},body:JSON.stringify(e)}).then(t=>{if(t.status===200)return t.json();throw new Error(`Failed to save park (${t.status})`)}).then(t=>{var o;return(o=a==null?void 0:a.onSuccess)==null||o.call(a),t}).catch(t=>{var o;throw(o=a==null?void 0:a.onFailure)==null||o.call(a,t),t})}const E=[{path:"/app/park/:parkId/edit",view:i=>s`
      <park-edit park-id=${i.parkId}></park-edit>
    `},{path:"/app/park/:parkId",view:i=>s`
      <park-view park-id=${i.parkId}></park-view>
    `},{path:"/app",view:()=>s` <home-view></home-view> `},{path:"/",redirect:"/app"}];_({"mu-auth":S.Provider,"mu-history":N.Provider,"mu-store":class extends Y.Provider{constructor(){super(V,J,"parks:auth")}},"mu-switch":class extends R.Element{constructor(){super(E,"parks:history","parks:auth")}},"parks-header":m,"home-view":y,"park-view":l,"park-edit":g,"park-grid":u,"park-card":c});
