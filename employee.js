// Using an object instead of an array because of computational complexity
// Since objects are implemented using hashes check to see if an employee number
// exists is O(1) whereas with an array it's O(n)
// Employee ID will therefore be used as the key
var employees = {};
var num_of_employees = 99999999;

function createEmployee(first_name, last_name, department) {
  var id = generateEmployeeNumber();
  if (id === 'error') return null;
  var employee = {
    first_name: first_name,
    last_name: last_name,
    department: department,
    employee_id: id,
    hire_date: createDateString(new Date())
  };
  employees[id] = employee;
  return employee;
}

function generateEmployeeNumber() {
  if (employeeCount >= num_of_employees) {
    console.error('Maximum number of employees exceeded');
    return 'error';
  }
  var number = Math.floor(Math.random() * 99999999);
  while (employees[number] !== undefined)
    number = Math.floor(Math.random() * 99999999);
  return number;
}

function displayEmployee(employee) {
  document.getElementById('added').innerHTML = "Employee Added";
  document.getElementById('employee_name').innerHTML = ('Name: ' + employee.last_name + ', ' + employee.first_name);
  document.getElementById('employee_department').innerHTML = ('Department: ' + employee.department);
  document.getElementById('employee_id').innerHTML = ('Employee ID: ' + employee.employee_id);
  document.getElementById('employee_hire_date').innerHTML = ('Hire Date: ' + employee.hire_date);
  document.getElementById('total_employees').innerHTML = ('Total Employees: ' + employeeCount());
}

function employeeCount() {
  return Object.keys(employees).length;
}

function addEmployee(first_name, last_name, department) {
  displayEmployee(createEmployee(first_name, last_name, department));
  return false;
}

function createDateString(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  var day = days[date.getDay()];
  var month = months[date.getMonth()];
  var dayOfMonth = date.getDate();
  var year = date.getFullYear();
  return day + ' ' + month + ' ' + dayOfMonth + ' ' + year;
}
