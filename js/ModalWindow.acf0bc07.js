(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ModalWindow"],{6825:function(t,n,o){"use strict";o.r(n);var s=function(){var t=this,n=t.$createElement,o=t._self._c||n;return t.shown?o("v-card",{staticClass:"menu-wrapper d-flex",style:t.styles,attrs:{color:"teal"}},t._l(t.items,(function(n){return o("div",{key:n.text,staticClass:"menu pa-1",on:{click:function(o){return t.onClick(n)}}},[t._v(" "+t._s(n.text)+" ")])})),0):t._e()},e=[],i={name:"ContextMenu",data:function(){return{items:[],shown:!1,xPos:0,yPos:0}},methods:{onClick:function(t){t.action()},onShow:function(t){var n=t.items,o=t.caller;this.items=n,this.shown=!0,this.setPosition(o)},setPosition:function(t){var n=t.getBoundingClientRect();this.xPos=n.left,this.yPos=n.top},onClose:function(){this.items=[],this.shown=!1}},computed:{styles:function(){return{top:"".concat(this.yPos-2,"px"),left:"".concat(this.xPos+25,"px")}}},mounted:function(){this.$context.EventBus.$on("shown",this.onShow),this.$context.EventBus.$on("close",this.onClose)},beforeDestroy:function(){this.$context.EventBus.$off("shown",this.onShow),this.$context.EventBus.$off("close",this.onClose)}},c=i,u=(o("ba8b"),o("2877")),a=o("6544"),l=o.n(a),h=o("b0af"),r=Object(u["a"])(c,s,e,!1,null,"79a0ff68",null);n["default"]=r.exports;l()(r,{VCard:h["a"]})},b2d0:function(t,n,o){},ba8b:function(t,n,o){"use strict";o("b2d0")}}]);
//# sourceMappingURL=ModalWindow.acf0bc07.js.map