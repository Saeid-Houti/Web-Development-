import EmployeesRepo from "../repository/employee-repo.js";
/*
import employeeRepo from "../public/js/repository/employee-repo.js";
*/

const employeesRepo = new EmployeesRepo()

export default class EmployeeService {

    async getEmployees(req, res) {
        if (req.query.eid) {

        } else {
        const employees = await employeesRepo.getEmployees()
        res.json(employees)
    }
    }

    async getEmployee(req, res) {
        const employeeId = req.params.empid
        const employee = await employeesRepo.getEmployee(employeeId)
        res.json(employee)
    }

    async deleteEmployee(req, res) {
        const employeeId = req.params.empid
        const response = await employeesRepo.deleteEmployee(employeeId)
        res.json(response)
    }

    async deleteEmployees() {
        const employee=await employeesRepo.deleteEmployees()
        res.json(employee)

    }

    async addEmployee(req, res) {
        const employee = req.body
        const response = await employeesRepo.addEmployee(employee)
        res.json(response)
    }

    async updateEmployee(req, res) {
        const employee = req.body
        const response = await employeesRepo.updateEmployee(employee)
        res.json(response)

    }
}
