var todo_items = [{id: 1, title: 'Homework'},
              {id: 2, title: 'Shopping'},
              {id: 3, title: 'Calling Mom'},
              {id: 4, title: 'Coffee with John'}];

var App ={
  compileHandlebar: function() {
    var script = $('[type="text/x-handlebars"]')[0];
    this.todos = Handlebars.compile($(script).html());
  },

  renderPage: function() {
    $('main').html(this.todos({ todo_items: todo_items }));
  },

  displayModal: function(e) {
    e.preventDefault();
    var clickedLink = $(e.target);
    var dataId = clickedLink.closest('div').attr('data-id');
    clickedLink.closest('div').find('div.modal').show();
  },

  hideModal: function(e) {
    e.preventDefault();
    var clickedLink = $(e.target);
    clickedLink.closest('.modal').hide();
  },

  deleteTodo: function(e) {
    e.preventDefault();

    $(`div[data-id="${this.dataId}"]`).remove();
    $('div.menu').hide();
  },

  showContextMenu: function(e) {
    e.preventDefault();

    $('div.menu').css({
      'top': e.pageY,
      'left': e.pageX,
    });

    this.dataId = $(e.target).attr('data-id');
    $('div.menu').show();
  },

  hideDiv: function(e) {
    e.preventDefault();
    $('div.menu').hide();
  },

  bindEvents: function() {
    $('main').on('contextmenu', 'div', this.showContextMenu.bind(this));
    $('#delete').on('click', this.deleteTodo.bind(this));
    $('#showDetails').on('click', this.hideDiv.bind(this));
    $('#editTodo').on('click', this.hideDiv.bind(this));
  },

  init: function() {
    var dataId;

    this.compileHandlebar();
    this.renderPage();
    this.bindEvents();

  },
}

$(function() {
  App.init();
})
