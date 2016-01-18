(function(module) {
  var aboutController = {};

  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.index = function() {
    $('main > section').hide();
    $('#about').show();
    console.log("hit it.")

  };

  module.aboutController = aboutController;
})(window);
