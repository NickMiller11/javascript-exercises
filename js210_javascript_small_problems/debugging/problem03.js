// Picks n random elements from an array,
// and returns a new array with those elements.
function random(array, n) {
  if (n === undefined) {
    n = 1;
  }

  var elements = array.slice();
  var randomElements = [];

  while (n > 0 && elements.length > 0) {
    var randomIndex = Math.floor(Math.random() * elements.length);
    var randomElement = elements[randomIndex];

    randomElements.push(randomElement);
    elements.splice(randomIndex, 1);
    n--;
  }

  return randomElements;
}

// Ingredients

var ingredients = ['rice', 'green bell pepper', 'mushrooms', 'carrot', 'kebab',
  'spinach', 'soy bean sprouts', 'mashed potatoes', 'corn', 'cucumber', 'peas'];

var spices = ['peri peri', 'cinnamon', 'nutmeg', 'cardamom', 'ground ginger',
  'poppy seed', 'cumin'];

var extras = ['peanuts', 'sesame seeds', 'egg', 'wasabi', 'soy sauce'];

// Name

var adjective  = ['Delicious', 'Hot', 'Exotic', 'Creative', 'Festive', 'Dark'];
var firstNoun  = ['Power', 'After Work', 'Holiday', 'Disco', 'Late Night'];
var secondNoun = ['Mix', 'Delight', 'Bowl', 'Chunk', 'Surprise', 'Bliss'];

// Generate!

var dishName = random(adjective).concat(random(firstNoun),random(secondNoun));
var dish = random(ingredients, 3).concat(random(spices, 2), random(extras, 1));

console.log('How about: ' + dishName.join(' '));
console.log('You need: ' + dish.join(', '));

/*
You can't add arrays together because it returns a string, and the string class
doesn't have a join method.  You need to concat the arrays instead.

I was right!
*/
