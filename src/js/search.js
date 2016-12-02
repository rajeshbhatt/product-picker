
export default class Search {
  constructor(options,elm) {
    this._seachContainer = $('#product-search');
    this._allProducts = $('#product-list .pe-browse-list-item');
    this.pattern = '';
    this.ppicker = window.PPIPCKER;
    this.allProducts = [];
    this._options = options;

    let $seachContainer = this._seachContainer;
  }
  prepareIndexing(){
    console.log('this',this);
    // this.allProducts = $('#product-list .products');
    this._allProducts = this._allProducts.map(function(index, item){
      let $this = $(this);
        return {
          key : $this.find('.item-title').html(),
          item: $this
        }
      });
  }
  searchInObject (){
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
  searchPattern (){
    if(PPICKER.searchDrilDown){
      //@todo multi level search code
    }
    else{
      this.searchInObject();
    }
  }
  bindEvents (){
    this._seachContainer.on('keyup',this.searchPattern.bind(this));
  }
  init (){
    let instance = new Search();
    console.log('instance created!')
    this.bindEvents();
    this.prepareIndexing();
  }
}
// new Search().prepareIndexing();
// module.exports = {init: init};
