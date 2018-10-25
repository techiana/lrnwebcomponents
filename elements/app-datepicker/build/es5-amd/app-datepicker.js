define([
  "./lib/app-datepicker-icons.js",
  "./lib/app-datepicker-animations.js"
], function() {
  "use strict";
  var $_documentContainer = document.createElement("div");
  $_documentContainer.setAttribute("style", "display: none;");
  $_documentContainer.innerHTML =
    '<dom-module id="app-datepicker">\n  <template strip-whitespace="">\n    <style>\n      :host {\n        display: block;\n        position: relative;\n        box-sizing: border-box;\n\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        background: var(--app-datepicker-bg, #fafafa);\n\n        @apply --app-datepicker;\n      }\n\n      * {\n        box-sizing: border-box;\n      }\n\n      .datepicker {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        -ms-flex-direction: column;\n        -webkit-flex-direction: column;\n        flex-direction: column;\n\n        position: relative;\n        width: 300px;\n        height: 384px;\n        max-height: 384px;\n      }\n      .datepicker.with-buttons {\n        height: 431px;\n        max-height: 431px;\n      }\n\n      iron-selector.selected-fulldate {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        -ms-flex-direction: column;\n        -webkit-flex-direction: column;\n        flex-direction: column;\n\n        min-height: 84px;\n        padding: 8px 16px;\n        color: var(--app-datepicker-selection-color, #b2dfdb);\n        background-color: var(--app-datepicker-selection-bg, #009688);\n      }\n      .selected-year.iron-selected,\n      .selected-date.iron-selected {\n        color: var(--app-datepicker-iron-selected, #fefefe);\n      }\n      .selected-year {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n\n        font-size: 14px;\n        font-weight: 800;\n        height: 34px;\n\n        @apply --app-datepicker-selected-year;\n      }\n      .selected-date {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n        -ms-flex: 1 1 auto;\n        -webkit-flex: 1 1 auto;\n        flex: 1 1 auto;\n\n        font-size: 32px;\n        font-weight: 800;\n\n        @apply --app-datepicker-selected-date;\n      }\n      .selected-year:hover,\n      .selected-date > div:hover {\n        cursor: pointer;\n      }\n\n      neon-animated-pages.fullcalendar {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        -ms-flex-direction: column;\n        -webkit-flex-direction: column;\n        flex-direction: column;\n\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n        color: var(--app-datepicker-calendar-color, #000);\n        background-color: var(--app-datepicker-calendar-bg, #fafafa);\n      }\n      .navigator {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n        -ms-flex-pack: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n\n        max-height: 46px;\n        padding: 3px 10px;\n        position: relative;\n        margin-top: 8px;\n      }\n      .nav-month-year {\n        -ms-flex: 1 1 auto;\n        -webkit-flex: 1 1 auto;\n        flex: 1 1 auto;\n\n        font-size: 14px;\n        font-weight: 500;\n        text-align: center;\n\n        @apply --app-datepicker-nav-month-year;\n      }\n      .days-of-week {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n        -ms-flex-pack: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n\n        color: var(--app-datepicker-weekdays-color, #848484);\n        font-size: 12px;\n\n        @apply --app-datepicker-days-of-week;\n      }\n      .each-days-of-week {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n        -ms-flex-pack: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n\n        padding: 13px;\n        max-height: 32px;\n        width: 41px;\n      }\n      .days-of-month {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n        -ms-flex-wrap: wrap;\n        -webkit-flex-wrap: wrap;\n        flex-wrap: wrap;\n        -ms-flex-pack: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n\n        font-size: 13px;\n\n        @apply --app-datepicker-days-of-month;\n      }\n      .each-days-of-month {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n        -ms-flex-pack: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n\n        position: relative;\n        height: 35px;\n        width: 35px;\n        margin-left: 3px;\n        margin-right: 3px;\n      }\n      div > .days-of-month > .each-days-of-month.chosen-days-of-month {\n        border-radius: 50%;\n        background-color: var(--app-datepicker-selected-day-bg, #009688);\n        color: var(--app-datepicker-selected-day-color, #fff);\n      }\n      .days-of-month > .each-days-of-month.is-today {\n        color: var(--app-datepicker-today-color, #009688);\n      }\n      .days-of-month > .each-days-of-month.is-disabled-day {\n        color: var(--app-datepicker-disabled-color, #9e9e9e);\n      }\n\n\n      /* outline: none for non-selectable and disabled days */\n      .days-of-month > .each-days-of-month.is-disabled-day,\n      .days-of-month > .each-days-of-month.is-non-selectable {\n        outline: none;\n      }\n      /* Date hover styling */\n      .days-of-month > .each-days-of-month:hover:not(.is-disabled-day):not(.is-non-selectable):not(.chosen-days-of-month),\n      .days-of-month > .each-days-of-month:focus:not(.is-disabled-day):not(.is-non-selectable):not(.chosen-days-of-month) {\n        color: var(--app-datepicker-date-hover-color, #f5f5f5);\n        background-color: var(--app-datepicker-date-hover-background-color, #80cbc4);\n        border-radius: 50%;\n        cursor: pointer;\n      }\n      :host(.dark-theme) .days-of-month >  .each-days-of-month:hover:not(.is-disabled-day):not(.is-non-selectable):not(.chosen-days-of-month),\n      :host(.dark-theme) .days-of-month >  .each-days-of-month:focus:not(.is-disabled-day):not(.is-non-selectable):not(.chosen-days-of-month) {\n        color: var(--app-datepicker-date-hover-color, #777);\n        background-color: var(--app-datepicker-date-hover-background-color, #b2dfdb);\n      }\n      :host(.goog-theme) .days-of-month > .each-days-of-month:hover:not(.is-disabled-day):not(.is-non-selectable):not(.chosen-days-of-month),\n      :host(.goog-theme) .days-of-month > .each-days-of-month:focus:not(.is-disabled-day):not(.is-non-selectable):not(.chosen-days-of-month) {\n        color: var(--app-datepicker-date-hover-color, #f5f5f5);\n        background-color: var(--app-datepicker-date-hover-background-color, #e57373);\n      }\n\n      /* Focus ring styling - replace outline with background-color */\n      .each-list-of-years:focus,\n      .each-days-of-month:focus {\n        outline: 0;\n      }\n      .each-list-of-years:focus,\n      .each-list-of-years:hover,\n      .each-list-of-years.is-selected:focus,\n      .each-list-of-years.is-selected:hover {\n        font-weight: 700;\n        background-color: var(--app-datepicker-year-hover-background-color, #e0e0e0);\n\n        @apply --app-datepicker-year-hover;\n      }\n      :host(.dark-theme) .each-list-of-years:focus,\n      :host(.dark-theme) .each-list-of-years:hover,\n      :host(.dark-theme) .each-list-of-years.is-selected:focus,\n      :host(.dark-theme) .each-list-of-years.is-selected:hover {\n        font-weight: 700;\n        background-color: var(--app-datepicker-year-hover-background-color, #616161);\n\n        @apply --app-datepicker-year-hover;\n      }\n      :host(.goog-theme) .each-list-of-years:focus,\n      :host(.goog-theme) .each-list-of-years:hover,\n      :host(.goog-theme) .each-list-of-years.is-selected:focus,\n      :host(.goog-theme) .each-list-of-years.is-selected:hover {\n        font-weight: 700;\n        background-color: var(--app-datepicker-year-hover-background-color, #424242);\n\n        @apply --app-datepicker-year-hover;\n      }\n\n      .each-list-of-years {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n        -ms-flex-align: center;\n        -webkit-align-items: center;\n        align-items: center;\n        -ms-flex-pack: center;\n        -webkit-justify-content: center;\n        justify-content: center;\n\n        height: 64px;\n        font-size: 16px;\n\n        @apply --app-datepicker-each-list-of-years;\n      }\n      .each-list-of-years:hover {\n        cursor: pointer;\n      }\n      .each-list-of-years.is-selected {\n        font-size: 24px;\n        font-weight: 700;\n        color: var(--app-datepicker-selected-year-color, #009688);\n        background-color: var(--app-datepicker-selected-year-bg);\n\n        @apply --app-datepicker-selected-each-list-of-years;\n      }\n\n      /* paper-icon-button */\n      paper-icon-button {\n        color: var(--app-datepicker-icon-button-color, #737373);\n        --paper-icon-button-ink-color: var(--app-datepicker-icon-button-ink-color, #737373);\n      }\n\n      /* content tag selector */\n      .buttons {\n        display: -ms-flexbox;\n        display: -webkit-flex;\n        display: flex;\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n        -ms-flex-pack: end;\n        -webkit-justify-content: flex-end;\n        justify-content: flex-end;\n\n        color: var(--app-datepicker-button-color, #009688);\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n        font-size: 12px;\n        font-weight: 500;\n\n        --paper-button-ink-color: var(--app-datepicker-button-ink-color, #737373);\n\n        @apply --app-datepicker-buttons;\n      }\n\n      /* will-change: transform, however lag on the first time */\n      .nav-month-year,\n      .days-of-week,\n      .days-of-month {\n        will-change: transform;\n        -webkit-transform: translate3d(0px, 0px, 0px);\n                transform: translate3d(0px, 0px, 0px);\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden;\n      }\n\n      iron-list {\n        --iron-list-items-container: {\n          -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n          -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n        };\n      }\n\n      /* landscape */\n      @media all and (orientation: landscape) {\n        :host(.horizontal-view) #dp.datepicker,\n        :host(:not(.vertical-view)) #dp.datepicker {\n          display: -ms-flexbox;\n          display: -webkit-flex;\n          display: flex;\n          -ms-flex-direction: row;\n          -webkit-flex-direction: row;\n          flex-direction: row;\n\n          width: 512px;\n          height: 241px;\n        }\n        :host(.horizontal-view) #dp.datepicker.with-buttons,\n        :host(:not(.vertical-view)) #dp.datepicker.with-buttons {\n          height: 288px;\n        }\n        :host(.horizontal-view) iron-selector.selected-fulldate,\n        :host(:not(.vertical-view)) iron-selector.selected-fulldate {\n          /* Fixed for IE11, Edge */\n          min-width: 164px;\n          width: calc(100% / 3 + 48px);\n          max-width: 164px;\n          height: 100%;\n        }\n        :host(:not(.vertical-view)) .selected-date {\n          display: -ms-flexbox;\n          display: -webkit-flex;\n          display: flex;\n          -ms-flex-direction: column;\n          -webkit-flex-direction: column;\n          flex-direction: column;\n          -ms-flex-align: start;\n          -webkit-align-items: flex-start;\n          align-items: flex-start;\n          -ms-flex-pack: start;\n          -webkit-justify-content: flex-start;\n          justify-content: flex-start;\n        }\n        /* Fix for IE11 */\n        :host(:not(.vertical-view)) .selected-date > div {\n          width: 100%;\n          word-wrap: break-word;\n        }\n        /* Hack for Edge 12+ */\n        @supports (-ms-accelerator:true) {\n          :host(:not(.vertical-view)) .selected-date > div {\n            white-space: pre-wrap;\n          }\n        }\n\n        :host(.horizontal-view) neon-animated-pages.fullcalendar,\n        :host(:not(.vertical-view)) neon-animated-pages.fullcalendar {\n          height: 100%;\n        }\n        :host(.horizontal-view) .calendar-view,\n        :host(:not(.vertical-view)) .calendar-view {\n          padding-bottom: 0;\n        }\n        :host(.horizontal-view) .navigator,\n        :host(:not(.vertical-view)) .navigator {\n          padding: 2px 10px;\n          margin-top: 0;\n        }\n        :host(.horizontal-view) .each-days-of-week,\n        :host(:not(.vertical-view)) .each-days-of-week {\n          width: calc(100% / 7 - 20px);\n          padding: 0;\n          margin-left: 10px;\n          margin-right: 10px;\n        }\n        :host(:not(.vertical-view)) .days-of-month {\n          margin-top: 8px;\n        }\n        :host(.horizontal-view) .each-days-of-month,\n        :host(:not(.vertical-view)) .each-days-of-month {\n          height: 29px;\n          margin-left: 10px;\n          margin-right: 10px;\n          width: calc(100% / 7 - 20px);\n        }\n      }\n      /* End of landscape @media */\n\n      /* dark-theme */\n      :host(.dark-theme) {\n        background-color: var(--app-datepicker-bg, #424242);\n      }\n      :host(.dark-theme) iron-selector.selected-fulldate {\n        color: var(--app-datepicker-selection-color, #9e9e9e);\n        background-color: var(--app-datepicker-selection-bg, #555);\n      }\n      :host(.dark-theme) .selected-year.iron-selected,\n      :host(.dark-theme) .selected-date.iron-selected {\n        color: var(--app-datepicker-iron-selected, #f5f5f5);\n      }\n      :host(.dark-theme) neon-animated-pages.fullcalendar {\n        color: var(--app-datepicker-calendar-color, #f5f5f5);\n        background-color: var(--app-datepicker-calendar-bg, #424242);\n      }\n      :host(.dark-theme) .days-of-week {\n        color: var(--app-datepicker-weekdays-color, #7c7c7c);\n      }\n      :host(.dark-theme) div > .days-of-month > .each-days-of-month.chosen-days-of-month {\n        color: var(--app-datepicker-selected-day-color, #555);\n        background-color: var(--app-datepicker-selected-day-bg, #80cbc4);\n      }\n      :host(.dark-theme) .days-of-month > .each-days-of-month.is-today {\n        color: var(--app-datepicker-today-color, #80cbc4);\n      }\n      :host(.dark-theme) .days-of-month > .each-days-of-month.is-disabled-day {\n        color: var(--app-datepicker-disabled-color, #ffff00);\n      }\n      :host(.dark-theme) .each-list-of-years.is-selected {\n        background-color: var(--app-datepicker-selected-year-bg, rgba(0, 0, 0, 0));\n        color: var(--app-datepicker-selected-year-color, #80cbc4);\n        font-size: 26px;\n        font-weight: 500;\n      }\n      :host(.dark-theme) paper-icon-button {\n        color: var(--app-datepicker-icon-button-color, #ffff00);\n        --paper-icon-button-ink-color: var(--app-datepicker-icon-button-ink-color, #212121);\n      }\n      :host(.dark-theme) ::slotted(paper-button) {\n        color: var(--app-datepicker-button-color, #80cbc4);\n        --paper-button-ink-color: var(--app-datepicker-button-ink-color, #bcbcbc);\n      }\n\n      /* goog theme */\n      :host(.goog-theme) {\n        background-color: var(--app-datepicker-bg, #212121);\n      }\n\n      :host(.goog-theme) iron-selector.selected-fulldate {\n        color: var(--app-datepicker-selection-color, #fff);\n        background-color: var(--app-datepicker-selection-bg, #212121);\n      }\n      :host(.goog-theme) .selected-year.iron-selected,\n      :host(.goog-theme) .selected-date.iron-selected {\n        color: var(--app-datepicker-iron-selected, #DA4336);\n      }\n      :host(.goog-theme) neon-animated-pages.fullcalendar {\n        color: var(--app-datepicker-calendar-color, #fff);\n        background-color: var(--app-datepicker-calendar-bg, #212121);\n      }\n      :host(.goog-theme) .days-of-week {\n        color: var(--app-datepicker-weekdays-color, #9e9e9e);\n      }\n      :host(.goog-theme) div > .days-of-month > .each-days-of-month.chosen-days-of-month {\n        color: var(--app-datepicker-selected-day-color, #fff);\n        background-color: var(--app-datepicker-selected-day-bg, #DA4336);\n      }\n      :host(.goog-theme) .days-of-month > .each-days-of-month.is-today {\n        color: var(--app-datepicker-today-color, #DA4336);\n      }\n      :host(.goog-theme) .days-of-month > .each-days-of-month.is-disabled-day {\n        color: var(--app-datepicker-disabled-color, #646464);\n      }\n      :host(.goog-theme) .each-list-of-years.is-selected {\n        background-color: var(--app-datepicker-selected-year-bg, rgba(0, 0, 0, 0));\n        color: var(--app-datepicker-selected-year-color, #DA4336);\n        font-size: 26px;\n        font-weight: 500;\n      }\n      :host(.goog-theme) paper-icon-button {\n        color: var(--app-datepicker-icon-button-color, #DA4336);\n        --paper-icon-button-ink-color: var(--app-datepicker-icon-button-ink-color, #616161);\n      }\n      :host(.goog-theme) ::slotted(paper-button) {\n        color: var(--app-datepicker-button-color, #DA4336);\n        --paper-button-ink-color: var(--app-datepicker-button-ink-color, #616161);\n      }\n    </style>\n\n    <div id="dp" class="datepicker">\n      <iron-selector class="selected-fulldate" selected="{{_activeView}}" attr-for-selected="view" on-selected-changed="_onIronSelectorSelectedChanged" fallback-selection="calendar">\n        <div id="showSelectedYear" class="selected-year" tabindex="0" view="year" aria-label="year view">\n          [[_showSelectedYear]]\n        </div>\n        <div class="selected-date" view="calendar" tabindex="0">\n          <div aria-label="calendar view">[[_shortSelectedDate]]</div>\n        </div>\n      </iron-selector>\n\n      <neon-animated-pages class="fullcalendar" selected="[[_activeView]]" attr-for-selected="view" entry-animation="[[pageEntryAnimation]]" exit-animation="[[pageExitAnimation]]" on-neon-animation-finish="_onAnimationFinish">\n        <div class="calendar-view" view="calendar">\n          <div class="navigator">\n            <paper-icon-button icon="datepicker:chevron-left" on-tap="_decrementMonth" noink="[[noAnimation]]"></paper-icon-button>\n            <div id="navMonthYear" class="nav-month-year">\n              [[_activeMonthYear]]\n            </div>\n            <paper-icon-button icon="datepicker:chevron-right" on-tap="_incrementMonth" noink="[[noAnimation]]"></paper-icon-button>\n          </div>\n\n          <div id="daysOfWeek" class="days-of-week">\n            <template is="dom-repeat" items="[[_daysOfWeek]]" index-as="index" strip-whitespace="">\n              <div class="each-days-of-week">\n                [[item]]\n              </div>\n            </template>\n          </div>\n\n          <div id="daysOfMonth" class="days-of-month" on-tap="_chooseDaysOfMonth">\n            <template is="dom-repeat" items="[[_daysOfMonth]]" index-as="index" strip-whitespace="">\n              <div class$="each-days-of-month[[_isToday(item.index, _activeYear, _activeMonth)]][[_isEmptyDate(item.index)]][[_isChosenDaysOfMonth(item.index, _selectedYear, _selectedMonth, _selectedDate)]][[_isDisableDays(index, firstDayOfWeek, minDate, maxDate, item.index, _shiftedDisableDays.*, disableDates.*)]]" index="[[index]]" date="[[item.index]]" tabindex$="[[_shouldTabIndex(index, firstDayOfWeek, minDate, maxDate, item.index, _shiftedDisableDays.*, disableDates.*)]]" aria-disabled$="[[_shouldAriaDisabled(index, firstDayOfWeek, minDate, maxDate, item.index, _shiftedDisableDays.*, disableDates.*)]]" aria-label$="[[item.index]]">\n                [[item.date]]\n              </div>\n            </template>\n          </div>\n\n          <div class="buttons">\n            <slot name="dismiss-button"></slot>\n            <slot name="confirm-button"></slot>\n          </div>\n        </div>\n\n        <template is="dom-if" if="[[_isListRendered]]" restamp="true" on-dom-change="_onListRendered" strip-whitespace="">\n          <iron-list id="listOfYears" items="[[_listOfYears]]" view="year" on-neon-animation-finish="_onAnimationFinish" selection-enabled="">\n            <template strip-whitespace="">\n              <div class$="each-list-of-years[[_isListOfYearsSelected(_selectedYear, item.year)]]" tabindex$="[[tabIndex]]" aria-label$="[[item.year]]" label$="[[item.year]]" on-tap="_goCalendar" on-keydown="_goCalendar">\n                [[item.year]]\n              </div>\n            </template>\n          </iron-list>\n        </template>\n      </neon-animated-pages>\n\n    </div>\n  </template>\n\n  \n</dom-module>';
  document.head.appendChild($_documentContainer);
  Polymer({
    is: "app-datepicker",
    behaviors: [Polymer.NeonAnimationRunnerBehavior],
    properties: {
      locale: {
        type: String,
        value: function value() {
          if (window.Intl) {
            return (
              (window.Intl &&
                window.Intl.DateTimeFormat &&
                window.Intl.DateTimeFormat().resolvedOptions &&
                window.Intl.DateTimeFormat().resolvedOptions().locale) ||
              "en-US"
            );
          }
          return "en-US";
        }
      },
      view: String,
      theme: String,
      firstDayOfWeek: { type: Number, value: 0 },
      disableDays: {
        type: Array,
        value: function value() {
          return [6, 0];
        }
      },
      disableDates: {
        type: Array,
        value: function value() {
          return [];
        }
      },
      minDate: { type: String, value: "1000/00/01" },
      maxDate: { type: String, value: "9999/99/99" },
      format: { type: String, value: "yyyy/mm/dd" },
      date: { type: String, notify: !0, readOnly: !0 },
      inputDate: String,
      noAnimation: Boolean,
      pageEntryAnimation: String,
      pageExitAnimation: String,
      showLongDate: { type: Boolean, value: !1 },
      invalidDate: { type: Boolean, notify: !0, readOnly: !0 },
      autoUpdateDate: { type: Boolean, value: !1 },
      alwaysResetSelectedDateOnDialogClose: Boolean,
      _monthNames: {
        type: Array,
        value: function value() {
          return [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ];
        }
      },
      _shiftedDisableDays: { type: Array, value: [6, 0] },
      _activeMonthYear: String,
      _shortSelectedDate: String,
      _showSelectedYear: String,
      _daysOfWeek: Array,
      _daysOfMonth: Array,
      _listOfYears: Array,
      _activeView: { type: String, value: "calendar" },
      _activeYear: {
        type: Number,
        value: function value() {
          return new Date().getFullYear();
        }
      },
      _activeMonth: {
        type: Number,
        value: function value() {
          return new Date().getMonth();
        }
      },
      _isIncrementMonth: Boolean,
      _isDecrementMonth: Boolean,
      _selectedYear: {
        type: Number,
        value: function value() {
          return new Date().getFullYear();
        }
      },
      _selectedMonth: {
        type: Number,
        value: function value() {
          return new Date().getMonth();
        }
      },
      _selectedDate: {
        type: Number,
        value: function value() {
          return new Date().getDate();
        }
      },
      _chosenDaysOfMonth: {
        type: Number,
        value: function value() {
          return new Date().getDate();
        }
      },
      _isListRendered: { type: Boolean, value: !1 },
      _isSelectedDateConfirmed: Boolean,
      _format: {
        type: Object,
        value: function value() {
          return { y: "yyyy", m: "mm", d: "dd", s1: "/", s2: "/" };
        }
      }
    },
    observers: [
      "_computeDaysOfMonth(_activeYear, _activeMonth, firstDayOfWeek, locale)",
      "_computeSeparateFormat(format)",
      "_computeShowLongDate(showLongDate, locale)",
      "_updateToReflectExternalChange(inputDate)",
      "_updateThemeColor(theme)",
      "_updateDatepickerView(view)",
      "_computeDaysOfWeek(firstDayOfWeek, locale)",
      "_computeActiveMonthYear(_activeYear, _activeMonth, locale)",
      "_computeShortSelectedDate(_selectedYear, _selectedMonth, _selectedDate, locale)",
      "_computeShowSelectedYear(_selectedYear, locale)",
      "_computeShiftedDisableDays(firstDayOfWeek, disableDays.*)"
    ],
    attached: function attached() {
      if (!this.noAnimation) {
        this.set("animationConfig", {
          incrementEntry: [
            { name: "slide-from-right-animation", node: this.$.daysOfWeek },
            { name: "slide-from-right-animation", node: this.$.daysOfMonth },
            {
              name: "datepicker-slide-from-right-animation",
              node: this.$.navMonthYear
            }
          ],
          decrementEntry: [
            { name: "slide-from-left-animation", node: this.$.daysOfWeek },
            { name: "slide-from-left-animation", node: this.$.daysOfMonth },
            {
              name: "datepicker-slide-from-left-animation",
              node: this.$.navMonthYear
            }
          ]
        });
        this.set("pageEntryAnimation", "fade-in-animation");
        this.set("pageExitAnimation", "fade-out-animation");
      }
      var effectiveChildren = this.getEffectiveChildren();
      if (effectiveChildren && 0 < effectiveChildren.length) {
        for (var i = 0; i < effectiveChildren.length; i++) {
          if (effectiveChildren[i].hasAttribute("dialog-confirm")) {
            effectiveChildren[i].addEventListener(
              "tap",
              this._updateBindDate.bind(this)
            );
            effectiveChildren[i].addEventListener(
              "transitionend",
              this._updateBindDate.bind(this)
            );
          }
          this._updateDistributedButtonInkColorCustomProp(
            effectiveChildren[i],
            "#737373"
          );
        }
        this.$.dp.classList.add("with-buttons");
      } else {
        this.$.dp.classList.remove("with-buttons");
      }
      this.fire("app-datepicker-attached");
    },
    _computeDaysOfMonth: function _computeDaysOfMonth(
      _activeYear,
      _activeMonth,
      _firstDayOfWeek,
      _locale
    ) {
      if (!window.Intl) {
        return;
      }
      var _start = new Date(_activeYear, _activeMonth, 1).getDay(),
        _daysOfMonth = [],
        _totalDays = (function(_year, _month) {
          var _totalDaysOfMonth = new Date(_year, _month + 1, 0).getDate();
          return _totalDaysOfMonth;
        })(_activeYear, _activeMonth);
      if (0 < _firstDayOfWeek && 7 > _firstDayOfWeek) {
        _start = _start - _firstDayOfWeek;
        _start = 0 > _start ? 7 + _start : _start;
      }
      _locale =
        _locale ||
        (window.Intl &&
          window.Intl.DateTimeFormat &&
          window.Intl.DateTimeFormat().resolvedOptions &&
          window.Intl.DateTimeFormat().resolvedOptions().locale) ||
        "en-US";
      for (
        var _formatter =
            window.Intl && window.Intl.DateTimeFormat
              ? new window.Intl.DateTimeFormat(_locale, {
                  timeZone: "UTC",
                  day: "numeric"
                }).format
              : function(date) {
                  return date.getDate();
                },
          i = 0,
          j = 1 - _start;
        42 > i;
        i++, j++
      ) {
        var _formatted = _formatter(Date.UTC(_activeYear, _activeMonth, j)),
          _dateObj = { date: "", index: "" };
        if ((i >= _start) & (i < _start + _totalDays)) {
          _dateObj.date = _formatted;
          _dateObj.index = j;
        }
        _daysOfMonth.push(_dateObj);
      }
      this.set(
        "_chosenDaysOfMonth",
        this._computeChosenDaysOfMonth(_daysOfMonth, this._selectedDate)
      );
      this.set("_daysOfMonth", _daysOfMonth);
    },
    _computeShiftedDisableDays: function _computeShiftedDisableDays(
      _firstDayOfWeek
    ) {
      _firstDayOfWeek =
        0 < _firstDayOfWeek && 7 > _firstDayOfWeek ? _firstDayOfWeek : 0;
      var _sdd = this.disableDays.map(function(_day) {
        _day = _day - _firstDayOfWeek;
        return 0 > _day ? 7 + _day : _day;
      });
      this.set("_shiftedDisableDays", _sdd);
    },
    _incrementMonth: function _incrementMonth() {
      this.debounce(
        "_incrementMonth",
        function() {
          this.set("_isIncrementMonth", !0);
          window.requestAnimationFrame(
            function() {
              var _month = this._activeMonth;
              if (0 === ++_month % 12) {
                this._activeYear++;
              }
              this.set("_activeMonth", _month % 12);
              if (!this.noAnimation) {
                this.cancelAnimation();
                this.playAnimation("incrementEntry");
              }
              this.set("_isIncrementMonth", !1);
            }.bind(this)
          );
        },
        100
      );
    },
    _decrementMonth: function _decrementMonth() {
      this.debounce(
        "_decrementMonth",
        function() {
          this.set("_isDecrementMonth", !0);
          window.requestAnimationFrame(
            function() {
              var _month = this._activeMonth;
              if (0 > --_month) {
                this._activeYear--;
                _month = 11;
              }
              this.set("_activeMonth", _month);
              if (!this.noAnimation) {
                this.cancelAnimation();
                this.playAnimation("decrementEntry");
              }
              this.set("_isDecrementMonth", !1);
            }.bind(this)
          );
        },
        100
      );
    },
    _computeActiveMonthYear: function _computeActiveMonthYear(
      _activeYear,
      _activeMonth,
      _locale
    ) {
      if (window.Intl) {
        _locale =
          _locale ||
          (window.Intl &&
            window.Intl.DateTimeFormat &&
            window.Intl.DateTimeFormat().resolvedOptions &&
            window.Intl.DateTimeFormat().resolvedOptions().locale) ||
          "en-US";
        var _amy = new window.Intl.DateTimeFormat(_locale, {
          timeZone: "UTC",
          month: "short",
          year: "numeric"
        }).format(Date.UTC(_activeYear, _activeMonth, 1));
        this.set("_activeMonthYear", _amy);
      }
    },
    _computeShortSelectedDate: function _computeShortSelectedDate(
      _selectedYear,
      _selectedMonth,
      _selectedDate,
      _locale
    ) {
      if (window.Intl) {
        _locale =
          _locale ||
          (window.Intl &&
            window.Intl.DateTimeFormat &&
            window.Intl.DateTimeFormat().resolvedOptions &&
            window.Intl.DateTimeFormat().resolvedOptions().locale) ||
          "en-US";
        var _ssd = new window.Intl.DateTimeFormat(_locale, {
          timeZone: "UTC",
          weekday: "short",
          month: "short",
          day: "numeric"
        }).format(Date.UTC(_selectedYear, _selectedMonth, _selectedDate));
        this.set("_shortSelectedDate", _ssd);
        if (this.autoUpdateDate) {
          this.enforceDateChange();
        }
      }
    },
    _computeShowSelectedYear: function _computeShowSelectedYear(
      _selectedYear,
      _locale
    ) {
      if (window.Intl) {
        _locale =
          _locale ||
          (window.Intl &&
            window.Intl.DateTimeFormat &&
            window.Intl.DateTimeFormat().resolvedOptions &&
            window.Intl.DateTimeFormat().resolvedOptions().locale) ||
          "en-US";
        var _ssy = new window.Intl.DateTimeFormat(_locale, {
          timeZone: "UTC",
          year: "numeric"
        }).format(Date.UTC(_selectedYear, 0, 1));
        this.set("_showSelectedYear", _ssy);
      }
    },
    _chooseDaysOfMonth: function _chooseDaysOfMonth(ev) {
      var _target = ev.target;
      if (
        _target &&
        this._isNumber(_target.date) &&
        !_target.classList.contains("is-disabled-day")
      ) {
        this.set("_chosenDaysOfMonth", _target.index);
        this.set("_selectedYear", this._activeYear);
        this.set("_selectedDate", _target.date);
        this.set("_selectedMonth", this._activeMonth);
      }
    },
    _isToday: function(_item, _activeYear, _activeMonth) {
      var _now = new Date(),
        _isToday =
          _item === _now.getDate() &&
          _activeYear === _now.getFullYear() &&
          _activeMonth === _now.getMonth();
      return _isToday ? " is-today" : "";
    },
    _isEmptyDate: function _isEmptyDate(_item) {
      return this._isNumber(_item) ? "" : " is-non-selectable";
    },
    _isChosenDaysOfMonth: function(
      _item,
      _selectedYear,
      _selectedMonth,
      _selectedDate
    ) {
      var _isChosenDaysOfMonth =
        0 <= this._chosenDaysOfMonth &&
        this._activeYear === _selectedYear &&
        this._activeMonth === _selectedMonth &&
        _item === _selectedDate;
      return _isChosenDaysOfMonth ? " chosen-days-of-month" : "";
    },
    _isDisableDays: function(
      _index,
      _firstDayOfWeek,
      _minDate,
      _maxDate,
      _item
    ) {
      var _isLessThanMinDate = !1,
        _isMoreThanMaxDate = !1,
        _isDisableDay = !1,
        _isDisableDates = !1,
        _isDisableDays = this._shiftedDisableDays.some(function(_n) {
          return _n === _index % 7;
        });
      if (this._isNumber(_item)) {
        var _minDateObj = this._convertDateStringToDateObject(_minDate),
          _maxDateObj = this._convertDateStringToDateObject(_maxDate),
          _currentDate = new Date(this._activeYear, this._activeMonth, _item);
        if (_minDateObj) {
          _isLessThanMinDate = _currentDate.getTime() < _minDateObj.getTime();
        }
        if (_maxDateObj) {
          _isMoreThanMaxDate = _currentDate.getTime() > _maxDateObj.getTime();
        }
        _isDisableDates =
          this.disableDates &&
          this.disableDates.length &&
          this.disableDates.some(
            function(date) {
              var _dateObj = this._convertDateStringToDateObject(date);
              return _dateObj && _currentDate.getTime() === _dateObj.getTime();
            }.bind(this)
          );
      }
      _isDisableDay =
        _isDisableDays ||
        _isDisableDates ||
        _isLessThanMinDate ||
        _isMoreThanMaxDate;
      return _isDisableDay ? " is-disabled-day is-non-selectable" : "";
    },
    _isListOfYearsSelected: function _isListOfYearsSelected(
      selectedYear,
      year
    ) {
      return +selectedYear === +year ? " is-selected" : "";
    },
    _computeDaysOfWeek: function _computeDaysOfWeek(_firstDayOfWeek, _locale) {
      var _dow = ["S", "M", "T", "W", "T", "F", "S"],
        _firstDayOfWeek =
          0 < _firstDayOfWeek && 7 > _firstDayOfWeek ? _firstDayOfWeek : 0;
      if (_locale && window.Intl) {
        _dow = [];
        for (
          var _today = new Date(),
            _offsetDate = _today.getDate() - _today.getDay(),
            _formatter = new window.Intl.DateTimeFormat(_locale, {
              timeZone: "UTC",
              weekday: "narrow"
            }).format,
            newDate = null,
            i = 0;
          7 > i;
          i++
        ) {
          newDate = Date.UTC(
            _today.getFullYear(),
            _today.getMonth(),
            _offsetDate + i
          );
          _dow.push(_formatter(newDate));
        }
      }
      var _sliced = _dow.slice(_firstDayOfWeek),
        _rest = _dow.slice(0, _firstDayOfWeek),
        _concatted = Array.prototype.concat(_sliced, _rest);
      this.set("_daysOfWeek", _concatted);
    },
    _computeChosenDaysOfMonth: function _computeChosenDaysOfMonth(
      _daysOfMonth,
      _selectedDate
    ) {
      for (var _len = _daysOfMonth.length, i = 0; i < _len; i++) {
        if (0 <= i && _daysOfMonth[i].index === _selectedDate) {
          return i;
        }
      }
    },
    _convertDateStringToDateObject: function _convertDateStringToDateObject(
      _date
    ) {
      var _checkDate =
          babelHelpers.instanceof(_date, Date) || "string" !== typeof _date
            ? _date
            : new Date(_date),
        _isValidDate = "Invalid Date" !== _checkDate.toDateString();
      return _isValidDate ? _checkDate : null;
    },
    _updateList: function _updateList() {
      for (var _newList = [], i = 1900; 2100 >= i; i++) {
        _newList.push({ year: i });
      }
      this.set("_listOfYears", _newList);
    },
    _onAnimationFinish: function _onAnimationFinish(ev) {
      var _target = ev.detail;
      if (_target && "IRON-LIST" === _target.toPage.tagName) {
        var _focusableItem = this._updateListScroller(_target.toPage);
        this.async(function() {
          _target.toPage._focusPhysicalItem(_focusableItem);
        }, 1);
      } else {
        this.async(function() {
          this.$.showSelectedYear.focus();
        }, 1);
      }
    },
    _updateListScroller: function _updateListScroller(_list) {
      var _Mathfloor = Math.floor,
        _sl = Polymer.dom(_list.root).querySelector("#items"),
        _slh = _sl.getBoundingClientRect().height || 12863.994140625,
        _sli =
          _Mathfloor(
            (_slh / (2100 - 1900 + 1)) * (this._activeYear - 1900 - 2)
          ) + 1;
      if (
        !this.$.dp.classList.contains("with-buttons") &&
        window.matchMedia("(orientation: landscape)").matches
      ) {
        _sli =
          _Mathfloor(
            (_slh / (2100 - 1900 + 1)) * (this._activeYear - 1900 - 1)
          ) + 1;
      }
      this.async(function() {
        _list.scroll(0, _sli);
        _list.selectItem(this._activeYear - 1900);
      }, 17);
      return this._activeYear - 1900;
    },
    _onIronSelectorSelectedChanged: function _onIronSelectorSelectedChanged(
      ev
    ) {
      if ("year" === ev.detail.value) {
        if (!this._isListRendered) {
          this._updateList();
          this.set("_isListRendered", !0);
        } else {
          if (this.noAnimation) {
            this._updateListScroller(this.$$("#listOfYears"));
          }
        }
      }
    },
    _onListRendered: function _onListRendered(ev) {
      if (ev.target.if && this.noAnimation) {
        this.async(function() {
          this._updateListScroller(this.$$("#listOfYears"));
        }, 1);
      }
    },
    _goCalendar: function _goCalendar(ev) {
      if ("keydown" === ev.type && 13 !== ev.keyCode) {
        return;
      }
      var _selectedYear = ev.model.item.year;
      this.set("_activeYear", _selectedYear);
      this.set("_selectedYear", _selectedYear);
      this.$$("#listOfYears").selectItem(_selectedYear - 1900);
      this.set("_activeView", "calendar");
    },
    _computeSeparateFormat: function _computeSeparateFormat(_format) {
      var re = /^(yyyy|yy|m{1,4}|d{1,2}|do)\W+(yyyy|yy|m{1,4}|d{1,2}|do)\W+(yyyy|yy|m{1,4}|d{1,2}|do)$/g,
        m = re.exec(_format),
        _temp = {},
        _tempArr = [];
      if (null !== m) {
        _tempArr.push(m[1]);
        _tempArr.push(m[2]);
        _tempArr.push(m[3]);
        for (var i = 0, matched; 3 > i; i++) {
          matched = _tempArr[i];
          if (0 <= matched.indexOf("y")) {
            _temp.y = matched;
          } else if (0 <= matched.indexOf("m")) {
            _temp.m = matched;
          } else if (0 <= matched.indexOf("d")) {
            _temp.d = matched;
          }
        }
      }
      if ("d" in _temp && "m" in _temp && "y" in _temp) {
        this.set("_format", _temp);
      }
      _temp = null;
    },
    _bindSelectedFulldate: function _bindSelectedFulldate(
      _selectedYear,
      _selectedMonth,
      _selectedDate,
      _format
    ) {
      if (this.showLongDate) {
        return this._computeShowLongDate(this.showLongDate, this.locale, !0);
      }
      var _formattedYear = _selectedYear,
        _formattedMonth = this._monthNames[_selectedMonth],
        _formattedDate = _selectedDate,
        _finalFormatted = this.format;
      if ("yy" === _format.y) {
        _formattedYear = _selectedYear % 100;
      }
      if ("mmm" === _format.m) {
        _formattedMonth = _formattedMonth.slice(0, 3);
      } else if ("mm" === _format.m) {
        _formattedMonth = this._padStart(_selectedMonth + 1, 2, "0");
      } else if ("m" === _format.m) {
        _formattedMonth = _selectedMonth + 1;
      }
      if ("do" === _format.d) {
        var _cardinalNumber = _formattedDate % 10,
          _suffixOrdinal =
            3 < _cardinalNumber
              ? "th"
              : ["th", "st", "nd", "rd"][_cardinalNumber];
        if (
          11 === _formattedDate ||
          12 == _formattedDate ||
          13 === _formattedDate
        ) {
          _suffixOrdinal = "th";
        }
        _formattedDate = _formattedDate + _suffixOrdinal;
      } else if ("dd" === _format.d) {
        _formattedDate = this._padStart(_formattedDate, 2, "0");
      }
      _finalFormatted = _finalFormatted.replace(_format.y, _formattedYear);
      _finalFormatted = _finalFormatted.replace(_format.m, _formattedMonth);
      _finalFormatted = _finalFormatted.replace(_format.d, _formattedDate);
      return _finalFormatted;
    },
    _updateBindDate: function _updateBindDate(ev) {
      this.debounce(
        "_updateBindDate",
        function() {
          var _type = ev.type;
          if ("tap" === _type) {
            this.set("_isSelectedDateConfirmed", !0);
          }
          if ("transitionend" === _type || this.noAnimation) {
            if (this._isSelectedDateConfirmed) {
              var _sy = this._selectedYear,
                _sm = this._selectedMonth,
                _sd = this._selectedDate,
                _f = this._format,
                _confirmDate = this._bindSelectedFulldate(_sy, _sm, _sd, _f);
              this._setDate(_confirmDate);
              this.set("_isSelectedDateConfirmed", !1);
              if (this.alwaysResetSelectedDateOnDialogClose) {
                this.resetDate();
              }
            }
          }
        },
        1
      );
    },
    _computeShowLongDate: function _computeShowLongDate(
      _showLongDate,
      _locale,
      _returnResult
    ) {
      if (
        !window.Intl ||
        !this._selectedDate ||
        "undefined" === typeof this._selectedDate
      ) {
        return;
      }
      var _selectedDate = this._selectedDate,
        _longDate = Date.UTC(
          this._selectedYear,
          this._selectedMonth,
          _selectedDate
        );
      if (_showLongDate) {
        _locale =
          _locale ||
          (window.Intl &&
            window.Intl.DateTimeFormat &&
            window.Intl.DateTimeFormat().resolvedOptions &&
            window.Intl.DateTimeFormat().resolvedOptions().locale) ||
          "en-US";
        var _options = {
          timeZone: "UTC",
          weekday: this.showLongDate ? "short" : void 0,
          year: "numeric",
          month: this.showLongDate ? "short" : "2-digit",
          day: "2-digit"
        };
        _longDate = new window.Intl.DateTimeFormat(_locale, _options).format(
          _longDate
        );
        if (_returnResult) {
          return _longDate;
        }
        if (window.navigator.msManipulationViewsEnabled) {
          if (_locale || "" === _locale) {
            _longDate = decodeURIComponent(
              encodeURIComponent(_longDate).replace(/\%E2\%80\%8[0-9A-F]/gi, "")
            );
          }
        }
        this._setDate(_longDate);
      } else {
        _longDate = this._bindSelectedFulldate(
          this._selectedYear,
          this._selectedMonth,
          _selectedDate,
          this._format
        );
        if (_returnResult) {
          return _longDate;
        }
        this._setDate(_longDate);
      }
    },
    _updateToReflectExternalChange: function _updateToReflectExternalChange(
      _inputDate
    ) {
      if (this.showLongDate && 0 > this.locale.indexOf("en")) {
        this._setInvalidDate(!0);
        return;
      }
      var _showLongDate = this.showLongDate,
        _yy = 0,
        _mm = 0,
        _isValidDate = (function(_id, _showLongDate) {
          var _res = { valid: !1, result: "" };
          if (_showLongDate) {
            var _ds = _id.split(", ");
            if (2 < _ds.length) {
              _ds = _ds[1].split(" ").join("/") + ", " + _ds[2];
              var _newDate = new Date(_ds);
              if ("Invalid Date" === _newDate.toString()) {
                return _res;
              } else {
                return { valid: !0, result: _newDate };
              }
            }
            return _res;
          }
          var _re1 = /^(\d{4})\W+(\d{1,2})\W+(\d{1,2})$/i,
            _re2 = /^(\d{4})[ ](\w+)[ ](\d{1,2})$/i,
            _validWithRe1 = _re1.exec(_id),
            _validWithRe2 = _re2.exec(_id);
          if (null === _validWithRe1 && null === _validWithRe2) {
            return _res;
          } else {
            var _resultToDate = null;
            if (null === _validWithRe1) {
              _resultToDate = new Date(
                _validWithRe2[1] +
                  " " +
                  _validWithRe2[2] +
                  " " +
                  _validWithRe2[3]
              );
            } else if (null === _validWithRe2) {
              _resultToDate = new Date(
                +_validWithRe1[1],
                +_validWithRe1[2] - 1,
                +_validWithRe1[3]
              );
            }
            return { valid: !0, result: _resultToDate };
          }
        })(_inputDate, _showLongDate);
      if (_isValidDate.valid) {
        if (this.alwaysResetSelectedDateOnDialogClose) {
          return;
        }
        var _vd = new Date(_isValidDate.result),
          _yy = _vd.getFullYear(),
          _mm = _vd.getMonth();
        this._setInvalidDate(!1);
        this.set("_activeYear", _yy);
        this.set("_activeMonth", _mm);
        this.set("_selectedYear", _yy);
        this.set("_selectedMonth", _mm);
        this.set("_selectedDate", _vd.getDate());
      } else {
        this.set("_selectedDate", this._selectedDate || new Date().getDate());
        this._computeShowLongDate(_showLongDate, this.locale);
        this._setInvalidDate(!0);
      }
    },
    enforceDateChange: function enforceDateChange() {
      this._setInvalidDate(!1);
      this._computeShowLongDate(this.showLongDate, this.locale);
    },
    resetDate: function resetDate() {
      if (this._isSelectedDateConfirmed) {
        return;
      }
      var now = new Date(),
        nowFy = now.getFullYear(),
        nowM = now.getMonth(),
        nowD = now.getDate();
      this.set("_activeYear", nowFy);
      this.set("_activeMonth", nowM);
      this.set("_selectedYear", nowFy);
      this.set("_selectedMonth", nowM);
      this.set("_selectedDate", nowD);
      this._setInvalidDate(!1);
    },
    _shouldTabIndex: function _shouldTabIndex(
      _index,
      _firstDayOfWeek,
      _minDate,
      _maxDate,
      _item
    ) {
      var _isDisableDays = this._isDisableDays(
        _index,
        _firstDayOfWeek,
        _minDate,
        _maxDate,
        _item
      );
      return _item && 0 <= _item && !_isDisableDays ? 0 : -1;
    },
    _shouldAriaDisabled: function _shouldAriaDisabled(
      _index,
      _firstDayOfWeek,
      _minDate,
      _maxDate,
      _item
    ) {
      var _isDisableDays = this._isDisableDays(
        _index,
        _firstDayOfWeek,
        _minDate,
        _maxDate,
        _item
      );
      return !(_item && 0 <= _item && !_isDisableDays);
    },
    _padStart: function _padStart(_string, _length, _chars) {
      var _str = (_chars + _string).slice(-_length);
      return _str;
    },
    _isNumber: function _isNumber(_value) {
      return (
        "number" == typeof _value ||
        (!isNaN(parseFloat(_value)) && isFinite(_value))
      );
    },
    _updateThemeColor: function _updateThemeColor(_theme) {
      var _themes = ["dark-theme", "light-theme", "goog-theme"],
        _themeIdx = _themes.indexOf(_theme),
        _distributedButtons = Polymer.dom(this).querySelectorAll(
          "paper-button"
        ),
        _distributedButtonsLen = _distributedButtons.length,
        _colorCode = ["#bcbcbc", "#737373", "#616161"][_themeIdx];
      if (0 <= _themeIdx) {
        _themes.splice(_themeIdx, 1);
        this.toggleClass(_themes[0], !1, this);
        this.toggleClass(_themes[1], !1, this);
        this.toggleClass(_theme, !0, this);
      } else {
        this.toggleClass("dark-theme", !1, this);
        this.toggleClass("light-theme", !1, this);
        this.toggleClass("goog-theme", !1, this);
      }
      for (var i = 0; i < _distributedButtonsLen; i++) {
        this._updateDistributedButtonInkColorCustomProp(
          _distributedButtons[i],
          _colorCode || "#737373"
        );
      }
      this.updateStyles();
    },
    _updateDatepickerView: function _updateDatepickerView(_view) {
      this.toggleClass("horizontal-view", "horizontal" === _view, this);
      this.toggleClass("vertical-view", "vertical" === _view, this);
    },
    _updateDistributedButtonInkColorCustomProp: function _updateDistributedButtonInkColorCustomProp(
      _node,
      _colorCode
    ) {
      _node.updateStyles({ "--paper-button-ink-color": _colorCode });
    }
  });
});
