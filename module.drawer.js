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
            drawerPanel: $(".drawer-lists-h"),
            drawerHandle: ".pe-collection-drawer-h",
            deleteItemHandler: ".pe-delete-h",
            addItemHandler: $(".pe-add-product-h")

        };

        _self.drawerTmpl = '<li class=pe-drawer--collection-items--item><span class=pe-drawer--collection-items--item-name>Product</span> <span class="glyphicon glyphicon-minus pe-delete-h"></span></li>';

        // Module Settings
         if(config)
        _self.options = $.extend({}, this.config, config);

        // Bind Events
        _self.bindEvents = function() {
            _self.animateDrawerPopup();

            _self.domHandlers.drawerPanel.on('click','.pe-delete-h', _self.deleteItem);
            _self.domHandlers.addItemHandler.on('click',_self.addItemsToDrawer);
        };

        _self.addItemsToDrawer = function(e){
            console.log('thissss',this);
            _self.domHandlers.drawerPanel.append(_self.drawerTmpl);
            _self.toggleGridItem();
            toggleDrawer();
        };
        // Popup Handler
        _self.animateDrawerPopup = function() {
            $(_self.domHandlers.drawerHandle).on('click', function() {
                $(this).parent().toggleClass('is-open');
            });
        };



        _self.deleteItem = function(){
            $(this).parent().remove();
            updateCount();
        }

        // Initialize
        _self.init = function() {
            _self.bindEvents();
        };

        _self.toggleGridItem = function(){
            console.log('tfffff',this);
        };

        var toggleDrawer = function(){

            $('.pe-drawer--collection-wrapper').toggleClass('drawer-isopen');
            updateCount();
        }
        var updateCount = function(){
            var len = $('.drawer-lists-h li').length;
            $('.pe-variant--count').html($('.drawer-lists-h li').length);
            if(length === 0){
                toggleDrawer();
            }
        };


        // return
        return _self.init();
    }
} (picker || {}, picker.config || {}));