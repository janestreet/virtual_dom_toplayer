var Tt=Object.defineProperty,Dt=Object.defineProperties,Ot=Object.getOwnPropertyDescriptors,rt=Object.getOwnPropertySymbols,vt=Object.prototype.hasOwnProperty,bt=Object.prototype.propertyIsEnumerable,xt=(R,B,j)=>B in R?Tt(R,B,{enumerable:!0,configurable:!0,writable:!0,value:j}):R[B]=j,S=(R,B)=>{for(var j in B||(B={}))vt.call(B,j)&&xt(R,j,B[j]);if(rt)for(var j of rt(B))bt.call(B,j)&&xt(R,j,B[j]);return R},Y=(R,B)=>Dt(R,Ot(B)),$=(R,B)=>{var j={};for(var I in R)vt.call(R,I)&&B.indexOf(I)<0&&(j[I]=R[I]);if(R!=null&&rt)for(var I of rt(R))B.indexOf(I)<0&&bt.call(R,I)&&(j[I]=R[I]);return j},J=(R,B,j)=>new Promise((I,G)=>{var W=Q=>{try{N(j.next(Q))}catch(F){G(F)}},ot=Q=>{try{N(j.throw(Q))}catch(F){G(F)}},N=Q=>Q.done?I(Q.value):Promise.resolve(Q.value).then(W,ot);N((j=j.apply(R,B)).next())}),t,e;t=this,e=function(R){const B=["top","right","bottom","left"],j=["start","end"],I=B.reduce((n,i)=>n.concat(i,i+"-"+j[0],i+"-"+j[1]),[]),G=Math.min,W=Math.max,ot={left:"right",right:"left",bottom:"top",top:"bottom"},N={start:"end",end:"start"};function Q(n,i,m){return W(n,G(i,m))}function F(n,i){return typeof n=="function"?n(i):n}function U(n){return n.split("-")[0]}function Z(n){return n.split("-")[1]}function lt(n){return n==="x"?"y":"x"}function at(n){return n==="y"?"height":"width"}function C(n){return["top","bottom"].includes(U(n))?"y":"x"}function st(n){return lt(C(n))}function ut(n,i,m){m===void 0&&(m=!1);const l=Z(n),u=st(n),o=at(u);let s=u==="x"?l===(m?"end":"start")?"right":"left":l==="start"?"bottom":"top";return i.reference[o]>i.floating[o]&&(s=it(s)),[s,it(s)]}function nt(n){return n.replace(/start|end/g,i=>N[i])}function it(n){return n.replace(/left|right|bottom|top/g,i=>ot[i])}function ft(n){return typeof n!="number"?function(i){return S({top:0,right:0,bottom:0,left:0},i)}(n):{top:n,right:n,bottom:n,left:n}}function tt(n){return Y(S({},n),{top:n.y,left:n.x,right:n.x+n.width,bottom:n.y+n.height})}function mt(n,i,m){let{reference:l,floating:u}=n;const o=C(i),s=st(i),w=at(s),T=U(i),d=o==="y",P=l.x+l.width/2-u.width/2,a=l.y+l.height/2-u.height/2,h=l[w]/2-u[w]/2;let r;switch(T){case"top":r={x:P,y:l.y-u.height};break;case"bottom":r={x:P,y:l.y+l.height};break;case"right":r={x:l.x+l.width,y:a};break;case"left":r={x:l.x-u.width,y:a};break;default:r={x:l.x,y:l.y}}switch(Z(i)){case"start":r[s]-=h*(m&&d?-1:1);break;case"end":r[s]+=h*(m&&d?-1:1)}return r}function K(n,i){return J(this,null,function*(){var m;i===void 0&&(i={});const{x:l,y:u,platform:o,rects:s,elements:w,strategy:T}=n,{boundary:d="clippingAncestors",rootBoundary:P="viewport",elementContext:a="floating",altBoundary:h=!1,padding:r=0}=F(i,n),f=ft(r),p=w[h?a==="floating"?"reference":"floating":a],g=tt(yield o.getClippingRect({element:(m=yield o.isElement==null?void 0:o.isElement(p))==null||m?p:p.contextElement||(yield o.getDocumentElement==null?void 0:o.getDocumentElement(w.floating)),boundary:d,rootBoundary:P,strategy:T})),v=a==="floating"?Y(S({},s.floating),{x:l,y:u}):s.reference,b=yield o.getOffsetParent==null?void 0:o.getOffsetParent(w.floating),c=(yield o.isElement==null?void 0:o.isElement(b))&&(yield o.getScale==null?void 0:o.getScale(b))||{x:1,y:1},y=tt(o.convertOffsetParentRelativeRectToViewportRelativeRect?yield o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:w,rect:v,offsetParent:b,strategy:T}):v);return{top:(g.top-y.top+f.top)/c.y,bottom:(y.bottom-g.bottom+f.bottom)/c.y,left:(g.left-y.left+f.left)/c.x,right:(y.right-g.right+f.right)/c.x}})}function dt(n,i){return{top:n.top-i.height,right:n.right-i.width,bottom:n.bottom-i.height,left:n.left-i.width}}function pt(n){return B.some(i=>n[i]>=0)}function gt(n){const i=G(...n.map(l=>l.left)),m=G(...n.map(l=>l.top));return{x:i,y:m,width:W(...n.map(l=>l.right))-i,height:W(...n.map(l=>l.bottom))-m}}R.arrow=n=>({name:"arrow",options:n,fn(i){return J(this,null,function*(){const{x:m,y:l,placement:u,rects:o,platform:s,elements:w,middlewareData:T}=i,{element:d,padding:P=0}=F(n,i)||{};if(d==null)return{};const a=ft(P),h={x:m,y:l},r=st(u),f=at(r),p=yield s.getDimensions(d),g=r==="y",v=g?"top":"left",b=g?"bottom":"right",c=g?"clientHeight":"clientWidth",y=o.reference[f]+o.reference[r]-h[r]-o.floating[f],x=h[r]-o.reference[r],A=yield s.getOffsetParent==null?void 0:s.getOffsetParent(d);let k=A?A[c]:0;k&&(yield s.isElement==null?void 0:s.isElement(A))||(k=w.floating[c]||o.floating[f]);const H=y/2-x/2,D=k/2-p[f]/2-1,O=G(a[v],D),L=G(a[b],D),V=O,E=k-p[f]-L,M=k/2-p[f]/2+H,_=Q(V,M,E),X=!T.arrow&&Z(u)!=null&&M!==_&&o.reference[f]/2-(M<V?O:L)-p[f]/2<0,q=X?M<V?M-V:M-E:0;return{[r]:h[r]+q,data:S({[r]:_,centerOffset:M-_-q},X&&{alignmentOffset:q}),reset:X}})}}),R.autoPlacement=function(n){return n===void 0&&(n={}),{name:"autoPlacement",options:n,fn(i){return J(this,null,function*(){var m,l,u;const{rects:o,middlewareData:s,placement:w,platform:T,elements:d}=i,P=F(n,i),{crossAxis:a=!1,alignment:h,allowedPlacements:r=I,autoAlignment:f=!0}=P,p=$(P,["crossAxis","alignment","allowedPlacements","autoAlignment"]),g=h!==void 0||r===I?function(O,L,V){return(O?[...V.filter(E=>Z(E)===O),...V.filter(E=>Z(E)!==O)]:V.filter(E=>U(E)===E)).filter(E=>!O||Z(E)===O||!!L&&nt(E)!==E)}(h||null,f,r):r,v=yield K(i,p),b=((m=s.autoPlacement)==null?void 0:m.index)||0,c=g[b];if(c==null)return{};const y=ut(c,o,yield T.isRTL==null?void 0:T.isRTL(d.floating));if(w!==c)return{reset:{placement:g[0]}};const x=[v[U(c)],v[y[0]],v[y[1]]],A=[...((l=s.autoPlacement)==null?void 0:l.overflows)||[],{placement:c,overflows:x}],k=g[b+1];if(k)return{data:{index:b+1,overflows:A},reset:{placement:k}};const H=A.map(O=>{const L=Z(O.placement);return[O.placement,L&&a?O.overflows.slice(0,2).reduce((V,E)=>V+E,0):O.overflows[0],O.overflows]}).sort((O,L)=>O[1]-L[1]),D=((u=H.filter(O=>O[2].slice(0,Z(O[0])?2:3).every(L=>L<=0))[0])==null?void 0:u[0])||H[0][0];return D!==w?{data:{index:b+1,overflows:A},reset:{placement:D}}:{}})}}},R.computePosition=(n,i,m)=>J(this,null,function*(){const{placement:l="bottom",strategy:u="absolute",middleware:o=[],platform:s}=m,w=o.filter(Boolean),T=yield s.isRTL==null?void 0:s.isRTL(i);let d=yield s.getElementRects({reference:n,floating:i,strategy:u}),{x:P,y:a}=mt(d,l,T),h=l,r={},f=0;for(let p=0;p<w.length;p++){const{name:g,fn:v}=w[p],{x:b,y:c,data:y,reset:x}=yield v({x:P,y:a,initialPlacement:l,placement:h,strategy:u,middlewareData:r,rects:d,platform:s,elements:{reference:n,floating:i}});P=b!=null?b:P,a=c!=null?c:a,r=Y(S({},r),{[g]:S(S({},r[g]),y)}),x&&f<=50&&(f++,typeof x=="object"&&(x.placement&&(h=x.placement),x.rects&&(d=x.rects===!0?yield s.getElementRects({reference:n,floating:i,strategy:u}):x.rects),{x:P,y:a}=mt(d,h,T)),p=-1)}return{x:P,y:a,placement:h,strategy:u,middlewareData:r}}),R.detectOverflow=K,R.flip=function(n){return n===void 0&&(n={}),{name:"flip",options:n,fn(i){return J(this,null,function*(){var m,l;const{placement:u,middlewareData:o,rects:s,initialPlacement:w,platform:T,elements:d}=i,P=F(n,i),{mainAxis:a=!0,crossAxis:h=!0,fallbackPlacements:r,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0}=P,v=$(P,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"]);if((m=o.arrow)!=null&&m.alignmentOffset)return{};const b=U(u),c=U(w)===w,y=yield T.isRTL==null?void 0:T.isRTL(d.floating),x=r||(c||!g?[it(w)]:function(E){const M=it(E);return[nt(E),M,nt(M)]}(w));r||p==="none"||x.push(...function(E,M,_,X){const q=Z(E);let z=function(et,ct,wt){const ht=["left","right"],yt=["right","left"],Pt=["top","bottom"],Rt=["bottom","top"];switch(et){case"top":case"bottom":return wt?ct?yt:ht:ct?ht:yt;case"left":case"right":return ct?Pt:Rt;default:return[]}}(U(E),_==="start",X);return q&&(z=z.map(et=>et+"-"+q),M&&(z=z.concat(z.map(nt)))),z}(w,g,p,y));const A=[w,...x],k=yield K(i,v),H=[];let D=((l=o.flip)==null?void 0:l.overflows)||[];if(a&&H.push(k[b]),h){const E=ut(u,s,y);H.push(k[E[0]],k[E[1]])}if(D=[...D,{placement:u,overflows:H}],!H.every(E=>E<=0)){var O,L;const E=(((O=o.flip)==null?void 0:O.index)||0)+1,M=A[E];if(M)return{data:{index:E,overflows:D},reset:{placement:M}};let _=(L=D.filter(X=>X.overflows[0]<=0).sort((X,q)=>X.overflows[1]-q.overflows[1])[0])==null?void 0:L.placement;if(!_)switch(f){case"bestFit":{var V;const X=(V=D.map(q=>[q.placement,q.overflows.filter(z=>z>0).reduce((z,et)=>z+et,0)]).sort((q,z)=>q[1]-z[1])[0])==null?void 0:V[0];X&&(_=X);break}case"initialPlacement":_=w}if(u!==_)return{reset:{placement:_}}}return{}})}}},R.hide=function(n){return n===void 0&&(n={}),{name:"hide",options:n,fn(i){return J(this,null,function*(){const{rects:m}=i,l=F(n,i),{strategy:u="referenceHidden"}=l,o=$(l,["strategy"]);switch(u){case"referenceHidden":{const s=dt(yield K(i,Y(S({},o),{elementContext:"reference"})),m.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:pt(s)}}}case"escaped":{const s=dt(yield K(i,Y(S({},o),{altBoundary:!0})),m.floating);return{data:{escapedOffsets:s,escaped:pt(s)}}}default:return{}}})}}},R.inline=function(n){return n===void 0&&(n={}),{name:"inline",options:n,fn(i){return J(this,null,function*(){const{placement:m,elements:l,rects:u,platform:o,strategy:s}=i,{padding:w=2,x:T,y:d}=F(n,i),P=Array.from((yield o.getClientRects==null?void 0:o.getClientRects(l.reference))||[]),a=function(p){const g=p.slice().sort((c,y)=>c.y-y.y),v=[];let b=null;for(let c=0;c<g.length;c++){const y=g[c];!b||y.y-b.y>b.height/2?v.push([y]):v[v.length-1].push(y),b=y}return v.map(c=>tt(gt(c)))}(P),h=tt(gt(P)),r=ft(w),f=yield o.getElementRects({reference:{getBoundingClientRect:function(){if(a.length===2&&a[0].left>a[1].right&&T!=null&&d!=null)return a.find(p=>T>p.left-r.left&&T<p.right+r.right&&d>p.top-r.top&&d<p.bottom+r.bottom)||h;if(a.length>=2){if(C(m)==="y"){const x=a[0],A=a[a.length-1],k=U(m)==="top",H=x.top,D=A.bottom,O=k?x.left:A.left,L=k?x.right:A.right;return{top:H,bottom:D,left:O,right:L,width:L-O,height:D-H,x:O,y:H}}const p=U(m)==="left",g=W(...a.map(x=>x.right)),v=G(...a.map(x=>x.left)),b=a.filter(x=>p?x.left===v:x.right===g),c=b[0].top,y=b[b.length-1].bottom;return{top:c,bottom:y,left:v,right:g,width:g-v,height:y-c,x:v,y:c}}return h}},floating:l.floating,strategy:s});return u.reference.x!==f.reference.x||u.reference.y!==f.reference.y||u.reference.width!==f.reference.width||u.reference.height!==f.reference.height?{reset:{rects:f}}:{}})}}},R.limitShift=function(n){return n===void 0&&(n={}),{options:n,fn(i){const{x:m,y:l,placement:u,rects:o,middlewareData:s}=i,{offset:w=0,mainAxis:T=!0,crossAxis:d=!0}=F(n,i),P={x:m,y:l},a=C(u),h=lt(a);let r=P[h],f=P[a];const p=F(w,i),g=typeof p=="number"?{mainAxis:p,crossAxis:0}:S({mainAxis:0,crossAxis:0},p);if(T){const c=h==="y"?"height":"width",y=o.reference[h]-o.floating[c]+g.mainAxis,x=o.reference[h]+o.reference[c]-g.mainAxis;r<y?r=y:r>x&&(r=x)}if(d){var v,b;const c=h==="y"?"width":"height",y=["top","left"].includes(U(u)),x=o.reference[a]-o.floating[c]+(y&&((v=s.offset)==null?void 0:v[a])||0)+(y?0:g.crossAxis),A=o.reference[a]+o.reference[c]+(y?0:((b=s.offset)==null?void 0:b[a])||0)-(y?g.crossAxis:0);f<x?f=x:f>A&&(f=A)}return{[h]:r,[a]:f}}}},R.offset=function(n){return n===void 0&&(n=0),{name:"offset",options:n,fn(i){return J(this,null,function*(){var m,l;const{x:u,y:o,placement:s,middlewareData:w}=i,T=yield function(d,P){return J(this,null,function*(){const{placement:a,platform:h,elements:r}=d,f=yield h.isRTL==null?void 0:h.isRTL(r.floating),p=U(a),g=Z(a),v=C(a)==="y",b=["left","top"].includes(p)?-1:1,c=f&&v?-1:1,y=F(P,d);let{mainAxis:x,crossAxis:A,alignmentAxis:k}=typeof y=="number"?{mainAxis:y,crossAxis:0,alignmentAxis:null}:S({mainAxis:0,crossAxis:0,alignmentAxis:null},y);return g&&typeof k=="number"&&(A=g==="end"?-1*k:k),v?{x:A*c,y:x*b}:{x:x*b,y:A*c}})}(i,n);return s===((m=w.offset)==null?void 0:m.placement)&&(l=w.arrow)!=null&&l.alignmentOffset?{}:{x:u+T.x,y:o+T.y,data:Y(S({},T),{placement:s})}})}}},R.rectToClientRect=tt,R.shift=function(n){return n===void 0&&(n={}),{name:"shift",options:n,fn(i){return J(this,null,function*(){const{x:m,y:l,placement:u}=i,o=F(n,i),{mainAxis:s=!0,crossAxis:w=!1,limiter:T={fn:v=>{let{x:b,y:c}=v;return{x:b,y:c}}}}=o,d=$(o,["mainAxis","crossAxis","limiter"]),P={x:m,y:l},a=yield K(i,d),h=C(U(u)),r=lt(h);let f=P[r],p=P[h];if(s){const v=r==="y"?"bottom":"right";f=Q(f+a[r==="y"?"top":"left"],f,f-a[v])}if(w){const v=h==="y"?"bottom":"right";p=Q(p+a[h==="y"?"top":"left"],p,p-a[v])}const g=T.fn(Y(S({},i),{[r]:f,[h]:p}));return Y(S({},g),{data:{x:g.x-m,y:g.y-l}})})}}},R.size=function(n){return n===void 0&&(n={}),{name:"size",options:n,fn(i){return J(this,null,function*(){const{placement:m,rects:l,platform:u,elements:o}=i,s=F(n,i),{apply:w=()=>{}}=s,T=$(s,["apply"]),d=yield K(i,T),P=U(m),a=Z(m),h=C(m)==="y",{width:r,height:f}=l.floating;let p,g;P==="top"||P==="bottom"?(p=P,g=a===((yield u.isRTL==null?void 0:u.isRTL(o.floating))?"start":"end")?"left":"right"):(g=P,p=a==="end"?"top":"bottom");const v=f-d[p],b=r-d[g],c=!i.middlewareData.shift;let y=v,x=b;if(h){const k=r-d.left-d.right;x=a||c?G(b,k):k}else{const k=f-d.top-d.bottom;y=a||c?G(v,k):k}if(c&&!a){const k=W(d.left,0),H=W(d.right,0),D=W(d.top,0),O=W(d.bottom,0);h?x=r-2*(k!==0||H!==0?k+H:W(d.left,d.right)):y=f-2*(D!==0||O!==0?D+O:W(d.top,d.bottom))}yield w(Y(S({},i),{availableWidth:x,availableHeight:y}));const A=yield u.getDimensions(o.floating);return r!==A.width||f!==A.height?{reset:{rects:!0}}:{}})}}}},typeof exports=="object"&&typeof module!="undefined"?e(exports):typeof define=="function"&&define.amd?define(["exports"],e):e((t=typeof globalThis!="undefined"?globalThis:t||self).FloatingUICore={});