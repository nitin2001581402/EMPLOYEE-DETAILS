import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import './View.css';
import { Link } from 'react-router-dom';

export default function View() {
    const [edisplay, setEdisplay] = useState([]);
    const [change, setChange] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:5000/api/employee/get")
            .then((res) => {
                setEdisplay(res.data.data || []);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [change]);

    const handleDelete1 = (id) => {
        setChange(true);
        axios.delete(`http://localhost:5000/api/employee/delete/${id}`)
            .then((res) => {
                alert("Deleted Successfully");
                setChange(false);
                setEdisplay(prev => prev.filter(item => item._id !== id));
            })
            .catch((err) => {
                console.error(err);
                alert("Delete Unsuccessful");
                setChange(false);
            });
    };

    return (
        <div className='sub-view'>
            <center><h1 className='head'>Employee Table</h1></center>
            {edisplay.length === 0 ? <h1 style={{ color: "red" }}>Server Not Responding</h1> :
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align='center'>SI NO</TableCell>
                                <TableCell align='center'>Name</TableCell>
                                <TableCell align='center'>Employee ID</TableCell>
                                <TableCell align='center'>Phone</TableCell>
                                <TableCell align='center'>Designation</TableCell>
                                <TableCell align='center'>Address</TableCell>
                                <TableCell align='center'>Age</TableCell>
                                <TableCell align='center'>Salary</TableCell>
                                <TableCell align='center' colSpan={2}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {edisplay.map((item, index) => (
                                <TableRow key={item._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell align='center'>{index + 1}</TableCell>
                                    <TableCell align='center'>{item.name}</TableCell>
                                    <TableCell align='center'>{item.emp_id}</TableCell>
                                    <TableCell align='center'>{item.phone}</TableCell>
                                    <TableCell align='center'>{item.designation}</TableCell>
                                    <TableCell align='center'>{item.address}</TableCell>
                                    <TableCell align='center'>{item.age}</TableCell>
                                    <TableCell align='center'>{item.salary}</TableCell>
                                    <TableCell align='center'>
                                        <Link to={`/employee/edit/${item._id}`}><Button variant="contained" color="success">EDIT</Button></Link>
                                    </TableCell>
                                    <TableCell align='center'>
                                        <Button onClick={() => handleDelete1(item._id)} variant="contained" color="error">DELETE</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>}
        </div>
    );
}
