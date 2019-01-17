function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],

    info: function() {
      console.log(this.name + ' is a ' + this.year + ' year student');
    },

    addCourse: function(course) {
      this.courses.push(course);
    },

    listCourses: function() {
      return this.courses;
    },

    addNote: function(code, note) {
      var i;
      var currentCourse;

      for (i = 0; i < this.courses.length; i += 1) {
        currentCourse = this.courses[i];
        if (currentCourse.code === code) {
          if (currentCourse.note === undefined) {
            currentCourse.note = note;
          } else {
            currentCourse.note += ('; ' + note);
          }
        }
      }
    },

    updateNote: function(code, note) {
      var courseToUpdate = this.courses.filter(function (course) {
        return course.code === code;
      });

      courseToUpdate[0].note = note;
    },

    viewNotes: function() {
      this.courses.forEach(function (course) {
        if (course.note !== undefined) {
          console.log(course.name + ': ' + course.note);
        }
      });
    },
  };
}
/*
addStudent: Adds a student by creating a new student and adding the student
to a collection of students. The method adds a constraint that the year can
only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'.
Returns a student object if year is valid otherwise it logs "Invalid Year".

enrollStudent: Enrolls a student in a course.

addGrade: Adds the grade of a student for a course.

getReportCard: Logs the grades of a student for all courses.
If the course has no grade, it uses "In progress" as the grade.

courseReport: Logs the grades of all students for a given course name.
Only student with grades are part of the course report.

algorithm:

addStudent:
- use getIndex to check if the year argument is one of the valid
  years in an array
  - if so, push to studentBody and return student object
  - if not, log 'Invalid year'

enrollStudent:
- add a course to a student object

addGrade:
- use filter to select the student name, then again to filter the correct course
- add the grade to the correct course

getReportCard:
- loop through all the courses that a student has, outputing the name and grade

courseReport:
- filter the students with a particular course
- iterate through students and log the grade
*/

var school = {
  studentBody: [],

  addStudent: function(name, year) {
    var validYears = ['1st', '2nd', '3rd', '4th', '5th'];

    if (validYears.indexOf(year) === -1) {
      console.log('Invalid Year');
    } else {
      var student = createStudent(name, year);
      this.studentBody.push(student);
      return student;
    }
  },

  // so the LS solution passes in a student object and course name/code while I
  // pass in a student name, and pass in the course object.

  enrollStudent: function(name, course) {
    var currentStudent = this.studentBody.filter(function (student) {
      return student.name === name;
    })[0];

    currentStudent.addCourse(course);
  },

  // same as the enrollStudent method, the LS solution is passing in the student object as
  // a parameter.  I mean, it's pretty much doing the same as I am, except I'm including extra
  // logic to filter the studentBody array down to the specific student I need based on the name.

  addGrade: function(name, code, grade) {
    var currentStudent = this.studentBody.filter(function (student) {
      return student.name === name;
    })[0];

    var currentCourse = currentStudent.courses.filter(function (course) {
      return course.code === code;
    })[0];

    currentCourse.grade = grade;
  },

  // forgot to log the grade as a string.  The LS solution uses an if/else conditional so that
  // if there is no grade, it's displayed as "In Progress" instead of actually adding that string
  // into the course object directly (the LS solution makes more sense)

  getReportCard: function(name) {
    var currentStudent = this.studentBody.filter(function (student) {
      return student.name === name;
    })[0];

    currentStudent.courses.forEach(function (course) {
      console.log(course.name + ': ' + course.grade);
    });
  },

  // I pushed the grades into an array rather than using map to change the studentBody array so that it
  // consists of the name and grade.  My answer gets to the same solution, but it's a little more clumbsy
  // than the LS solution.

  courseReport: function(name) {
    var grades = [];
    var grade;
    var average;
    var enrolledStudents = [];
    var applicableCourse;

    console.log('=' + name + ' Grades=')

    this.studentBody.forEach(function (student) {
      applicableCourse = student.courses.filter(function (course) {
        return course.name === name;
      });

      if (applicableCourse.length === 1) {
        enrolledStudents.push(student);
      }
    });

    enrolledStudents.forEach(function (student) {
      grade = student.courses.filter(function (course) {
        return course.name === name;
      })[0].grade;

      console.log(student.name + ': ' + grade);
      grades.push(grade);
    });

    console.log('---')

    average = grades.reduce(function (sum, value) {
      return sum + value;
    }) / grades.length;

    console.log('Course Average: ' + average);
  },


};

school.addStudent('foo', '3rd');
school.enrollStudent('foo', { name: 'Math', code: 101 });
school.enrollStudent('foo', { name: 'Advanced Math', code: 102 });
school.enrollStudent('foo', { name: 'Physics', code: 202 });
school.addGrade('foo', 101, 95);
school.addGrade('foo', 102, 90);
school.addGrade('foo', 202, 'In Progress');

school.addStudent('bar', '1st');
school.enrollStudent('bar', { name: 'Math', code: 101 });
school.addGrade('bar', 101, 91);

school.addStudent('qux', '2nd');
school.enrollStudent('qux', { name: 'Math', code: 101 });
school.enrollStudent('qux', { name: 'Advanced Math', code: 102 });
school.addGrade('qux', 101, 93);
school.addGrade('qux', 102, 90);


school.getReportCard('foo');
school.courseReport('Math');
school.courseReport('Advanced Math');


// bar;
// {
//   name: 'bar',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// }
//
// qux;
// {
//   name: 'qux',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }
