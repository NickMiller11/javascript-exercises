var App = {
  bindEvents: function() {
    $('#bold').on('click', () => { document.execCommand('bold'); });
    $('#italic').on('click', () => { document.execCommand('italic'); });
    $('#underline').on('click', () => { document.execCommand('underline'); });
    $('#strikethrough').on('click', () => { document.execCommand('strikeThrough'); });
    $('#link').on('click', () => {
      var link = prompt('Enter the URL you wish to link to');
      document.execCommand('createLink', link);
    });
    $('#unorderedList').on('click', () => { document.execCommand('insertUnorderedList'); });
    // $('#orderedList').on('click', () => { document.execCommand('insertOrderedList'); });

  },
  init: function() {
    this.bindEvents();
  },
};

$(function() {
  App.init();
})
