import ReactAddUser, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/action';

export default function AddUser() {
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
    const [state, setState] = useState({
        name: "",
        address: "",
        email: "",
        contact: ""
    })
    const { name, address, email, contact } = state
    const [error, setError] = useState('')

    const handleInputChange = (e) => {
        let { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    //Submiting new user data

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name || !address || !email || !contact) alert("Ooops.....!! I think input field is empty..!!")
        else {
            dispatch(addUser(state))
            navigate('/')
        }
    }

    return (
        <div className='App primary' >
            <h1 style={{ marginTop: "40px" }}>ADD NEW USER</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginTop: "40px", marginLeft: "20px", marginRight: "20px", border: "1px solid black", borderRadius: "20px" }}>
                    <TextField id="outlined-basic" label="Name" variant="outlined" style={{ width: "50%", marginTop: "40px" }} value={name} name="name" type="text" onChange={handleInputChange} />&nbsp;
                    <TextField id="outlined-basic" label="Address" variant="outlined" style={{ width: "50%", marginTop: "20px" }} value={address} name="address" type="text" onChange={handleInputChange} />&nbsp;
                    <TextField id="outlined-basic" label="Email" variant="outlined" style={{ width: "50%", marginTop: "20px" }} value={email} type="email" name="email" onChange={handleInputChange} />&nbsp;
                    <TextField id="outlined-basic" label="Contact" variant="outlined" style={{ width: "50%", marginTop: "20px", marginBottom: "20px" }} value={contact} name="contact" type="number" onChange={handleInputChange} />&nbsp;
                    <div className="App" style={{ marginTop: "30px", marginBottom: "30px" }}>
                        <Button variant="danger" size="lg" type="submit">SUBMIT</Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button variant="secondary" size="lg" type="submit" onClick={() => navigate("/")} >CANCEL</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}
