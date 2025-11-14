import{i as l,b as p,x as m,r as f,n as h,d as b,a as g}from"./reset.css-CCJaHSFy.js";import{r as u}from"./state-DLzfpi_9.js";const v=l`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-display, system-ui);
    font-weight: 600;
    line-height: 1.2;
    margin: 0 0 0.5em;
  }
`,y={styles:v};var x=Object.defineProperty,i=(d,e,t,s)=>{for(var r=void 0,a=d.length-1,c;a>=0;a--)(c=d[a])&&(r=c(e,t,r)||r);return r&&x(e,t,r),r};const n=class n extends p{constructor(){super(...arguments),this.formData={},this.redirect="/"}get canSubmit(){return!!(this.api&&this.formData.username&&this.formData.password)}render(){return m`
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
    `}handleChange(e){const t=e.target,s=t==null?void 0:t.name,r=t==null?void 0:t.value,a=this.formData;switch(s){case"username":this.formData={...a,username:r};break;case"password":this.formData={...a,password:r};break}}handleSubmit(e){e.preventDefault(),this.canSubmit&&fetch((this==null?void 0:this.api)||"",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.formData)}).then(t=>{if(t.status!==200)throw"Login failed";return t.json()}).then(t=>{const{token:s}=t,r=new CustomEvent("auth:message",{bubbles:!0,composed:!0,detail:["auth/signin",{token:s,redirect:this.redirect}]});console.log("dispatching message",r),this.dispatchEvent(r)}).catch(t=>{console.log(t),this.error=t.toString()})}};n.styles=[f.styles,y.styles,l`
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
    `];let o=n;i([u()],o.prototype,"formData");i([h()],o.prototype,"api");i([h()],o.prototype,"redirect");i([u()],o.prototype,"error");b({"mu-auth":g.Provider,"login-form":o});
