import $ from 'jquery';
import _ from 'lodash';
import CONFIG from './Config'
import Search from './search';
import Accordian from './Accordian';
import Utility from './Utility';
var utility = new Utility();

console.log('Utility',Utility);
// import Utility from 'Utility';

class ProductPicker {
  constructor(options,target,cb){
    this.options = options || {};
    this.target = target;
    this.cb = cb;
    this.target =
    this.data = {
    	"products" : [
    		{
    			"name" : "product1",
    			"id" : "product_1",
    			"imgUrl" : {
    				"320" : "abc.jpg",
    				"760" : "abc.jpg",
    				"1000" : "abc.jpg",
    				"default": "abc.jpg"
    			},
    			"additionalInfo": ""
    		},
    		{
    			"name" : "product 2",
    			"id" : "product_2",
    			"imgUrl" : {
    				"320" : "abc.jpg",
    				"760" : "abc.jpg",
    				"1000" : "abc.jpg",
    				"default": "abc.jpg"
    			},
    			"additionalInfo": ""
    		},
    		{
    			"name" : "product 3",
    			"id" : "product_3",
    			"imgUrl" : {
    				"320" : "abc.jpg",
    				"760" : "abc.jpg",
    				"1000" : "abc.jpg",
    				"default": "abc.jpg"
    			},
    			"additionalInfo": ""
    		}
    	]
    };
  }
  create(){
    console.log('return',this.data);
    var options = options || {},
      src = src || '',
      target = target || '';
    options.url = 'D:/workspace/product-picker_1/product-picker/src/data/getProductDetails.json';
    options.cb = this.render;
    // utility.getData(options);
    this.render(this.data)
  }
  render(options,data,src,target){
    // render template
    console.log('options',options,data);
    _.templateSettings.variable = "pp";
        var template = _.template(
            $( "script.template" ).html()
         );
         console.log('render');
         $( "#product-container-main" ).after(
            template(this.data)
         );
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
    // var utility = new Utility();
    var mainInstance = new ProductPicker();  // it will be used as to append in dom and other configuration options
    mainInstance.create();
    new Search().init();
    new Accordian().init();

});

module.exports = ProductPicker;
