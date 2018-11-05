!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@polymer/polymer/polymer-legacy.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("aframe/dist/aframe-master.js")):"function"==typeof define&&define.amd?define(["@polymer/polymer/polymer-legacy.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","aframe/dist/aframe-master.js"],t):t(e.polymerLegacy_js)}(this,function(e){"use strict";function t(){var e,i,o=(e=['\n    <style>\n      :host {\n        display: block;\n        position: relative;\n      }\n    </style>\n    <a-scene id="scene" class="embedded" embedded="" arjs$="[[ar]]" style$="height:[[height]];width:[[width]];">\n      <a-sky color$="[[skyColor]]"></a-sky>\n      <a-marker-camera preset="hiro"></a-marker-camera>\n      <a-entity id="entity" gltf-model$="[[source]]" position="0 0 0"></a-entity>\n    </a-scene>\n'],(i=['\n    <style>\n      :host {\n        display: block;\n        position: relative;\n      }\n    </style>\n    <a-scene id="scene" class="embedded" embedded="" arjs$="[[ar]]" style$="height:[[height]];width:[[width]];">\n      <a-sky color\\$="[[skyColor]]"></a-sky>\n      <a-marker-camera preset="hiro"></a-marker-camera>\n      <a-entity id="entity" gltf-model\\$="[[source]]" position="0 0 0"></a-entity>\n    </a-scene>\n'])||(i=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(i)}})));return t=function(){return o},o}e.Polymer({_template:e.html(t()),is:"aframe-player",behaviors:[HAXBehaviors.PropertiesBehaviors,SchemaBehaviors.Schema],properties:{source:{type:String,value:""},height:{type:String,value:"480px"},width:{type:String,value:"640px"},skyColor:{type:String,value:"#DCDCDC"},ar:{type:Boolean,value:!1},x:{type:String,value:"0"},y:{type:String,value:"0"},z:{type:String,value:"0"},position:{type:Object,computed:"_computePosition(x, y, z, width, height)",observer:"_positionChanged"}},attached:function(){this.$.scene.removeFullScreenStyles();this.setHaxProperties({canScale:!1,canPosition:!1,canEditSource:!1,gizmo:{title:"3D player",description:"A 3D file / augmented reality player.",icon:"av:play-circle-filled",color:"amber",groups:["3D","Augmented reality"],handles:[{type:"3d",source:"source"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"height",title:"height",description:"height of the object",inputMethod:"textfield",type:"bar",icon:"image:photo-size-select-small",required:!0},{property:"width",title:"Width",description:"Width of the object",inputMethod:"textfield",type:"bar",icon:"image:straighten",required:!0}],configure:[{property:"source",title:"Source",description:"The URL for this AR file.",inputMethod:"textfield",type:"bar",icon:"link",required:!0},{property:"x",title:"X",description:"X position of the element in AR.",inputMethod:"textfield",type:"bar",icon:"communication:location-on",required:!0},{property:"y",title:"Y",description:"Y position of the element in AR.",inputMethod:"textfield",type:"bar",icon:"communication:location-on",required:!0},{property:"z",title:"Z",description:"Z position of the element in AR.",inputMethod:"textfield",type:"bar",icon:"communication:location-on",required:!0},{property:"skyColor",title:"Sky color",description:"Select the color of the sky in the scene.",inputMethod:"colorpicker",type:"bar",icon:"editor:format-color-fill"}],advanced:[]}})},_computePosition:function(e,t,i,o,r){return{x:e,y:t,z:i}},_positionChanged:function(e){this.$.entity.setAttribute("position",e)}})});
//# sourceMappingURL=aframe-player.umd.js.map
