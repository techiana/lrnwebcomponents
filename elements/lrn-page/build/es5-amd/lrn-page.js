define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@lrnwebcomponents/oer-schema/oer-schema.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_3df31420e11a11e8992057905f66c491() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n    <oer-schema>\n      <slot></slot>\n    </oer-schema>\n"
    ]);
    _templateObject_3df31420e11a11e8992057905f66c491 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_3df31420e11a11e8992057905f66c491()
    ),
    is: "lrn-page"
  });
});
