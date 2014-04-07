//==================================================================
// Plugin written by David Ferguson
// http://code.davidferguson.me.uk
//
// version: 0.1.0
// date: 22/03/2013
//
// Anyone can use/modify/copy the source on any system, for any use,
// without express permission from the author
//==================================================================

(function ($) {
    $.fn.characterLimit = function (options) {

        var settings = $.extend({
            maxCharacters: 100
        }, options);

        return this.each(function () {

            var $this = $(this);

            $this.keypress(function (e) {
                var char = String.fromCharCode(e.which);
                var curVal = $(this).val();
                var forecastVal = curVal + char;
                
                //when the character limit is about to be exceeded preventDefault
                //halts the new character being assigned to the text area
                if (forecastVal.length >= settings.maxCharacters) {
                    e.preventDefault();
                }
            });

            $this.bind("paste", function (e) {
                //allows the paste operation to finish so the text is ready to inspect
                var source = $(this);
                setTimeout(function () {
                    var val = source.val();
                    source.val(val.substring(0, settings.maxCharacters));
                }, 0);
            });

        });

    };
})(jQuery);