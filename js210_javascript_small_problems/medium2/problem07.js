/*
Write a function that takes an array as an argument and sorts that array using
the bubble sort algorithm described above. The sorting should be done "in-place"
— that is, the function should mutate the array. You may assume that the array
contains at least two elements.

A bubble sort works by making multiple passes (iterations) through an array.
On each pass, the two values of each pair of consecutive elements are compared.
If the first value is greater than the second, the two elements are swapped.
This process is repeated until a complete pass is made without performing any
swaps — at which point the array is completely sorted.

input - array
output - array

rules:
- mutate the input array so that it is sorted in order from least to greatest
- the sorting should be implemented by iterating through the array multiple times,
  swapping two elements if the greater one appears before the lessor one

loop within a loop
inner loop - handles iterating through the array and comparing values
outer loop - handles multiple inner loops, break clause is if no swaps in the inner
             loop are performed
toggle to signal whether swapping has occured or not
mutation - reassignment should mutate the array

algorithm:
declare a toggle variable and temp variable
create outer loop, while toggle variable is equal to true
  - set toggle variable equal to false
  - create inner loop, while i less than array length - 1
    - if array[i] is greater than array[i + 1]
      - reassign them to each other using temp variable
      - set toggle to true

*/

function bubbleSort(array) {
  var temp;
  var toggle = true;
  var i;

  while (toggle === true) {
    toggle = false;

    for (i = 0; i < array.length - 1; i += 1) {
      if (array[i] > array[i + 1]) {
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        toggle = true;
      }
    }
  }
}

var array = [5, 3];
bubbleSort(array);
console.log(array);    // [3, 5]

var array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array);    // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]