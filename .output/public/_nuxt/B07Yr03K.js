import{a as f,X as r,Y as p}from"./BzkLH-Ck.js";const y="$s";function c(...t){const a=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(a);const[n,e]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(e!==void 0&&typeof e!="function")throw new Error("[nuxt] [useState] init must be a function: "+e);const u=y+n,s=f(),i=r(s.payload.state,u);if(i.value===void 0&&e){const o=e();if(p(o))return s.payload.state[u]=o,o;i.value=o}return i}function x(){return c("outline",()=>null)}export{x as u};
