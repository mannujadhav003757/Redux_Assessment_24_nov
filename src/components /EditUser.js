import ReactAddUser, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, getSingleUser, updateUser } from '../redux/action';

export default function EditUser() {
    <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
    ></Box>

    let dispatch = useDispatch()
    let navigate = useNavigate()
    let { id } = useParams() 
    const { user } = useSelector((state) => state.data)
    const [state, setState] = useState({
        name: "",
        address: "",
        email: "",
        contact: ""
    })
    const { name, address, email, contact } = state
    const [error, setError] = useState('')

    useEffect(() => {
        dispatch(getSingleUser(id))
    }, [])

    useEffect(() => {
        if (user) {
            setState({ ...user })
        }
    }, [user])


    const handleInputChange = (e) => {
        let { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    //function for update single user details

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !address || !email || !contact) alert("Ooops.....!! I think input field is empty..!!")
        else {
            dispatch(updateUser(id, state))
            navigate('/')
        }
    }

    return (
        <div className='App primary' >
            <h1 style={{ marginTop: "40px" }}>EDIT USER</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginTop: "40px", marginLeft: "20px", marginRight: "20px", border: "1px solid black", borderRadius: "20px" }}>
                    <TextField id="outlined-basic" label="Name" variant="outlined" style={{ width: "50%", marginTop: "40px" }} value={name || ''} name="name" type="text" onChange={handleInputChange} />&nbsp;
                    <TextField id="outlined-basic" label="Address" variant="outlined" style={{ width: "50%", marginTop: "20px" }} value={address || ''} name="address" type="text" onChange={handleInputChange} />&nbsp;
                    <TextField id="outlined-basic" label="Email" variant="outlined" style={{ width: "50%", marginTop: "20px" }} value={email || ''} type="email" name="email" onChange={handleInputChange} />&nbsp;
                    <TextField id="outlined-basic" label="Contact" variant="outlined" style={{ width: "50%", marginTop: "20px", marginBottom: "20px" }} value={contact || ''} name="contact" type="number" onChange={handleInputChange} />&nbsp;
                    <div className="App" style={{ marginTop: "30px", marginBottom: "30px" }}>
                        <Button variant="danger" size="lg" type="submit">UPDATE</Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button variant="secondary" size="lg" type="submit" onClick={() => navigate("/")} >CANCEL</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}
