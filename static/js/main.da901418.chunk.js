(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n.p+"static/media/search.2e5a42b6.svg"},24:function(e,t,n){e.exports=n(38)},29:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(18),o=n.n(i),c=(n(29),n(5)),s=n(19),l=n(8),u=n(6),p=n(9),d=n(7),h=n(10),f=Object(h.c)(Object(h.b)({userList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"UPDATE_USER_LIST"===t.type?t.users:e},buttonLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return"SET_BUTTON_LOADING"===t.type?t.buttonLoading:e},selectedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"UPDATE_USER"===t.type?t.user:e}})),m=n(40),g=n(41),x=n(14),v=n.n(x),b=n(21),y=n(22),E=n.n(y),O=function(e,t,n){console.log(e),n(e),t.push("/user/".concat(e.login))},j=a.a.memo(function(e){var t=e.user,n=e.history,r=e.updateUser;return a.a.createElement("div",{style:{display:"flex",flexDirection:"row",padding:"20px 0",borderTop:"1px solid #33333320"}},a.a.createElement("img",{src:t.avatar_url,style:{width:"50px",height:"50px",margin:"0 20px",cursor:"pointer"},alt:"github user avatar",onClick:function(){return O(t,n,r)}}),a.a.createElement("div",{style:{fontSize:"16px",color:"#0366d6",height:"50px",display:"flex",alignItems:"center",cursor:"pointer"},onClick:function(){return O(t,n,r)}},t.login))}),w={container:{width:"100px",height:"35px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#333",color:"#fff",cursor:"pointer"}},U=a.a.memo(function(e){var t=e.onClick,n=e.children;return a.a.createElement("div",{style:w.container,onClick:function(){return t()}},n)}),C=n(11),L={container:{width:"100px",height:"35px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row",backgroundColor:"#333"},dot:{width:"8px",height:"8px",borderRadius:"4px",backgroundColor:"#FFF",marginLeft:"3px",marginRight:"3px"}},k=a.a.memo(function(){return a.a.createElement("div",{style:L.container},a.a.createElement("div",{style:Object(C.a)({},L.dot,{animation:"loadingDot 1s 0s infinite"})}),a.a.createElement("div",{style:Object(C.a)({},L.dot,{animation:"loadingDot 1s 0.25s infinite"})}),a.a.createElement("div",{style:Object(C.a)({},L.dot,{animation:"loadingDot 1s 0.5s infinite"})}))}),D={container:{width:"1000px",margin:"24px auto"},searchContainer:{position:"relative",height:"35px",display:"flex",flexDirection:"row",margin:"50px 0"},searchIconContainer:{position:"absolute",display:"flex",height:"35px",width:"30px",justifyContent:"center",alignItems:"center"},search:{padding:"10px 30px",position:"absolute",height:"35px",boxSizing:"border-box",width:"250px",fontSize:"16px"},searchIcon:{height:"50%"}},I=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).fetchData=Object(b.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.props.updateButtonLoading(!0),""===(t=n.refs.search.value)){e.next=13;break}return e.prev=3,e.next=6,fetch("https://api.github.com/search/users?q=".concat(t));case 6:e.sent.json().then(function(e){n.props.updateUserList(e.items),n.props.updateButtonLoading(!1)}).catch(function(e){throw e}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.error(e.t0);case 13:case"end":return e.stop()}},e,this,[[3,10]])})),n.render=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.props,t=e.userList,r=e.buttonLoading,i=e.history,o=e.updateUser;return a.a.createElement("div",{style:D.container},a.a.createElement("div",{style:D.searchContainer},a.a.createElement("input",{type:"text",placeholder:"Find a member...",style:D.search,ref:"search"}),a.a.createElement("div",{style:D.searchIconContainer},a.a.createElement("img",{src:E.a,alt:"Search",style:D.searchIcon})),a.a.createElement("div",{style:{width:"250px",height:"35px"}}),r?a.a.createElement(k,null):a.a.createElement(U,{onClick:function(){return n.fetchData()}},"Search")),t.map(function(e,t){return a.a.createElement(j,{key:t,user:e,history:i,updateUser:o})}))},n}return Object(p.a)(t,e),t}(a.a.Component),S=Object(d.b)(function(e){return console.log(e),e},function(e){return{updateUserList:function(t){return e({type:"UPDATE_USER_LIST",users:t})},updateButtonLoading:function(t){return e({type:"SET_BUTTON_LOADING",buttonLoading:t})},updateUser:function(t){return e({type:"UPDATE_USER",user:t})}}})(I),_={container:{width:"1000px",margin:"50px auto"}},T=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).render=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.props).selectedUser;if(e){var t=e.avatar_url,r=e.id,i=e.repos_url;return a.a.createElement("div",{style:_.container},a.a.createElement("div",null,"Avatar URL: $",t),a.a.createElement("div",null,"ID: $",r),a.a.createElement("div",null,"REPOS_URL: $",i))}return a.a.createElement("div",{style:_.container},"User not found")},n}return Object(p.a)(t,e),t}(a.a.Component),A=Object(d.b)(function(e){return console.log(e),e})(T),R=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(d.a,{store:f},a.a.createElement(a.a.Fragment,null,a.a.createElement(m.a,{basename:"/react-test"},a.a.createElement(a.a.Fragment,null,a.a.createElement(g.a,{exact:!0,path:"/",component:S}),a.a.createElement(g.a,{path:"/user",component:A})))))}}]),t}(r.Component);o.a.render(a.a.createElement(R,null),document.getElementById("root"))}},[[24,2,1]]]);
//# sourceMappingURL=main.da901418.chunk.js.map