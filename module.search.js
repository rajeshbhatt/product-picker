(function(module, config) {
     var $ = picker.$;
    module.search = function() {

        var _self = this;
         _self.pattern = '';
         _self.PPICKER = window.PPIPCKER;
         _self.allProducts = [];
//         _self._options = options;

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
                $(_self.handlers._seachContainer).on('click', _self.searchPattern.bind(this));
        };

        _self.searchInObject = function(){
            var _this = this;
            var pattern = _this.handlers._seachContainer.val();
            if(!pattern){
                return false;
            }
            this.handlers._allProducts.map(function(index,item){
              var pattern = _this.handlers._seachContainer.val().toLowerCase(),
                 key = (item.key).toLowerCase();
                if(key.indexOf(pattern) !== -1){
                  this.item.removeClass('hidden');
                }
                else {
                  this.item.addClass('hidden');
                }
            }).bind($);
          }

        _self.prepareIndexing = function(){
             // this.allProducts = $('#product-list .products');

             this._allProducts =  this.handlers._allProducts.map(function(index, item){
               let $this = $(this);
                 return {
                   key : $this.find('.item-title').html(),
                   item: $this
                 }
               });
           }
        _self.searchPattern = function(){
            if(false){ //if(PPICKER && PPICKER.searchDrilDown){
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