(function(){
  var $allProducts = $('#product-list'),
      popupData = window.PP ? window.PP.POPUPDATA|| [] : [],
      toggleState = function(){
        var $this = $(this),
            $parent = $this.parent();
        $parent.toggleClass('is-selected'); //todo add class which ever is required
          //todo catch trigger events
        // addToPopup.bind($this)();
        addToPopup.call($parent);

      },
      updatePopupList = function(){
        console.log('this',this)
        var $this = $(this),
          selectedProduct = $this.attr('data-productInfo'),
          data = popupData;
          popupData = popupData.map(popupData, function(item, index){
            console.log('teom',item);
          })

      },
      addToPopup = function(){
        alert('add to popup');
      },
      bindEvents = function(){
        $('#product-list').on('click','.pe-browse-item-cta',toggleState);
        $('.pe-drawer').on('click','.popup-delete',updatePopupList);
        $('document').on('update',addToPopup);
      },
      renderPopup = function(){
        _.templateSettings.variable = "pp";
        var template = _.template(
            $( "script.template" ).html()
        );
        console.log('render');
        var templateData = {
            listItems: [
                {
                    name: "Product 1",
                    isSelected: true
                },
                {
                    name: "Product 2",
                    isSelected: true
                },
                {
                    name: "Product 3",
                    isSelected: true
                },
                {
                    name: "Product 4",
                    isSelected: true
                }
            ]
        };
        $( ".pe-drawer-collection" ).after(
            template( templateData )
        );
      },
      init = function(){
        bindEvents();
      }
      init();
      renderPopup();
})();
