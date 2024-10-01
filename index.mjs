// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.2-esm/index.mjs";function s(e,t,s,n,d,i,o){var a,m,f,l;if(a=0,e<=0)return a;for(m=n,f=o,l=0;l<e;l++)a=r(a+r(t[m]*d[f])),m+=s,f+=i;return a}function n(e,r,n,d,i){return e<=0?0:s(e,r,n,t(e,n),d,i,t(e,i))}e(n,"ndarray",s);export{n as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
