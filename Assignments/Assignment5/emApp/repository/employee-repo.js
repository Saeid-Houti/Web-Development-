import Department from '../model/department.js'
import Employee from '../model/employee.js'


export default class EmployeeRepo {

    async addEmployee(employee) {
        return await Employee.create(employee)
    }
    async getEmployees() {
        return Employee.find()
    }

    async getEmployee(eid) {
        return Employee.findOne({_id: eid})
    }

    async updateEmployee(eid,updatedEmployee) {
        return Employee.findByIdAndUpdate(eid,updatedEmployee)

    }

    async deleteEmployee(eid) {
            return Employee.deleteOne({_id:eid})
        }

    async deleteAllEmployees() {
        return Employee.deleteMany({})

    }

    async getDepartment(did) {
        return Department.findOne({_id: did})

    }

    async getDepartments() {
        return Department.find()
}

    async getDepartmentEmployees() {
        return Department.aggregate([
            {
                '$lookup': {
                    'from': 'employees',
                    'localField': 'did',
                    'foreignField': 'did',
                    'as': 'employees'
                }
            }, {
                '$unset': '__v'
            }
        ])
    }

    async getDepartmentsStats() {
        return Department.aggregate([
            {
                '$lookup': {
                    'from': 'employees',
                    'localField': 'did',
                    'foreignField': 'did',
                    'as': 'employees'
                }
            }, {
                '$addFields': {
                    'numberOfEmployees': {
                        '$size': '$employees'
                    }
                }
            }, {
                '$unset': [
                    'employees', '__v'
                ]
            }
        ])

    }

}

