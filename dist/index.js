"use strict";var d=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var f=d(function(B,x){
var c=require('@stdlib/number-float64-base-to-float32/dist');function F(r,e,i,o,t,u,s){var a,v,n,q;if(a=0,r<=0)return a;for(v=o,n=s,q=0;q<r;q++)a=c(a+c(e[v]*t[n])),v+=i,n+=u;return a}x.exports=F
});var j=d(function(C,l){
var p=require('@stdlib/strided-base-stride2offset/dist'),O=f();function T(r,e,i,o,t){var u,s;return r<=0?0:(u=p(r,i),s=p(r,t),O(r,e,i,u,o,t,s))}l.exports=T
});var _=d(function(D,R){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=j(),g=f();b(m,"ndarray",g);R.exports=m
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=_(),y,E=k(h(__dirname,"./native.js"));w(E)?y=z:y=E;module.exports=y;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
