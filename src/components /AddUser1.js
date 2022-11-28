import React, { Component } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from 'react-bootstrap';
import { addUser } from '../redux/action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { loadUsers } from '../redux/action';
//import { addUser } from '../redux/action';

class AddUser1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            email: "",
            contact: "",
            navigate: false
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
        e.preventDefault()
        this.setState({ ...this.state, navigate: true })
        if (!this.state.name) {
            alert("Ooops.....!! I think input field is empty..!!")
        }
        else {
            console.log(this.props.addUser);
            this.props.addUser(this.state)
            // this.props.history.push('/')
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
                        <TextField id="outlined-basic" label="Address" variant="outlined" style={{ width: "50%", marginTop: "20px" }} value={this.state.address} name="address" type="text" onChange={this.handleInputChange} />&nbsp;
                        <TextField id="outlined-basic" label="Email" variant="outlined" style={{ width: "50%", marginTop: "20px" }} value={this.state.email} type="email" name="email" onChange={this.handleInputChange} />&nbsp;
                        <TextField id="outlined-basic" label="Contact" variant="outlined" style={{ width: "50%", marginTop: "20px", marginBottom: "20px" }} value={this.state.contact} name="contact" type="number" onChange={this.handleInputChange} />&nbsp;
                        <div className="App" style={{ marginTop: "30px", marginBottom: "30px" }}>
                            <Button variant="danger" size="lg" type="submit">SUBMIT</Button>
                            &nbsp;&nbsp;&nbsp;
                            <Button variant="secondary" size="lg" type="submit" onClick={() => window.open('/')} >CANCEL</Button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("}}}}}}}}}}}}}}}", state.data.users)
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
