import './App.css';

import './login.jsx';

import './Signup.jsx';

//import { Link } from 'react-router-dom';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './login.jsx'; // Import the Login component
import Signup from './Signup.jsx'; // Import the Signup component
function App() {
  return (
    <Router>
      <nav>
        <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
      </nav>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}


// function App(){
//   return (
//     <>
//     hi there
//     </>

//   )
// }

export default App;


