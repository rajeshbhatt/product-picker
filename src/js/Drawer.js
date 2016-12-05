export default class Drawer{
  constructor(config){
    this.config = {
        position: 'bottom'
    };
    this.domHandlers = {
        drawerPanel: "",
        drawerHandle: ".pe-collection-drawer-h",
        deleteItemHandler: ".pe-delete-h"
    };
    this.options = $.extend({}, this.config, config);
  }
    bindEvents(){
      // this.animateDrawerPopup();
      // this.deleteItem();
      $(this.domHandlers.drawerHandle).on('click',this.animateDrawerPopup);
      $(this.domHandlers.deleteItemHandler).on('click',this.deleteItem);
    }
    animateDrawerPopup() {
        console.log('opop',this);
        $(this).parent().toggleClass('is-open');
    };
    deleteItem() {
        $(this).parent().remove();
    };

    init(){
        this.bindEvents();
    };
}
