"use strict";var d=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var f=d(function(D,x){
var c=require('@stdlib/number-float64-base-to-float32/dist');function O(r,e,a,v,t,u,s){var i,n,o,q;if(i=0,r<=0)return i;for(n=v,o=s,q=0;q<r;q++)i=c(i+c(e[n]*t[o])),n+=a,o+=u;return i}x.exports=O
});var m=d(function(F,j){
var p=require('@stdlib/strided-base-stride2offset/dist'),b=f();function g(r,e,a,v,t){var u,s;return r<=0?0:(u=p(r,a),s=p(r,t),b(r,e,a,u,v,t,s))}j.exports=g
});var _=d(function(G,R){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=m(),k=f();h(l,"ndarray",k);R.exports=l
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=_(),y,E=z(w(__dirname,"./native.js"));A(E)?y=B:y=E;module.exports=y;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
