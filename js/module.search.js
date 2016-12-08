(function(module, config) {
    module.search = function() {

        var _self = this;
//         _self. = ;
//         _self._allProducts = $('#product-list .pe-browse-list-item');
         _self.pattern = '';
//         _self.picker = window.PPIPCKER;
         _self.allProducts = [];
         _self._options = options;

        var $seachContainer = this._seachContainer;

        // Default Configurations
        _self.config = {
            expandAll: false,
            toggle: true
        };

        // DOM Handlers
        _self.handlers = {
            _seachContainer: $('#product-search'),
            _allProducts: $('#product-list .pe-browse-list-item')
        };

        // Module Settings
        _self.options = $.extend({}, this.config, config);

        // Bind Events
        _self.bindEvents = function() {
            $(_self.handlers._seachContainer).on('click', _self.searchPattern);
        };

        _.self.searchInObject = function(){
            let _this = this;
            this._allProducts.map(function(index,item){
              let pattern = _this._seachContainer.val().toLowerCase(),
                 key = (item.key).toLowerCase();
                if(key.indexOf(pattern)!== -1){
                  item.item.removeClass('hidden');
                }
                else {
                  item.item.addClass('hidden');
                }
            }).bind(_this);
          }
        _self.searchPattern = function(){
            if(PPICKER.searchDrilDown){
              //@todo multi level search code
            }
            else{
              this.searchInObject();
            }
          }
        // Initialize
        _self.init = function() {
            _self.bindEvents();
            _self.prepareIndexing();
        };

        // return
        return _self.init();
    }
} (picker || {}, picker.config || {}));