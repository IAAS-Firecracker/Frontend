import * as React from 'react';
import { 
  Box, 
  Drawer, 
  List, 
  Divider, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Typography, 
  useTheme,
  Avatar,
  Collapse,
  IconButton,
  Tooltip
} from '@mui/material';
import { Link } from 'react-router-dom';
import { 
  Home as HomeIcon,
  Dashboard as DashboardIcon,
  ManageAccounts as ManageAccountsIcon,
  ShoppingCart as ShoppingCartIcon,
  People as PeopleIcon,
  Payment as PaymentIcon,
  Computer as VmIcon,
  ExpandLess,
  ExpandMore,
  AdminPanelSettings as AdminIcon,
  Settings as SettingsIcon,
  Help as HelpIcon
  
} from '@mui/icons-material';

import LanIcon from '@mui/icons-material/Lan';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

import { useSelector } from 'react-redux';

function Sidebar({ open, toggleDrawer }) {
  const theme = useTheme();
  const [adminExpanded, setAdminExpanded] = React.useState(true);
  
  const isAdmin = useSelector((state)=> state.isAdmin);

  console.log(isAdmin);
  const handleAdminToggle = () => {
    setAdminExpanded(!adminExpanded);
  };

  const mainNavItems = [
    { name: "Home", icon: <HomeIcon />, route: '/' },
    { name: "Dashboard", icon: <DashboardIcon />, route: '/dashboard' },
    { name: "Profile", icon: <ManageAccountsIcon />, route: '/auth' },
    { name: "Cart", icon: <ShoppingCartIcon />, route: '/cart' },
    { name: "Payments", icon: <PaymentIcon />, route: '/payments' },
  ];

  const adminNavItems = [
    { name: "Users", icon: <PeopleIcon />, route: '/users' },
    { name: "Virtual Machines", icon: <VmIcon />, route: '/vms' },
    { name: "Clusters", icon: <LanIcon/>, route: '/clusters' },
    { name: "System Images", icon: <Diversity2Icon/>, route: '/system-images' },
    { name: "Vm offers Management", icon: <LocalOfferIcon/>, route: '/vm-offers-management' }




  ];
  
  const supportNavItems = [
    { name: "Settings", icon: <SettingsIcon />, route: '/settings' },
    { name: "Help & Support", icon: <HelpIcon />, route: '/help' },
  ];

  const SidebarContent = (
    <Box 
      sx={{ 
        width: 280,
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
      role="presentation"
    >
      {/* Sidebar Header */}
      <Box 
        sx={{ 
          p: 2, 
          display: 'flex', 
          alignItems: 'center',
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          borderBottom: `1px solid ${theme.palette.divider}`
        }}
      >
        <Avatar 
          sx={{ 
            width: 40, 
            height: 40, 
            bgcolor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
            mr: 1.5
          }}
        >
          FC
        </Avatar>
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', lineHeight: 1.2 }}>
            IAAS-FIRECRACKER
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.8 }}>
            VM Management System
          </Typography>
        </Box>
      </Box>
      
      {/* Main Navigation */}
      <Box sx={{ overflowY: 'auto', flexGrow: 1 }}>
        <List component="nav" sx={{ pt: 1 }}>
          {mainNavItems.map((item, index) => (
            <ListItem 
              key={index} 
              disablePadding 
              sx={{ 
                display: 'block',
                mb: 0.5,
              }}
            >
              <ListItemButton 
                component={Link} 
                to={item.route}
                onClick={toggleDrawer(false)}
                sx={{
                  px: 3,
                  py: 1,
                  borderRadius: '0 24px 24px 0',
                  '&:hover': {
                    backgroundColor: `${theme.palette.primary.main}15`,
                  },
                  '&.Mui-selected': {
                    backgroundColor: `${theme.palette.primary.main}25`,
                    borderLeft: `4px solid ${theme.palette.primary.main}`,
                    pl: 2.5,
                    '&:hover': {
                      backgroundColor: `${theme.palette.primary.main}35`,
                    }
                  },
                  transition: 'all 0.2s'
                }}
                selected={window.location.pathname === item.route}
              >
                <ListItemIcon sx={{ 
                  minWidth: 40,
                  color: window.location.pathname === item.route ? 
                    theme.palette.primary.main : 
                    theme.palette.text.secondary
                }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.name} 
                  sx={{ 
                    '& .MuiTypography-root': { 
                      fontWeight: window.location.pathname === item.route ? 
                        'bold' : 'normal' 
                    }
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
        <Divider sx={{ my: 1.5, mx: 2 }} />
        
        {/* Admin Section with Expand/Collapse */}
       { isAdmin&& <List component="nav" sx={{ pt: 0 }}>
          <ListItem sx={{ display: 'block', px: 2, py: 0.5 }}>
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                px: 1
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AdminIcon sx={{ fontSize: 20, mr: 1, color: theme.palette.text.secondary }} />
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  sx={{ 
                    fontWeight: 500,
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    fontSize: '0.75rem'
                  }}
                >
                  Admin
                </Typography>
              </Box>
              <IconButton 
                size="small" 
                onClick={(e) => {
                  e.stopPropagation();
                  handleAdminToggle();
                }}
              >
                {adminExpanded ? <ExpandLess fontSize="small" /> : <ExpandMore fontSize="small" />}
              </IconButton>
            </Box>
          </ListItem>
          
          <Collapse in={adminExpanded} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {adminNavItems.map((item, index) => (
                <ListItem 
                  key={index} 
                  disablePadding 
                  sx={{ 
                    display: 'block',
                    mb: 0.5,
                  }}
                >
                  <ListItemButton 
                    component={Link} 
                    to={item.route}
                    onClick={toggleDrawer(false)}
                    sx={{
                      px: 3,
                      py: 1,
                      borderRadius: '0 24px 24px 0',
                      '&:hover': {
                        backgroundColor: `${theme.palette.primary.main}15`,
                      },
                      '&.Mui-selected': {
                        backgroundColor: `${theme.palette.primary.main}25`,
                        borderLeft: `4px solid ${theme.palette.primary.main}`,
                        pl: 2.5,
                        '&:hover': {
                          backgroundColor: `${theme.palette.primary.main}35`,
                        }
                      },
                      transition: 'all 0.2s'
                    }}
                    selected={window.location.pathname === item.route}
                  >
                    <ListItemIcon sx={{ 
                      minWidth: 40,
                      color: window.location.pathname === item.route ? 
                        theme.palette.primary.main : 
                        theme.palette.text.secondary
                    }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText 
                      primary={item.name} 
                      sx={{ 
                        '& .MuiTypography-root': { 
                          fontWeight: window.location.pathname === item.route ? 
                            'bold' : 'normal' 
                        }
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
        
        
        
        }
        <Divider sx={{ my: 1.5, mx: 2 }} />
        {/* Support Section */}
        <List component="nav">
          {supportNavItems.map((item, index) => (
            <ListItem 
              key={index} 
              disablePadding 
              sx={{ 
                display: 'block',
                mb: 0.5, 
              }}
            >
              <ListItemButton 
                component={Link} 
                to={item.route}
                onClick={toggleDrawer(false)}
                sx={{
                  px: 3,
                  py: 1,
                  borderRadius: '0 24px 24px 0',
                  '&:hover': {
                    backgroundColor: `${theme.palette.primary.main}15`,
                  },
                  '&.Mui-selected': {
                    backgroundColor: `${theme.palette.primary.main}25`,
                    borderLeft: `4px solid ${theme.palette.primary.main}`,
                    pl: 2.5,
                    '&:hover': {
                      backgroundColor: `${theme.palette.primary.main}35`,
                    }
                  },
                  transition: 'all 0.2s'
                }}
                selected={window.location.pathname === item.route}
              >
                <ListItemIcon sx={{ 
                  minWidth: 40,
                  color: window.location.pathname === item.route ? 
                    theme.palette.primary.main : 
                    theme.palette.text.secondary
                }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.name} 
                  sx={{ 
                    '& .MuiTypography-root': { 
                      fontWeight: window.location.pathname === item.route ? 
                        'bold' : 'normal' 
                    }
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      
      {/* Version Info */}
      <Box 
        sx={{ 
          p: 2, 
          borderTop: `1px solid ${theme.palette.divider}`,
          backgroundColor: theme.palette.background.default,
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Typography variant="caption" color="text.secondary">
          IAAS-Firecracker v1.0.0
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Drawer 
      anchor="left"
      open={open} 
      onClose={toggleDrawer(false)}
      PaperProps={{
        sx: {
          width: 280,
          border: 'none',
          boxShadow: '0 0 20px rgba(0,0,0,0.1)'
        }
      }}
    >
      {SidebarContent}
    </Drawer>
  );
}

export default Sidebar;