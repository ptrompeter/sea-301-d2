(function(module) {
  var articlesController = {};

  Article.createTable();  // Ensure the database table is properly initialized

  articlesController.index = function(ctx, next) {
    articleView.index(ctx.articles);
  };

  // TODO: Middleware for grabbing one article by ID:
  //This method gets called by page('/article/:id').  it accepts ctx and a function, defines artcleData, and calls Aticle.findWare using the id property of the ctx object (which will do a SQL query for the particular article ID).
  articlesController.loadById = function(ctx, next) {
    var articleData = function(article) {
      ctx.articles = article;
      next();
    };

    Article.findWhere('id', ctx.params.id, articleData);
  };

  // TODO: Middleware for loading up articles by a certain author:
  //This method also gets called by a page function in routes.js.  It accepts ctx and next, defines the authorData function, and calls an Article.findWhere() on the author name specified in the ctx property, which in turn does a database querie to load all articles by a particular author.
  articlesController.loadByAuthor = function(ctx, next) {
    var authorData = function(articlesByAuthor) {
      ctx.articles = articlesByAuthor;
      next();
    };

    Article.findWhere('author', ctx.params.authorName.replace('+', ' '), authorData);
  };

  // TODO: Middleware for grabbing all articles with a certain category:
  //This method also gets called by a page function in routes.js.  Identical to loadByAuthor, but for categories instead of authors.
  articlesController.loadByCategory = function(ctx, next) {
    var categoryData = function(articlesInCategory) {
      ctx.articles = articlesInCategory;
      next();
    };

    Article.findWhere('category', ctx.params.categoryName, categoryData);
  };

  // TODO: Middleware for grabbing ALL articles:
  //This method also gets called by a page function in routes.js.  It defines a function that sets ctx.articles = to Artile.all, which is an array of all of the articles returned from the fetchall() SQL query 'SELECT * FROM articles ORDER BY publishedOn DESC'.
  //if Articles.all is empty, it calls fetchAll(), which will populate Articles.all.
  //This looks like it could be dried out by actually calling articleData rather than repeating the same lines in the iff conditional below.
  articlesController.loadAll = function(ctx, next) {
    var articleData = function(allArticles) {
      ctx.articles = Article.all;
      next();
    };

    if (Article.all.length) {
      ctx.articles = Article.all;
      next();
    } else {
      Article.fetchAll(articleData);
    }
  };


  module.articlesController = articlesController;
})(window);
