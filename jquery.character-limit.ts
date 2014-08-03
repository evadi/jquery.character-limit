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

interface JQuery {
  characterLimit(): JQuery;
  characterLimit(options: ICharacterLimitOptions): JQuery;
}

export interface ICharacterLimitOptions {
  maxCharacters: number;
}

var defaultOptions: ICharacterLimitOptions = {
  maxCharacters: 100
};

function ($: JQueryStatic) {
  $.fn.characterLimit = function (options: ICharacterLimitOptions) {

    var settings = $.extend(defaultOptions, options);

    return this.each(function () {

      var $this = $(this);

      $this.keypress(function (e) {
        var char = String.fromCharCode(e.which);
        var curVal = $(this).val();
        var forecastVal = curVal + char;

        if (forecastVal.length >= settings.maxCharacters) {
          e.preventDefault();
        }
      }); //end keypress

      $this.bind("paste", function (e) {
        var source = $(this);
        setTimeout(function () {
          var val = source.val();
          source.val(val.substring(0, settings.maxCharacters));
        }, 0);
      }); //end paste

    }); //end return

  }; //end method
})(jQuery);