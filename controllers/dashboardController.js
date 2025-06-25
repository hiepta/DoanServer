import Employee from "../models/Employee.js"
import Department from "../models/Department.js"
import Leave from "../models/Leave.js";

const getSummary = async (req, res) => {
    try{
        const totalEmployees = await Employee.countDocuments();
        const totalDepartments = await Department.countDocuments();
        const totalSalaries = await Employee.aggregate([
            {$group: {_id: null, totalSalary: {$sum: "$salary"}}}
        ])

        const employeeAppliedForLeave = await Leave.distinct('employeeId')
    }
}

export {getSummary}