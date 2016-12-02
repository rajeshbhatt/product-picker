export default class  Accordian {
  constructor(config) {
    this.config = {
      expandAll: false,
      toggle: true
    }
    this.handlers = {
      accordionPanel: "",
      accordionContentPanel: ".pe-accordion-content",
      accordionHandle: ".pe-accordion-h"
    }
    this.options = $.extend({}, this.config, config);
  }
  accordionAction(e){
        var handler = $(e.target).closest('a'),  // this is changed to object
            contentPanel = handler.next(this.handlers.accordionContentPanel);
        if (handler.hasClass('is-active')) {
            contentPanel.slideUp();
            handler.removeClass('is-active');
        } else {
            if (this.options.toggle) {
                $(this.handlers.accordionContentPanel).removeClass('is-open').slideUp();
                $(this.handlers.accordionHandle).removeClass('is-active');
                handler.addClass('is-active')
                contentPanel.addClass('is-open').slideDown();
            } else {
                contentPanel.addClass('is-open').slideDown();
            }
        }
    }
  bindEvents(){
    $(this.handlers.accordionHandle).on('click', this.accordionAction.bind(this));
  }
  init(){
    this.bindEvents();
  }
}
