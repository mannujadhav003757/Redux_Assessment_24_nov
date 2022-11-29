import React, { Component } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from 'react-bootstrap';
import { addUser } from '../redux/action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { loadUsers } from '../redux/action';

class AddUser1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            email: "",
            contact: "",
            navigate: false,
            nameErr: false,
            emailErr: false,
            addressErr: false,
            contactErr: false
        };


        console.log("*************", this.state.users, this.props.users)


    }

    handleInputChange = (e) => {
        let { name, value } = e.target
        this.setState({ [name]: value })
        console.log(this.state)
    }

    handleSubmit = (e) => {
        console.log("++++++++++++++++++++++++", this.state)
        console.log("Navigation", this.props)
        let regex = {
            fRegex: /^[a-zA-Z]+$/,
            addRegex: /^[#.0-9a-zA-Z\s,-]+$/,
            eRegex: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
            mobRegex: /^[6789]\d{9}$/
        }
 
        e.preventDefault()
        this.setState({ ...this.state, navigate: true })
        if (this.state.name === "" || !regex.fRegex.test(this.state.name)) {
            this.setState({ ...this.state, nameErr: true })
            console.log("=============", this.state.nameErr)
        }
        else if (this.state.address === "" || !regex.addRegex.test(this.state.address)) {
            this.setState({ ...this.state, addressErr: true, nameErr: false })

        }
        else if (this.state.email === "" || !regex.eRegex.test(this.state.email)) {
            this.setState({ ...this.state, emailErr: true, addressErr: false, nameErr: false })
        }
        else if (this.state.contact === "" || !regex.mobRegex.test(this.state.contact)) {
            this.setState({ ...this.state, contactErr: true, emailErr: false, addressErr: false, nameErr: false })
        }
        else {
            console.log(this.props.addUser);
            this.props.addUser(this.state)
            return (
                <Navigate to="/" replace={true} />
            )
        }
    }


    render() {
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        ></Box>
        return (
            <div className='App primary' >
                <h1 style={{ marginTop: "40px" }}>ADD NEW USER</h1>
                <form onSubmit={this.handleSubmit}>
                    <>{this.state.navigate && <Navigate to="/" replace={true} />}</>
                    <div style={{ marginTop: "40px", marginLeft: "20px", marginRight: "20px", border: "1px solid black", borderRadius: "20px" }}>
                        <TextField id="outlined-basic" label="Name" variant="outlined" style={{ width: "50%", marginTop: "40px" }} value={this.state.name} name="name" type="text" onChange={this.handleInputChange} />&nbsp;
                        {this.state.nameErr ? <p color='red' style={{ color: "red" }}>***Enter valid Name</p> : false}
                        <TextField id="outlined-basic" label="Address" variant="outlined" style={{ width: "50%", marginTop: "20px" }} value={this.state.address} name="address" type="text" onChange={this.handleInputChange} />&nbsp;
                        {this.state.addressErr ? <p color='red' style={{ color: "red" }}>***Enter valid Address</p> : false}
                        <TextField id="outlined-basic" label="Email" variant="outlined" style={{ width: "50%", marginTop: "20px" }} value={this.state.email} type="text" name="email" onChange={this.handleInputChange} />&nbsp;
                        {this.state.emailErr ? <p color='red' style={{ color: "red" }}>***Enter valid Email</p> : false}
                        <TextField id="outlined-basic" label="Contact" variant="outlined" style={{ width: "50%", marginTop: "20px", marginBottom: "20px" }} value={this.state.contact} name="contact" type="number" onChange={this.handleInputChange} />&nbsp;
                        {this.state.contactErr ? <p color='red' style={{ color: "red" }}>***Enter valid Mobile Number</p> : false}
                        <div className="App" style={{ marginTop: "30px", marginBottom: "30px" }}>
                            <Button variant="danger" size="lg" type="submit">SUBMIT</Button>
                            &nbsp;&nbsp;&nbsp;
                            <Button variant="secondary" size="lg" type="submit" onClick={() => window.location.assign('/')} >CANCEL</Button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (payload) => dispatch(addUser(payload))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddUser1);
