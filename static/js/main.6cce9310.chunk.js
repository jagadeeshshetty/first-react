(this["webpackJsonpfirst-react"]=this["webpackJsonpfirst-react"]||[]).push([[0],{14:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),s=n(3),c=n.n(s),i=(n(12),n(4)),o=n(5),u=n(7),h=n(6),l=n(0),g=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={count:0,tags:["tag1","tag2","tag3","tag4"]},t.handleIncrement=function(){t.setState({count:t.state.count+1})},t}return Object(o.a)(n,[{key:"renderTag",value:function(){return 0===this.state.tags.length?Object(l.jsx)("p",{children:"There are no Tags."}):Object(l.jsx)("ul",{children:this.state.tags.map((function(t){return Object(l.jsx)("li",{children:t},t)}))})}},{key:"render",value:function(){return Object(l.jsxs)(r.a.Fragment,{children:[Object(l.jsx)("span",{className:this.getBadgeClasses(),children:this.formatCount()}),Object(l.jsx)("button",{onClick:this.handleIncrement,className:"btn btn-secondary btn-sm",children:"Increment"}),Object(l.jsx)("br",{}),0===this.state.tags.length&&"There are no Tags. Please create.",this.renderTag()]})}},{key:"getBadgeClasses",value:function(){return"btn m-2 btn-"+(0===this.state.count?"warning":"primary")}},{key:"formatCount",value:function(){var t=this.state.count;return 0===t?"Zero":t}}]),n}(a.Component);c.a.render(Object(l.jsx)(g,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6cce9310.chunk.js.map