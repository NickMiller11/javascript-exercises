var App = {
  appendNumber: function(e) {
    e.preventDefault();
    var number = $(e.target).attr('id');

    if (this.replaceNumber) {
      this.register = number;
    } else {
      this.register += number;
    }

    this.replaceNumber = false;
    this.renderMainDisplay(this.register);
  },


  handleOperation: function(e) {
    e.preventDefault();
    this.performOperation();
    this.renderMainDisplay(this.subtotal);
    this.operator = $(e.target).attr('id');
    this.renderTopDisplay();
    this.replaceNumber = true;
  },

  performOperation: function() {
    if (!this.operator) {
      this.subtotal = this.register;
      return;
    }

    switch (this.operator) {
      case '+':
        this.subtotal = +this.subtotal + +this.register;
        break;
      case '-':
        this.subtotal = +this.subtotal - +this.register;
        break;
      case '*':
        this.subtotal = +this.subtotal * +this.register;
        break;
      case '/':
        this.subtotal = +this.subtotal / +this.register;
        break;
      case '%':
        this.subtotal = +this.subtotal % +this.register;
    };

    this.subtotal = this.subtotal.toString();
  },

  renderTopDisplay: function() {
    if (this.register && this.operator) {
      this.topDisplay = this.topDisplay + ' ' + this.register + ' ' + this.operator;
    } else {
      this.topDisplay = '';
    }

    $('#calculations p').html(this.topDisplay);
  },

  renderMainDisplay: function(number) {
    $('h1').html(number);
  },

  clearEntry: function(e) {
    e.preventDefault();
    this.register = 0;
    this.replaceNumber = true;
    this.renderMainDisplay(this.register);
  },

  globalClear: function(e) {
    e.preventDefault();
    this.resetValues();
    this.renderMainDisplay(this.register);
    this.renderTopDisplay();
  },

  resetValues: function() {
    this.register = '0';
    this.subtotal = '0';
    this.topDisplay = '';
    this.operator = '';
    this.replaceNumber = true;
  },

  makeNegative: function(e) {
    e.preventDefault();
    this.register = +this.register * -1
    this.renderMainDisplay(this.register.toString());
  },

  addDecimal: function(e) {
    e.preventDefault();

    if (!this.register.includes('.')) {
      this.register += '.';
    }

    this.renderMainDisplay(this.register);
  },

  equals: function(e) {
    e.preventDefault();
    this.renderMainDisplay(this.subtotal);
    this.resetValues();
    this.renderTopDisplay();
  },

  bindEvents: function() {
    $('table').on('click', '.number', this.appendNumber.bind(this));
    $('table').on('click', '.operator', this.handleOperation.bind(this));
    $('table').on('click', '#CE', this.clearEntry.bind(this));
    $('table').on('click', '#C', this.globalClear.bind(this));
    $('table').on('click', '#NEG', this.makeNegative.bind(this));
    $('table').on('click', '#decimal', this.addDecimal.bind(this));
    $('table').on('click', '#equals', this.equals.bind(this));
  },

  init: function() {
    this.resetValues();
    this.renderMainDisplay(this.register);
    this.bindEvents();
  }
}

$(function() {
  App.init();
})
