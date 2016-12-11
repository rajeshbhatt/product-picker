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

        _self.drawerTmpl = '<li class=pe-drawer--collection-items--item><span class="pe-drawer--collection-items--item-name drawer-item-h">Product</span> <span class="glyphicon glyphicon-minus pe-delete-h"></span></li>';

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
            var $this = $(this),
                $elmDiv = $this.closest('.pe-browse-item'),
                $drawerTmpl = $(_self.drawerTmpl),
                selectedItemId = $this.attr('data-item-id');
            if($elmDiv.hasClass('item-selected')){
                $elmDiv.removeClass('item-selected');
            }
            else{

                $elmDiv.addClass('item-selected');
               $drawerTmpl.attr('item-selected',selectedItemId)
                          .attr('id',selectedItemId)
                          .find('.drawer-item-h').html(selectedItemId);
               _self.domHandlers.drawerPanel.append($drawerTmpl);
            }
            openDrawer();
            updateCount();
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

        var openDrawer = function(){

            $('.pe-drawer--collection-wrapper').addClass('drawer-isopen');

        }
        var updateCount = function(){
            var len = $('.drawer-lists-h li').length;
            $('.pe-variant--count').html(len);
            if(len === 0){
                $('.pe-drawer--collection-wrapper')
                    .removeClass('drawer-isopen')
                    .removeClass('is-open');
            }
        };


        // return
        return _self.init();
    }
} (picker || {}, picker.config || {}));