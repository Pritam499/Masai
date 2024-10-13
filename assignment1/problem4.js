function highestPaid(employees) {
    return employees.reduce((highest, emp) => {
        const { salary } = emp;
        return salary > highest.salary ? emp : highest;
    });
}

const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(highestPaid(employees));

// Output: { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }

function destructuringToSwap(employees) {
    if (employees.length < 2) {
        return employees
    };

    [employees[0], employees[employees.length - 1]] = [employees[employees.length - 1], employees[0]];

    return employees
}

console.log(destructuringToSwap(employees));
