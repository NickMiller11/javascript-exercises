var totalPages = 364;
var energy = 100;
var currentPage = 1;

function read() {


  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= (5 + currentPage * 0.1);
  }

  console.log('Made it to page ' + String(currentPage) + '.');

  // Drink a cup of coffee.
  energy = 100;

  // Continue reading.
  if (currentPage < totalPages) {
    read();
  } else {
    console.log('Done!');
  }
}

read();

// This results in an infinite loop because line 5 resets the currentPage variable
// to 1 every time the read function is called.  We need to move the current page
// variable outside of the function.