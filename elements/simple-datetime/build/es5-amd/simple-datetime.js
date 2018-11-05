define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./lib/date.format.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_cc365e60e11811e8bb6a85f836927c2d() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style>\n      :host {\n        display: block;\n        font-size: 14px;\n        color: #b3b3b1;\n        line-height: 30px;\n      }\n    </style>\n    <time datetime$="[[date]]">[[date]]</time>\n'
    ]);
    _templateObject_cc365e60e11811e8bb6a85f836927c2d = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_cc365e60e11811e8bb6a85f836927c2d()
    ),
    is: "simple-datetime",
    properties: {
      timestamp: { type: Number },
      format: { type: String, value: "M jS, Y" },
      date: { type: String, computed: "formatDate(timestamp, format, unix)" },
      unix: { type: Boolean, value: !1 }
    },
    formatDate: function formatDate(timestamp, format, unix) {
      if (unix) {
        timestamp = 1e3 * timestamp;
      }
      return new Date(timestamp).format(format);
    }
  });
});
