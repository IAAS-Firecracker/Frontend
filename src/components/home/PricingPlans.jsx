import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Chip
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const PricingPlans = () => {
  const plans = [
    {
      name: "Starter",
      price: "$4.99",
      period: "/month",
      specs: [
        "1 vCPU Core",
        "4GB RAM",
        "50GB NVMe SSD",
        "1TB Bandwidth",
        "1 IPv4 Address"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$9.99",
      period: "/month",
      specs: [
        "4 vCPU Cores",
        "8GB RAM",
        "100GB NVMe SSD",
        "2TB Bandwidth",
        "1 IPv4 Address"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$19.99",
      period: "/month",
      specs: [
        "8 vCPU Cores",
        "16GB RAM",
        "200GB NVMe SSD",
        "4TB Bandwidth",
        "2 IPv4 Addresses"
      ],
      popular: false
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Typography 
        variant="h3" 
        align="center" 
        gutterBottom 
        sx={{ 
          fontWeight: 700,
          mb: 2
        }}
      >
        Simple, Transparent Pricing
      </Typography>
      <Typography 
        variant="h6" 
        align="center" 
        color="text.secondary" 
        sx={{ 
          mb: 8,
          maxWidth: 700,
          mx: 'auto'
        }}
      >
        No hidden fees. No surprises. Pay only for what you use.
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper 
              elevation={plan.popular ? 6 : 2} 
              sx={{ 
                borderRadius: 3,
                overflow: 'hidden',
                border: plan.popular ? '2px solid' : 'none',
                borderColor: plan.popular ? 'secondary.main' : 'transparent',
                position: 'relative',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {plan.popular && (
                <Chip 
                  label="MOST POPULAR"
                  color="secondary"
                  sx={{ 
                    position: 'absolute', 
                    top: 16, 
                    right: 16,
                    fontWeight: 600
                  }}
                />
              )}
              <Box sx={{ p: 4 }}>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 700,
                    mb: 1
                  }}
                >
                  {plan.name}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 2 }}>
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontWeight: 800,
                      lineHeight: 1
                    }}
                  >
                    {plan.price}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary"
                    sx={{ 
                      ml: 1,
                      mb: 0.5
                    }}
                  >
                    {plan.period}
                  </Typography>
                </Box>
                
                <List dense sx={{ mb: 3 }}>
                  {plan.specs.map((spec, i) => (
                    <ListItem key={i} sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircle color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={spec} />
                    </ListItem>
                  ))}
                </List>
              </Box>
              
              <Box sx={{ p: 3, pt: 0, mt: 'auto' }}>
                <Button
                  fullWidth
                  variant={plan.popular ? 'contained' : 'outlined'}
                  color={plan.popular ? 'secondary' : 'primary'}
                  size="large"
                  sx={{
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 600
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PricingPlans;