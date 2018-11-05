define(["./node_modules/@polymer/polymer/polymer-legacy.js"], function(
  _polymerLegacy
) {
  "use strict";
  function _templateObject_771a30f0e11811e8afef03408d44cee9() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <div typeof="oer:SupportingMaterial">\n      <h2 property="oer:name" hidden$="[[!title]]">[[title]]</h2>\n      <div property="oer:description">\n        <slot></slot>\n      </div>\n    </div>\n'
    ]);
    _templateObject_771a30f0e11811e8afef03408d44cee9 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_771a30f0e11811e8afef03408d44cee9()
    ),
    is: "lrn-content",
    properties: { title: { type: String, value: !1 } }
  });
});
