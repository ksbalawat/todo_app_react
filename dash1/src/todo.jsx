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

function Todo() {
  return (
    <>
      

      {/* Page Heading */}
      <Box sx={{ textAlign: 'center', margin: '20px 0' }}>
        <Typography variant="h4">Todo-app</Typography>
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
              <TextField id="title" label="Task" variant="outlined" />
              <TextField
                id="description"
                label="Task Info "
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
              Smash
            </Button>
          </CardContent>
          <CardActions sx={{ justifyContent: 'flex-end' }}>
            <Button size="small">Clear All</Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}

export default Todo;