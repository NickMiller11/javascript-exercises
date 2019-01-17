var a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

// This is log 7 because having the parameter the same name as the
// outer variable causes variable shadowing.