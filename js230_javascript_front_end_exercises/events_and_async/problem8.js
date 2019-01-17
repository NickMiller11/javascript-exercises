/*
  input: parentElement, selector, eventType, callback
  output: undefined or true

  rules:
    - return true if an event handler was added to an element
    - return undefined otherwise
    - add an event listener to a selector that is a descendant of the parent
      element type passed in
    - do not add an event listener if the parentElement doesn't exist

*/

document.addEventListener('DOMContentLoaded', function() {
  var element1 = document.querySelector('nav');
  var element2 = document.querySelector('main h1');
  var element3 = document.querySelector('main');

  var callback = function(event) {
    alert('Target: ' + event.target.tagName + "\nCurrent Target: " + event.currentTarget.tagName);
  };

  function checkTargetElement(event, selector) {
    var possibleElements = document.querySelectorAll(selector);

    for (var i = 0; i < possibleElements.length; i++) {
      if (possibleElements[i] === event.target) {
        return true;
      }
    }

    return false;
  }

  function delegateEvent(parentElement, selector, eventType, callback) {
    if (!parentElement) {
      return undefined;
    }

    parentElement.addEventListener(eventType, function(e) {
      if (checkTargetElement(e, selector) &&
          parentElement.contains(e.target) &&
          parentElement.tagName !== selector.toUpperCase()) {
        callback(e);
      }
    });

    return (!!parentElement);
  }

  // console.log(delegateEvent(element1, 'p', 'click', callback));
  // console.log(delegateEvent(element2, 'p', 'click', callback));
  // console.log(delegateEvent(element2, 'h1', 'click', callback));
  // console.log(delegateEvent(element3, 'h1', 'click', callback));
  // console.log(delegateEvent(element3, 'aside p', 'click', callback));
  console.log(delegateEvent(element2, 'p', 'click', callback));

  var newP = document.createElement('P');
  var newContent = document.createTextNode('New Paragraph');
  newP.appendChild(newContent);

  element2.appendChild(newP);

});
