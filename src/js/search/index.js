
var indexedData= [],
  $seachContainer = $('#product-search'),
  $allProducts = $('#product-list .products'),
  pattern = '',
  ppicker = window.PPIPCKER,
  allProducts = [],
  prepareIndexing = function(){
    $allProducts = $('#product-list .products');
    allProducts = $allProducts.map(function(index, item){
      var $this = $(this);
        return {
          key : $this.find('.item-title').html(),
          item: $this
        }
      });
  },
  searchInObject = function(){
    allProducts.map(function(index,item){
      var pattern = $seachContainer.val().toLowerCase(),
         key = (item.key).toLowerCase();
        if(key.indexOf(pattern)!== -1){
          item.item.removeClass('hidden');
        }
        else {
          item.item.addClass('hidden');
        }
    })
  },
  searchPattern = function (e){
    if(PPICKER.searchDrilDown){
      //@todo multi level search code
    }
    else{
      searchInObject();
    }
  },
  bindEvents = function(){
    $seachContainer.on('keyup',searchPattern);

  },
  init = function(){
    bindEvents();
    prepareIndexing();
  }
init();
