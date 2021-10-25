// Student Registeration Form 

// variables
let studentLists = [];


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
const studentForm = document.querySelector('#form');
studentForm.addEventListener('submit', handleFormData);

// on Form Submit
function handleFormData(event) {
    event.preventDefault();      // to prevent page reload
    
    // create student object
    const studentObj = getStudentObject();

    // generate table data
    generateTableRow(studentObj);

    // store student data to global Student array list
    studentLists.push(studentObj);
    
    console.log('Final Student List added...', studentLists)

    // add the student data to local storage
    updateLocalStorage(studentLists);

    // reset student form
    studentForm.reset();
}

function getStudentObject() {

    // create unique student ID
    let id = studentLists[studentLists.length - 1]?.id ? studentLists[studentLists.length - 1].id + 1 : studentLists.length+1;
    // console.log(studentLists[studentLists.length - 1], studentLists[studentLists.length - 1]?.id + 1)
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
        id,
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

function generateTableRow(studentObj) {
    // bind student object into table
    const sTable = document.querySelector('.student-table');

    // create empty <tr>
    let tr = document.createElement('tr');

    // create SNo td
    let td = document.createElement('td');
    td.textContent = studentObj.id;
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

    let viewBtn = generateViewButton(studentObj.id);

    // bind Event to View Button
    viewBtn.addEventListener('click', function (event) {
        const sID = +event.target.getAttribute('action-id');
        buildModalData(sID);
    })

    let deleteBtn = generateDeleteButton(studentObj.id);

    // bind Event to Delete Button
    deleteBtn.addEventListener('click', function (event) {
        const sID = +event.target.getAttribute('action-id');
        deleteStudentData(sID);
    })

    // append action buttons
    actionViewTd.appendChild(viewBtn);
    actionDeleteTd.appendChild(deleteBtn);

    tr.appendChild(actionViewTd);
    tr.appendChild(actionDeleteTd);


    // append student row
    sTable.querySelector('tbody').appendChild(tr);
}

function rebuidTableRows(studentLists) {
    // remove old table data
    const sTable = document.querySelector('.student-table');
    sTable.querySelector('tbody').innerHTML = '';

    studentLists.forEach((studentObj) => {
        generateTableRow(studentObj);
    })
}

function generateViewButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-warning';
    btn.textContent = 'View';
    btn.setAttribute('data-bs-toggle', 'modal');
    btn.setAttribute('data-bs-target', '#studentPanel');
    btn.setAttribute('action-id', id);

    return btn;
}

function generateDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-danger';
    btn.textContent = 'Delete';
    btn.setAttribute('action-id', id);

    return btn;
}

function buildModalData(id) {
    // getCurrentStudentObject with given id
    
    const studentObj = studentLists.filter((obj) => obj.id === id)[0];

    const popupRow = Object.keys(studentObj).map((key) => {
        return ` <tr> <td>${key}</td><td>${studentObj[key]}</td> </tr>`;
    });
    
    document.querySelector('.student-popup tbody').innerHTML = popupRow.join('');
}

function deleteStudentData(id) {
    const filteredStudentList = studentLists.filter((obj) => obj.id !== id);
    console.log(filteredStudentList)
    
    // replace the StudentLists with the filteredStudentList
    studentLists = filteredStudentList;

    rebuidTableRows(studentLists);

    // update LocalStorage
    updateLocalStorage(studentLists);
}

function updateLocalStorage(studentLists) {
    const data = JSON.stringify(studentLists);
    localStorage.setItem('student-list', data);
}

function init() {
    // check if any data in localStorage
    if(localStorage.getItem('student-list').length) {
        // convert JSON String to original data format
        const data = JSON.parse(localStorage.getItem('student-list'));
        studentLists = data;

        rebuidTableRows(studentLists);

    }
}

init();
