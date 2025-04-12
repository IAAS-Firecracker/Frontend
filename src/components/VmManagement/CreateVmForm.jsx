import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Grid,
  Paper,
  FormHelperText,
} from '@mui/material';

const CreateVmForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    os: '',
    plan: '',
    sshKey: '',
  });

  const osOptions = [
    { value: 'ubuntu-22.04', label: 'Ubuntu 22.04 LTS' },
    { value: 'debian-11', label: 'Debian 11' },
    { value: 'centos-8', label: 'CentOS 8' },
    { value: 'windows-2022', label: 'Windows Server 2022' },
  ];

  const planOptions = [
    { value: 'small', label: 'Small - 2 vCPU, 4GB RAM, 50GB SSD' },
    { value: 'medium', label: 'Medium - 4 vCPU, 8GB RAM, 100GB SSD' },
    { value: 'large', label: 'Large - 8 vCPU, 16GB RAM, 200GB SSD' },
    { value: 'xlarge', label: 'Extra Large - 16 vCPU, 32GB RAM, 500GB SSD' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (API call)
    console.log('Creating VM with:', formData);
  };

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Create New Virtual Machine
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="VM Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <FormControl fullWidth required>
              <InputLabel>Operating System</InputLabel>
              <Select
                name="os"
                value={formData.os}
                label="Operating System"
                onChange={handleChange}
              >
                {osOptions.map((os) => (
                  <MenuItem key={os.value} value={os.value}>
                    {os.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <FormControl fullWidth required>
              <InputLabel>Plan</InputLabel>
              <Select
                name="plan"
                value={formData.plan}
                label="Plan"
                onChange={handleChange}
              >
                {planOptions.map((plan) => (
                  <MenuItem key={plan.value} value={plan.value}>
                    {plan.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="SSH Public Key"
              name="sshKey"
              value={formData.sshKey}
              onChange={handleChange}
              multiline
              rows={4}
              helperText="Paste your SSH public key for secure access"
            />
          </Grid>
          
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                Create Virtual Machine
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default CreateVmForm;