console.log('in client.js');

$(document).ready(readyNow);

function readyNow() {
    console.log('in jquery.js');


    $('#submitbtn').on('click', inputIntoTable);
   
}

function inputIntoTable() {
   
    let firstName = $('#firstname').val();
    let firstNameOutput = $('#tableinfo');

    firstNameOutput.append(`
        <td>${firstName}</td>
    `);

    $('#firstname').val('');

    let lastName = $('#lastname').val();
    let lastNameOutput = $('#tableinfo');

    lastNameOutput.append(`
        <td>${lastName}</td>
    `);

    $('#lastname').val('');

    let id = $('#id').val();
    let idOutput= $('#tableinfo');

    idOutput.append(`
        <td>${id}</td>
    `);

    $('#id').val('');

    let title = $('#jobtitle').val();
    let titleOutput = $('#tableinfo');

    titleOutput.append(`
        <td>${title}</td>
    `);

    $('#jobtitle').val('');

    let annualSalary = $('#annualsalary').val();
    let annualSalaryOutput = $('#tableinfo');

    annualSalaryOutput.append(`
        <td>${annualSalary}</td>
    `);

    $('#annualsalary').val('');

    let monthlyCost = annualSalary/12;
    let monthlyCostOutput = $('#monthlycostout');

    monthlyCostOutput.append(`${monthlyCost}`);

    if (monthlyCost > 20000) {
        $('h2').css('background-color', 'red');
        console.log(monthlyCost);
    };

    $('#tableinfo').append(`
        <td><button id="deletebtn">Delete</button></td>
    `);

    $('#deletebtn').on('click', deleteFromTable);
}

function deleteFromTable() {
   $(this).parent().parent().remove();
}