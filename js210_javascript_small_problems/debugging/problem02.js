/*
We have been asked to implement a function that determines whether or not a
given word is a reserved keyword. We wrote the isReserved function below along
with some test cases, but we aren't seeing the expected result. Why not? Fix the
code so that it behaves as intended.
*/

var RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
  return RESERVED_KEYWORDS.filter(function (reserved) {
    return name === reserved;
  }).length === 1;
}

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true

/*
You can't return out of a forEach method. I think we should change this to a filter
method.

I ended up being correct, but not quite the reason I though.  The forEach always returns
undefined, so the return false would always apply.
*/
