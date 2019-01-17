/*
input - integer
output - attach classes to elements

rules:
- attach a class of .generation-color to DOM elements that are input integer
  levels indented from the body element

algorithm:
- use the walk-the-dom function
  - for each element, walk up parent elements to the body
  - use a counter to keep track of levels
  - if the counter equals the input integer, attach the class .generation-color
    to that element

*/

function walk(node, callback) {
  callback(node);
  var i;
  for(i = 0; i < node.childNodes.length; i++) {
    walk(node.childNodes[i], callback);
  }
}

function colorGeneration(indent) {
  walk(document.body, function(node) {
    var counter = 0;
    var currentNode = node;

    while (currentNode.tagName !== 'BODY') {
      counter += 1;
      currentNode = currentNode.parentElement;
    }

    if (counter === indent) {
      node.className = 'generation-color';
    }
  });
}



// colorGeneration(1);
// colorGeneration(4);
// colorGeneration(7);
// colorGeneration(8);
// colorGeneration(3);
// colorGeneration(0);
