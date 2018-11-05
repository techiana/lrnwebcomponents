define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/hax-body-behaviors.js",
  "./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js",
  "./node_modules/@lrnwebcomponents/simple-colors/simple-colors.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_ee907770e11811e89751417e64b96847() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style is="custom-style">\n       :host {\n        display: block;\n        margin: var(--accent-card-margin, 20px) 0;\n        --accent-card-color: var(--simple-colors-foreground3, #222);\n        --accent-card-background-color: var(--simple-colors-background1, #fff);\n        --accent-card-border-color: var(--simple-colors-accent-background5, #ddd);\n        --accent-card-heading-color: var(--simple-colors-accent-foreground5, #000);\n        --accent-card-footer-border-color: var(--simple-colors-background3, #ddd);\n        --accent-card-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n        --accent-card-flat: none;\n        @apply --accent-card;\n      }\n      :host([dark]) {\n        --accent-card-color: var(--simple-colors-foreground1, #fff);\n        --accent-card-border-color: var(--simple-colors-accent-foreground5, #fff);\n        --accent-card-footer-border-color: var(--simple-colors-background5, #666);\n      }\n      :host([accent-background]) {\n        --accent-card-background-color: var(--simple-colors-accent-background1, #fff);\n        --accent-card-footer-border-color: var(--accent-card-border-color);\n      }\n      :host section {\n        border-radius: 2px;\n        box-sizing: border-box;\n        box-shadow: var(--accent-card-box-shadow);\n        display: block;\n        color: var(--accent-card-color);\n        background-color: var(--accent-card-background-color);\n        @apply --accent-card-inner;\n      }\n      :host([horizontal]) section {\n        display: flex;\n        justify-content: space-between;\n        align-items: stretch;\n      }\n      :host section[aria-role][disabled]{\n        opacity: 0.7;\n      }\n      :host section[aria-role]:not([disabled]):focus,\n      :host section[aria-role]:not([disabled]):hover {\n        cursor: pointer; \n        border-radius: 0px;\n        outline: 1px solid var(--accent-card-border-color);\n        @apply --accent-card-focus-heading;\n      }\n      :host section[aria-role]:not([disabled]):focus,\n      :host section[aria-role]:not([disabled]):hover,\n      :host([flat]) section {\n        box-shadow: var(--accent-card-flat);\n      }\n      :host([flat]:not([accent-background])) section {\n        border: 1px solid var(--accent-card-footer-border-color);\n      }\n      :host(:not([horizontal]):not([no-border])) section {\n        border-top: 4px solid var(--accent-card-border-color);\n      }\n      :host([horizontal]:not([no-border])) section {\n        border-left: 4px solid var(--accent-card-border-color);\n      }\n      :host .body {\n        flex-grow: 1;\n        @apply --accent-card-body;\n      }\n      :host .image {\n        background-size: cover; \n        background-position-x: var(--accent-card-image-x, center); \n        background-position-y: var(--accent-card-image-y, center);\n      }\n      :host(:not([horizontal])) .image {\n        height: var(--accent-card-image-height, 100px);\n        @apply --accent-card-vertical-image;\n      }\n      :host([horizontal]) .image {\n        width: var(--accent-card-image-width, 100px);;\n        @apply --accent-card-horizontal-image;\n      }\n      :host .heading {\n        padding-top: var(--accent-card-margin, 20px);\n        padding-left: var(--accent-card-margin, 20px);\n        padding-right: var(--accent-card-margin, 20px);\n        padding-bottom: 0;\n        margin: 0;\n        @apply --accent-card-heading;\n      }\n      :host section[aria-role]:not([disabled]):focus .heading,\n      :host section[aria-role]:not([disabled]):hover .heading {\n        @apply --accent-card-focus-heading;\n      }\n      :host([accent-heading][accent-color]) .heading {\n        color: var(--accent-card-heading-color);\n      }\n      :host .subheading {\n        font-size: 90%;\n        font-style: italic;\n        padding-left: var(--accent-card-margin, 20px);\n        padding-right: var(--accent-card-margin, 20px);\n        @apply --accent-card-subheading;\n      }\n      :host .content {\n        padding: var(--accent-card-margin, 20px);\n        @apply --accent-card-content;\n      }\n      :host .content:not(:last-child) {\n        border-bottom: 1px solid var(--accent-card-footer-border-color);\n      }\n    </style>\n    <section id="card" aria-role$="[[button]]" disabled$="[[disabled]]" tabindex$="[[__tabindex]]">\n      <div class="image" style$="[[__backgroundStyle]]"></div>\n      <div class="body">\n        <template is="dom-if" if="[[__hasHeading]]" restamp="">\n          <h1 class="heading">[[heading]]</h1>\n        </template>\n        <div class="subheading"><slot name="subheading"></slot></div>\n        <div class="content"><slot name="content"></slot></div>\n        <slot name="footer"></slot>\n      </div>\n    </section>\n    <iron-a11y-keys id="a11y" target$="[[__target]]" keys="enter space" on-keys-pressed="_handleTap"></iron-a11y-keys>\n'
      ],
      [
        '\n    <style is="custom-style">\n       :host {\n        display: block;\n        margin: var(--accent-card-margin, 20px) 0;\n        --accent-card-color: var(--simple-colors-foreground3, #222);\n        --accent-card-background-color: var(--simple-colors-background1, #fff);\n        --accent-card-border-color: var(--simple-colors-accent-background5, #ddd);\n        --accent-card-heading-color: var(--simple-colors-accent-foreground5, #000);\n        --accent-card-footer-border-color: var(--simple-colors-background3, #ddd);\n        --accent-card-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n        --accent-card-flat: none;\n        @apply --accent-card;\n      }\n      :host([dark]) {\n        --accent-card-color: var(--simple-colors-foreground1, #fff);\n        --accent-card-border-color: var(--simple-colors-accent-foreground5, #fff);\n        --accent-card-footer-border-color: var(--simple-colors-background5, #666);\n      }\n      :host([accent-background]) {\n        --accent-card-background-color: var(--simple-colors-accent-background1, #fff);\n        --accent-card-footer-border-color: var(--accent-card-border-color);\n      }\n      :host section {\n        border-radius: 2px;\n        box-sizing: border-box;\n        box-shadow: var(--accent-card-box-shadow);\n        display: block;\n        color: var(--accent-card-color);\n        background-color: var(--accent-card-background-color);\n        @apply --accent-card-inner;\n      }\n      :host([horizontal]) section {\n        display: flex;\n        justify-content: space-between;\n        align-items: stretch;\n      }\n      :host section[aria-role][disabled]{\n        opacity: 0.7;\n      }\n      :host section[aria-role]:not([disabled]):focus,\n      :host section[aria-role]:not([disabled]):hover {\n        cursor: pointer; \n        border-radius: 0px;\n        outline: 1px solid var(--accent-card-border-color);\n        @apply --accent-card-focus-heading;\n      }\n      :host section[aria-role]:not([disabled]):focus,\n      :host section[aria-role]:not([disabled]):hover,\n      :host([flat]) section {\n        box-shadow: var(--accent-card-flat);\n      }\n      :host([flat]:not([accent-background])) section {\n        border: 1px solid var(--accent-card-footer-border-color);\n      }\n      :host(:not([horizontal]):not([no-border])) section {\n        border-top: 4px solid var(--accent-card-border-color);\n      }\n      :host([horizontal]:not([no-border])) section {\n        border-left: 4px solid var(--accent-card-border-color);\n      }\n      :host .body {\n        flex-grow: 1;\n        @apply --accent-card-body;\n      }\n      :host .image {\n        background-size: cover; \n        background-position-x: var(--accent-card-image-x, center); \n        background-position-y: var(--accent-card-image-y, center);\n      }\n      :host(:not([horizontal])) .image {\n        height: var(--accent-card-image-height, 100px);\n        @apply --accent-card-vertical-image;\n      }\n      :host([horizontal]) .image {\n        width: var(--accent-card-image-width, 100px);;\n        @apply --accent-card-horizontal-image;\n      }\n      :host .heading {\n        padding-top: var(--accent-card-margin, 20px);\n        padding-left: var(--accent-card-margin, 20px);\n        padding-right: var(--accent-card-margin, 20px);\n        padding-bottom: 0;\n        margin: 0;\n        @apply --accent-card-heading;\n      }\n      :host section[aria-role]:not([disabled]):focus .heading,\n      :host section[aria-role]:not([disabled]):hover .heading {\n        @apply --accent-card-focus-heading;\n      }\n      :host([accent-heading][accent-color]) .heading {\n        color: var(--accent-card-heading-color);\n      }\n      :host .subheading {\n        font-size: 90%;\n        font-style: italic;\n        padding-left: var(--accent-card-margin, 20px);\n        padding-right: var(--accent-card-margin, 20px);\n        @apply --accent-card-subheading;\n      }\n      :host .content {\n        padding: var(--accent-card-margin, 20px);\n        @apply --accent-card-content;\n      }\n      :host .content:not(:last-child) {\n        border-bottom: 1px solid var(--accent-card-footer-border-color);\n      }\n    </style>\n    <section id="card" aria-role\\$="[[button]]" disabled\\$="[[disabled]]" tabindex\\$="[[__tabindex]]">\n      <div class="image" style\\$="[[__backgroundStyle]]"></div>\n      <div class="body">\n        <template is="dom-if" if="[[__hasHeading]]" restamp="">\n          <h1 class="heading">[[heading]]</h1>\n        </template>\n        <div class="subheading"><slot name="subheading"></slot></div>\n        <div class="content"><slot name="content"></slot></div>\n        <slot name="footer"></slot>\n      </div>\n    </section>\n    <iron-a11y-keys id="a11y" target\\$="[[__target]]" keys="enter space" on-keys-pressed="_handleTap"></iron-a11y-keys>\n'
      ]
    );
    _templateObject_ee907770e11811e89751417e64b96847 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_ee907770e11811e89751417e64b96847()
    ),
    is: "accent-card",
    behaviors: [
      HAXBehaviors.PropertiesBehaviors,
      simpleColorsBehaviors,
      SchemaBehaviors.Schema
    ],
    listeners: { tap: "_handleTap" },
    properties: {
      accentBackground: { type: Boolean, value: !1, reflectToAttribute: !0 },
      accentHeading: { type: Boolean, value: !1, reflectToAttribute: !0 },
      button: { type: Boolean, value: !1, reflectToAttribute: !0 },
      disabled: { type: Boolean, value: !1, reflectToAttribute: !0 },
      flat: { type: Boolean, value: !1, reflectToAttribute: !0 },
      heading: { type: String, value: null },
      horizontal: { type: Boolean, value: !1, reflectToAttribute: !0 },
      imageSrc: { type: String, value: null },
      noBorder: { type: Boolean, value: !1, reflectToAttribute: !0 },
      __backgroundStyle: {
        type: String,
        computed: "_getBackgroundStyle(imageSrc)"
      },
      __hasHeading: { type: String, computed: "_hasProp(heading)" },
      __tabindex: { type: Number, computed: "_getTabindex(button)" }
    },
    attached: function attached() {
      this.__target = this.$.card;
      this.setHaxProperties({
        canEditSource: !1,
        gizmo: {
          title: "Accent Card",
          description: "A card with optional accent styling.",
          icon: "image:crop-landscape",
          color: "grey",
          groups: ["Media", "Text"],
          handles: [
            { type: "media", url: "source" },
            { type: "text", url: "source" }
          ],
          meta: { author: "LRNWebComponents" }
        },
        settings: {
          quick: [
            {
              property: "imageSrc",
              title: "Image",
              description: "Optional image",
              inputMethod: "textfield",
              icon: "editor:insert-photo"
            },
            {
              property: "heading",
              title: "Heading",
              description: "Optional heading",
              inputMethod: "textfield",
              icon: "editor:title"
            },
            {
              property: "content",
              title: "Content",
              description: "content",
              inputMethod: "textfield",
              icon: "editor:format-align-left"
            },
            {
              property: "accentColor",
              title: "Accent Color",
              description: "Accent Color",
              inputMethod: "colorpicker",
              icon: "editor:format-color-fill"
            },
            {
              property: "dark",
              title: "Dark Theme",
              description: "Use dark theme?",
              inputMethod: "toggle"
            }
          ],
          configure: [
            {
              property: "accentHeading",
              title: "Heading Accent",
              description: "Apply the accent color to the heading?",
              inputMethod: "toggle"
            },
            {
              property: "accentBackground",
              title: "Background Accent",
              description: "Apply the accent color to the card background?",
              inputMethod: "toggle"
            },
            {
              property: "accentBackground",
              title: "No Border Accent",
              description: "Remove the border accent?",
              inputMethod: "toggle"
            }
          ],
          advanced: []
        }
      });
    },
    ready: function ready() {
      this.__target = this.$.card;
    },
    _handleTap: function _handleTap() {
      var root = this;
      if (!1 !== root.button && !root.disabled) {
        root.fire("accent-card-tap", root);
      }
    },
    _hasProp: function _hasProp(prop) {
      return prop !== void 0 && null !== prop;
    },
    _getTabindex: function _getTabindex(button) {
      if (!1 !== button) {
        return 0;
      } else {
        return null;
      }
    },
    _getBackgroundStyle: function _getBackgroundStyle(imageSrc) {
      if (this._hasProp(imageSrc)) {
        return "background-image: url(" + imageSrc + ");";
      } else {
        return "display: none;";
      }
    }
  });
});
