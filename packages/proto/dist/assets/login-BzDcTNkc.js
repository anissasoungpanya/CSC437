import{i as p,x as h,r as m,h as b,a as f,b as l,n as u,d as g,c as v}from"./headings.css-CBpl_qwk.js";var y=Object.defineProperty,i=(d,e,r,s)=>{for(var t=void 0,a=d.length-1,c;a>=0;a--)(c=d[a])&&(t=c(e,r,t)||t);return t&&y(e,r,t),t};const n=class n extends p{constructor(){super(...arguments),this.formData={},this.redirect="/app"}get canSubmit(){return!!(this.api&&this.formData.username&&this.formData.password)}render(){return h`
      <form
        @change=${e=>this.handleChange(e)}
        @submit=${e=>this.handleSubmit(e)}
      >
        <slot></slot>
        <slot name="button">
          <button ?disabled=${!this.canSubmit} type="submit">Login</button>
        </slot>
        <p class="error">${this.error}</p>
      </form>
    `}handleChange(e){const r=e.target,s=r==null?void 0:r.name,t=r==null?void 0:r.value,a=this.formData;switch(s){case"username":this.formData={...a,username:t};break;case"password":this.formData={...a,password:t};break}}handleSubmit(e){e.preventDefault(),this.canSubmit&&fetch((this==null?void 0:this.api)||"",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.formData)}).then(r=>{if(r.status!==200)throw"Login failed";return r.json()}).then(r=>{const{token:s}=r,t=new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signin",{token:s,redirect:this.redirect}]});console.log("dispatching message",t),this.dispatchEvent(t)}).catch(r=>{console.log(r),this.error=r.toString()})}};n.styles=[m.styles,b.styles,f`
      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      label {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      input {
        padding: 0.5rem;
        border: 1px solid var(--color-border, #ccc);
        border-radius: 4px;
        background: var(--color-card, #fff);
        color: var(--color-text, #000);
      }

      button {
        padding: 0.75rem 1.5rem;
        background: var(--color-accent, #38bdf8);
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: 600;
      }

      button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      button:hover:not(:disabled) {
        opacity: 0.9;
      }

      .error:not(:empty) {
        color: var(--color-error, #ef4444);
        border: 1px solid var(--color-error, #ef4444);
        padding: var(--size-spacing-medium, 1rem);
        border-radius: 4px;
        background: rgba(239, 68, 68, 0.1);
      }
    `];let o=n;i([l()],o.prototype,"formData");i([u()],o.prototype,"api");i([u()],o.prototype,"redirect");i([l()],o.prototype,"error");g({"mu-auth":v.Provider,"login-form":o});
