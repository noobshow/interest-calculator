(this["webpackJsonpinterest-calculator"]=this["webpackJsonpinterest-calculator"]||[]).push([[0],{61:function(e,t,a){e.exports=a(70)},66:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(9),r=a.n(i),o=(a(66),a(113)),s=a(116),c=a(118),u=a(119),m=Object(o.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1}}})),d=function(){var e=m();return l.a.createElement(s.a,{role:"banner",className:e.root,position:"fixed"},l.a.createElement(c.a,null,l.a.createElement(u.a,{variant:"h6",className:e.title},"Interest Calculator")))},v=a(49),p=a(14),g=a(129),h=a(71),b=a(131),f=a(120),E=function(e){var t=e.tabStatus,a=e.setTabStatus;return l.a.createElement("nav",{role:"navigation"},l.a.createElement(h.a,{square:!0},l.a.createElement(b.a,{value:t,onChange:function(e,t){a(t)},indicatorColor:"primary",textColor:"primary",centered:!0,variant:"fullWidth"},l.a.createElement(f.a,{label:"Simple Interest"}),l.a.createElement(f.a,{label:"Compound Interest"}))))},I=a(38),y=a(39),C=a(42),P=a(41),R=a(4),N=a(126),w=a(130),S=a(132),T=a(127),O=a(128),j=function(e,t,a){e=Number(e.toFixed(2)),t/=100;var n=Number((e*(1+t*a)-e).toFixed(2));return{P:e,I:n,A:e+n}},x=function(e,t,a,n,l){e=Number(e.toFixed(2)),t/=100,l=Number(Number(l).toFixed(2));var i=Number((e*Math.pow(1+t/n,n*a)+l*(Math.pow(1+t/n,n*a)-1)/(t/n)).toFixed(2));return{P:e,PMT:l=Number((12*l*a).toFixed(2)),I:Number((i-e-l).toFixed(2)),A:i}},D=a(121),k=a(122),B=a(125),z=a(123),A=a(124),F=Object(o.a)({tableCell:{fontSize:16}}),M=function(e){var t=e.resultData,a=F(),n=new Intl.NumberFormat("en-US");return l.a.createElement(D.a,{"aria-label":"result"},l.a.createElement(k.a,null,l.a.createElement(z.a,null,l.a.createElement(A.a,{className:a.tableCell,colSpan:2,align:"center"},"RESULT"))),l.a.createElement(B.a,null,t.map((function(e){return l.a.createElement(z.a,{key:e.name,hover:!0},l.a.createElement(A.a,{className:a.tableCell},e.name," "),l.a.createElement(A.a,{className:a.tableCell,align:"right"},n.format(e.value)))}))))},W=function(e){Object(C.a)(a,e);var t=Object(P.a)(a);function a(e){var n;Object(I.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(p.a)({},e.target.name,Number(e.target.value)))},n.handleSubmit=function(e){e.preventDefault(),n.setState({isCalculating:!0}),setTimeout((function(){var e=n.state,t=e.initialInvestment,a=e.interestRate,l=e.calculationPeriodType,i=e.resultData,r=n.state.calculationPeriod,o=j(t,a,r=r/l/1),s=o.P,c=o.I,u=o.A;i[0].value=s,i[1].value=c,i[2].value=u,n.setState({isCalculating:!1,resultData:i}),n.props.scrollBottom()}),2e3)},n.handleReset=function(e){n.setState({isResetting:!0}),setTimeout((function(){n.setState({initialInvestment:"",interestRate:"",calculationPeriod:"",calculationPeriodType:1,isCalculating:!1,isResetting:!1,resultData:[{name:"Initial Investment",value:0},{name:"Interest Earned",value:0},{name:"Total",value:0}]}),n.props.scrollTop()}),2e3)};var l=JSON.parse(localStorage.getItem("simpleInterest"))||{initialInvestment:"",interestRate:"",calculationPeriod:"",calculationPeriodType:1,resultData:[{name:"Initial Investment",value:0},{name:"Interest Earned",value:0},{name:"Total",value:0}]},i=l.initialInvestment,r=l.interestRate,o=l.calculationPeriod,s=l.calculationPeriodType,c=l.resultData;return n.state={initialInvestment:i,interestRate:r,calculationPeriod:o,calculationPeriodType:s,isCalculating:!1,isResetting:!1,resultData:c},n}return Object(y.a)(a,[{key:"render",value:function(){var e=this.state,t=e.initialInvestment,a=e.interestRate,n=e.calculationPeriod,i=e.calculationPeriodType,r=e.isCalculating,o=e.isResetting,s=e.resultData,c=this.props.classes,u=!1;return t&&a&&n&&(u=!0),localStorage.setItem("simpleInterest",JSON.stringify({initialInvestment:t,interestRate:a,calculationPeriod:n,calculationPeriodType:i,resultData:s})),l.a.createElement("main",{role:"main"},l.a.createElement("form",{className:c.root,noValidate:!0,autoComplete:"off",onSubmit:this.handleSubmit,onReset:this.handleReset},l.a.createElement(N.a,{container:!0,spacing:3},l.a.createElement(N.a,{item:!0,xs:12},l.a.createElement(w.a,{className:c.input,id:"initial-investment",name:"initialInvestment",label:"Initial Investment",variant:"outlined",type:"number",value:t,onChange:this.handleChange,disabled:r||o})),l.a.createElement(N.a,{item:!0,xs:12},l.a.createElement(w.a,{className:c.input,id:"interest-rate",name:"interestRate",label:"Yearly Interest Rate (%)",variant:"outlined",type:"number",value:a,onChange:this.handleChange,disabled:r||o})),l.a.createElement(N.a,{item:!0,xs:6},l.a.createElement(w.a,{className:c.input,id:"calculation-period",name:"calculationPeriod",label:"Calculation Period",variant:"outlined",type:"number",value:n,onChange:this.handleChange,disabled:r||o})),l.a.createElement(N.a,{item:!0,xs:6},l.a.createElement(w.a,{className:c.input,id:"calculation-period-type",name:"calculationPeriodType",variant:"outlined",select:!0,value:i,onChange:this.handleChange,disabled:r||o},l.a.createElement(S.a,{value:365},"Days"),l.a.createElement(S.a,{value:12},"Months"),l.a.createElement(S.a,{value:1},"Years"))),l.a.createElement(N.a,{item:!0,xs:12},l.a.createElement(T.a,{className:c.calcButton,type:"submit",variant:"contained",color:"primary",size:"large",disabled:!u||r},"Calculate"),r&&l.a.createElement(O.a,{className:c.buttonProgress,thickness:4,size:28}),l.a.createElement(T.a,{className:c.resetButton,type:"reset",variant:"contained",size:"large",disabled:!u||o},"Reset"),o&&l.a.createElement(O.a,{className:c.buttonProgress,thickness:4,size:28})))),l.a.createElement(M,{resultData:s}))}}]),a}(n.Component),L=Object(R.a)((function(e){return{root:{padding:16},input:{width:"100%"},calcButton:Object(p.a)({width:"100%",marginBottom:16},e.breakpoints.up("sm"),{width:"48%",marginRight:11,marginBottom:0}),resetButton:Object(p.a)({width:"100%"},e.breakpoints.up("sm"),{width:"48%",marginLeft:11}),buttonProgress:{position:"absolute",marginTop:8,marginLeft:-150}}}))(W),J=function(e){Object(C.a)(a,e);var t=Object(P.a)(a);function a(e){var n;Object(I.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(p.a)({},e.target.name,Number(e.target.value)))},n.handleSubmit=function(e){e.preventDefault(),n.setState({isCalculating:!0}),setTimeout((function(){var e=n.state,t=e.initialInvestment,a=e.interestRate,l=e.calculationPeriodType,i=e.compoundInterval,r=e.regularInvestment,o=e.resultData,s=n.state.calculationPeriod,c=x(t,a,s=s/l/1,i,r),u=c.P,m=c.PMT,d=c.I,v=c.A;o[0].value=u,o[1].value=m,o[2].value=d,o[3].value=v,n.setState({isCalculating:!1,resultData:o}),n.props.scrollBottom()}),2e3)},n.handleReset=function(e){n.setState({isResetting:!0}),setTimeout((function(){n.setState({initialInvestment:"",interestRate:"",calculationPeriod:"",calculationPeriodType:1,compoundInterval:12,regularInvestment:"",isCalculating:!1,isResetting:!1,resultData:[{name:"Initial Investment",value:0},{name:"Regular Investment",value:0},{name:"Interest Earned",value:0},{name:"Total",value:0}]}),n.props.scrollTop()}),2e3)};var l=JSON.parse(localStorage.getItem("compoundInterest"))||{initialInvestment:"",interestRate:"",calculationPeriod:"",calculationPeriodType:1,compoundInterval:12,regularInvestment:"",resultData:[{name:"Initial Investment",value:0},{name:"Regular Investment",value:0},{name:"Interest Earned",value:0},{name:"Total",value:0}]},i=l.initialInvestment,r=l.interestRate,o=l.calculationPeriod,s=l.calculationPeriodType,c=l.compoundInterval,u=l.regularInvestment,m=l.resultData;return n.state={initialInvestment:i,interestRate:r,calculationPeriod:o,calculationPeriodType:s,compoundInterval:c,regularInvestment:u,isCalculating:!1,isResetting:!1,resultData:m},n}return Object(y.a)(a,[{key:"render",value:function(){var e=this.state,t=e.initialInvestment,a=e.interestRate,n=e.calculationPeriod,i=e.calculationPeriodType,r=e.compoundInterval,o=e.regularInvestment,s=e.isCalculating,c=e.isResetting,u=e.resultData,m=this.props.classes,d=!1;return t&&a&&n&&r&&(d=!0),localStorage.setItem("compoundInterest",JSON.stringify({initialInvestment:t,interestRate:a,calculationPeriod:n,calculationPeriodType:i,compoundInterval:r,regularInvestment:o,resultData:u})),l.a.createElement("main",{role:"main"},l.a.createElement("form",{className:m.root,noValidate:!0,autoComplete:"off",onSubmit:this.handleSubmit,onReset:this.handleReset},l.a.createElement(N.a,{container:!0,spacing:3},l.a.createElement(N.a,{item:!0,xs:12},l.a.createElement(w.a,{className:m.input,id:"initial-investment",name:"initialInvestment",label:"Initial Investment",variant:"outlined",type:"number",value:t,onChange:this.handleChange,disabled:s||c})),l.a.createElement(N.a,{item:!0,xs:12},l.a.createElement(w.a,{className:m.input,id:"interest-rate",name:"interestRate",label:"Yearly Interest Rate (%)",variant:"outlined",type:"number",value:a,onChange:this.handleChange,disabled:s||c})),l.a.createElement(N.a,{item:!0,xs:6},l.a.createElement(w.a,{className:m.input,id:"calculation-period",name:"calculationPeriod",label:"Calculation Period",variant:"outlined",type:"number",value:n,onChange:this.handleChange,disabled:s||c})),l.a.createElement(N.a,{item:!0,xs:6},l.a.createElement(w.a,{className:m.input,id:"calculation-period-type",name:"calculationPeriodType",variant:"outlined",select:!0,value:i,onChange:this.handleChange,disabled:s||c},l.a.createElement(S.a,{value:365},"Days"),l.a.createElement(S.a,{value:12},"Months"),l.a.createElement(S.a,{value:1},"Years"))),l.a.createElement(N.a,{item:!0,xs:12},l.a.createElement(w.a,{className:m.input,id:"compound-interval",name:"compoundInterval",label:"Compound Interval",variant:"outlined",select:!0,value:r,onChange:this.handleChange,disabled:s||c},l.a.createElement(S.a,{value:365},"Daily"),l.a.createElement(S.a,{value:12},"Monthly"),l.a.createElement(S.a,{value:4},"Quarterly"),l.a.createElement(S.a,{value:2},"Half Yearly"),l.a.createElement(S.a,{value:1},"Yearly"))),l.a.createElement(N.a,{item:!0,xs:12},l.a.createElement(w.a,{className:m.input,id:"regular-investment",name:"regularInvestment",label:"Regular Monthly Investment (Optional)",variant:"outlined",type:"number",value:o,onChange:this.handleChange,disabled:s||c})),l.a.createElement(N.a,{item:!0,xs:12},l.a.createElement(T.a,{className:m.calcButton,type:"submit",variant:"contained",color:"primary",size:"large",disabled:!d||s},"Calculate"),s&&l.a.createElement(O.a,{className:m.buttonProgress,thickness:4,size:28}),l.a.createElement(T.a,{className:m.resetButton,type:"reset",variant:"contained",size:"large",disabled:!d||c},"Reset"),c&&l.a.createElement(O.a,{className:m.buttonProgress,thickness:4,size:28})))),l.a.createElement(M,{resultData:u}))}}]),a}(n.Component),Y=Object(R.a)((function(e){return{root:{padding:16},input:{width:"100%"},calcButton:Object(p.a)({width:"100%",marginBottom:16},e.breakpoints.up("sm"),{width:"48%",marginRight:11,marginBottom:0}),resetButton:Object(p.a)({width:"100%"},e.breakpoints.up("sm"),{width:"48%",marginLeft:11}),buttonProgress:{position:"absolute",marginTop:8,marginLeft:-150}}}))(J),U=Object(o.a)((function(e){return{root:{flexGrow:1},paper:Object(p.a)({marginTop:80,marginBottom:20,margin:"auto"},e.breakpoints.up("md"),{width:"50%"})}})),V=function(){var e=U(),t=Object(n.useState)(0),a=Object(v.a)(t,2),i=a[0],r=a[1],o=Object(n.useRef)(),s=Object(n.useRef)(),c=function(){o.current.scrollIntoView({behavior:"smooth"})},u=function(){s.current.scrollIntoView({behavior:"smooth"})};return l.a.createElement(g.a,{className:e.root},l.a.createElement("div",{ref:o}),l.a.createElement(h.a,{elevation:2,className:e.paper},l.a.createElement(E,{tabStatus:i,setTabStatus:r}),0===i&&l.a.createElement(L,{scrollTop:c,scrollBottom:u}),1===i&&l.a.createElement(Y,{scrollTop:c,scrollBottom:u})),l.a.createElement("div",{ref:s}))},G=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(d,null),l.a.createElement(V,null))},q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(G,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");q?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):H(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):H(t,e)}))}}()}},[[61,1,2]]]);
//# sourceMappingURL=main.a88b64bf.chunk.js.map