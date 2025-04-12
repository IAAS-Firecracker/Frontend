import React from 'react';
import { 
  Container, 
  Box, 
  Typography, 
  Button, 
  Grid, 
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
  Stack,
  Fade,
  Grow,
  Zoom
} from '@mui/material';
import {
  Cloud,
  Security,
  Storage,
  Speed,
  SupportAgent,
  CheckCircle,
  Public,
  Terminal,
  Dns,
  VpnLock,
  ArrowForward,
  RocketLaunch,
  BarChart,
  Savings,
  DashboardCustomize
} from '@mui/icons-material';
import { keyframes } from '@emotion/react';
import Features from '../components/home/Features';
import PricingPlans from '../components/home/PricingPlans';
import Testimonials from '../components/home/Testimonials';


// Animation for floating elements
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
   
    <Box sx={{ overflowX: 'hidden', overflowY: 'hidden' }}>
        
      {/* Hero Section with animated background */}
      <Box sx={{
        background: 'linear-gradient(135deg, #0d47a1 0%, #1976d2 100%)',
        color: 'white',
        py: 10,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 20%),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 20%)
          `,
          pointerEvents: 'none',
        }
      }}>
        <Container maxWidth="lg">
          <Fade in timeout={1000}>
            <Box>
              <Typography 
                variant={isMobile ? 'h3' : 'h2'} 
                gutterBottom 
                sx={{ 
                  fontWeight: 800,
                  mb: 3,
                  textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                  lineHeight: 1.2
                }}
              >
                Cloud Hosting <Box component="span" sx={{ color: theme.palette.secondary.light }}>Reimagined</Box>
              </Typography>
              <Typography 
                variant={isMobile ? 'h6' : 'h5'} 
                gutterBottom 
                sx={{ 
                  mb: 4,
                  maxWidth: 800,
                  mx: 'auto',
                  opacity: 0.9,
                  fontWeight: 300
                }}
              >
                Enterprise-grade infrastructure at startup-friendly prices. 
                Deploy in seconds, scale effortlessly.
              </Typography>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2} 
                justifyContent="center"
                sx={{ mb: 6 }}
              >
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  href="/signup"
                  endIcon={<RocketLaunch />}
                  sx={{ 
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 600,
                    fontSize: isMobile ? '1rem' : '1.125rem'
                  }}
                >
                  Launch Your First VM
                </Button>
                <Button 
                  variant="outlined" 
                  color="inherit" 
                  size="large"
                  href="/pricing"
                  endIcon={<ArrowForward />}
                  sx={{ 
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 600,
                    fontSize: isMobile ? '1rem' : '1.125rem'
                  }}
                >
                  Compare Plans
                </Button>
              </Stack>
            </Box>
          </Fade>

          {/* Animated floating server illustration */}
          <Box sx={{
            position: 'relative',
            height: isMobile ? 200 : 300,
            mx: 'auto',
            maxWidth: 800,
            animation: `${floatAnimation} 6s ease-in-out infinite`
          }}>
            <Box component="img" 
              src="https://cdn-icons-png.flaticon.com/512/2906/2906274.png" 
              alt="Cloud servers"
              sx={{ 
                height: '100%', 
                width: 'auto',
                filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))'
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* Trust Badges */}
      <Box sx={{ 
        py: 4,
        bgcolor: 'background.paper',
        borderBottom: `1px solid ${theme.palette.divider}`
      }}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" justifyContent="space-around" spacing={4}>
            {[
              { text: '99.9% Uptime', icon: <BarChart color="primary" /> },
              { text: '24/7 Support', icon: <SupportAgent color="primary" /> },
              { text: 'Global Network', icon: <Public color="primary" /> },
              { text: 'Cost Efficient', icon: <Savings color="primary" /> }
            ].map((item, index) => (
              <Grow in timeout={800 + (index * 200)} key={index}>
                <Grid item xs={6} sm={3}>
                  <Stack direction="row" alignItems="center" spacing={2} justifyContent="center">
                    <Avatar sx={{ 
                      bgcolor: theme.palette.primary.light,
                      color: theme.palette.primary.main,
                      width: 40,
                      height: 40
                    }}>
                      {item.icon}
                    </Avatar>
                    <Typography variant="h6" fontWeight={600}>
                      {item.text}
                    </Typography>
                  </Stack>
                </Grid>
              </Grow>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      {/* <Box sx={{ py: 10, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" sx={{ mb: 8 }}>
            <Typography 
              variant="overline" 
              color="primary"
              sx={{ 
                fontWeight: 600,
                letterSpacing: 1,
                fontSize: '1rem'
              }}
            >
              WHY CHOOSE US
            </Typography>
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 800,
                mt: 1
              }}
            >
              Built for Developers & Businesses
            </Typography>
          </Box>
          
          <Grid container spacing={6}>
            {[
              {
                icon: <Speed fontSize="large" color="primary" />,
                title: "Lightning Fast",
                description: "Our NVMe SSD storage and high-frequency CPUs deliver exceptional performance for your applications.",
                highlights: [
                  "3x faster than standard SSDs",
                  "Low-latency networking",
                  "Dedicated resources"
                ]
              },
              {
                icon: <Security fontSize="large" color="primary" />,
                title: "Secure by Design",
                description: "Multiple layers of security including DDoS protection, firewalls, and isolated networks.",
                highlights: [
                  "Free DDoS protection",
                  "Two-factor authentication",
                  "Regular security audits"
                ]
              },
              {
                icon: <DashboardCustomize fontSize="large" color="primary" />,
                title: "Easy to Use",
                description: "Intuitive control panel and API make managing your infrastructure simple.",
                highlights: [
                  "One-click apps",
                  "Custom dashboard",
                  "Mobile friendly"
                ]
              }
            ].map((feature, index) => (
              <Grow in timeout={500 + (index * 300)} key={index}>
                <Grid item xs={12} md={4}>
                  <Paper elevation={0} sx={{ 
                    p: 4, 
                    height: '100%',
                    borderRadius: 3,
                    border: `1px solid ${theme.palette.divider}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[6]
                    }
                  }}>
                    <Avatar sx={{ 
                      bgcolor: theme.palette.primary.light,
                      color: theme.palette.primary.main,
                      width: 60,
                      height: 60,
                      mb: 3
                    }}>
                      {feature.icon}
                    </Avatar>
                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                      {feature.description}
                    </Typography>
                    <List dense>
                      {feature.highlights.map((highlight, i) => (
                        <ListItem key={i} sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircle color="primary" fontSize="small" />
                          </ListItemIcon>
                          <ListItemText primary={highlight} />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Grid>
              </Grow>
            ))}
          </Grid>
        </Container>
      </Box> */}
      <Features/>


      {/* Pricing Plans Section */}
      <PricingPlans/>

      {/* Global Infrastructure Section */}
      {/* <Box sx={{ 
        py: 10,
        background: `linear-gradient(rgba(0, 0, 0, 0.7), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        position: 'relative'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="overline" sx={{ 
                fontWeight: 600,
                letterSpacing: 1,
                fontSize: '1rem',
                color: theme.palette.secondary.light
              }}>
                GLOBAL REACH
              </Typography>
              <Typography variant="h3" sx={{ 
                fontWeight: 800,
                mb: 3,
                mt: 1
              }}>
                Worldwide Data Centers
              </Typography>
              <Typography variant="body1" sx={{ 
                mb: 4,
                opacity: 0.9,
                fontSize: '1.1rem'
              }}>
                Our strategically located data centers ensure low latency and high availability 
                for your applications, no matter where your users are.
              </Typography>
              
              <List>
                {[
                  { location: "North America", cities: "New York, Los Angeles, Dallas" },
                  { location: "Europe", cities: "Frankfurt, London, Paris" },
                  { location: "Asia", cities: "Singapore, Tokyo, Mumbai" },
                  { location: "Oceania", cities: "Sydney, Melbourne" }
                ].map((item, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 40, color: theme.palette.secondary.light }}>
                      <Public />
                    </ListItemIcon>
                    <ListItemText 
                      primary={item.location}
                      secondary={item.cities}
                      primaryTypographyProps={{ fontWeight: 600 }}
                      secondaryTypographyProps={{ color: 'rgba(255,255,255,0.7)' }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Zoom in timeout={1000}>
                <Box sx={{ 
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: 6,
                  lineHeight: 0,
                  position: 'relative'
                }}>
                  <Box component="img" 
                    src="https://maps.googleapis.com/maps/api/staticmap?center=0,0&zoom=1&scale=2&size=800x600&maptype=roadmap&markers=color:red%7C40.7128,-74.0060&markers=color:red%7C34.0522,-118.2437&markers=color:red%7C32.7767,-96.7970&markers=color:red%7C50.1109,8.6821&markers=color:red%7C51.5074,-0.1278&markers=color:red%7C48.8566,2.3522&markers=color:red%7C1.3521,103.8198&markers=color:red%7C35.6762,139.6503&markers=color:red%7C19.0760,72.8777&markers=color:red%7C-33.8688,151.2093&markers=color:red%7C-37.8136,144.9631&key=YOUR_API_KEY" 
                    alt="Data center locations"
                    sx={{ width: '100%', height: 'auto' }}
                  />
                  <Box sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                    p: 3,
                    color: 'white'
                  }}>
                    <Typography variant="body2">
                      <Box component="span" sx={{ 
                        display: 'inline-block',
                        width: 10,
                        height: 10,
                        bgcolor: 'red',
                        borderRadius: '50%',
                        mr: 1
                      }} />
                      Data Center Locations
                    </Typography>
                  </Box>
                </Box>
              </Zoom>
            </Grid>
          </Grid>
        </Container>
      </Box> */}
      {/* Testimonials Section */}
        <Testimonials/>

      {/* CTA Section */}
      <Box sx={{ 
        py: 10,
        background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container maxWidth="md">
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 800,
              mb: 3
            }}
          >
            Ready to Deploy Your Project?
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 4,
              opacity: 0.9,
              fontWeight: 300
            }}
          >
            Get started in minutes with our easy-to-use platform. No long-term contracts, cancel anytime.
          </Typography>
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2} 
            justifyContent="center"
          >
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              href="/signup"
              endIcon={<RocketLaunch />}
              sx={{ 
                px: 6,
                py: 1.5,
                borderRadius: 2,
                fontWeight: 600,
                fontSize: '1.125rem'
              }}
            >
              Get Started Free
            </Button>
            <Button 
              variant="outlined" 
              color="inherit" 
              size="large"
              href="/contact"
              endIcon={<ArrowForward />}
              sx={{ 
                px: 6,
                py: 1.5,
                borderRadius: 2,
                fontWeight: 600,
                fontSize: '1.125rem'
              }}
            >
              Contact Sales
            </Button>
          </Stack>
        </Container>
        
        {/* Animated decorative elements */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 20%),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 20%)
          `,
          pointerEvents: 'none',
        }} />
      </Box>
    </Box>
  );
};

export default HomePage;