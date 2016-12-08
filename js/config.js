function config(config){
    var module = mod || {};
    module.config = {
             debug 					: true,
             jQueryVersion			: "1.10.2",
            jQueryUrl				: "//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"
         	};
    module.handler = {
             widgetFormContainerID 		: "#pp-root"  //@todo to be changed
    }
    module.consoleMsg = {};

    module.config = $.extend({}, this.config, config);  //@default configuration todo to be changed

    var Jsdependency = {lodash : 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.2/lodash.min.js',
        cssDependency = {bootstrap: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'};
    }

    return module;
}