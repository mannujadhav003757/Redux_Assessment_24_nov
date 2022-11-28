import * as types from './actionType'
import axios from  'axios'

//all action types with payload

const getUsers = (users) =>({  
    type : types.GET_USERS,
    payload : users
})

const userDeleted = () =>({
    type : types.DELETE_USER
})

const userAdded = () =>({
    type : types.ADD_USER
})

const getUser = (user) =>({
    type : types.GET_SINGLE_USER,
    payload : user,

})

const userUpdated = () =>({
    type : types.UPDATE_USER
})

//Dashboard all users list

export const loadUsers = () =>{
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_API}`).then((res) =>{
            console.log("+++++++++++++++",res.data)
            dispatch(getUsers(res.data))
        }).catch((err) =>{
            console.log(err)
        })
    }
}

//delete selected user

export const deleteuser = (id) =>{
    return function(dispatch){
        axios.delete(`${process.env.REACT_APP_API}/${id}`).then((res) =>{
            console.log("+++++++++++++++",res.data)
            dispatch(userDeleted())
            dispatch(loadUsers())
        }).catch((err) =>{
            console.log(err)
        })
    }
}

//add new user

export const addUser = (user) =>{
    console.log("=======",user)
    return (dispatch) =>{
        console.log('USER---->',user);
        axios.post(`${process.env.REACT_APP_API}`,user).then((res) =>{
            console.log("+++++++++++++++",res.data)
            dispatch(userAdded())
        }).catch((err) =>{
            console.log(err)
        })
    }
}

//fetching single using id

export const getSingleUser = (id) =>{
    return function(dispatch){
        axios.get(`${process.env.REACT_APP_API}/${id}`).then((res) =>{
            console.log("********************",res.data)
            dispatch(getUser(res.data))
        }).catch((err) =>{
            console.log(err)
        })
    }
}
 
//update user

export const updateUser = (id,user) =>{
    return function(dispatch){
        axios.put(`${process.env.REACT_APP_API}/${id}`,user).then((res) =>{
            console.log("********************",res.data)
            dispatch(userUpdated())
        }).catch((err) =>{
            console.log(err)
        })
    }
}