class Employee {
    constructor(name, surname, rate, days) {
        this.name = name,
        this.surname = surname,
        this.rate = rate,
        this.days = days
    }
    getSalary() {
        let salary = this.rate * this.days;
        return salary;
    }
}

let employee = new Employee('Иван', 'Иванов', 10, 31);
console.log(employee.name); //выведет 'Иван'
console.log(employee.surname); //выведет 'Иванов'
console.log(employee.rate); //выведет 10
console.log(employee.days); //выведет 31
console.log(employee.getSalary()); //выведет 310 - то есть 10*31