const school = {
  name: "XYZ School",
  establishYear: 1990,
  departments: {
    math: { teachers: 5, students: 150 },
    science: { teachers: 4, students: 120 },
    history: { teachers: 3, students: 100 },
    english: { teachers: 4, students: 130 },
  },
  courses: ["math", "science", "history", "english"],
  students: [
    {
      name: "Alice",
      className: "Grade 5",
      scores: { math: 95, science: 88, history: 85, english: 92 },
    },
    {
      name: "Bob",
      className: "Grade 4",
      scores: { math: 80, science: 78, history: 92, english: 85 },
    },
    {
      name: "Charlie",
      className: "Grade 5",
      scores: { math: 88, science: 90, history: 78, english: 88 },
    },
    {
      name: "Diana",
      className: "Grade 4",
      scores: { math: 92, science: 85, history: 88, english: 90 },
    },
  ],
};

function countCalculation(school) {
  const {
    departments: {
      math: { teachers: mathTeachers, students: mathStudents },
      history: { teachers: historyTeachers, students: historyStudents },
    },
  } = school;

  // Extract the counts
  const mathTeachersCount = mathTeachers;
  const historyTeachersCount = historyTeachers;
  const mathStudentsCount = mathStudents;
  const historyStudentsCount = historyStudents;

  return {
    mathTeachersCount,
    historyTeachersCount,
    mathStudentsCount,
    historyStudentsCount,
  };
}

// Call the countCalculation function after defining it
const counts = countCalculation(school);
console.log(counts);



// problem 2
function findTopStudent(school, courseName) {
  const { students } = school;

  let topStudent = null;
  let highestScore = -1;

  for (const student of students) {
    const score = student.scores[courseName];

    if (score > highestScore) {
      highestScore = score;
      topStudent = student;
    }
  }

  return topStudent ? JSON.stringify(topStudent) : "No student found for this course.";
}

console.log(findTopStudent(school, "math"));


// problem 3

function addNewDept(school, newDepartment) {
  return {
    ...school,
    departments: {
      ...school.departments,
      ...newDepartment,
    },
  };
}

const newDept = {
  art: { teachers: 3, students: 75 },
};

const updatedSchool = addNewDept(school, newDept);

console.log(updatedSchool);
