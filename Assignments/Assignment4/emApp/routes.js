import express from "express";
import EmpService from "./service/employee-service.js";

const empService = new EmpService()

const router = express.Router();

router.route('/employees')
    .get(empService.getEmployees)
    .post(empService.addEmployee)
    .put(empService.updateEmployee)
    .delete(empService.deleteEmployees)


router.route('/employees/:empid')
    .get(empService.getEmployee)
    .delete(empService.deleteEmployee)

export default router
