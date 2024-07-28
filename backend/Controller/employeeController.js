const Employee = require('../models/employee');

const Insert = async (req, res) => {
    try {
        const { emp_id, name, phone, designation, address, age, salary } = req.body;
        const employee = new Employee({ emp_id, name, phone, designation, address, age, salary });
        const savedEmployee = await employee.save();
        res.status(201).json({ message: "Employee inserted successfully", savedEmployee });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

const Get = async (req, res) => {
    try {
        const id = req.params.id;
        if (id) {
            const employee = await Employee.findById(id);
            if (employee) {
                return res.status(200).json({ success: true, data: employee });
            } else {
                return res.status(404).json({ success: false, message: "Employee not found" });
            }
        } else {
            const employees = await Employee.find();
            return res.status(200).json({ success: true, data: employees });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

const Delete = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedEmployee = await Employee.findByIdAndDelete(id);
        if (deletedEmployee) {
            res.status(200).json({ success: true, data: deletedEmployee });
        } else {
            res.status(404).json({ success: false, message: "Employee not found" });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

const Update = async (req, res) => {
    try {
        const id = req.params.id;
        const { emp_id, name, phone, designation, address, age, salary } = req.body;
        const updatedEmployee = await Employee.findByIdAndUpdate(
            id,
            { emp_id, name, phone, designation, address, age, salary },
            { new: true }
        );
        if (updatedEmployee) {
            res.status(200).json({ success: true, data: updatedEmployee });
        } else {
            res.status(404).json({ success: false, message: "Employee not found" });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = { Insert, Get, Delete, Update };
