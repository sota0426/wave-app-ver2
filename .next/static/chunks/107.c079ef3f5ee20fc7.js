(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[107],{8049:function(e,t,r){"use strict";var s=r(4397);function a(){}function l(){}l.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,l,i){if(i!==s){var n=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:a};return r.PropTypes=r,r}},718:function(e,t,r){e.exports=r(8049)()},4397:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},144:function(e,t,r){var s,a,l;l=function(e,t,r,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}Object.defineProperty(e,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(e,{BlockMath:()=>d,InlineMath:()=>x}),t=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=l(void 0);if(r&&r.has(e))return r.get(e);var s={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var n=a?Object.getOwnPropertyDescriptor(e,i):null;n&&(n.get||n.set)?Object.defineProperty(s,i,n):s[i]=e[i]}return s.default=e,r&&r.set(e,s),s}(t),r=a(r),s=a(s);let i=(e,{displayMode:a})=>{let l=({children:r,errorColor:l,math:i,renderError:n})=>{let c=null!=i?i:r,{html:o,error:d}=(0,t.useMemo)(()=>{try{return{html:s.default.renderToString(c,{displayMode:a,errorColor:l,throwOnError:!!n}),error:void 0}}catch(e){if(e instanceof s.default.ParseError||e instanceof TypeError)return{error:e};throw e}},[c,l,n]);return d?n?n(d):t.default.createElement(e,{html:`${d.message}`}):t.default.createElement(e,{html:o})};return l.propTypes={children:r.default.string,errorColor:r.default.string,math:r.default.string,renderError:r.default.func},l},n={html:r.default.string.isRequired},c=({html:e})=>t.default.createElement("div",{"data-testid":"react-katex",dangerouslySetInnerHTML:{__html:e}});c.propTypes=n;let o=({html:e})=>t.default.createElement("span",{"data-testid":"react-katex",dangerouslySetInnerHTML:{__html:e}});o.propTypes=n;let d=i(c,{displayMode:!0}),x=i(o,{displayMode:!1})},"object"==typeof e.exports?l(t,r(2265),r(718),r(9192)):(s=[t,r(2265),r(718),r(9192)],void 0===(a=l.apply(t,s))||(e.exports=a))},107:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var s=r(7437),a=r(2265),l=r(144);function i(){let[e,t]=(0,a.useState)(4),[r,i]=(0,a.useState)(60),[n,c]=(0,a.useState)(24),[o,d]=(0,a.useState)(0),[x,h]=(0,a.useState)(!0),[m,p]=(0,a.useState)(null),[u,y]=(0,a.useState)("compare"),[f,g]=(0,a.useState)(0),[j,b]=(0,a.useState)("0"),[$,k]=(0,a.useState)(90),v=(0,a.useRef)(null),[w,N]=(0,a.useState)([]),M=(0,a.useRef)(o);(0,a.useEffect)(()=>{let e=()=>{if(v.current){let e=v.current.offsetWidth;g(e),i(.4*e)}};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,a.useEffect)(()=>{let t;return x&&(t=setInterval(()=>{d(t=>(t+.02)%(3*e))},50)),()=>clearInterval(t)},[x,e]);let P=(e,t,r)=>({x:e*Math.cos(r*Math.PI/180),y:t}),I=(e,t)=>({x:t*Math.cos(e),y:t*Math.sin(e)}),A=()=>null===m?0:m/n*2*Math.PI%(2*Math.PI),F=e=>{if("compare"===u)return 0===e?"#FF4136":e===m?"#0074D9":"#AAAAAA";if("rainbow"===u){let t=e/n*360;return`hsl(${t}, 100%, 45%)`}if("simpleAcceleration"===u||"simplePosition"===u||"simpleVelocity"===u)return 0===e?"#FF4136":"#AAAAAA"},C=(e,t)=>"compare"===u?0===e&&!0===t||e===m&&!0===t?9:1.5:"rainbow"===u?Math.max(9-e/n*6,3):"simpleAcceleration"===u||"simplePosition"===u||"simpleVelocity"===u?0===e&&!0===t?9:0:void 0,W=e=>{"compare"===u&&0!==e&&p(t=>t===e?null:e)};(0,a.useEffect)(()=>{b((o/e*360%360).toFixed(0))},[o,e]);let E=function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],s=`${(o/e*2%e).toFixed(1)}π`;return t&&((m??0)/n*2).toFixed(1),`y = A \\sin(2\\pi\\\frac{t}{T} ${t?`-${t?"2\\pi\\\frac{x}{\\lambda}":""}`:""}) 
    \\quad ⇔\\quad y=${r.toFixed(0)} \\sin(${s} ${t?`-Δθ`:""}) `},T=(e,t,r,s,a,l)=>Array.from({length:e},(i,n)=>{let c=n/e*r,o=t>c+l?t-c:0,d=o>0?-(o/r*2)*Math.PI:0,x=P(s*Math.cos(d),s*Math.sin(d),a);return{x:x.x,y:x.y,angle:d}}),_=T(n,o,e,r,$,0),S=T(n,o,e,r,$,e),{velocity:O,acceleration:V}=(()=>{let t=2*Math.PI/e,s=-(o/e*2)*Math.PI,a=t*r*Math.sin(s),l=t*r*Math.cos(s),i=-t*t*r*Math.cos(s),n=-t*t*r*Math.sin(s);return{velocity:P(a,l,$),acceleration:P(i,n,$)}})(),D=2*Math.PI/e,q="simplePosition"===u?_[0].y:"simpleVelocity"===u?O.y:"simpleAcceleration"===u?V.y:0;(0,a.useEffect)(()=>{if(o<M.current&&N([]),M.current=o,Math.floor((o+1e-4)/(e/32))>w.length){let e;"simplePosition"===u?e=_[0].y:"simpleVelocity"===u?e=O.y:"simpleAcceleration"===u&&(e=V.y),N(t=>[...t,{time:o,value:e}])}},[o,e,w.length,u,_,O,V]);let R="simplePosition"===u?r:"simpleVelocity"===u?-D*r:"simpleAcceleration"===u?D*D*r:1,L=w.map(t=>({x:5+t.time/(3*e)*90,y:"simplePosition"===u?50+t.value/Math.abs(R)*r/f*100:50+t.value/Math.abs(R)*R*.2/f*100}));return(0,s.jsxs)("div",{className:"p-4 max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800",children:[(0,s.jsx)("h1",{className:"text-2xl font-bold mb-4 text-gray-900",children:"単振動と波動のシミュレーション"}),(0,s.jsxs)("div",{className:"flex items-center space-x-2 mt-1 bg-white p-4 rounded-lg shadow",children:[(0,s.jsxs)("label",{className:"flex items-center ml-4",children:[(0,s.jsx)("input",{type:"radio",name:"mode",value:"simpleVibration",checked:"simplePosition"===u,onChange:()=>{y("simplePosition"),p(null),d(0),N([])},className:"mr-2 accent-indigo-600"}),(0,s.jsx)("span",{className:"text-gray-700",children:"単振動モード　"})]}),(0,s.jsxs)("label",{className:"flex items-center",children:[(0,s.jsx)("input",{type:"radio",name:"mode",value:"compare",checked:"compare"===u,onChange:()=>{y("compare"),p(null),d(0),N([])},className:"mr-2 accent-indigo-600"}),(0,s.jsx)("span",{className:"text-gray-700",children:"位相比較モード　"})]}),(0,s.jsxs)("label",{className:"flex items-center ml-4",children:[(0,s.jsx)("input",{type:"radio",name:"mode",value:"rainbow",checked:"rainbow"===u,onChange:()=>{y("rainbow"),p(null),d(0),N([])},className:"mr-2 accent-indigo-600"}),(0,s.jsx)("span",{className:"text-gray-700",children:"虹色モード　"})]})]}),(0,s.jsx)("br",{}),("simpleAcceleration"===u||"simplePosition"===u||"simpleVelocity"===u)&&(0,s.jsxs)("div",{className:"flex items-center space-x-4 mb-4 bg-white p-4 rounded-lg shadow",children:[(0,s.jsxs)("label",{className:"flex items-center",children:[(0,s.jsx)("input",{type:"radio",checked:"simplePosition"===u,onChange:()=>{y("simplePosition"),d(0),N([])},className:"mr-2 accent-indigo-600"}),(0,s.jsx)("span",{className:"text-gray-700",children:"変位を表示"})]}),(0,s.jsxs)("label",{className:"flex items-center",children:[(0,s.jsx)("input",{type:"radio",checked:"simpleVelocity"===u,onChange:()=>{y("simpleVelocity"),d(0),N([])},className:"mr-2 accent-indigo-600"}),(0,s.jsx)("span",{className:"text-gray-700",children:"速度ベクトルを表示"})]}),(0,s.jsxs)("label",{className:"flex items-center",children:[(0,s.jsx)("input",{type:"radio",checked:"simpleAcceleration"===u,onChange:()=>{y("simpleAcceleration"),d(0),N([])},className:"mr-2 accent-indigo-600"}),(0,s.jsx)("span",{className:"text-gray-700",children:"加速度ベクトルを表示"})]})]}),"compare"===u&&(0,s.jsxs)("div",{className:"flex items-center space-x-4 mb-4 bg-white p-4 rounded-lg shadow-md",children:[(0,s.jsx)("div",{className:" font-bold mb-1 text-gray-700",children:"位相比較モード"}),(0,s.jsx)("div",{className:"grid sm:grid-cols-5 md:grid-cols-8 gap-4",children:Array.from({length:n}).map((e,t)=>0!==t&&t%4==0&&(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("input",{type:"radio",id:`point-${t}`,checked:m===t,onChange:()=>W(t),className:"mr-2 accent-indigo-600"}),(0,s.jsxs)("label",{htmlFor:`point-${t}`,className:`${t===m?"text-blue-600":"text-gray-600"} cursor-pointer`,children:[(t/n*360).toFixed(0),"\xb0"]})]},t))})]}),(0,s.jsxs)("div",{className:"flex flex-col md:flex-row  md:space-x-6",children:[(0,s.jsx)("div",{ref:v,className:"w-full md:w-1/2 aspect-square relative border border-gray-300 rounded-lg shadow-md bg-white",children:(0,s.jsxs)("svg",{className:"w-full h-full",children:[(0,s.jsx)("ellipse",{cx:"50%",cy:"50%",rx:`${r*Math.cos($*Math.PI/180)/f*100}%`,ry:`${r/f*100}%`,stroke:"rgba(0,0,0,0.1)",strokeWidth:"1",fill:"none"}),!("simpleAcceleration"===u||"simpleVelocity"===u)&&(0,s.jsx)("line",{x1:"0",y1:`calc(50% + ${_[0].y/f*100}%)`,x2:"100%",y2:`calc(50% + ${_[0].y/f*100}%)`,stroke:"#FF4136",strokeWidth:"1",strokeDasharray:"2 4"}),"compare"===u&&null!==m&&(0,s.jsx)("line",{x1:"0",y1:`calc(50% + ${_[m].y/f*100}%)`,x2:"100%",y2:`calc(50% + ${_[m].y/f*100}%)`,stroke:"#0074D9",strokeWidth:"1",strokeDasharray:"2 4"}),_.map((e,t)=>(0,s.jsxs)("g",{children:[(0===t||t===m)&&(0,s.jsx)("line",{x1:"50%",y1:"50%",x2:`${50+e.x/f*100}%`,y2:`${50+e.y/f*100}%`,stroke:F(t),strokeWidth:0===t?"1":"0.5"}),(0,s.jsx)("circle",{cx:`${50+e.x/f*100}%`,cy:`${50+e.y/f*100}%`,r:C(t,!0),fill:F(t),onClick:()=>W(t),style:{cursor:"pointer"}})]},t)),0===$&&(0,s.jsx)("path",{d:`
                  M ${f/2} ${f/2} 
                  L ${f/2+r/10} ${f/2} 
                  A ${r/10} ${r/10} 0 
                  ${o/e*2*Math.PI%(2*Math.PI)>Math.PI?1:0}  
                  0 
                  ${f/2+I(2*Math.PI-o/e*2*Math.PI%(2*Math.PI),r/10).x} 
                  ${f/2+I(2*Math.PI-o/e*2*Math.PI%(2*Math.PI),r/10).y}
                `,fill:"rgba(255, 65, 54, 0.2)",stroke:"#FF4136",strokeWidth:"2"}),0===$&&(0,s.jsxs)("text",{x:f/1.75,y:f/1.8,fontSize:"16",fill:"#FF4136",textAnchor:"middle",dominantBaseline:"middle",children:["θ= ",j,"\xb0"]}),0===$&&"compare"===u&&null!==m&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("path",{d:`
                    M ${f/2} ${f/2} 
                    L ${f/2+I(-(o/e*2)*Math.PI,r).x} 
                      ${f/2+I(-(o/e*2)*Math.PI,r).y} 
                    A ${r} ${r} 0 
                    ${A()>Math.PI?1:0} 
                    1 
                    ${f/2+I((-(o/e)+m/n)*2*Math.PI,r).x} 
                    ${f/2+I((-(o/e)+m/n)*2*Math.PI,r).y}
                    Z 
                  `,fill:"rgba(0, 116, 217, 0.1)",stroke:"#0074D9",strokeWidth:"2"}),(0,s.jsxs)("text",{x:f/2+I(-(2*(o/e-m/n/2))*Math.PI,2*r/3).x,y:f/2+I(-(2*(o/e-m/n/2))*Math.PI,2*r/3).y,fontSize:"16",fill:"#0074D9",textAnchor:"middle",dominantBaseline:"middle",children:["Δθ = ",(180*A()/Math.PI).toFixed(0),"\xb0"]})]}),("simpleAcceleration"===u||"simplePosition"===u||"simpleVelocity"===u)&&(0,s.jsxs)(s.Fragment,{children:["simpleVelocity"===u&&(0,s.jsx)("line",{x1:`${50+_[0].x/f*100}%`,y1:`${50+_[0].y/f*100}%`,x2:`${50+(_[0].x+.2*O.x)/f*100}%`,y2:`${50+(_[0].y-.2*O.y)/f*100}%`,stroke:"green",strokeWidth:"1.5",markerEnd:"url(#arrowhead)"}),"simpleAcceleration"===u&&(0,s.jsx)("line",{x1:`${50+_[0].x/f*100}%`,y1:`${50+_[0].y/f*100}%`,x2:`${50+(_[0].x+.2*V.x)/f*100}%`,y2:`${50+(_[0].y+.2*V.y)/f*100}%`,stroke:"blue",strokeWidth:"1.5",markerEnd:"url(#arrowhead)"}),(0,s.jsx)("defs",{children:(0,s.jsx)("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"0",refY:"3.5",orient:"auto",children:(0,s.jsx)("polygon",{points:"0 0, 10 3.5, 0 7",fill:"currentColor"})})})]})]})}),("simplePosition"===u||"simpleVelocity"===u||"simpleAcceleration"===u)&&(0,s.jsxs)("div",{className:"w-full md:w-1/2 aspect-square relative border border-gray-300 rounded-lg shadow-md bg-white",children:[(0,s.jsxs)("svg",{className:"w-full h-full",children:[(0,s.jsx)("line",{x1:"5%",y1:"50%",x2:"95%",y2:"50%",stroke:"black",strokeWidth:"1"}),(0,s.jsx)("line",{x1:"5%",y1:"5%",x2:"5%",y2:"95%",stroke:"black",strokeWidth:"1"}),!("simpleAcceleration"===u||"simpleVelocity"===u)&&(0,s.jsx)("line",{x1:"0",y1:`calc(50% + ${_[0].y/f*100}%)`,x2:"100%",y2:`calc(50% + ${_[0].y/f*100}%)`,stroke:"#FF4136",strokeWidth:"1",strokeDasharray:"2 4"}),Array.from({length:5}).map((e,t)=>(0,s.jsx)("line",{x1:`${5+30*t}%`,y1:"48%",x2:`${5+30*t}%`,y2:"52%",stroke:"black",strokeWidth:"1"},t)),Array.from({length:5}).map((e,t)=>(0,s.jsx)("line",{x1:"4.5%",y1:`${5+22.5*t}%`,x2:"5.5%",y2:`${5+22.5*t}%`,stroke:"black",strokeWidth:"1"},t)),"simplePosition"===u&&(0,s.jsx)("circle",{cx:`${5+o/(3*e)*90}%`,cy:`${50+q/R*r/f*100}%`,r:C(0,!0),fill:F(0),onClick:()=>W(0),style:{cursor:"pointer"}}),"simplePosition"===u&&L.map((e,t)=>(0,s.jsx)("circle",{cx:`${e.x}%`,cy:`${e.y}%`,r:2,fill:"red"},t)),"simpleVelocity"===u&&(0,s.jsx)("line",{x1:`${5+o/(3*e)*90}%`,y1:"50%",x2:`${5+o/(3*e)*90}%`,y2:`${50-.2*O.y/f*100}%`,stroke:"green",strokeWidth:"1.5",markerEnd:"url(#arrowhead)"}),"simpleVelocity"===u&&L.map((e,t)=>(0,s.jsx)("circle",{cx:`${e.x}%`,cy:`${e.y}%`,r:2,fill:"green"},t)),"simpleAcceleration"===u&&(0,s.jsx)("line",{x1:`${5+o/(3*e)*90}%`,y1:"50%",x2:`${5+o/(3*e)*90}%`,y2:`${50+.2*V.y/f*100}%`,stroke:"blue",strokeWidth:"1.5",markerEnd:"url(#arrowhead)"}),"simpleAcceleration"===u&&L.map((e,t)=>(0,s.jsx)("circle",{cx:`${e.x}%`,cy:`${e.y}%`,r:2,fill:"blue"},t)),(0,s.jsx)("defs",{children:(0,s.jsx)("marker",{id:"arrowhead",markerWidth:"10",markerHeight:"7",refX:"0",refY:"3.5",orient:"auto",children:(0,s.jsx)("polygon",{points:"0 0, 10 3.5, 0 7",fill:"currentColor"})})})]}),(0,s.jsx)("div",{className:"absolute bottom-0 left-0 w-full h-6 flex justify-between px-2 text-gray-600",children:Array.from({length:4}).map((t,r)=>(0,s.jsxs)("div",{className:"text-xs",children:[(3*e*r/3).toFixed(1),"s"]},r))})]}),("compare"===u||"rainbow"===u)&&(0,s.jsxs)("div",{className:"w-full md:w-1/2 aspect-square relative border border-gray-300 rounded-lg shadow-md bg-white",children:[(0,s.jsxs)("svg",{className:"w-full h-full",children:[(0,s.jsx)("line",{x1:"0",y1:`calc(50% + ${_[0].y/f*100}%)`,x2:"100%",y2:`calc(50% + ${_[0].y/f*100}%)`,stroke:"#FF4136",strokeWidth:"1",strokeDasharray:"2 4"}),"compare"===u&&null!==m&&(0,s.jsx)("line",{x1:"0",y1:`calc(50% + ${_[m].y/f*100}%)`,x2:"100%",y2:`calc(50% + ${_[m].y/f*100}%)`,stroke:"#0074D9",strokeWidth:"1",strokeDasharray:"2 4"}),_.map((e,t)=>(0,s.jsx)("circle",{cx:`${3+t/n*50}%`,cy:`${50+e.y/f*100}%`,r:C(t,!0),fill:F(t)},`1-${t}`)),S.map((e,t)=>(0,s.jsx)("circle",{cx:`${53+t/n*50}%`,cy:`${50+e.y/f*100}%`,r:C(t,!1),fill:F(t)},`2-${t}`))]}),(0,s.jsx)("div",{className:"absolute bottom-0 left-0 w-full h-6 flex justify-between px-2 text-gray-600",children:Array.from({length:5}).map((e,t)=>(0,s.jsx)("div",{className:"text-xs",children:n/4*t},t))})]})]}),(0,s.jsxs)("div",{className:"flex flex-wrap m-6 p-4 bg-white shadow rounded items-center space-x-4 space-y-2 mb-6",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsxs)("label",{className:"text-gray-700",children:["周期 : T= ",e.toFixed(1),"  "]}),(0,s.jsx)("button",{onClick:()=>t(e=>Math.min(e+.5,10)),className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-150",children:"+"}),(0,s.jsx)("button",{onClick:()=>t(e=>Math.max(e-.5,1)),className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-150",children:"-"})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsxs)("label",{className:"text-gray-700",children:["半径 : A= ",r.toFixed(0)]}),(0,s.jsx)("button",{onClick:()=>i(e=>Math.min(e+5,.45*f)),className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition duration-150",children:"+"}),(0,s.jsx)("button",{onClick:()=>i(e=>Math.max(e-5,20)),className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition duration-150",children:"-"})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsxs)("label",{className:"text-gray-700",children:["点の数: ",n]}),(0,s.jsx)("button",{onClick:()=>c(e=>Math.min(e+8,80)),className:"px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 transition duration-150",children:"+"}),(0,s.jsx)("button",{onClick:()=>c(e=>Math.max(e-8,8)),className:"px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 transition duration-150",children:"-"})]})]}),(0,s.jsx)("div",{className:"flex flex-wrap m-6 p-4 bg-white shadow rounded items-center space-x-4 space-y-2 mb-6",children:(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)("br",{}),(0,s.jsxs)("label",{className:"text-gray-700",children:["回転角度: ",$,"\xb0"]}),(0,s.jsx)("input",{type:"range",min:"0",max:"90",value:$,onChange:e=>k(Number(e.target.value)),className:"w-64 accent-indigo-600"})]})}),(0,s.jsxs)("div",{className:"space-y-4 bg-white p-4 rounded-lg shadow",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,s.jsx)("button",{onClick:()=>{d(0),N([])},className:"px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-150",children:"Reset"}),(0,s.jsx)("button",{onClick:()=>h(!x),className:"px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-150",children:x?"Stop":"Start"}),(0,s.jsx)("input",{type:"range",min:0,max:3*e,step:e/80,value:o,onChange:e=>{d(Number(e.target.value)),h(!1)},className:"w-64 accent-indigo-600"}),(0,s.jsxs)("span",{className:"text-gray-700",children:["Time: ",o.toFixed(1),"s ",(0,s.jsx)(l.InlineMath,{math:(()=>{let t=Math.floor(o/e),r=Math.floor(o/e*8%8);return`\\left(=${t} T+ \\frac{${r}}{8} T\\right)`})()})]})]}),(0,s.jsxs)("div",{className:"text-gray-800",children:["赤色の位相：  ",(0,s.jsx)(l.InlineMath,{math:`\\theta = 2\\pi \\times \\frac{t}{T} \\quad ⇔\\quad \\theta =2\\pi \\times \\frac{${(o%e).toFixed(1)}}{${e.toFixed(1)}} = ${(()=>{let t=o%e/e*2;return`${t.toFixed(1)} \\pi`})()}[rad](${j}\xb0)`})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"text-red-600",children:["赤色の変位： ",(0,s.jsx)(l.InlineMath,{math:E()})]}),"compare"===u&&null!==m&&(0,s.jsxs)("div",{className:"text-blue-600 mt-2",children:["青色の変位： ",(0,s.jsx)(l.InlineMath,{math:E(!0)}),"　,　",(0,s.jsx)(l.InlineMath,{math:`\\Delta \\theta = ${(A()/Math.PI).toFixed(1)}\\pi ( ${(180*A()/Math.PI).toFixed(0)}\xb0 `}),"）"]})]})]}),(0,s.jsx)("br",{}),(0,s.jsx)("p",{children:"説明："}),(0,s.jsxs)("p",{children:["【単振動モード】",(0,s.jsx)("br",{}),"単振動の変位、速度、加速度を表示します。",(0,s.jsx)("br",{}),"回転角度を変化させることができ、単振動と円運動の関係を確認できます。"]}),(0,s.jsxs)("p",{children:["【位相比較モード】",(0,s.jsx)("br",{}),"2つの波の位相を比較し、干渉の様子を確認できます。",(0,s.jsx)("br",{}),"青色は赤色の波より位相が遅れて振動していることが確認できます。"]}),(0,s.jsxs)("p",{children:["【虹色モード】",(0,s.jsx)("br",{}),"波の位相を比較し、干渉の様子を確認できます。",(0,s.jsx)("br",{}),"単振動が円運動の射影であることを確認できます。"]})]})}r(2446)},2446:function(){}}]);