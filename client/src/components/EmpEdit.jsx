import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import './View.css';
import { useNavigate, useParams } from 'react-router-dom';

export default function EmpEdit() {
  const { id } = useParams();
  const [edit, setEdit] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/employee/get/${id}`)
      .then((res) => {
        if (res.data.data) {
          setEdit(res.data.data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const handleEdit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/employee/update/${id}`, edit)
      .then((res) => {
        if (res.data.success) {
          alert("Data updated successfully");
          navigate("/view");
        } else {
          alert("Something went wrong");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("No response from server");
      });
  };

  const handleChange = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };

  return (
    <div className='main-insert'>
      <div className='sub-insert'>
        <Container maxWidth="sm">
          <Typography variant="h4" gutterBottom>
            Employee Form
          </Typography>
          <Box component="form" onSubmit={handleEdit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
              onChange={handleChange}
              value={edit.name || ''}
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
            />
            
            
            <TextField
              onChange={handleChange}
              value={edit.emp_id || ''}
              name="emp_id"
              label="Employee ID"
              variant="outlined"
              fullWidth
            />
            <TextField
              onChange={handleChange}
              value={edit.name || ''}
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
            />
            <TextField
              onChange={handleChange}
              value={edit.phone || ''}
              name="phone"
              label="Phone"
              variant="outlined"
              fullWidth
            />
            <TextField
              onChange={handleChange}
              value={edit.designation || ''}
              name="designation"
              label="Designation"
              variant="outlined"
              fullWidth
            />
            <TextField
              onChange={handleChange}
              value={edit.address || ''}
              name="address"
              label="Address"
              variant="outlined"
              fullWidth
            />
            <TextField
              onChange={handleChange}
              value={edit.age || ''}
              name="age"
              label="Age"
              variant="outlined"
              fullWidth
            />
            <TextField
              onChange={handleChange}
              value={edit.salary || ''}
              name="salary"
              label="Salary"
              variant="outlined"
              fullWidth
            />
            
            <Button type="submit" variant="contained" color="primary">
              UPDATE
            </Button>
          </Box>
        </Container>
      </div>
    </div>
  );
}
