(function(module) {
  console.log('here 1');
  var articlesController = {};
  Article.createTable();
  // Article.fetchAll(articleView.initIndexPage);
  // DONE: Create the `articles` table when the controller first loads, with the code that used to be in index.html:

  // DONE: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:
  articlesController.index = function() {
    console.log("hit articlesController");
    // Article.createTable();
    Article.fetchAll(articleView.initIndexPage);
    $('#about').hide();
    $('#blog-stats').hide();
    $('#articles').show();

  };

  module.articlesController = articlesController;
})(window);
