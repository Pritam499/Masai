function employeesInDepartment(employees, department) {
    const filteredEmployees = employees.filter(
        (employee) => employee.department === department
  );

  return filteredEmployees.map((employee) => employee.name);
}

//Example Invocation:
const employees = [
  { name: 'John Doe', age: 30, department: 'HR', salary: 50000 },
  { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 },
  { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 },
  { name: 'Maria Lopez', age: 29, department: 'Finance', salary: 65000 },
];

console.log(employeesInDepartment(employees, 'Finance')); // Output: ['Jane Smith', 'Maria Lopez']

//   problem 2

function totalSalaryByDepartment(employees, department) {
    return employees.filter(emp => emp.department === department).reduce((total, emp) => total + emp.salary, 0)
}

  console.log(totalSalaryByDepartment(employees, "Finance")); // Output: 125000


function employeeSummary(employees) {
    return employees.map(emp => {
        return `Employee ${emp.name} works in ${emp.department} department and earns $${emp.salary} annually.`;
    })
}

console.log(employeeSummary(employees));
