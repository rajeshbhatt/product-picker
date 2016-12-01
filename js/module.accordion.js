(function (module, config) {
    module.accordion = function () {

        var _self = this;

        // Default Configurations
        _self.config = {
            expandAll: false,
            toggle: true
        };

        // DOM Handlers
        _self.handlers = {
            accordionPanel: "",
            accordionContentPanel: ".pe-accordion-content",
            accordionHandle: ".pe-accordion-h"
        };

        // Module Settings
        _self.options = $.extend({}, this.config, config);

        // Bind Events
        _self.bindEvents = function () {
            $(_self.handlers.accordionHandle).on('click', _self.onAccordionHandlerClick());
        };

        // Accordion Handler Click
        _self.onAccordionHandlerClick = function () {
            var handler = $(context),
                contentPanel = $(context).next('.' + _self.handlers.accordionContentPanel);
            if (handler.hasClass('is-open')) {
                contentPanel.slideUp();
            } else {
                if (_self.options.toggle) {
                    $('.' + _self.handlers.accordionContentPanel).removeClass('is-open').slideUp();
                } else {
                    contentPanel.addClass('is-open').slideDown();
                }
            }
        };

        // Initialize
        _self.init = function () {
            _self.bindEvents();
        };

        // return
        return _self.init();
    }
} (picker || {}, picker.config || {}));