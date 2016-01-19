(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    var qs= '?per_page=100&sort=updated';
    // $.get('/github/users/ptrompeter/repos'+ qs).done(function(data, message, xhr){
    //   console.log('my data -', data);
    //   repos.all = data;
    // })
    // .done(callback);
    $.ajax({
      url: 'https://api.github.com/users/ptrompeter/repos' + qs,
      type: 'GET',
      headers: {'Authorization': 'token ' + githubToken},
      success: function(data, message, xhr){
        repos.all=data;
        console.log("data loaded");
      },
    })
    .done(callback);
  };

    // DONE: How would you like to fetch your repos? Don't forget to call the callback.


  // DONE: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
