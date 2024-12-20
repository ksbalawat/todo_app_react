import Button from '@mui/material/Button';
//import IconButton from '@mui/material/IconButton';
//import MenuIcon from '@mui/icons-material/Menu';
//import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

//import React from 'react';

function Signup() {
  return (
    <>
      

      {/* Page Heading */}
      <Box sx={{ textAlign: 'center', margin: '20px 0' }}>
        <Typography variant="h4">Welcome, Let’s get you Signed-up</Typography>
      </Box>

      {/* Centered Card */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '60vh', // Adjust height to center vertically
        }}
      >
        <Card sx={{ width: '400px', padding: '20px' }}>
          <CardContent>
            <Box
              component="form"
              sx={{ '& > :not(style)': { m: 1, width: '100%' } }} // Full width inputs
              noValidate
              autoComplete="off"
            >
              <TextField id="username" label="Username" variant="outlined" />
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                type="password"
              />
            </Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }} // Add margin-top
            >
              Signup
            </Button>
          </CardContent>
          <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button size="small">Forgot password?</Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}

export default Signup;