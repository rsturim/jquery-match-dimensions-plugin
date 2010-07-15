(function($) {
    $.fn.matchDimensions = function(customOptions) {
 
    var options = $.extend({}, $.fn.matchDimensions.defaultOptions, customOptions);
        var minHeight = options.minHeight;
        this.each(function() {
            var h = $(this).height();
            minHeight = (h > minHeight) ? h : minHeight;
        });
        this.height(minHeight);
        this.find("a > img").css("height", "auto");
    };
 
    $.fn.matchDimensions.defaultOptions = {
        minHeight: 120
    };
})(jQuery);