"use strict";(self.webpackChunkfirst_project=self.webpackChunkfirst_project||[]).push([[916],{916:(o,e,n)=>{n.r(e),n.d(e,{default:()=>v});var i=n(43);const t=(0,i.createContext)(null);function l(o){let{clientId:e,nonce:n,onScriptLoadSuccess:l,onScriptLoadError:c,children:r}=o;const d=function(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{nonce:e,onScriptLoadSuccess:n,onScriptLoadError:t}=o,[l,c]=(0,i.useState)(!1),r=(0,i.useRef)(n);r.current=n;const d=(0,i.useRef)(t);return d.current=t,(0,i.useEffect)((()=>{const o=document.createElement("script");return o.src="https://accounts.google.com/gsi/client",o.async=!0,o.defer=!0,o.nonce=e,o.onload=()=>{var o;c(!0),null===(o=r.current)||void 0===o||o.call(r)},o.onerror=()=>{var o;c(!1),null===(o=d.current)||void 0===o||o.call(d)},document.body.appendChild(o),()=>{document.body.removeChild(o)}}),[e]),l}({nonce:n,onScriptLoadSuccess:l,onScriptLoadError:c}),u=(0,i.useMemo)((()=>({clientId:e,scriptLoadedSuccessfully:d})),[e,d]);return i.createElement(t.Provider,{value:u},r)}function c(){const o=(0,i.useContext)(t);if(!o)throw new Error("Google OAuth components must be used within GoogleOAuthProvider");return o}function r(o){var e;return null!==(e=null===o||void 0===o?void 0:o.clientId)&&void 0!==e?e:null===o||void 0===o?void 0:o.client_id}const d={large:40,medium:32,small:20};function u(o){let{onSuccess:e,onError:n,useOneTap:t,promptMomentNotification:l,type:u="standard",theme:s="outline",size:a="large",text:v,shape:w,logo_alignment:p,width:g,locale:f,click_listener:h,containerProps:m,..._}=o;const E=(0,i.useRef)(null),{clientId:S,scriptLoadedSuccessfully:y}=c(),L=(0,i.useRef)(e);L.current=e;const x=(0,i.useRef)(n);x.current=n;const b=(0,i.useRef)(l);return b.current=l,(0,i.useEffect)((()=>{var o,e,n,i,l,c,d,m,j;if(y)return null===(n=null===(e=null===(o=null===window||void 0===window?void 0:window.google)||void 0===o?void 0:o.accounts)||void 0===e?void 0:e.id)||void 0===n||n.initialize({client_id:S,callback:o=>{var e;if(!(null===o||void 0===o?void 0:o.credential))return null===(e=x.current)||void 0===e?void 0:e.call(x);const{credential:n,select_by:i}=o;L.current({credential:n,clientId:r(o),select_by:i})},..._}),null===(c=null===(l=null===(i=null===window||void 0===window?void 0:window.google)||void 0===i?void 0:i.accounts)||void 0===l?void 0:l.id)||void 0===c||c.renderButton(E.current,{type:u,theme:s,size:a,text:v,shape:w,logo_alignment:p,width:g,locale:f,click_listener:h}),t&&(null===(j=null===(m=null===(d=null===window||void 0===window?void 0:window.google)||void 0===d?void 0:d.accounts)||void 0===m?void 0:m.id)||void 0===j||j.prompt(b.current)),()=>{var o,e,n;t&&(null===(n=null===(e=null===(o=null===window||void 0===window?void 0:window.google)||void 0===o?void 0:o.accounts)||void 0===e?void 0:e.id)||void 0===n||n.cancel())}}),[S,y,t,u,s,a,v,w,p,g,f]),i.createElement("div",{...m,ref:E,style:{height:d[a],...null===m||void 0===m?void 0:m.style}})}const s=["https://www.googleapis.com/auth/userinfo.profile","https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/userinfo.picture"];var a=n(579);function v(){return console.log("process.env.REACT_APP_GOOGLE_CLIENT_ID: ",""),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{children:"Auth"}),(0,a.jsx)(l,{clientId:"",children:(0,a.jsx)("div",{children:(0,a.jsx)(u,{buttonText:"Login with Google",cookiePolicy:"single_host_origin",scope:s.join(" "),onSuccess:o=>console.log(o),onError:()=>console.log("Login Failed")})})})]})}}}]);
//# sourceMappingURL=916.75ff1552.chunk.js.map