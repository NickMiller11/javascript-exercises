var questions = [
  {
    id: 1,
    description: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
    options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein']
  },
  {
    id: 2,
    description: 'Which of the following numbers is the answer to Life, the \
                  universe and everything?',
    options: ['66', '13', '111', '42']
  },
  {
    id: 3,
    description: 'What is Pan Galactic Gargle Blaster?',
    options: ['A drink', 'A machine', 'A creature', 'None of the above']
  },
  {
    id: 4,
    description: 'Which star system does Ford Prefect belong to?',
    options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri']
  }
];

var answerKey = { '1': 'Douglas Adams', '2': '42', '3': 'A drink', 4: 'Betelgeuse' };


var App = {
  compileHandlebars: function() {
    this.questionList = Handlebars.compile($('#questionList').html());
    this.questionTemplate = Handlebars.compile($('#questionTemplate').html());
    Handlebars.registerPartial('questionTemplate', $('#questionTemplate').html());
  },

  renderForm: function() {
    $(this.questionList({ question: questions })).insertAfter('h1');
  },

  serializeForm: function() {
    var attributes = {};

    var self = this;
    $('form').find('input:checked').each(function() {
      var $control = $(this);
      var name     = $control.attr('name');
      var value    = $control.val();

      attributes[name] = attributes[name] || '';
      attributes[name] += value;
    });

    return attributes;
  },

  renderIncomplete: function(id) {
    var answer = answerKey[id];
    var $paragraph = $(`#${id}`);
    $paragraph.text('You did not answer this question. Correct answer is: "' + answer + '"');
    $paragraph.addClass('error_state');
  },

  renderWrongAnswer: function(id) {
    var answer = answerKey[id];
    var $paragraph = $(`#${id}`);
    $paragraph.text('Wrong Answer. Correct answer is: "' + answer + '"');
    $paragraph.addClass('error_state');
  },

  renderCorrect: function(id) {
    var $paragraph = $(`#${id}`);
    $paragraph.text('Correct answer');
    $paragraph.addClass('correct_state');
  },

  handleSubmitForm: function(e) {
    e.preventDefault();

    var answers = this.serializeForm();

    for (key in answerKey) {
      if (Object.keys(answers).indexOf(key) === -1) {
        this.renderIncomplete(key);
      } else if (answers[key] !== answerKey[key]) {
        this.renderWrongAnswer(key);
      } else {
        this.renderCorrect(key);
      }
    }

    $('#reset_form').on('click', this.handleResetForm.bind(this));
  },

  handleResetForm: function(e) {
    e.preventDefault();

    $('form')[0].reset();
    $('.error_message').each(function() {
      $(this).removeClass();
      $(this).text('');
    });
    $('#submit').on('click', this.handleSubmitForm.bind(this));
  },

  bindEvents: function() {
    $('#submit').on('click', this.handleSubmitForm.bind(this));
    $('#reset_form').on('click', this.handleResetForm.bind(this));
  },

  init: function() {
    this.compileHandlebars();
    this.renderForm();
    this.bindEvents();
  },
}

$(function () {
  App.init();
});
