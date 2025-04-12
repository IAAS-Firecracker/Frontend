import React from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  PlayArrow as StartIcon,
  Pause as PauseIcon,
  Stop as StopIcon,
  Delete as DeleteIcon,
  MoreVert as MoreIcon,
  Settings as SettingsIcon,
  Backup as BackupIcon,
  Refresh as RebootIcon
} from '@mui/icons-material';

const VmActions = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedVm, setSelectedVm] = React.useState(null);

  const handleMenuOpen = (event, vmId) => {
    setAnchorEl(event.currentTarget);
    setSelectedVm(vmId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedVm(null);
  };

  const handleAction = (action) => {
    console.log(`${action} VM ${selectedVm}`);
    handleMenuClose();
  };

  // Mock data
  const vms = [
    { id: 1, name: 'Web Server', status: 'running', os: 'Ubuntu 22.04', ip: '192.168.1.100' },
    { id: 2, name: 'Database', status: 'paused', os: 'Debian 11', ip: '192.168.1.101' },
    { id: 3, name: 'Backup', status: 'stopped', os: 'CentOS 8', ip: '192.168.1.102' },
  ];

  const statusColors = {
    running: 'success.main',
    paused: 'warning.main',
    stopped: 'error.main',
    creating: 'info.main'
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h5">Manage Virtual Machines</Typography>
        <Button 
          variant="contained" 
          color="primary"
          href="/vms/create"
        >
          Create New VM
        </Button>
      </Box>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>OS</TableCell>
              <TableCell>IP Address</TableCell>
              <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
          <TableBody>
            {vms.map((vm) => (
              <TableRow key={vm.id}>
                <TableCell>{vm.name}</TableCell>
                <TableCell>
                  <Box sx={{ 
                    display: 'inline-flex', 
                    alignItems: 'center',
                    color: statusColors[vm.status.toLowerCase()] || 'text.primary'
                  }}>
                    <Box sx={{ 
                      width: 8, 
                      height: 8, 
                      borderRadius: '50%', 
                      bgcolor: statusColors[vm.status.toLowerCase()] || 'text.primary',
                      mr: 1
                    }} />
                    {vm.status}
                  </Box>
                </TableCell>
                <TableCell>{vm.os}</TableCell>
                <TableCell>{vm.ip}</TableCell>
                <TableCell align="right">
                  <Tooltip title="Start">
                    <IconButton onClick={() => handleAction('start', vm.id)}>
                      <StartIcon color="success" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Pause">
                    <IconButton onClick={() => handleAction('pause', vm.id)}>
                      <PauseIcon color="warning" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Stop">
                    <IconButton onClick={() => handleAction('stop', vm.id)}>
                      <StopIcon color="error" />
                    </IconButton>
                  </Tooltip>
                  <IconButton
                    onClick={(e) => handleMenuOpen(e, vm.id)}
                  >
                    <MoreIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleAction('settings')}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleAction('backup')}>
          <ListItemIcon>
            <BackupIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Create Backup</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleAction('reboot')}>
          <ListItemIcon>
            <RebootIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Reboot</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => handleAction('delete')} sx={{ color: 'error.main' }}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" color="error" />
          </ListItemIcon>
          <ListItemText>Delete</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default VmActions;