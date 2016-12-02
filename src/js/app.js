import $ from 'jquery';
import _ from 'lodash';
import CONFIG from './Config'
import Search from './search';
import Accordian from './Accordian'
// import Utility from 'Utility';

class ProductPicker {
  constructor(options,target,cb){
    this.options = options || {};
    this.target = target;
    this.cb = cb;
  }
  create(){
    console.log('return');
  }
  render(options,src,target){
    // render template
  }
  destroy(){
    //destroy service
  }

}

$(function() {
    // Document.ready
    // console.log('sssssss',new CONFIG());
    window.PPICKER = window.PPICKER || {};
    window.PPICKER = new CONFIG() || {};
    var aa = new ProductPicker();  // it will be used as to append in dom and other configuration options
    new Search().init();
    new Accordian().init();
});

module.exports = ProductPicker;
