// Student Registeration Form 

// show others hobby field on toggle

document.querySelector('.other-hobby-check').addEventListener('change', function (event) {
    let hobbyToggleState = event.target.checked;

    if(hobbyToggleState) {
        document.querySelector('.other-hobby-field').classList.add('show');
    }else {
        document.querySelector('.other-hobby-field').classList.remove('show');
    }
})


// bind form submit event
document.querySelector('#form').addEventListener('submit', handleFormData);

// on Form Submit
function handleFormData(event) {
    event.preventDefault();      // to prevent page reload
    
    // get student form data and create student Object
    const studentObj = getStudentObject();

    // bind student object into table
    const sTable = document.querySelector('.student-table');

    // create empty <tr>
    let tr = document.createElement('tr');

    // create SNo td
    let td = document.createElement('td');
    td.textContent = sTable.querySelectorAll('tbody tr').length + 1;
    tr.appendChild(td);

    // create <td> and then append to <tr>
    Object.keys(studentObj).map((key) => {
        switch(key) {
            case 'firstName':
            case 'dateOfBirth':
            case 'gender':
            case 'city':
                let td = document.createElement('td');
                td.textContent = studentObj[key];
                tr.appendChild(td);
            break;
            default:
            break;
        }
    });

    // Actions button creation
    let actionViewTd = document.createElement('td');
    let actionDeleteTd = document.createElement('td');

    let viewBtn = document.createElement('button');
    viewBtn.className = 'btn btn-warning';
    viewBtn.textContent = 'View';

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger';
    deleteBtn.textContent = 'Delete';

    // append action buttons
    actionViewTd.appendChild(viewBtn);
    actionDeleteTd.appendChild(deleteBtn);

    tr.appendChild(actionViewTd);
    tr.appendChild(actionDeleteTd);


    // append student row
    sTable.querySelector('tbody').appendChild(tr);
    
}


function getStudentObject() {
    let firstName = document.querySelector('#fname').value;
    let lastName = document.querySelector('#lname').value;
    let dateOfBirth = document.querySelector('#dob').value;
    let email = document.querySelector('#email').value;
    let mobileNo = document.querySelector('#phno').value;
    let gender = document.querySelector('.gender-input[name="gender"]:checked').value;
    let hobbies = [];
    document.querySelectorAll('.hobby-check[name="hobbies"]:checked').forEach(function (input) {
        hobbies.push(input.value);
    });
    let address = document.querySelector('#address').value;
    let city = document.querySelector('#city').value;
    let pincode = document.querySelector('#pincode').value;


    // construct student object
    return {
        firstName,
        lastName,
        dateOfBirth,
        email,
        mobileNo,
        gender,
        hobbies,
        address,
        city,
        pincode
    };
}