$(document).ready(onReady);

// array of employee objects
let employees = [];

// unique employee identifier
let empIdentifier = 0;

// variable for holding current montly payroll costs
let monthlyCosts =0;

// onReady function
function onReady(){
    $('#submit-btn').on('click', addWorker);
    $('#employee-table').on('click', '.buttons', removeWorker);
}

// addWorker function adds employee to the array and clears input fields
function addWorker(){
    console.log('in add worker function');

    // populate drone object for input fields
    let drone = {
        firstName: $('#firstEmp').val(),
        lastName: $('#lastEmp').val(),
        empID: $('#idEmp').val(),
        title: $('#titleEmp').val(),
        annualSalary: $('#salaryEmp').val(),
        uniqueID: empIdentifier
    };

    // add drone object to the employees array
    employees.push(drone);

    // Call to calculate monthly costs
    calculateMonthly();

    // increment unique employee identifier
    empIdentifier++;

    // clear input fields
    $('#firstEmp').val('');
    $('#lastEmp').val('');
    $('#idEmp').val('');
    $('#titleEmp').val('');
    $('#salaryEmp').val('');

    //console.log(employees);
    render();
}


// render function
function render(){
    //console.log('in render function');
    //empty the existing employee data on the DOM
    $('#employee-table').empty();

    // append worker data to employees table in the DOM
    for(let worker of employees){
        $('#employee-table').append(`
            <tr>
                <td>${worker.firstName}</td>
                <td>${worker.lastName}</td>
                <td>${worker.empID}</td>
                <td>${worker.title}</td>
                <td>${worker.annualSalary}</td>
                <td><button class="buttons" id="${worker.uniqueID}">Delete</button></td>
            </tr>
        `);
    }
}

// Function to remove a worker
function removeWorker(){
    let idForIndex = this.id;
    //console.log('Index to remove:', idForIndex);
    let employeeIndex;

    //check for a unique employee match
    for (let i=0;i<employees.length;i++){
        if(employees[i].uniqueID == idForIndex){
            employeeIndex = i;
        }
    }
    //console.log('employee Index for splicing is:', employeeIndex);
    // remove employee object from the employees array
    employees.splice(employeeIndex, 1);

    render();
}

// function to calculate current monthly payroll costs
function calculateMonthly(){
    let tempSum = 0;
    for(worker of employees){
        tempSum += Number(worker.annualSalary);
    }
    console.log('Total employee salary: ', tempSum);
    monthlyCosts = tempSum/12;
}