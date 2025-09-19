/* Your Code Here */
function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployeeRecords(arrOfArr) {
    return arrOfArr.map(createEmployeeRecord);
}

// function createTimeInEvent(employee, dateTime) {
//     const [date, hour] = dateTime.split(' ');
//     employee.timeInEvents.push({
//         type: "TimeIn",
//         hour: parseInt(hour, 10),
//         date: date
//     });
//     return employee;
// }
function createTimeInEvent(dateTime) {
    const [date, hour] = dateTime.split(' ');
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    });
    return this;
}

function createTimeOutEvent(dateTime) {
    const [date, hour] = dateTime.split(' ');
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    });
    return this;
}


// function createTimeOutEvent(employee, dateTime) {
//     const [date, hour] = dateTime.split(' ');
//     employee.timeOutEvents.push({
//         type: "TimeOut",
//         hour: parseInt(hour, 10),
//         date: date
//     });
//     return employee;
// }

function hoursWorkedOnDate(soughtDate) {
    const timeIn = this.timeInEvents.find(e => e.date === soughtDate);
    const timeOut = this.timeOutEvents.find(e => e.date === soughtDate);
    return (timeOut.hour - timeIn.hour) / 100;
}

function wagesEarnedOnDate(dateSought) {
    const hours = hoursWorkedOnDate.call(this, dateSought);
    return hours * this.payPerHour;
}

// function hoursWorkedOnDate(employee, soughtDate) {
//     const timeIn = employee.timeInEvents.find(e => e.date === soughtDate);
//     const timeOut = employee.timeOutEvents.find(e => e.date === soughtDate);
//     return (timeOut.hour - timeIn.hour) / 100;
// }

// function wagesEarnedOnDate(employee, dateSought) {
//     const hours = hoursWorkedOnDate(employee, dateSought);
//     return hours * employee.payPerHour;
// }

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(emp => emp.firstName === firstName);
}

function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, emp) => total + allWagesFor.call(emp), 0);
};



/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

