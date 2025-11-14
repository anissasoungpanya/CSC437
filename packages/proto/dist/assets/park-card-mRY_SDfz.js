import{b as c,r as p,i as f,x as e,n as o}from"./reset.css-CCJaHSFy.js";var m=Object.defineProperty,i=(l,d,h,b)=>{for(var t=void 0,s=l.length-1,n;s>=0;s--)(n=l[s])&&(t=n(d,h,t)||t);return t&&m(d,h,t),t};const a=class a extends c{render(){return e`
      <article class="card">
        ${this.imgSrc?e`<img src="${this.imgSrc}" alt="" />`:e`<img alt="" />`}
        <div class="box">
          <h3>
            ${this.href?e`<a href="${this.href}"><slot></slot></a>`:e`<slot></slot>`}
          </h3>
          ${this.subtitle?e`<p class="meta">${this.subtitle}</p>`:null}
        </div>
      </article>
    `}};a.styles=[p.styles,f`
      :host { display: block; }
      article.card {
        border-radius: 1rem;
        overflow: hidden;
        background: var(--surface, #fff);
        box-shadow: var(--shadow-md, 0 4px 16px rgba(0,0,0,.1));
      }
      .box { padding: 12px; }
      h3 { font-size: 1rem; line-height: 1.3; margin-bottom: 4px; }
      h3 a {
        color: var(--text, #111);
        text-decoration: none;
      }
      h3 a:hover { text-decoration: underline; }
      p.meta {
        color: var(--muted, #666);
        font-size: .9rem;
      }
      /* Let page design tokens flow in; no hard-coded colors needed. */
    `];let r=a;i([o({attribute:"img-src"})],r.prototype,"imgSrc");i([o()],r.prototype,"href");i([o()],r.prototype,"subtitle");export{r as P};
