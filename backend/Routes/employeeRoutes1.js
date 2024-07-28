const express = require('express');
const { Insert, Get, Delete, Update } = require('../Controller/employeeController');
const route = express.Router();

// Route to insert a new employee
route.post('/insert', Insert);

// Route to get all employees
route.get('/get', Get);

// Route to get a specific employee by ID
route.get('/get/:id', Get);

// Route to delete an employee by ID
route.delete('/delete/:id', Delete);

// Route to update an employee by ID
route.put('/update/:id', Update);

module.exports = route;
