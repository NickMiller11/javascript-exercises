function outside(length) {
  var dashes = '';
  var i;

  for (i = 0; i < length; i += 1) {
    dashes += '-';
  }

  return '+-' + dashes + '-+';
}

function inside(length) {
  var spaces = '';
  var i;

  for (i = 0; i < length; i += 1) {
    spaces += ' ';
  }

  return '| ' + spaces + ' |';
}

function middle(string) {
  return '| ' + string + ' |';
}

function logInBox(str) {
  var len = str.length;

  console.log(outside(len));
  console.log(inside(len));
  console.log(middle(str));
  console.log(inside(len));
  console.log(outside(len));
}

logInBox('To boldly go where no one has gone before.');

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

logInBox('');

// +--+
// |  |
// |  |
// |  |
// +--+
