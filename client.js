console.log('in client.js');

$(document).ready(readyNow);

function readyNow() {
    console.log('in jquery.js');


    $('#submitbtn').on('click', inputIntoTable);
   
}
// Let employeeList = [];

function inputIntoTable() {
   
    let firstName = $('#firstname').val();

     $('#firstname').val('');

    let lastName = $('#lastname').val();

    $('#lastname').val('');

    let id = $('#id').val();

    $('#id').val('');

    let title = $('#jobtitle').val();

    $('#jobtitle').val('');

    let annualSalary = Number($('#annualsalary').val());

    $('#annualsalary').val('');

    /* Can also put the values into an object array:

    let newEmployee = {
        firstName: $('#firstname').val(),
        lastName: $('#lastname').val(),
        id: $('#id').val(),
        title: $('#title').val(),
        annualSalary: Number($('#annualsalary').val())
    }

    employeeList.push(newEmployee);

    render();
    */

     /* turn salary to number:
    annualSalary = Number(annualSalary)

        Calculate Monthly Total:
    let monthlyCost = 0;
    for (let emply of employeeList) {
        monthlyCost += emply.annualSalary/12;
    }
        monthlyCostOutput.append(`${monthlyCost}`);

    if (monthlyCost > 20000) {
        $('h2').css('background-color', 'red');
    }
    */

    let monthlyCost = annualSalary/12;
    
    let monthlyCostOutput = $('#monthlycostout');

    monthlyCostOutput.append(`${monthlyCost}`);

    if (monthlyCost > 20000) {
        $('h2').css('background-color', 'red');
        console.log(monthlyCost);
    };

    $('table').append(`
        <tr class="remove">
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${id}</td>
            <td>${title}</td>
            <td>${annualSalary}</td>
            <td><button class="deletebtn">Delete</button></td> 
        </tr>
    `);

    $('.deletebtn').on('click', deleteFromTable);
}
/* The render function:

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
    }
}
*/
function deleteFromTable() {
   $(this).parent().parent().remove();
}