let monthySalary = 0;
let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});



function handleSubmit(event){
    event.preventDefault();

    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let employeeID = document.getElementById('employee-id').value;
    let employeeTitle = document.getElementById('employee-title').value;
    let annualSalary = document.getElementById('annual-salary').value;

    document.getElementById('first-name').value = ''
    document.getElementById('last-name').value = ''
    document.getElementById('employee-id').value = ''
    document.getElementById('employee-title').value = ''
    document.getElementById('annual-salary').value = ''

    // console.log(firstName, lastName, employeeID, employeeTitle, annualSalary);

    // Should make annualSalary variable into number - all inputs get passed to js as string regardless of input type
    monthySalary += (annualSalary / 12);

    // I made this when I was changing css based on two different spans, not the footer,
    // could be simplified using .classlist.add('class-name')
    // could also just select footer directly document.querySelector('footer'), 
    // no need for footer it since it's the only one there'll ever be
    if (monthySalary <= 20000){
        document.getElementById('monthly-salary').textContent = USDollar.format(monthySalary);
    } else {
        document.getElementById('monthly-salary').textContent = '';
        document.getElementById('footer').className += 'over-budget';
        document.getElementById('monthly-salary-over').textContent = USDollar.format(monthySalary);
    }

    
// maybe need to have an id on the <tr> that is unique to the event to carry over to the remove function

// Matt created a variable called employee row with this formatting, 
// so that all you had to was call that variable name
// also to future proof add an id to tbody and call that
    tableBody.innerHTML += `
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${employeeID}</td>
        <td>${employeeTitle}</td>
        <td>${USDollar.format(annualSalary)}</td>
        <td><button class="remove-button" onclick="removeEmployee(event)">Delete Row</button></td>
    </tr>
    `
}

function removeEmployee (event) {

// // event target the employee's salary
//     employeeAnnualSalary = document.querySelector("#tableBody")
// // decrement monthly salary
//     monthySalary -= (employeeannualSalary / 12);

    event.target.parentElement.parentElement.remove();   
}
  
