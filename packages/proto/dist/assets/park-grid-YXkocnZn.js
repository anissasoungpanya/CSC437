import{n as l,i as h,a as g,x as n}from"./park-card-BVAhujMT.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function f(r){return l({...r,state:!0,attribute:!1})}var u=Object.defineProperty,p=(r,t,i,s)=>{for(var e=void 0,o=r.length-1,d;o>=0;o--)(d=r[o])&&(e=d(t,i,e)||e);return e&&u(t,i,e),e};const c=class c extends h{connectedCallback(){super.connectedCallback(),this.src&&this.hydrate(this.src)}async hydrate(t){const i=await fetch(t);i.ok&&(this.data=await i.json())}renderSection(t,i,s){return n`
      <section>
        <h2>
          <svg class="icon" aria-hidden="true">
            <use href="/icons/outdoors.svg#${i}"></use>
          </svg>
          ${t}
        </h2>
        <div class="grid">
          ${s.map(e=>n`
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
    `}render(){if(!this.data)return n`<p>Loading...</p>`;const{hikes:t,viewpoints:i,lodging:s,activities:e}=this.data;return n`
      ${this.renderSection("Top Hikes","icon-hike",t)}
      ${this.renderSection("Top Viewpoints","icon-view",i)}
      ${this.renderSection("Top Lodging","icon-bed",s)}
      ${this.renderSection("Top Activities","icon-activity",e)}
    `}};c.styles=g`
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
  `;let a=c;p([l()],a.prototype,"src");p([f()],a.prototype,"data");export{a as P};
