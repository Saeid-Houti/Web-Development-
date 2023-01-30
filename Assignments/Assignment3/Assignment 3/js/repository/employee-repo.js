const db = new Localbase('db')

export class EmployeeRepo {
    addEmployee(Employee) {
        try {
            return db.collection('employee').add(Employee)
        } catch (e) {
            console.log(e)
        }
    }

    updateEmployee(updateEmployee) {
        try {
            return db.collection('employee').doc({id: updateEmployee.id}).update(updateEmployee)
        } catch (e) {
            console.log(e)
        }
    }

    deleteEmployee(id) {
        try {
            return db.collection('employee').doc({id}).delete()
        } catch (e) {
            console.log(e)
        }
    }

    getEmployeeById(id) {
        try {
            return db.collection('employee').doc({id}).get()
        } catch (e) {
            console.log(e)
        }
    }

    getAllEmployee() {
        try {
                return db.collection('employee').get()
        } catch (e) {
            console.log(e)
        }
    }


}
