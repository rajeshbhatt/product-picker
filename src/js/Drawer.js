export default class Drawer{
  constructor(config){
    this.config = {
        position: 'bottom'
    };

    // DOM Handlers
    this.domHandlers = {
        drawerPanel: "",
        drawerHandle: ".pe-collection-drawer-h",
        deleteItemHandler: ".pe-delete-h"
    };

    // Module Settings
    this.options = $.extend({}, this.config, config);
  }

  bindEvents() {
      $(this.domHandlers.drawerHandle).on('click',this.animateDrawerPopup);
      $(this.domHandlers.deleteItemHandler).on('click',this.deleteItem);
  };

  // Popup Handler
  animateDrawerPopup () {
      $(this).parent().toggleClass('is-open');
  };

  deleteItem () {
      $(this).parent().remove();
  };

  // Initialize
  init() {
      this.bindEvents();
  };
}
