import React, { Component } from 'react'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import rootReducer from '../redux/root-reducer';
import { loadUsers } from '../redux/action';

class Home2 extends Component {
    constructor(props) {
        componentDidMount=()=>{
            this.props.loadUsers();
        }    
       
    }


   
  render() {
    return (
      <div>Home2</div>
    )
  }
}

const mapStateToProps = (state) => {
    //console.log("}}}}}}}}}}}}}}}",state.data.users)
return {
    users:state.data
}
}

const mapDispatchToProps = (dispatch) => {
return {
    //deleteUser: (payload) => dispatch(deleteUser(payload))
    loadUsers:()=>dispatch(loadUsers())
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home2);
