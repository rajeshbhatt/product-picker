function config(config) {

    var module = module || {};

    module.config = {
        debug: true,
        jQueryVersion: "1.10.2",
        jQueryUrl: "//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"
    };

    // Event Handlers
    module.handler = {
        widgetFormContainerID: "#pp-root"  //@todo to be changed
    }

    // UI Configurations
    module.ui = {
        layout: "default", // "2-col", "1-col"
        template: "default",
        theme: "default",
        gridView: {
            columns: "4",
            theme: "default",
            preloaderText: "Building Experience",
            preloaderImage: "",
            sortBy: "name"
        },
        accordion: {
            expandAll: false,
            sortBy: 'name',
            position: "on-page" // or offset
        },
        collectionDrawer: {
            screenPosition: 'bottom',
            alwaysExpand: 'false',
            clearAllFilter: true
        }
    }

    // Console Messages
    module.consoleMsg = {};

    // Merge User Defined Configurations with Default configurations
    module.config = $.extend({}, this.config, config);  //@default configuration todo to be changed

    var Jsdependency = {
        lodash: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.2/lodash.min.js',
        cssDependency = { bootstrap: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' };
    }

    return module;
}