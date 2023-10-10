// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.1.0-esm/index.mjs";function t(r,t,n,s,o){var a,i,d,f;if(a=0,r<=0)return a;for(i=n<0?(1-r)*n:0,d=o<0?(1-r)*o:0,f=0;f<r;f++)a=e(a+e(t[i]*s[d])),i+=n,d+=o;return a}function n(r,t,n,s,o,a,i){var d,f,l,m;if(d=0,r<=0)return d;for(f=s,l=i,m=0;m<r;m++)d=e(d+e(t[f]*o[l])),f+=n,l+=a;return d}r(t,"ndarray",n);export{t as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
