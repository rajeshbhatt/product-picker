(function(module, config) {
    module.accordion = function() {

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
        _self.bindEvents = function() {
            $(_self.handlers.accordionHandle).on('click', function() {
                var handler = $(this),
                    contentPanel = handler.next(_self.handlers.accordionContentPanel);
                if (handler.hasClass('is-active')) {
                    contentPanel.slideUp();
                    handler.removeClass('is-active');
                } else {
                    if (_self.options.toggle) {
                        $(_self.handlers.accordionContentPanel).removeClass('is-open').slideUp();
                        $(_self.handlers.accordionHandle).removeClass('is-active');
                        handler.addClass('is-active')
                        contentPanel.addClass('is-open').slideDown();
                    } else {
                        contentPanel.addClass('is-open').slideDown();
                    }
                }
            });
        };

        // Accordion Handler Click
        _self.onAccordionHandlerClick = function(context) {

        };

        // Initialize
        _self.init = function() {
            _self.bindEvents();
        };

        // return
        return _self.init();
    }
} (picker || {}, picker.config || {}));