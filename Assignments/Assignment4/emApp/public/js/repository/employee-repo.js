const baseUrl = '/api/employees'
class EmployeeRepo {
    //returns all the accounts depending on the type the user selected
    async getEmployees() {
        //read from indexeddb
        const employees = await fetch(baseUrl)
        return employees.json()
    }

    async getEmployee(eid) {
        const url = `/api/employees/${eid}`
        const response = await fetch(url, {method: 'GET'})
        return response.json();
    }
/*
    async getEmployee(eid) {
        const url=`/api/employees/${eid}`
        const employee = await fetch(url)
        const employee2=await employee.json()
        Object.setPrototypeOf(employee2 , employee.prototype)
        return employee2
    }
*/

    async deleteAllEmployees(){
        const response = await fetch(baseUrl, {method: 'DELETE'})
        return response
    }


    async deleteEmployee(eid) {
        const url = `/api/employees/${eid}`
        const response = await fetch(url, {method: 'DELETE'})
        return response
    }

    async addEmployee(employee) {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(employee)
        })
        return response
    }

    async updateEmployee(employee) {
        const response = await fetch(baseUrl, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(employee)
        })
        return response;
    }
}

export default new EmployeeRepo()
