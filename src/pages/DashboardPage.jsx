import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import StatsCard from '../components/Dashboard/StatsCard';
import VmList from '../components/Dashboard/VmList';
import QuickActions from '../components/Dashboard/QuickActions';
import ResourceUsage from '../components/Dashboard/ResourceUsage';

const DashboardPage = () => {
  // Mock data - replace with real API calls
  const stats = [
    { title: 'Active VMs', value: 3, icon: '💻' },
    { title: 'CPU Cores', value: '8/16', icon: '⚡' },
    { title: 'Memory', value: '16/32 GB', icon: '🧠' },
    { title: 'Storage', value: '500/1000 GB', icon: '💾' },
  ];

  const vms = [
    { id: 1, name: 'Web Server', status: 'running', os: 'Ubuntu 22.04', ip: '192.168.1.100' },
    { id: 2, name: 'Database', status: 'paused', os: 'Debian 11', ip: '192.168.1.101' },
    { id: 3, name: 'Backup', status: 'stopped', os: 'CentOS 8', ip: '192.168.1.102' },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        {/* Stats Cards */}
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StatsCard title={stat.title} value={stat.value} icon={stat.icon} />
          </Grid>
        ))}
        
        {/* VM List */}
        <Grid item xs={12}>
          <VmList vms={vms} />
        </Grid>
        
        {/* Quick Actions */}
        <Grid item xs={12} md={6}>
          <QuickActions />
        </Grid>
        
        {/* Resource Usage */}
        <Grid item xs={12} md={6}>
          <ResourceUsage />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardPage;