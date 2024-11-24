import './App.css';

import './login.jsx';

import './Signup.jsx';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

//import { Link } from 'react-router-dom';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './login.jsx'; // Import the Login component
import Signup from './Signup.jsx'; // Import the Signup component
import Todo from './todo.jsx'; // import the todo 
function App() {
  return (

    <>  
    <Router>


      {/* Navbar */}
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Todo
        </Typography>

        {/* Wrapping the buttons with Link components */}
<Link to="/signup" style={{ textDecoration: 'none' }}>
  <Button color="inherit">Signup</Button>
</Link>
<Link to="/login" style={{ textDecoration: 'none' }}>
  <Button color="inherit">Login</Button>
</Link>
        
      </Toolbar>
    </AppBar>
  </Box>


      <nav>
       
          <Link to="/todo">Todo</Link>
      </nav>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/todo" element={<Todo />} />
        
      </Routes>
    </Router>

    </>
  );
}

export default App;