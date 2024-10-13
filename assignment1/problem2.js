function employeeInformation(employees) {
    const secondEmployee = employees[1]

    const secondEmployeeName = secondEmployee.name;
    const secondEmployeeDepartment = secondEmployee.department;

    return {
        secondEmployeeName: secondEmployeeName,
        secondEmployeeDepartment: secondEmployeeDepartment
    };

}

//Example Invocation:
const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];

  console.log(employeeInformation(employees)); // Output: { secondEmployeeName: 'Jane Smith', secondEmployeeDepartment: 'Finance' }


//   problem 2

function averageSalary(employees) {
    let totalSalary = 0

    employees.forEach(({salary}) => {
        totalSalary += salary
    });

    return totalSalary / employees.length
}

  console.log(averageSalary(employees)); // Output: 60000


function thirdEmployeeInfo(employees) {
    const thirdEmployee = employees[2]

    const thirdEmployeeName = thirdEmployee.name;
    const thirdEmployeeAge = thirdEmployee.age;
    const thirdEmployeeSalary = thirdEmployee.salary;
    const thirdEmployeeBonus = thirdEmployee.salary * (0.1);

    return {
        Employee: thirdEmployeeName,
        Age : thirdEmployeeAge,
        Salary: thirdEmployeeSalary,
        Bonus : thirdEmployeeBonus
    }
  }


  console.log(thirdEmployeeInfo(employees)); // Output: "Employee: Alex Johnson, Age: 35, Salary: 70000, Bonus: 7000"
