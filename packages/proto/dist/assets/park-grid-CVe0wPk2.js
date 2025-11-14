import{b as p,O as u,i as l,x as s,n as g}from"./reset.css-CCJaHSFy.js";import{r as f}from"./state-DLzfpi_9.js";var v=Object.defineProperty,d=(c,t,i,r)=>{for(var e=void 0,n=c.length-1,h;n>=0;n--)(h=c[n])&&(e=h(t,i,e)||e);return e&&v(t,i,e),e};const o=class o extends p{constructor(){super(...arguments),this._authObserver=new u(this,"parks:auth")}connectedCallback(){super.connectedCallback(),this._authObserver.observe(t=>{var i;this._user=t.user,this.src&&((i=this._user)!=null&&i.authenticated)&&this.hydrate(this.src)}),this.src&&this.hydrate(this.src)}get authorization(){var t;return((t=this._user)==null?void 0:t.authenticated)&&{Authorization:`Bearer ${this._user.token}`}}async hydrate(t){const i={"Content-Type":"application/json",...this.authorization},r=await fetch(t,{headers:i});if(!r.ok){r.status===401&&console.error("Unauthorized - please log in");return}this.data=await r.json()}renderSection(t,i,r){return s`
      <section>
        <h2>
          <svg class="icon" aria-hidden="true">
            <use href="/icons/outdoors.svg#${i}"></use>
          </svg>
          ${t}
        </h2>
        <div class="grid">
          ${r.map(e=>s`
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
    `}render(){if(!this.data)return s`<p>Loading...</p>`;const{hikes:t,viewpoints:i,lodging:r,activities:e}=this.data;return s`
      ${this.renderSection("Top Hikes","icon-hike",t)}
      ${this.renderSection("Top Viewpoints","icon-view",i)}
      ${this.renderSection("Top Lodging","icon-bed",r)}
      ${this.renderSection("Top Activities","icon-activity",e)}
    `}};o.styles=l`
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
  `;let a=o;d([g()],a.prototype,"src");d([f()],a.prototype,"data");export{a as P};
