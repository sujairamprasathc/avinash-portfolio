(this["webpackJsonpavinash-portfolio"]=this["webpackJsonpavinash-portfolio"]||[]).push([[0],[,function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(7),i=a(10),c=a(9),o=a(0),l=a.n(o),s=a(8),m=a.n(s),d=(a(5),a(2)),g=a(3);function u(e){return l.a.createElement("div",{className:" h2"},e.heading)}function y(e){return l.a.createElement("div",{className:" b1"},e.type)}function p(e){return l.a.createElement("div",{className:" one-col "},l.a.createElement(u,{heading:e.heading}),l.a.createElement(y,{type:e.type}))}function E(e){return l.a.createElement("p",{className:" one-half-col b1"},e.description)}function h(e){return l.a.createElement("div",{className:" half-col icon"},l.a.createElement("div",{className:" arrow"},l.a.createElement("svg",{height:"30",width:"30"},l.a.createElement("line",{x1:"1",y1:"28",x2:"29",y2:"1"}),l.a.createElement("line",{x1:"0",y1:"1",x2:"29",y2:"1"}),l.a.createElement("line",{x1:"29",y1:"0",x2:"29",y2:"29"}),"Sorry, your browser does not support inline SVG.")))}function f(e){return l.a.createElement("div",{className:" three-col project-item-content"},l.a.createElement(p,{heading:e.heading,type:e.type}),l.a.createElement(E,{description:e.description}),l.a.createElement(h,null))}function v(e){return l.a.createElement("div",{className:"one-col"},l.a.createElement("div",{className:" project-item-image"},l.a.createElement("img",{className:" image",src:e.image,alt:"pupp"})))}function x(e){return l.a.createElement("div",{className:"project-item row-containers"},(0===e.category_id||e.category_id===e.category)&&l.a.createElement(v,{image:e.image}),(0===e.category_id||e.category_id===e.category)&&l.a.createElement(f,{heading:e.heading,type:e.type,description:e.description}))}function N(e){var t=[];return t.push(d.projects.map((function(t){return l.a.createElement(x,{heading:t.heading,type:t.type,description:t.description,image:a(16)("".concat(t.image)),category_id:e.category_id,category:t.category})}))),l.a.createElement("div",{className:"project-list"},t)}function w(e){return l.a.createElement("header",null,l.a.createElement("div",{className:" h1 one-col"},"Portfolio"))}function b(e){return l.a.createElement("ul",{className:" category-list-item b1",onClick:e.onClick,key:e.name},e.name,l.a.createElement("div",{className:"icon"},l.a.createElement("div",{className:" arrow"},l.a.createElement("svg",{viewBox:"0 0 40 40",transform:"rotate(90 0 0)",height:"30",width:"30"},l.a.createElement("line",{x1:"1",y1:"28",x2:"29",y2:"1"}),l.a.createElement("line",{x1:"0",y1:"1",x2:"29",y2:"1"}),l.a.createElement("line",{x1:"29",y1:"0",x2:"29",y2:"29"}),"Sorry, your browser does not support inline SVG."))))}function k(e){return l.a.createElement("ul",{className:" category-list-item h2",onClick:e.onClick,key:e.name},e.name,l.a.createElement("div",{className:"icon"},l.a.createElement("div",{className:" arrow"},l.a.createElement("svg",{viewBox:"0 0 40 40",transform:"rotate(90 0 0)",height:"30",width:"30"},l.a.createElement("line",{x1:"1",y1:"28",x2:"29",y2:"1"}),l.a.createElement("line",{x1:"0",y1:"1",x2:"29",y2:"1"}),l.a.createElement("line",{x1:"29",y1:"0",x2:"29",y2:"29"}),"Sorry, your browser does not support inline SVG."))))}function C(e){var t=[];return t.push(g.categories.map((function(t){return l.a.createElement("div",null,e.category_id===t.id&&l.a.createElement(k,{name:t.category,onClick:function(){return e.onClick(t.id)}}),e.category_id!==t.id&&l.a.createElement(b,{name:t.category,onClick:function(){return e.onClick(t.id)}}))}))),l.a.createElement("nav",{className:" category-filter row-containers"},l.a.createElement("div",{className:" h3 one-col"},"Categories"),l.a.createElement("div",{className:" one-col "},0===e.category_id&&l.a.createElement(k,{name:"All Projects",onClick:function(){return e.onClick(0)}}),0!==e.category_id&&l.a.createElement(b,{name:"All Projects",onClick:function(){return e.onClick(0)}}),t),l.a.createElement("div",{className:" two-col"}))}function j(e){return l.a.createElement("div",{className:"menu-circle"},l.a.createElement("svg",{viewBox:"-5 -5 40 40",height:"30",width:"30"},l.a.createElement("line",{x1:"1",y1:"28",x2:"29",y2:"1"}),l.a.createElement("line",{x1:"29",y1:"29",x2:"1",y2:"1"}),"Sorry, your browser does not support inline SVG."))}function _(e){return l.a.createElement("div",{className:"next-page row-containers"},l.a.createElement("div",{className:" one-col h1"},"Next Category"),l.a.createElement("div",{className:" two-col next-page-content"},l.a.createElement("div",{className:" h2"},"Communication Design")),l.a.createElement("div",{className:" one-col icon"},l.a.createElement("div",{className:" arrow"},l.a.createElement("svg",{transform:"rotate(90 0 0)",height:"30",width:"30"},l.a.createElement("line",{x1:"1",y1:"28",x2:"29",y2:"1"}),l.a.createElement("line",{x1:"0",y1:"1",x2:"29",y2:"1"}),l.a.createElement("line",{x1:"29",y1:"0",x2:"29",y2:"29"}),"Sorry, your browser does not support inline SVG."))))}var S=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={category_id:0},r}return Object(r.a)(a,[{key:"updateCategory",value:function(e){this.setState({category_id:e})}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(j,null),l.a.createElement("div",{className:"container"},l.a.createElement(w,null),l.a.createElement(C,{onClick:function(t){return e.updateCategory(t)},category_id:this.state.category_id}),l.a.createElement("div",{style:{height:"300px"}}),l.a.createElement(N,{category_id:this.state.category_id}),l.a.createElement("div",{style:{height:"300px"}}),l.a.createElement(_,null)))}}]),a}(l.a.Component);m.a.render(l.a.createElement(S,null),document.getElementById("root"))},function(e){e.exports=JSON.parse('{"numProjects":4,"projects":[{"heading":"Marbles & Mangoes","type":"Animated Short Film","description":" Created from scratch including story, character design & audio.  Exploring ways of Visual storytelling in the Indian context.","image":"./0.png","category":3},{"heading":"One Part Woman","type":"Book Redesign","description":"Redesigned the novel (paper, typesetting, and cover design & binding). Designing for the Indian audience.","image":"./1.png","category":1},{"heading":"Fudr","type":"Website Redesign","description":"Worked on the Information architecture and UI/UX enhancement. Optimized it for various form factors (Tablet, Phone). Design suggestions were later incorporated into the actual product.","image":"./2.png","category":2},{"heading":"Personal Portfolio Website","type":"Website Redesign","description":"Opportunity to explore & experiment UI/UX trends while being aware of the practicality. Project is under development.","image":"./3.png","category":2}]}')},function(e){e.exports=JSON.parse('{"categories":[{"id":1,"category":"Communication Design"},{"id":2,"category":"UI/UX Design"},{"id":3,"category":"Storytelling"}]}')},,function(e,t,a){},,,,,,function(e,t,a){e.exports=a(1)},,,,,function(e,t,a){var n={".":1,"./":1,"./0.png":17,"./1.png":18,"./2.png":19,"./3.png":20,"./categories":3,"./categories.json":3,"./data":2,"./data.json":2,"./index":1,"./index.css":5,"./index.js":1};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=16},function(e,t,a){e.exports=a.p+"static/media/0.95dca2bc.png"},function(e,t,a){e.exports=a.p+"static/media/1.9d59a363.png"},function(e,t,a){e.exports=a.p+"static/media/2.d0b28c86.png"},function(e,t,a){e.exports=a.p+"static/media/3.95dca2bc.png"}],[[11,1,2]]]);
//# sourceMappingURL=main.a222fc07.chunk.js.map