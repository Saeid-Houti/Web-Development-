import fs from 'fs-extra';

const filePath= './data/employees.json';

export default class EmployeesRepo{
    async getEmployees() {
        const employees=await fs.readJson(filePath)
        return employees
    }

    async getEmployee(eid) {
        const employees = await fs.readJson(filePath)
        return employees.find(employee => employee.eid == eid)
    }

    async addEmployee(employee) {
        const employees = await fs.readJson(filePath)
        employees.push(employee)
        return await this.saveAccounts(employees)
    }

    async updateEmployee(employee) {
        const employees = await fs.readJson(filePath)
        const index = employees
            .findIndex(employe => employe.eid === employee.eid)
        employees[index] = employee
        await this.saveAccounts(employees)
        return  `updated employee ${employee.eid}`

    }

    async deleteEmployee(eid) {
        let employees = await fs.readJson(filePath)
        employees = employees.filter(employee => employee.eid != eid)
        await this.saveAccounts(employees)
        return `deleted employee ${eid}`
    }

    async deleteEmployees(){
        const employees = await fs.readJson(filePath)
        const deleteEmployees=employees.splice()
        await fs.writeJson(filePath,deleteEmployees)
    }

    async saveAccounts(accounts) {
        return await fs.writeJson(filePath, accounts)
    }
}