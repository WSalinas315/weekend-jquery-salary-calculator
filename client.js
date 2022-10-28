$(document).ready(onReady);

// array of employee objects
let employees = [];

// unique employee identifier
let empIdentifier = 0;

// onReady function
function onReady(){
    $('#submit-btn').on('click', addWorker);


}

// addWorker function adds employee to the array and clears input fields
function addWorker(){
    console.log('in add worker function');

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
    $('#annualSalary').val('');
}


// render function
function render(){
console.log('in render function');

}