var languages = [
  {
    name: 'Ruby',
    description: 'Ruby is a dynamic, reflective, object-oriented, ' +
    'general-purpose programming language. It was designed and developed in the mid-1990s ' +
    'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
    'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
    'including functional, object-oriented, and imperative. It also has a dynamic type ' +
    'system and automatic memory management.'
  },

  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
    'programming language. It has been standardized in the ECMAScript language ' +
    'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
    'technologies of World Wide Web content production; the majority of websites employ ' +
    'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
    'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
    'supporting object-oriented, imperative, and functional programming styles.'
  },

  {
    name: 'Lisp',
    description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
    'with a long history and a distinctive, fully parenthesized prefix notation. ' +
    'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
    'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
    'since its early days, and many dialects have existed over its history. Today, the best '+
    'known general-purpose Lisp dialects are Common Lisp and Scheme.'
  }
];

var App = {
  compileHandlebars: function() {
    this.$mainSection = Handlebars.compile($('#mainSection').html());
    this.$languageDesc = Handlebars.compile($('#languageDesc').html());
  },

  registerPartial: function() {
    Handlebars.registerPartial('languageDesc', $('#languageDesc').html());
  },


  renderScreen: function() {
    $('main').html(this.$mainSection({ languages: languages }));

    $('section').each(function() {
      var $section = $(this);
      var paragraph = $section.find('p');;
      var truncatedParagraphText = paragraph.text().substr(0, 120) + '...';
      var truncatedParagraph = `<p class="less">${truncatedParagraphText}<p>`;

      $(truncatedParagraph).insertAfter(paragraph);
    });

    $('.more').hide();
  },

  toggleShow: function(e) {
    e.preventDefault();
    var $this = $(e.target);

    if ($this.html() === 'Show More') {
      this.showLess($this);
    } else {
      this.showMore($this);
    }
  },

  showLess: function(target) {
    target.html('Show Less');
    target.closest('section').find('.more').show();
    target.closest('section').find('.less').hide();
  },

  showMore: function(target) {
    target.html('Show More');
    target.closest('section').find('.more').hide();
    target.closest('section').find('.less').show();
  },

  bindEvents: function() {
    $('button').on('click', this.toggleShow.bind(this));
  },

  init: function() {
    this.compileHandlebars();
    this.registerPartial();
    this.renderScreen();
    this.bindEvents();
  }
};

$(function() {
  App.init();
});
