"use strict";var q=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var x=q(function(A,d){
var c=require('@stdlib/number-float64-base-to-float32/dist');function _(e,a,u,s,v){var i,o,r,t;if(i=0,e<=0)return i;for(u<0?o=(1-e)*u:o=0,v<0?r=(1-e)*v:r=0,t=0;t<e;t++)i=c(i+c(a[o]*s[r])),o+=u,r+=v;return i}d.exports=_
});var j=q(function(B,p){
var y=require('@stdlib/number-float64-base-to-float32/dist');function E(e,a,u,s,v,i,o){var r,t,n,f;if(r=0,e<=0)return r;for(t=s,n=o,f=0;f<e;f++)r=y(r+y(a[t]*v[n])),t+=u,n+=i;return r}p.exports=E
});var R=q(function(C,F){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=x(),b=j();O(m,"ndarray",b);F.exports=m
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=R(),l,T=h(g(__dirname,"./native.js"));k(T)?l=w:l=T;module.exports=l;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
