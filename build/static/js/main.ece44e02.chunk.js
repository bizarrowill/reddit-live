(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(45)},22:function(e,t,n){},24:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),l=(n(22),n(10)),i=n(11),s=n(14),u=n(12),m=n(15),h=(n(24),n(13)),d=n.n(h),w=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={posts:[]},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://www.reddit.com/r/reactjs.json").then(function(t){var n=t.data.data.children.map(function(e){return e.data});e.setState({posts:n})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Today's news from"),r.a.createElement("h2",null,"/r/reactjs"),r.a.createElement("ul",null,this.state.posts.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.title),r.a.createElement("br",null),"by: ",r.a.createElement("strong",null,e.author)," with a score of ",e.score,".",r.a.createElement("br",null))})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.ece44e02.chunk.js.map