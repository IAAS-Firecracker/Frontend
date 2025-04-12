import React from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import { 
  Person as PersonIcon,
  Email as EmailIcon,
  Lock as LockIcon
} from '@mui/icons-material';

const SignupForm = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'agreeTerms' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic
    console.log('Signup submitted:', formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Full Name"
        name="name"
        autoComplete="name"
        autoFocus
        value={formData.name}
        onChange={handleChange}
        InputProps={{
          startAdornment: <PersonIcon sx={{ mr: 1, color: 'action.active' }} />,
        }}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        value={formData.email}
        onChange={handleChange}
        InputProps={{
          startAdornment: <EmailIcon sx={{ mr: 1, color: 'action.active' }} />,
        }}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="new-password"
        value={formData.password}
        onChange={handleChange}
        InputProps={{
          startAdornment: <LockIcon sx={{ mr: 1, color: 'action.active' }} />,
        }}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        id="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        InputProps={{
          startAdornment: <LockIcon sx={{ mr: 1, color: 'action.active' }} />,
        }}
      />
      <FormControlLabel
        control={
          <Checkbox 
            name="agreeTerms" 
            color="primary" 
            checked={formData.agreeTerms}
            onChange={handleChange}
          />
        }
        label={
          <Typography variant="body2">
            I agree to the <Link href="#">Terms of Service</Link> and <Link href="#">Privacy Policy</Link>
          </Typography>
        }
        sx={{ mt: 2 }}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        disabled={!formData.agreeTerms}
        sx={{ mt: 3, mb: 2, py: 1.5 }}
      >
        Sign Up
      </Button>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="body2">
          Already have an account? <Link href="/login">Sign in</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignupForm;