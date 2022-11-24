import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react'
import { deleteuser, loadUsers } from '../redux/action';
import usersReducers from '../redux/reducer';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export default function Home() {

    let dispatch = useDispatch()
    const [user, setUser] = useState()
    const { users } = useSelector(state => state.data)
    let navigate = useNavigate()

    //Getting users list
    useEffect(() => {
        dispatch(loadUsers())
    }, [])

    //Delete single user
    const handleDelete = (id) => {
        if (window.confirm("Are you sure You want to delete this user...!!")) {
            dispatch(deleteuser(id))
            dispatch(loadUsers())
        }
        //document.location.reload();
    }

    return (
        <div className='App'>
            <Button variant="warning" size="lg" className='mt-4 mb-4' onClick={() => navigate("./addUser")}>Add New User</Button>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="center">Email</StyledTableCell>
                            <StyledTableCell align="center">Contact</StyledTableCell>
                            <StyledTableCell align="center">Address</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users && users.map((el) => (
                            <StyledTableRow key={el.id}>
                                <StyledTableCell component="th" scope="row">
                                    {el.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">{el.email}</StyledTableCell>
                                <StyledTableCell align="center">{el.contact}</StyledTableCell>
                                <StyledTableCell align="center">{el.address}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <Button variant="primary" size="sm" onClick={() => navigate(`/editUser/${el.id}`)}>UPDATE</Button>
                                    {/* &nbsp;&nbsp;&nbsp; */}
                                    <Button variant="danger" size="sm" style={{ marginLeft: "10px" }} onClick={() => handleDelete(el.id)}>DELETE</Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
