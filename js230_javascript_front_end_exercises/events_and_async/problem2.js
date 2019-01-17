document.querySelector('html').addEventListener('click', function(e) {
  var container = document.querySelector('#container');

  if (!container.contains(e.target) {
    container.style = 'dislay:none';
  });
});
