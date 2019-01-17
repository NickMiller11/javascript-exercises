function includesFalse(list) {
  var i;
  var element;

  for (i = 0; i < list.length; i++) {
    element = list[i];

    if (element === false) {
      return true;
    }
  }

  return false;
}
                                                                  // returns:
console.log(includesFalse([8, null, 'abc', true, 'launch', 11, false]));       // true
console.log(includesFalse(['programming', undefined, 37, 64, true, 'false'])); // false
console.log(includesFalse([9422, 'lambda', true, 0, '54', null]));             // true

// line 8 uses the double equals sign, which in JS implicitely coerces the value
// on the left side to something else.  In this instance, it is coercing 0 to
// equal false.  If we change this to a strict equality operator, or the triple
// equals sign, the implicit coersion will not occur and the function will only
// return true when it compares against an actual false value.