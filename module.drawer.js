(function(module, config) {
    var $ = picker.$;
    module.drawer = function() {
        var _self = this;

        // Default Configurations
        _self.config = {
            position: 'bottom'
        };

        // DOM Handlers
        _self.domHandlers = {
            drawerPanel: "",
            drawerHandle: ".pe-collection-drawer-h",
            deleteItemHandler: ".pe-delete-h"
        };

        // Module Settings
         if(config)
        _self.options = $.extend({}, this.config, config);

        // Bind Events
        _self.bindEvents = function() {
            _self.animateDrawerPopup();
            _self.deleteItem();
        };

        // Popup Handler
        _self.animateDrawerPopup = function() {
            $(_self.domHandlers.drawerHandle).on('click', function() {
                $(this).parent().toggleClass('is-open');
            });
        };

        _self.deleteItem = function() {
            $(_self.domHandlers.deleteItemHandler).on('click', function() {
                $(this).parent().remove();
            });
        };

        // Initialize
        _self.init = function() {
            _self.bindEvents();
        };

        // return
        return _self.init();
    }
} (picker || {}, picker.config || {}));