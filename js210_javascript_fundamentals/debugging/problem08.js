// Roles (salary still to be determined)

var ceo = {
  tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
  salary: 0,
};

var developer = {
  tasks: ['turn product vision into code'],
  salary: 0,
};

var scrumMaster = {
  tasks: ['organize scrum process', 'manage scrum teams'],
  salary: 0,
};

// Team -- we're hiring!


var team = {};

team['ceo'] = 'Kim';
team['scrumMaster'] = 'Alice';
team['developer'] = undefined;


var company = {
  name: 'Space Design',
  team: team,
  projectedRevenue: 500000,
};

console.log('----{ ' + company.name + ' }----');
console.log('CEO: ' + company.team['ceo']);
console.log('Scrum master: ' + company.team['scrumMaster']);
console.log('Projected revenue: $' + company.projectedRevenue);

// ----{ Space Design }----
// CEO: undefined
// Scrum master: undefined
// Projected revenue: $500000

// The problem with this is that the program is trying to assign a variable
// pointing to an object as the key in another object.  Only strings can be
// assigned as keys in objects. If we turn both the assignment and reference keys
// into the same string, we can retrieve the name of the ceo and scrum master.