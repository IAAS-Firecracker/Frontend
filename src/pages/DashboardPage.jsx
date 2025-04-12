import React, { useState } from 'react';
import { 
  Grid, 
  Container, 
  Typography, 
  Box, 
  Paper, 
  Divider, 
  Button, 
  Card, 
  CardContent, 
  IconButton, 
  Chip, 
  Avatar, 
  Stack, 
  LinearProgress,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  useTheme,
  useMediaQuery,
  alpha,
  Breadcrumbs, 
  Link
} from '@mui/material';

import { 
  Memory as MemoryIcon,
  Storage as StorageIcon,
  Speed as SpeedIcon,
  CloudQueue as CloudIcon,
  Add as AddIcon,
  MoreVert as MoreVertIcon,
  PlayArrow as PlayIcon,
  Pause as PauseIcon,
  Stop as StopIcon,
  Refresh as RefreshIcon,
  Dns as DnsIcon,
  TrendingUp as TrendingUpIcon,
  Warning as WarningIcon,
  ArrowUpward as ArrowUpwardIcon,
  NetworkCheck as NetworkCheckIcon,
  Dashboard as DashboardIcon,
  Home as HomeIcon,
  Computer as ComputerIcon,
  NavigateNext as NavigateNextIcon
} from '@mui/icons-material';

// We'll import the components as if they exist, but implement their content directly here
// import StatsCard from '../components/Dashboard/StatsCard';
// import VmList from '../components/Dashboard/VmList';
// import QuickActions from '../components/Dashboard/QuickActions';
// import ResourceUsage from '../components/Dashboard/ResourceUsage';

// StatsCard Component
const StatsCard = ({ title, value, icon, color, secondaryValue, change }) => {
  const theme = useTheme();
  
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        height: '100%',
        borderRadius: 3,
        border: `1px solid ${theme.palette.divider}`,
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 20px rgba(0,0,0,0.08)'
        }
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
   
        <Box>
          <Typography color="text.secondary" variant="subtitle2" sx={{ mb: 0.5 }}>
            {title}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
            {value}
          </Typography>
          
          {secondaryValue && (
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body2" color="text.secondary">
                {secondaryValue}
              </Typography>
              {change && (
                <Chip 
                  size="small" 
                  icon={<ArrowUpwardIcon fontSize="small" />} 
                  label={change} 
                  color="success"
                  sx={{ height: 20, '& .MuiChip-label': { px: 1, py: 0.5 } }}
                />
              )}
            </Stack>
          )}
        </Box>
        
        <Avatar 
          sx={{ 
            bgcolor: alpha(color, 0.1), 
            color: color,
            width: 48,
            height: 48
          }}
        >
          {icon}
        </Avatar>
      </Box>
    </Paper>
  );
};

// VM Item Component (used within VmList)
const VmItem = ({ vm, onAction }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  
  const getStatusColor = (status) => {
    const statusColors = {
      running: theme.palette.success.main,
      paused: theme.palette.warning.main,
      stopped: theme.palette.error.main,
      provisioning: theme.palette.info.main
    };
    return statusColors[status] || theme.palette.grey[500];
  };
  
  const getStatusText = (status) => {
    const statusText = {
      running: 'Running',
      paused: 'Paused',
      stopped: 'Stopped',
      provisioning: 'Provisioning'
    };
    return statusText[status] || 'Unknown';
  };
  
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        mb: 2,
        borderRadius: 2,
        border: `1px solid ${theme.palette.divider}`,
        transition: 'all 0.2s',
        '&:hover': {
          borderColor: theme.palette.primary.light,
          bgcolor: alpha(theme.palette.primary.main, 0.02)
        }
      }}
    >
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12} sm={4}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar
              variant="rounded"
              sx={{ 
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                color: theme.palette.primary.main
              }}
            >
              <DnsIcon />
            </Avatar>
            <Box>
              <Typography variant="subtitle1" fontWeight={600}>
                {vm.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {vm.os}
              </Typography>
            </Box>
          </Stack>
        </Grid>
        
        <Grid item xs={6} sm={3}>
          <Chip
            size="small"
            label={getStatusText(vm.status)}
            sx={{
              bgcolor: alpha(getStatusColor(vm.status), 0.1),
              color: getStatusColor(vm.status),
              fontWeight: 600,
              '& .MuiChip-label': { px: 1.5 }
            }}
          />
        </Grid>
        
        <Grid item xs={6} sm={3}>
          <Typography variant="body2" color="text.secondary">
            IP: <Typography component="span" variant="body2" fontWeight={600}>{vm.ip}</Typography>
          </Typography>
        </Grid>
        
        <Grid item xs={12} sm={2} sx={{ textAlign: 'right' }}>
          <Stack direction="row" spacing={1} justifyContent={{ xs: 'flex-start', sm: 'flex-end' }}>
            {vm.status === 'running' && (
              <IconButton size="small" color="warning" onClick={() => onAction(vm.id, 'pause')}>
                <PauseIcon fontSize="small" />
              </IconButton>
            )}
            
            {vm.status === 'paused' && (
              <IconButton size="small" color="success" onClick={() => onAction(vm.id, 'start')}>
                <PlayIcon fontSize="small" />
              </IconButton>
            )}
            
            {vm.status !== 'stopped' && (
              <IconButton size="small" color="error" onClick={() => onAction(vm.id, 'stop')}>
                <StopIcon fontSize="small" />
              </IconButton>
            )}
            
            {vm.status === 'stopped' && (
              <IconButton size="small" color="success" onClick={() => onAction(vm.id, 'start')}>
                <PlayIcon fontSize="small" />
              </IconButton>
            )}
            
            <IconButton size="small" onClick={handleOpenMenu}>
              <MoreVertIcon fontSize="small" />
            </IconButton>
            
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem dense onClick={handleCloseMenu}>View Details</MenuItem>
              <MenuItem dense onClick={handleCloseMenu}>Console</MenuItem>
              <MenuItem dense onClick={handleCloseMenu}>Resize</MenuItem>
              <MenuItem dense onClick={handleCloseMenu}>Backups</MenuItem>
              <Divider />
              <MenuItem dense onClick={handleCloseMenu} sx={{ color: theme.palette.error.main }}>
                Delete
              </MenuItem>
            </Menu>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

// VmList Component
const VmList = ({ vms, onVmAction, onRefresh, onCreateVm }) => {
  const theme = useTheme();
  
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 3,
        border: `1px solid ${theme.palette.divider}`
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6" fontWeight={600}>
          Virtual Machines
        </Typography>
        
        <Stack direction="row" spacing={1}>
          <Button 
            size="small" 
            startIcon={<RefreshIcon />} 
            onClick={onRefresh}
            sx={{ minWidth: 'auto', px: 1 }}
          >
            Refresh
          </Button>
          <Button 
            variant="contained" 
            size="small" 
            startIcon={<AddIcon />} 
            onClick={onCreateVm}
          >
            Create VM
          </Button>
        </Stack>
      </Box>
      
      <Box>
        {vms.length > 0 ? (
          vms.map((vm) => (
            <VmItem key={vm.id} vm={vm} onAction={onVmAction} />
          ))
        ) : (
          <Box textAlign="center" py={3}>
            <Typography color="text.secondary">No virtual machines found</Typography>
            <Button 
              variant="outlined" 
              startIcon={<AddIcon />} 
              sx={{ mt: 2 }} 
              onClick={onCreateVm}
            >
              Create your first VM
            </Button>
          </Box>
        )}
      </Box>
    </Paper>
  );
};

// QuickActions Component
const QuickActions = ({ actions }) => {
  const theme = useTheme();
  
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 3,
        border: `1px solid ${theme.palette.divider}`
      }}
    >
      <Typography variant="h6" fontWeight={600} mb={2}>
        Quick Actions
      </Typography>
      
      <Grid container spacing={2}>
        {actions.map((action, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={action.icon}
              onClick={action.onClick}
              size="large"
              sx={{
                py: 1.5,
                justifyContent: 'flex-start',
                borderColor: theme.palette.divider,
                color: theme.palette.text.primary,
                '&:hover': {
                  borderColor: theme.palette.primary.main,
                  bgcolor: alpha(theme.palette.primary.main, 0.05)
                }
              }}
            >
              <Box textAlign="left">
                <Typography variant="body2" fontWeight={600}>
                  {action.title}
                </Typography>
                <Typography variant="caption" color="text.secondary" component="div">
                  {action.description}
                </Typography>
              </Box>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

// ResourceUsage Component
const ResourceUsage = ({ data }) => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 3,
        border: `1px solid ${theme.palette.divider}`
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" fontWeight={600}>
          Resource Usage
        </Typography>
        
        <Tabs 
          value={tabValue} 
          onChange={handleTabChange}
          TabIndicatorProps={{
            style: {
              height: 3,
              borderRadius: '3px 3px 0 0'
            }
          }}
        >
          <Tab label="24h" />
          <Tab label="7d" />
          <Tab label="30d" />
        </Tabs>
      </Box>
      
      <Grid container spacing={3} sx={{ mt: 1 }}>
        {data.map((resource) => (
          <Grid item xs={12} key={resource.name}>
            <Box mb={2}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography variant="body2" fontWeight={600}>
                  {resource.name}
                </Typography>
                <Typography variant="body2">
                  {resource.used} / {resource.total} {resource.unit}
                </Typography>
              </Box>
              
              <LinearProgress
                variant="determinate"
                value={(resource.used / resource.total) * 100}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                  '& .MuiLinearProgress-bar': {
                    borderRadius: 5,
                    bgcolor: resource.name === 'CPU' 
                      ? theme.palette.primary.main 
                      : resource.name === 'Memory' 
                        ? theme.palette.info.main 
                        : theme.palette.secondary.main
                  }
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
      
      {/* Alert for high resource usage */}
      {data.some(resource => (resource.used / resource.total) > 0.8) && (
        <Box 
          sx={{ 
            mt: 2, 
            p: 2, 
            borderRadius: 2, 
            bgcolor: alpha(theme.palette.warning.main, 0.1),
            border: `1px solid ${alpha(theme.palette.warning.main, 0.3)}`,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <WarningIcon color="warning" sx={{ mr: 1 }} />
          <Typography variant="body2" color="warning.dark">
            Some resources are near capacity. Consider upgrading your plan.
          </Typography>
        </Box>
      )}
    </Paper>
  );
};

// NetworkStatus Component
const NetworkStatus = ({ network }) => {
  const theme = useTheme();
  
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 3,
        border: `1px solid ${theme.palette.divider}`
      }}
    >
      <Typography variant="h6" fontWeight={600} mb={2}>
        Network Status
      </Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            p: 2,
            borderRadius: 2,
            bgcolor: alpha(theme.palette.success.main, 0.1)
          }}>
            <Avatar sx={{ 
              bgcolor: alpha(theme.palette.success.main, 0.2),
              color: theme.palette.success.main,
              mr: 2
            }}>
              <NetworkCheckIcon />
            </Avatar>
            <Box>
              <Typography variant="subtitle2" color="success.main" fontWeight={600}>
                All Systems Operational
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Last checked: 2 minutes ago
              </Typography>
            </Box>
          </Box>
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
            <Typography variant="body2" color="text.secondary" mb={1}>
              Inbound Traffic
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight={600}>
                {network.inbound} GB
              </Typography>
              <Chip 
                size="small" 
                icon={<TrendingUpIcon fontSize="small" />} 
                label="+12%" 
                color="success"
                sx={{ height: 24 }}
              />
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
            <Typography variant="body2" color="text.secondary" mb={1}>
              Outbound Traffic
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight={600}>
                {network.outbound} GB
              </Typography>
              <Chip 
                size="small" 
                icon={<TrendingUpIcon fontSize="small" />} 
                label="+8%" 
                color="success"
                sx={{ height: 24 }}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

// Main Dashboard Page
const DashboardPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Mock data - replace with real API calls
  const stats = [
    { 
      title: 'Active VMs', 
      value: '3', 
      icon: <DnsIcon />,
      color: theme.palette.primary.main, 
      secondaryValue: '75% of plan',
      change: '+1'
    },
    { 
      title: 'CPU Cores', 
      value: '8', 
      icon: <SpeedIcon />,
      color: theme.palette.error.main,
      secondaryValue: '8/16 allocated',
    },
    { 
      title: 'Memory', 
      value: '16', 
      icon: <MemoryIcon />,
      color: theme.palette.info.main,
      secondaryValue: '16/32 GB',
    },
    { 
      title: 'Storage', 
      value: '500', 
      icon: <StorageIcon />,
      color: theme.palette.success.main,
      secondaryValue: '500/1000 GB',
    },
  ];

  const vms = [
    { id: 1, name: 'Web Server', status: 'running', os: 'Ubuntu 22.04', ip: '192.168.1.100' },
    { id: 2, name: 'Database', status: 'paused', os: 'Debian 11', ip: '192.168.1.101' },
    { id: 3, name: 'Backup', status: 'stopped', os: 'CentOS 8', ip: '192.168.1.102' },
  ];
  
  const resourceUsage = [
    { name: 'CPU', used: 8, total: 16, unit: 'cores' },
    { name: 'Memory', used: 16, total: 32, unit: 'GB' },
    { name: 'Storage', used: 500, total: 1000, unit: 'GB' },
    { name: 'Network', used: 350, total: 1000, unit: 'GB/mo' },
  ];
  
  const networkStatus = {
    inbound: 245.8,
    outbound: 182.3,
  };
  
  const quickActions = [
    { 
      title: 'Create VM', 
      description: 'Launch a new virtual machine', 
      icon: <AddIcon />, 
      onClick: () => console.log('Create VM') 
    },
    { 
      title: 'Add Storage', 
      description: 'Attach additional disk space', 
      icon: <StorageIcon />, 
      onClick: () => console.log('Add Storage') 
    },
    { 
      title: 'Configure Firewalls', 
      description: 'Manage network security', 
      icon: <CloudIcon />, 
      onClick: () => console.log('Configure Firewalls') 
    },
    { 
      title: 'Backup Settings', 
      description: 'Schedule automated backups', 
      icon: <CloudIcon />, 
      onClick: () => console.log('Backup Settings') 
    },
  ];
  
  // Event handlers
  const handleVmAction = (id, action) => {
    console.log(`VM ${id} action: ${action}`);
  };
  
  const handleRefresh = () => {
    console.log('Refreshing VM list');
  };
  
  const handleCreateVm = () => {
    console.log('Create VM');
  };

  return (
    <Box sx={{ py: 3, px: { xs: 2, md: 3 } }}>
         <Breadcrumbs 
        separator={<NavigateNextIcon fontSize="small" />} 
        aria-label="breadcrumb"
        sx={{ mb: 2 }}
      >
        <Link 
          underline="hover" 
          color="inherit" 
          href="/" 
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        <Typography 
          color="text.primary"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <DashboardIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Dashboard
        </Typography>
      </Breadcrumbs>
      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h4" 
          component="h1" 
          fontWeight={700} 
          sx={{ mb: 1 }}
        >
          Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Welcome back! Here's an overview of your cloud resources.
        </Typography>
      </Box>
      
      <Grid container spacing={3}>
        {/* Stats Cards */}
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StatsCard
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              color={stat.color}
              secondaryValue={stat.secondaryValue}
              change={stat.change}
            />
          </Grid>
        ))}
        
        {/* VM List */}
        <Grid item xs={12} lg={8}>
          <VmList 
            vms={vms} 
            onVmAction={handleVmAction} 
            onRefresh={handleRefresh}
            onCreateVm={handleCreateVm}
          />
        </Grid>
        
        {/* Quick Actions */}
        <Grid item xs={12} lg={4}>
          <QuickActions actions={quickActions} />
        </Grid>
        
        {/* Resource Usage */}
        <Grid item xs={12} md={8}>
          <ResourceUsage data={resourceUsage} />
        </Grid>
        
        {/* Network Status */}
        <Grid item xs={12} md={4}>
          <NetworkStatus network={networkStatus} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;