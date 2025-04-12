import React from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  Divider,
  Alert
} from '@mui/material';
import { 
  Email as EmailIcon,
  Lock as LockIcon,
  GitHub as GitHubIcon,
  Google as GoogleIcon
} from '@mui/icons-material';

const LoginForm = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log('Login submitted:', { email, password });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          startAdornment: <LockIcon sx={{ mr: 1, color: 'action.active' }} />,
        }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link href="#" variant="body2">
          Forgot password?
        </Link>
      </Box>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, py: 1.5 }}
      >
        Sign In
      </Button>
      
      <Divider sx={{ my: 2 }}>
        <Typography variant="body2" color="text.secondary">OR</Typography>
      </Divider>
      
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          sx={{ py: 1.5 }}
        >
          Google
        </Button>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<GitHubIcon />}
          sx={{ py: 1.5 }}
        >
          GitHub
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;