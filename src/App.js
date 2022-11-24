import logo from './logo.svg';
import Home from './components /Home';
import AddUser from './components /AddUser';
import EditUser from './components /EditUser';
import './App.css';
//import {BrowserRouter,Router,Route} from "react-router-dom"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/addUser' element={<AddUser></AddUser>} />
          <Route path='/editUser/:id' element={<EditUser></EditUser>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
