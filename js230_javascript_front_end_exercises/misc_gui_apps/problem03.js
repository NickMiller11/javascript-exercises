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
    $('.modal').hide();
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
    var clickedLink = $(e.target);
    var dataId = clickedLink.closest('[data-id]').attr('data-id');

    $(`div[data-id="${dataId}"]`).remove();
    this.hideModal(e);
  },

  bindEvents: function() {
    $('main').on('click', 'a.close', this.displayModal.bind(this));
    $('main').on('click', 'a.yes', this.deleteTodo.bind(this));
    $('main').on('click', 'a.no', this.hideModal.bind(this));
  },

  init: function() {
    this.compileHandlebar();
    this.renderPage();
    this.bindEvents();

  },
}

$(function() {
  App.init();
})
