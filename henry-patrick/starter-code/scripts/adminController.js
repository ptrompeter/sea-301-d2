(function(module) {
  console.log('here 2');
  var adminController = {};
  // Article.createTable();
  // Article.fetchAll(articleView.initIndexPage);
  // TODO: Create the `articles` table when the controller first loads, with the code that used to be in index.html:

  // TODO: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:
  adminController.index = function() {
    console.log("hit adminController");
    // Article.createTable();
    // Article.fetchAll(articleView.initIndexPage);
    $('#about').hide();
    $('#articles').hide();
    $('#blog-stats').show();

  };

  module.adminController = adminController;
})(window);
