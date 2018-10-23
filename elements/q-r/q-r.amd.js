define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"],function(_exports,_polymerElement,_HAXWiring){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.QR=void 0;function _templateObject_df42f0a0d70311e8b94a491a8c19fcf3(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"]);_templateObject_df42f0a0d70311e8b94a491a8c19fcf3=function(){return data};return data}var QR=function(_PolymerElement){babelHelpers.inherits(QR,_PolymerElement);function QR(){babelHelpers.classCallCheck(this,QR);return babelHelpers.possibleConstructorReturn(this,(QR.__proto__||Object.getPrototypeOf(QR)).apply(this,arguments))}babelHelpers.createClass(QR,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(QR.prototype.__proto__||Object.getPrototypeOf(QR.prototype),"connectedCallback",this).call(this);this.HAXWiring=new _HAXWiring.HAXWiring;this.HAXWiring.setHaxProperties(QR.haxProperties,QR.tag,this)}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_df42f0a0d70311e8b94a491a8c19fcf3())}},{key:"haxProperties",get:function get(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Q r",description:"Automated conversion of q-r/",icon:"icons:android",color:"green",groups:["R"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{quick:[],configure:[],advanced:[]}}}},{key:"properties",get:function get(){return{}}},{key:"tag",get:function get(){return"q-r"}}]);return QR}(_polymerElement.PolymerElement);_exports.QR=QR;window.customElements.define(QR.tag,QR)});