$(document).ready(onReady);

// array of employee objects
let employees = [];

// unique employee identifier
let empIdentifier = 0;

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

    // increment unique employee identifier
    empIdentifier++;

    // clear input fields
    $('#firstEmp').val('');
    $('#lastEmp').val('');
    $('#idEmp').val('');
    $('#titleEmp').val('');
    $('#salaryEmp').val('');

    console.log(employees);

    render();
}


// render function
function render(){
console.log('in render function');

$('#employee-table').empty();

// append worker data to employees table in the DOM
for(let worker of employees){
    $('#employee-table').append(`
        <tr>
            <td class="tableRender${worker.uniqueID}">${worker.firstName}</td>
            <td class="tableRender${worker.uniqueID}">${worker.lastName}</td>
            <td class="tableRender${worker.uniqueID}">${worker.empID}</td>
            <td class="tableRender${worker.uniqueID}">${worker.title}</td>
            <td class="tableRender${worker.uniqueID}">${worker.annualSalary}</td>
            <td class="tableRender${worker.uniqueID} buttons" id="${worker.uniqueID}"><button>Delete</button></td>
        </tr>
    `);
}

// ^^^ add class for background colors and if statements for index positions????

// append empty bottom row to table
//$('employee-table').append(`<tr></tr>`);



}

// Function to remove a worker
function removeWorker(){
    let idForIndex = this.id;
    console.log('Index to remove:', removeIndex);
    let employeeIndex;

    //check for a unique employee match
    for (let i=0;i<employees.length;i++){
        if(employees[i].uniqueID == idForIndex){
            employeeIndex = i;
        }
    }

    // remove employee object from the employees array
    employees.splice(employeeIndex, 1);

    render();
}