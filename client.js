console.log('in client.js');

$(document).ready(readyNow);

function readyNow() {
    console.log('in jquery.js');


    $('#submitbtn').on('click', inputIntoTable);
}

function inputIntoTable() {
   
    let firstName = $('#firstname').val();
    let firstNameOutput = $('#firstnameout');

    firstNameOutput.append(`
        <td>${firstName}</td>
    `);

    $('#firstname').val('');

    let lastName = $('#lastname').val();
    let lastNameOutput = $('#lastnameout');

    lastNameOutput.append(`
        <td>${lastName}</td>
    `);

    $('#lastname').val('');

    let id = $('#id').val();
    let idOutput= $('#idout');

    idOutput.append(`
        <td>${id}</td>
    `);

    $('#id').val('');

    let title = $('#jobtitle').val();
    let titleOutput = $('#jobtitleout');

    titleOutput.append(`
        <td>${title}</td>
    `);

    $('#jobtitle').val('');

    let annualSalary = $('#annualsalary').val();
    let annualSalaryOutput = $('#annualsalaryout');

    annualSalaryOutput.append(`
        <td>${annualSalary}</td>
    `);

    $('#annualsalary').val('');

}
