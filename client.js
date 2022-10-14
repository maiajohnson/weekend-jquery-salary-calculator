console.log('in client.js');

$(document).ready(readyNow);

function readyNow() {
    console.log('in jquery.js');


    $('#submitbtn').on('click', inputIntoTable);
   
  
}
let employeeList = [];

function inputIntoTable() {

    let newEmployee = {
        firstName: $('#firstname').val(),
        lastName: $('#lastname').val(),
        id: $('#id').val(),
        title: $('#jobtitle').val(),
        annualSalary: Number($('#annualsalary').val())
    }

    employeeList.push(newEmployee);

    render();

    // Calculate Monthly Total:
    let monthlyCostOutput = $('#monthlycostout');
    let monthlyCost = 0;
    for (let emply of employeeList) {
        monthlyCost += emply.annualSalary/12;
    }
    monthlyCostOutput.empty();
    monthlyCostOutput.append(`${monthlyCost}`);

    if (monthlyCost > 20000) {
        $('h2').css('background-color', 'red');
    }
    
};

// The render function:

function render() {
    $('#employeetable').empty();

    for (let emply of employeeList) {
        $('#employeetable').append(`
            <tr>
                <td>${emply.firstName}</td>
                <td>${emply.lastName}</td>
                <td>${emply.id}</td>
                <td>${emply.title}</td>
                <td>${emply.annualSalary}</td>
                <td>
                    <button class="deleteBtn">
                        Delete
                    </button>
                </td>
            </tr>
        `)
    };

    $('.deleteBtn').on('click', deleteFromTable);
};

function deleteFromTable() {
    console.log('delete the thing');
   $(this).parent().parent().remove();
};