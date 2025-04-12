import React from 'react';
import { Container, Box, Typography, Link } from '@mui/material';
import SignupForm from '../components/auth/SignupForm';

const SignupPage = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h4">
          Create a new account
        </Typography>
        <SignupForm />
        
      </Box>
    </Container>
  );
};

export default SignupPage;