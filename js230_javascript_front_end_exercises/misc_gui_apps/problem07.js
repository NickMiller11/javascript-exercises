function formattedNumber(num) {
  return ("0" + num).slice(-2);
}

var hours = 0;
var minutes = 0;
var seconds = 0;
var centi = 0;
var interval;

var App = {
  bindEvents: function() {
    $('#start').click(this.start.bind(this));
    $('#reset').click(this.reset.bind(this));
  },

  start: function() {
    clearInterval(interval);
    interval = setInterval(this.startTimer, 10)

    $('#start').unbind('click')
    $('#start').html('Stop');
    $('#start').click(this.stop.bind(this));
  },

  stop: function() {
    clearInterval(interval);
    $('#start').unbind('click');
    $('#start').html('Start');
    $('#start').click(this.start.bind(this));
  },

  reset: function() {
    clearInterval(interval);
    hours = "00";
    minutes = "00";
    seconds = "00";
    centi = "00";

    $('#hours').html(hours);
    $('#minutes').html(minutes);
    $('#seconds').html(seconds);
    $('#centi').html(centi);
  },

  startTimer: function() {
    centi++;
    $('#centi').html(formattedNumber(centi))
    if (centi >= 100) {
      centi = 0;
      seconds++;
      $('#seconds').html(formattedNumber(seconds));
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
        $('#minutes').html(formattedNumber(minutes));
        if (minutes >= 60) {
          minutes = 0;
          hours++;
          $('#hours').html(formattedNumber(hours));
        }
      }
    }
  },

  init: function() {
    this.bindEvents();
  },
};

$(function() {
  App.init();
})
