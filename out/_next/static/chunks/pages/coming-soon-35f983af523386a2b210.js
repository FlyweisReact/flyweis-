(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9169],{3905:function(e,n,t){"use strict";t.r(n);var s=t(5671),i=t(3144),r=t(7326),o=t(136),a=t(6215),c=t(1120),l=t(4942),u=t(7294),d=t(5893);function h(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,s=(0,c.Z)(e);if(n){var i=(0,c.Z)(this).constructor;t=Reflect.construct(s,arguments,i)}else t=s.apply(this,arguments);return(0,a.Z)(this,t)}}var m=function(e){(0,o.Z)(t,e);var n=h(t);function t(){var e;(0,s.Z)(this,t);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return e=n.call.apply(n,[this].concat(o)),(0,l.Z)((0,r.Z)(e),"state",{days:"",hours:"",minutes:"",seconds:""}),(0,l.Z)((0,r.Z)(e),"commingSoonTime",(function(){var n=new Date("August 23, 2022 17:00:00 PDT"),t=Date.parse(n)/1e3,s=new Date,i=t-Date.parse(s)/1e3,r=Math.floor(i/86400),o=Math.floor((i-86400*r)/3600),a=Math.floor((i-86400*r-3600*o)/60),c=Math.floor(i-86400*r-3600*o-60*a);o<"10"&&(o="0"+o),a<"10"&&(a="0"+a),c<"10"&&(c="0"+c),e.setState({days:r,hours:o,minutes:a,seconds:c})})),(0,l.Z)((0,r.Z)(e),"onSubmit",(function(e){e.preventDefault()})),e}return(0,i.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.myInterval=setInterval((function(){e.commingSoonTime()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.myInterval)}},{key:"render",value:function(){return(0,d.jsx)("div",{className:"coming-soon-area",children:(0,d.jsx)("div",{className:"d-table",children:(0,d.jsx)("div",{className:"d-table-cell",children:(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:"coming-soon-content",children:[(0,d.jsx)("h1",{children:"Coming Soon"}),(0,d.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices."}),(0,d.jsxs)("div",{id:"timer",children:[(0,d.jsxs)("div",{id:"days",children:[this.state.days," ",(0,d.jsx)("span",{children:"Days"})]}),(0,d.jsxs)("div",{id:"hours",children:[this.state.hours," ",(0,d.jsx)("span",{children:"Hours"})]}),(0,d.jsxs)("div",{id:"minutes",children:[this.state.minutes," ",(0,d.jsx)("span",{children:"Minutes"})]}),(0,d.jsxs)("div",{id:"seconds",children:[this.state.seconds," ",(0,d.jsx)("span",{children:"Seconds"})]})]}),(0,d.jsxs)("form",{className:"newsletter-form",children:[(0,d.jsx)("input",{type:"email",className:"input-newsletter",placeholder:"Enter email address",name:"email",required:!0}),(0,d.jsx)("button",{type:"submit",className:"default-btn",children:"Notify Me"})]})]})})})})})}}]),t}(u.Component);n.default=m},4213:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/coming-soon",function(){return t(3905)}])}},function(e){e.O(0,[9774,2888,179],(function(){return n=4213,e(e.s=n);var n}));var n=e.O();_N_E=n}]);