
// Globals
var picker = picker || {};
picker.config = picker.config || {};
picker.staticPath = 'D:\workspace\product-picker_1\product-picker\js'
picker.configPath = picker.staticPath + '\config.js';

var getConfig = function(src,cb){
    alert();
    $.ajax({
      url: src,
      type: 'GET',
      success: function(data) {
    	//called when successful
    	// local server issue so hardcoded
            return data;
    	console.log('dataaa',data);
      },
      error: function(e) {
    	//called when there is an error
    	console.log(e.message);
    	return false;
      }
    });
},
loadScript = function(src, cb){
    var elm = document.createElement('script'),
        head = document.getElementsByTagName('head')[0],
        isLoaded = false;
    elm.src = 'js/'+ src;
    elm.type = "application/javascript";
    document.body.appendChild(elm);
},
initScript = function(e){
    console.log('eeeeeeee',this);
}

$(document).ready(function() {
    // Accordion Module
    if (picker.accordion) new picker.accordion();

    // Drawer Module
    if (picker.drawer) new picker.drawer();

    // Utility Module
    if (picker.utility) new picker.utility();

    ;(function(MODULE, config, undefined){
        MODULE.config = {} ;// getFile(picker.config);  config file loaded;
        MODULE.config.modules = ['module.accordian1','module.drawer'];
        MODULE.config.modules.forEach(function(mod, index){
            console.log('mod',mod);
            loadScript(mod, initScript.bind(mod));
          });
        MODULE.widget = (function(data){
            console.log('picker obj',picker);
        })(picker);


    })(picker || {});
});
