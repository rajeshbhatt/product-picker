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
            accordionContentPanel: "pe-accordion-content",
            accordionHandle: "pe-accordion-h"
        };

        // Module Settings
        _self.options = $.extend({}, this.config, config);

        // Bind Events
        _self.bindEvents = function () {
            $('.' + this.handlers.accordionHandle).on('click', onAccordionHandlerClick(this));
        };

        // Accordion Handler Click
        _self.onAccordionHandlerClick = function(context) {
            var handler = $(conntext),
                contentPanel = $(conntext).next('.' + pe-accordion-content); 
            if(handler.hasClass('is-open')) {
                contentPanel.slideUp();
            } else {
                if(_self.options.toggle) {
                    $('.' + pe-accordion-content).removeClass('is-open').slideUp();
                } else {
                    contentPanel.addClass('is-open').slideDown();
                }
            }
        };

        // Initialize
        _self.init = function() {
            _self.bindEvents();
        };

        // return
        return init();
    }
}(picker || {}, picker.config || {}));