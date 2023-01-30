import {EmployeeRepo} from './repository/employee-repo.js'
const repo = new EmployeeRepo()

const employeesTable = document.querySelector('#countries')
const form = document.querySelector('#form')
const addBtn = document.querySelector('#add-btn')
const list = document.querySelector('#list')


form.addEventListener('submit', addEmployee)

window.onload = async ()=>{
    await showEmployeeList();
    window.deleteEmployee = deleteEmployee
    window.updateEmployee = updateEmployee
}
async function addEmployee(e) {
    e.preventDefault()
    const employee = formToObject(e.target)

    if(addBtn.value == 'submit'){
        employee.id = Date.now().toString()
        const response = await repo.addEmployee(employee)
    }else{
        const response = await repo.updateEmployee(employee)
        addBtn.value = 'submit'
    }
    await showEmployeeList()
   form.reset()

}

async function showEmployeeList() {

    const allEmployees = await repo.getAllEmployee()
    const employeeHTMLRows = allEmployees.map(employee => employeeToHTMLRow(employee)).join(' ')

    employeesTable.innerHTML = `
        <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>email</th>
            <th>Action</th>
        </tr>
        ${employeeHTMLRows} 
    `
}

function employeeToHTMLRow(employee){
    return `
        <tr>
            <td>${employee.fname}</td>
            <td>${employee.lname}</td>
            <td>${employee.email}</td>
            <td>
                <i class="fa-fa-edit" onclick="updateEmployee('${employee.id}')">Update</i>
                <i class="fa-trash" onclick="deleteEmployee('${employee.id}')">Delete</i>
            </td>
        </tr>
    `
}

async function updateEmployee(id){
    const employee = await repo.getEmployeeById(id)
    document.querySelector('#fname').value = employee.fname
    document.querySelector('#lname').value = employee.lname
    document.querySelector('#email').value = employee.email
    document.querySelector('#id').value = employee.id
    addBtn.value ='update'
    console.log(addBtn.value)
}

async function deleteEmployee(id) {
    await repo.deleteEmployee(id)
    await showEmployeeList()
}

function formToObject(form) {
    const formData = new FormData(form)
    console.log(formData)
    const data = {}
    for (const [key, value] of formData) {
        data[key] = value
    }
    return data;
}