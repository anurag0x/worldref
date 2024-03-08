import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import {Route,Routes} from 'react-router-dom'
import Login from './Components/Login';
import Register from './Components/Register';
import PrivateRoute from './Components/PrivateRoute';
function App() {
  return (
    <div>
      <Navbar/>
   <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/" element={<PrivateRoute><Homepage/></PrivateRoute>}/>
  
   </Routes>
   </div>
  );
}

export default App;
