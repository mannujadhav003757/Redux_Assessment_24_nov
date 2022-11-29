import React, { Component } from 'react'
import { connect } from 'react-redux';
import rootReducer from '../redux/root-reducer';
import { loadUsers } from '../redux/action';
import { deleteuser } from '../redux/action';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
class Home1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            email: "",
            contact: "",
            navigate: false
        };

    }


    componentDidMount = () => {
        this.props.loadUsers();
    }

    handleDelete = (el) => { 
        console.log("++++++++++++++++el", el.id)
        this.props.deleteUser(el.id)
    }


    render() {
        console.log("-----------------------users", this.props.users.users)
        return (
            <>
                <div className="App">
                    <Button variant="primary" size="lg" className="col-sm-5 mt-4 mb-4" onClick={()=>{window.location.assign('/addUser')}}>
                        Add New User
                    </Button>
                </div>

                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>email</th>
                            <th>Address</th>
                            <th>Contact</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {this.props.users.users.map((el) => {
                        return <tbody>
                            <tr>
                                <td>{el.name}</td>
                                <td>{el.email}</td>
                                <td>{el.address}</td>
                                <td>{el.contact}</td>
                                <td><Button variant="danger" onClick={() => this.handleDelete(el)}>Delete</Button></td>
                            </tr>
                        </tbody>

                    })}

                </Table>
            </>
        )
    }

}

const mapStateToProps = (state) => {
    //console.log("}}}}}}}}}}}}}}}",state.data.users)
    return {
        users: state.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (payload) => dispatch(deleteuser(payload)),
        loadUsers: () => dispatch(loadUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home1);