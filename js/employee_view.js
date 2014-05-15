var EmployeeView = function(employee) {

  this.initialize = function() {
    this.el = $('<div/>');
  };

  this.render = function() {
    this.el.html(EmployeeView.template(employee));
    return this;
  };
  this.initialize();
}

// Add template as static member of EmployeeView
EmployeeView.template = Handlebars.compile($("#employee-tpl").html());