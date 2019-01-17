var person = {
  firstName: function () {
    return 'Victor';
  },
  lastName: function () {
    return 'Reyes';
  },
};

console.log(person.firstName + ' ' + person.lastName;

// from what I can tell, this will correctly log the person's first and last name

// it turns out that this was not the case.  If you are trying to reference a value
// that is a function:
//  - if you reference it without parenthesis, you get a string representation of
//    the function definition
//  - if you reference it with parenthesis, the function values execute correctly