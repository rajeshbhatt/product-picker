// Defect Body Scroll
(function (module, config) {
    module.utility = function () {
        var _self = this;

        _self.config = {
            scrollClass: 'body-is-scrolled'
        };

        // Detect Body Scroll
        _self.detectBodyScroll = function () {
            $(window).on('scroll', function (e) {
                if ($(window).scrollTop() === 0) {
                    _self.removeScrollClass();
                } else {
                    _self.addScrollClass();
                }
            });
        }

        // Add Scroll Class
        _self.addScrollClass = function () {
            $('body').addClass(_self.config.scrollClass);
        }

        // Remove Scroll Class
        _self.removeScrollClass = function () {
            $('body').removeClass(_self.config.scrollClass);
        }

        // Initialize
        _self.init = function () {
            _self.detectBodyScroll();
        };

        // return
        return _self.init();
    }
} (picker || {}, picker.config || {}));