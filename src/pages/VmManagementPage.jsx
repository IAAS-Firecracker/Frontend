import React, { useState } from 'react';
import { Container, Typography, Tabs, Tab, Box } from '@mui/material';
import CreateVmForm from '../components/VmManagement/CreateVmForm';
import VmActions from '../components/VmManagement/VmActions';
import VmConsole from '../components/VmManagement/VmConsole';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vm-tabpanel-${index}`}
      aria-labelledby={`vm-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const VmManagementPage = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Virtual Machine Management
      </Typography>
      
      <Tabs value={tabValue} onChange={handleTabChange} aria-label="VM management tabs">
        <Tab label="Create VM" />
        <Tab label="Manage VMs" />
        <Tab label="VM Console" />
      </Tabs>
      
      <TabPanel value={tabValue} index={0}>
        <CreateVmForm />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <VmActions />
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <VmConsole />
      </TabPanel>
    </Container>
  );
};

export default VmManagementPage;