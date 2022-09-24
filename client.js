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
}
