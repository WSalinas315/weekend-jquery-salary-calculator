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

    // ensure no fields are blank
    if($('#firstEmp').val() == '' || $('#lastEmp').val() == '' || $('#idEmp').val() == '' || $('#titleEmp').val() == '' || $('#salaryEmp').val() == ''){
        console.log('Cannot add employee data due to one or more blank fields.');
        return;
      }

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

    // increment unique employee identifier
    empIdentifier++;

    // clear input fields
    $('#firstEmp').val('');
    $('#lastEmp').val('');
    $('#idEmp').val('');
    $('#titleEmp').val('');
    $('#salaryEmp').val('');

    //console.log(employees);

    // Calculate monthly costs and update DOM
    calculateMonthly();
    render();
}

// render function
function render(){
    //console.log('in render function');
    //empty the existing employee data on the DOM
    $('#employee-table').empty();

    // append worker data to employees table in the DOM
    for(let i=0;i<employees.length;i++){
        if(i == 0 || i % 2 == 0){
            $('#employee-table').append(`
                <tr>
                    <td>${employees[i].firstName}</td>
                    <td>${employees[i].lastName}</td>
                    <td>${employees[i].empID}</td>
                    <td>${employees[i].title}</td>
                    <td>$${employees[i].annualSalary}</td>
                    <td><button class="buttons" id="${employees[i].uniqueID}">Delete</button></td>
                </tr>
            `);
        } else{
            $('#employee-table').append(`
                <tr class="gray-row">
                    <td>${employees[i].firstName}</td>
                    <td>${employees[i].lastName}</td>
                    <td>${employees[i].empID}</td>
                    <td>${employees[i].title}</td>
                    <td>$${employees[i].annualSalary}</td>
                    <td><button class="buttons" id="${employees[i].uniqueID}">Delete</button></td>
                </tr>
            `);
        }
    }
    // Update Monthly Costs in DOM
    $('#monthly-costs').empty();
    if(monthlyCosts <= 20000){
        $('#monthly-costs').append(`
            <h2>Total Monthly: $${monthlyCosts}</h2>
        `);
    } else{
        $('#monthly-costs').append(`
            <h2 id="monthly-red">Total Monthly: $${monthlyCosts}</h2>
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

    // Recalculate monthly costs and render data to DOM
    calculateMonthly();
    render();
}

// function to calculate current monthly payroll costs
function calculateMonthly(){
    let tempSum = 0;
    for(worker of employees){
        tempSum += Number(worker.annualSalary);
    }
    console.log('Total employee salary: ', tempSum);
    monthlyCosts = (tempSum/12).toFixed(2);

}