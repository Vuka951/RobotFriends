(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(33)},29:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(15),c=n.n(a),i=n(9),s=n(7),l=n(18),u=n(19),h=(n(29),n(1)),d=n(2),p=n(4),b=n(3),f=n(5),g=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.email,r=e.id;return o.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5 tc"},o.a.createElement("img",{src:"https://robohash.org/".concat(r,"?200x200"),alt:""}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null,n)))}}]),t}(r.Component),v=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.robots;return o.a.createElement("div",null,e.map(function(e){return o.a.createElement(g,{name:e.name,email:e.email,id:e.id,key:e.id})}))}}]),t}(r.Component),m=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{type:"search",placeholder:"search robots",className:"pa3 ba b--green bg-lightest-blue",onChange:this.props.onSearchChange}))}}]),t}(r.Component),O=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{overflowY:"scroll",border:"2px solid black",maxHeight:"80vh"}},this.props.children)}}]),t}(r.Component),j=function(e){function t(){var e,n;Object(h.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(p.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={hasError:!1},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Ups something went wrong"):this.props.children}}]),t}(r.Component),E=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return console.log("header"),o.a.createElement("h1",{className:"f1"},"RobotFriends")}}]),t}(r.Component),y=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onGetRebots()}},{key:"render",value:function(){var e=this,t=this.props.robots.filter(function(t){return t.name.toLocaleLowerCase().includes(e.props.searchvalue.toLocaleLowerCase())});return this.props.isPending?o.a.createElement("h1",null,"Loading data"):o.a.createElement("div",{className:"tc"},o.a.createElement(E,null),o.a.createElement(m,{onSearchChange:this.props.onSearchChange}),o.a.createElement(O,null,o.a.createElement(j,null,o.a.createElement(v,{robots:t}))))}}]),t}(r.Component),w=Object(i.b)(function(e){return{searchvalue:e.searchRobots.searchvalue,robots:e.getRobots.robots,isPending:e.getRobots.isPending,error:e.getRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_VALUE",payload:t.target.value})},onGetRebots:function(){return e(function(e){e({type:"GET_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"GET_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"GET_ROBOTS_FAILED",payload:t})})})}}})(y),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(31);var R=n(8),S={searchvalue:""},_={isPending:!0,robots:[],error:""},A=Object(l.createLogger)(),T=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_VALUE":return Object(R.a)({},e,{searchvalue:t.payload});default:return e}},getRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GET_ROBOTS_PENDING":return Object(R.a)({},e,{isPending:!0});case"GET_ROBOTS_SUCCESS":return Object(R.a)({},e,{robots:t.payload,isPending:!1});case"GET_ROBOTS_FAILED":return Object(R.a)({},e,{error:t.payload,isPending:!1});default:return e}}}),N=Object(s.d)(T,Object(s.a)(u.a,A));c.a.render(o.a.createElement(i.a,{store:N},o.a.createElement(w,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/RobotFriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/RobotFriends","/service-worker.js");C?(function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):k(t,e)})}}()}},[[20,2,1]]]);
//# sourceMappingURL=main.57988118.chunk.js.map