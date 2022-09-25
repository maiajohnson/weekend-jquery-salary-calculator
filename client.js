console.log('in client.js');

$(document).ready(readyNow);

function readyNow() {
    console.log('in jquery.js');


    $('#submitbtn').on('click', inputIntoTable);
   
}

function inputIntoTable() {
   
    let firstName = $('#firstname').val();

     $('#firstname').val('');

    let lastName = $('#lastname').val();

    $('#lastname').val('');

    let id = $('#id').val();

    $('#id').val('');

    let title = $('#jobtitle').val();

    $('#jobtitle').val('');

    let annualSalary = $('#annualsalary').val();

    $('#annualsalary').val('');

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

function deleteFromTable() {
   $(this).parent().parent().remove();
}