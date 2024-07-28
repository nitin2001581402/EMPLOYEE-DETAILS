import React, { useState } from 'react';
import axios from 'axios';

export default function Insert() {
    const [employee, setEmployee] = useState({});

    const handleEmployeeSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/employee/insert", employee)
            .then((res) => {
                console.log(res);
                alert("Employee added successfully");
            })
            .catch((err) => {
                console.error(err);
                alert("Error adding employee");
            });
    };

    const handleEmployeeChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    return (
        <div>
           <h1>Insert Employee</h1>
            <form onSubmit={handleEmployeeSubmit}>
               
                <input type='text' onChange={handleEmployeeChange} name='name' placeholder='Enter Name' /> <br />
                 <input type='text' onChange={handleEmployeeChange} name='emp_id' placeholder='Enter Employee ID' /> <br />
                <input type='text' onChange={handleEmployeeChange} name='phone' placeholder='Enter Phone' /> <br />
                <input type='text' onChange={handleEmployeeChange} name='designation' placeholder='Enter Designation' /> <br />
                <input type='text' onChange={handleEmployeeChange} name='address' placeholder='Enter Address' /> <br />
                <input type='text' onChange={handleEmployeeChange} name='age' placeholder='Enter Age' /> <br />
                <input type='text' onChange={handleEmployeeChange} name='salary' placeholder='Enter Salary' /> <br />
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
