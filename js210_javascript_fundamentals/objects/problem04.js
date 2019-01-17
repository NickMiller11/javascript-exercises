var myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

var prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]);
console.log(myObject.prop2);

// this is actually really difficult, I'm not quite sure.  I think the first
// log will be '678' and the second log will be '456'

var myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj);
myObj[myFunc()] = 'world!';
console.log(myObj);
