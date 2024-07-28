const mongoose = require('mongoose');

const { Schema } = mongoose;

const employeeSchema = new Schema({
    emp_id: {
        type: String,
        required: true,
        unique: true, 
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String, 
        required: true,
        validate: {
            validator: function(v) {
                return /^\d{10}$/.test(v); 
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    designation: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        min: 18, 
    },
    salary: {
        type: Number,
        required: false,
        min: 0, 
    }
});

module.exports = mongoose.model("Employee", employeeSchema);
