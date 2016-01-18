// DONE: Configure routes for this app with page.js, by registering each URL your app can handle,
// linked to a a single controller function to handle it:
page.base('');
page('/', index);
page('/about', about);
page('/admin', admin);

page();
function index(){
  articlesController.index();
};

function about(){
  aboutController.index();
};

function admin(){
  adminController.index();
};


// DONE: What function do you call to activate page.js? Fire it off now, to execute
