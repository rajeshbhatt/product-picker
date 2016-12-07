
(function() {
    var picker = picker || {};
    picker.config = picker.config || {};
    picker.staticPath = 'D:\workspace\product-picker_1\product-picker\js'
    picker.configPath = picker.staticPath + '\config.js';
    // Localize jQuery variable
    var jQuery;

    /******** Load jQuery if not present *********/
    if (window.jQuery === undefined || window.jQuery.fn.jquery !== '3.1.1') {
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type","text/javascript");
        script_tag.setAttribute("src",
            "https://code.jquery.com/jquery-3.1.1.js");  //can be changes if we want to use diff version
        if (script_tag.readyState) {
          script_tag.onreadystatechange = function () { // For old versions of IE
              if (this.readyState == 'complete' || this.readyState == 'loaded') {
                  scriptLoadHandler();
              }
          };
        } else {
          script_tag.onload = scriptLoadHandler;
        }
        // Try to find the head, otherwise default to the documentElement
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
    } else {
        // The jQuery version on the window is the one we want to use
        picker.jQuery = jQuery = window.jQuery;
        main();
    }

    /******** Called once jQuery has loaded ******/
    function scriptLoadHandler() {
        // Restore $ and window.jQuery to their previous values and store the
        // new jQuery in our local jQuery variable
        jQuery = window.jQuery.noConflict(true);
        // Call our main function
        main();
    }


    /******** Our main function ********/
    function main() {
        jQuery(document).ready(function($) {
            var $ = $;
            console.log('$ value',$);
            function loadScript(src, cb){
                    var elm = document.createElement('script'),
                        head = document.getElementsByTagName('head')[0],
                        isLoaded = false;
                    elm.src = src;
                    elm.type = "application/javascript";
                    document.body.appendChild(elm);
            }

            function loadJSDependency(jsDependency){
                debugger;
                console.log('$$$$$',$)
                var jsDependency = jsDependency || {
                            lodash : 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.2/lodash.min.js',
                        };
                        for(var file in jsDependency){
                            loadScript(jsDependency[file]);
                        }

            }

            loadJSDependency();
        });
    }

    })(); // We call our anonymous function immediately

