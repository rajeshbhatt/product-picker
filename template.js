(function(module, config){
    module.template = function(){
        var _self = this;
        _self.gridTmpl = '<ul class="pe-browse-list" id="product-list"><% _.each( pp.products, function( listItem ){%><li class="pe-browse-list-item"><div class="pe-browse-item"><div class="pe-browse-item-image"><img class="img-responsive" src="http://placehold.it/300/3c948b/333333?text="/></div><div class="pe-browse-item-title"><p class="item-title">Product Name 1</p></div><div class="pe-browse-item-cta"><a class="btn btn-default btn-block" href="javascript:void(0)">add</a></div></div></li><%}); %></ul>';
    }
})(picker || {}, picker.config || {});
