
// Globals
var picker = picker || {};
picker.config = picker.config || {};

$(document).ready(function() {
    // Accordion Module
    if (picker.accordion) new picker.accordion();

    // Drawer Module
    if (picker.drawer) new picker.drawer();

    // Utility Module
    if (picker.utility) new picker.utility();
});