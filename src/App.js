import logo from './logo.svg';
import Home from './components /Home';
import AddUser from './components /AddUser';
import EditUser from './components /EditUser';
import AddUser1 from './components /AddUser1';
import Home1 from './components /Home1';
import './App.css';
//import {BrowserRouter,Router,Route} from "react-router-dom"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home1/>} />
          <Route path='/addUser' element={<AddUser1/>} />
          <Route path='/editUser/:id' element={<EditUser/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
