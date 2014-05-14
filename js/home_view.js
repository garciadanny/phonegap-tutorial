var HomeView = function(store) {
  this.initialize = function() {
//    Define a div wrapper for the view, used to attach events.
    this.el = $('<div/>');
    this.el.on('keyup', '.search-key', this.findByName);
  };

  this.render = function() {
    this.el.html(HomeView.template());
    return this;
  };

  this.findByName = function() {
    store.findByName( $('.search-key').val(), function(employees) {
      $('.employee-list').html(HomeView.liTemplate(employees));
      if(self.iscroll) {
        self.iscroll.refresh();
      } else {
        self.iscroll = new iScroll( $('.scroll', self.el)[0], {hScrollBar: false, vScrollbar: false})
      }
    });
  };

  this.initialize();
}
// Add templates as static members of HomeView
HomeView.template = Handlebars.compile( $('#home-tpl').html() );
HomeView.liTemplate = Handlebars.compile( $("#employee-li-tpl").html() );