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

    console.log(firstName, lastName, employeeID, employeeTitle, annualSalary);



//     tableBody.innerHTML +=
//     `<tr>
//     <td>${affirmation}</td>
//     <td>${author}</td>
//     <td><button onclick="deleteAff(event)">🆒</button></td>
//   </tr>`
  
  }