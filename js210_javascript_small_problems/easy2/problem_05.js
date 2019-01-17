function triangle(num) {
  var i;
  var stars = '';
  var spaces = '';

  for (i = 1; i <= num; i += 1) {
    while (spaces.length <= num - i) {
      spaces += ' ';
    }

    stars += '*';
    console.log(spaces + stars);
    spaces = '';
  }
}


triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********
