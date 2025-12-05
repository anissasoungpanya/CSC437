import{i as l,x as h,r as b,h as u,a as f,b as d,n as c,d as g,e as w}from"./headings.css-Z1P8jqc_.js";var v=Object.defineProperty,e=(m,o,t,a)=>{for(var r=void 0,i=m.length-1,p;i>=0;i--)(p=m[i])&&(r=p(o,t,r)||r);return r&&v(o,t,r),r};const n=class n extends l{constructor(){super(...arguments),this.formData={},this.redirect="/app"}get canSubmit(){return!!(this.api&&this.formData.username&&this.formData.password&&this.formData.confirmPassword&&this.formData.password===this.formData.confirmPassword)}render(){return h`
      <form
        @change=${o=>this.handleChange(o)}
        @submit=${o=>this.handleSubmit(o)}
      >
        <slot></slot>
        <slot name="button">
          <button ?disabled=${!this.canSubmit} type="submit" id="signup-button">
            Sign Up
          </button>
        </slot>
        <p class="error">${this.error||""}</p>
      </form>
    `}handleChange(o){const t=o.target,a=t==null?void 0:t.name,r=t==null?void 0:t.value,i=this.formData;switch(a){case"username":this.formData={...i,username:r};break;case"password":this.formData={...i,password:r};break;case"confirmPassword":this.formData={...i,confirmPassword:r};break}this.error&&(this.error=void 0),a==="confirmPassword"&&this.formData.password!==r?this.error="Passwords do not match":a==="confirmPassword"&&this.formData.password===r&&this.error==="Passwords do not match"&&(this.error=void 0)}handleSubmit(o){if(o.preventDefault(),!this.canSubmit){this.formData.password!==this.formData.confirmPassword&&(this.error="Passwords do not match");return}fetch((this==null?void 0:this.api)||"",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.formData.username,password:this.formData.password})}).then(t=>{if(t.status===201)return t.json();if(t.status===409)return t.json().then(a=>{throw new Error(a.error||"Username already exists")});throw new Error("Registration failed")}).then(t=>{const{token:a}=t,r=new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signin",{token:a,redirect:this.redirect}]});console.log("dispatching message",r),this.dispatchEvent(r)}).catch(t=>{console.log(t),this.error=t.message||t.toString()})}};n.styles=[b.styles,u.styles,f`
      :host {
        display: block;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        position: relative;
      }

      div {
        width: 100%;
        margin-top: 1.5rem;
      }

      #signup-button {
        padding: 0.75rem 1.5rem !important;
        background: #38bdf8 !important;
        color: white !important;
        border: none !important;
        border-radius: 4px !important;
        cursor: pointer !important;
        font-weight: 600 !important;
        width: 100% !important;
        display: block !important;
        min-height: 44px !important;
        visibility: visible !important;
        opacity: 1 !important;
        box-sizing: border-box !important;
      }

      #signup-button:disabled {
        background: #94a3b8 !important;
        opacity: 0.6 !important;
        cursor: not-allowed !important;
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
        padding: 0.75rem 1.5rem !important;
        background: var(--color-accent, #38bdf8) !important;
        color: white !important;
        border: 2px solid var(--color-accent, #38bdf8) !important;
        border-radius: 4px !important;
        cursor: pointer !important;
        font-weight: 600 !important;
        font-size: 1rem !important;
        margin-top: 1.5rem !important;
        margin-bottom: 0 !important;
        width: 100% !important;
        display: block !important;
        min-height: 44px !important;
        visibility: visible !important;
        opacity: 1 !important;
        position: static !important;
        z-index: 1 !important;
        box-sizing: border-box !important;
        order: 999 !important;
      }

      button:disabled {
        opacity: 0.6 !important;
        cursor: not-allowed !important;
        background: var(--color-muted, #94a3b8) !important;
        border-color: var(--color-muted, #94a3b8) !important;
        visibility: visible !important;
        display: block !important;
        color: white !important;
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
        margin-bottom: 0.5rem;
      }
    `];let s=n;e([d()],s.prototype,"formData");e([c()],s.prototype,"api");e([c()],s.prototype,"redirect");e([d()],s.prototype,"error");g({"mu-auth":w.Provider,"register-form":s});
