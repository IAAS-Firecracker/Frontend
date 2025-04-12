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

// Animation keyframes
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.9; }
  100% { transform: scale(1); opacity: 1; }
`;

const shimmerAnimation = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  // Trust badge items with consistent structure
  const trustBadges = [
    { text: '99.99% Uptime', icon: <BarChart color="primary" /> },
    { text: '24/7 Support', icon: <SupportAgent color="primary" /> },
    { text: 'Global Network', icon: <Public color="primary" /> },
    { text: 'Cost Efficient', icon: <Savings color="primary" /> }
  ];

  return (
    <Box sx={{ 
      overflowX: 'hidden',
      bgcolor: theme.palette.background.default,
    }}>
        
      {/* Hero Section - Modern gradient with improved visual elements */}
      <Box sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 70%, ${theme.palette.primary.light} 100%)`,
        color: 'white',
        pt: { xs: 8, md: 12 },
        pb: { xs: 10, md: 14 },
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: { md: '0 0 30px 30px' },
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15) 0%, transparent 25%),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,0.15) 0%, transparent 25%)
          `,
          pointerEvents: 'none',
        }
      }}>
        <Container maxWidth="lg">
          <Fade in timeout={1000}>
            <Box>
              <Typography 
                variant={isMobile ? 'h3' : 'h2'} 
                component="h1"
                gutterBottom 
                sx={{ 
                  fontWeight: 800,
                  mb: 3,
                  textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                  lineHeight: 1.2,
                  letterSpacing: -0.5,
                }}
              >
                Cloud Hosting{' '}
                <Box 
                  component="span" 
                  sx={{ 
                    color: theme.palette.secondary.light,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -5,
                      left: 0,
                      width: '100%',
                      height: 3,
                      backgroundColor: theme.palette.secondary.light,
                      borderRadius: 2,
                    }
                  }}
                >
                  Reimagined
                </Box>
              </Typography>
              <Typography 
                variant={isMobile ? 'body1' : 'h6'} 
                component="h2"
                gutterBottom 
                sx={{ 
                  mb: 4,
                  maxWidth: 700,
                  mx: 'auto',
                  opacity: 0.9,
                  fontWeight: 300,
                  lineHeight: 1.6
                }}
              >
                Enterprise-grade infrastructure at startup-friendly prices. 
                Deploy in seconds, scale without limits.
              </Typography>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={3} 
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
                    borderRadius: 3,
                    fontWeight: 600,
                    fontSize: isMobile ? '1rem' : '1.125rem',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
                    }
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
                    borderRadius: 3,
                    fontWeight: 600,
                    fontSize: isMobile ? '1rem' : '1.125rem',
                    borderWidth: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderWidth: 2,
                      bgcolor: 'rgba(255,255,255,0.1)',
                    }
                  }}
                >
                  Compare Plans
                </Button>
              </Stack>
            </Box>
          </Fade>

          {/* Animated server illustration with enhanced visuals */}
          <Box sx={{
            position: 'relative',
            height: isMobile ? 180 : 260,
            mx: 'auto',
            maxWidth: 800,
            animation: `${floatAnimation} 6s ease-in-out infinite`
          }}>
            <Box 
              component="img" 
              src="https://cdn-icons-png.flaticon.com/512/2906/2906274.png" 
              alt="Cloud servers"
              sx={{ 
                height: '100%', 
                width: 'auto',
                filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.4))',
                transition: 'all 0.3s ease',
              }}
            />
            
            {/* Decorative elements */}
            <Box sx={{
              position: 'absolute',
              top: '30%',
              left: isMobile ? '20%' : '30%',
              width: 40,
              height: 40,
              borderRadius: '50%',
              bgcolor: 'rgba(255,255,255,0.2)',
              animation: `${pulseAnimation} 3s infinite ease-in-out`,
              zIndex: -1,
            }} />
            <Box sx={{
              position: 'absolute',
              bottom: '20%',
              right: isMobile ? '20%' : '35%',
              width: 25,
              height: 25,
              borderRadius: '50%',
              bgcolor: 'rgba(255,255,255,0.15)',
              animation: `${pulseAnimation} 4s infinite ease-in-out`,
              animationDelay: '1s',
              zIndex: -1,
            }} />
          </Box>
        </Container>
      </Box>

      {/* Trust Badges - Redesigned for better visual impact */}
      <Box sx={{ 
        py: { xs: 4, md: 5 },
        mt: { xs: -6, md: -8 },
        mx: { xs: 2, sm: 4, md: 6, lg: 10 },
        bgcolor: theme.palette.background.paper,
        borderRadius: 4,
        boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
        position: 'relative',
        zIndex: 2,
        border: `1px solid ${theme.palette.divider}`,
      }}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" justifyContent="space-around" spacing={4}>
            {trustBadges.map((item, index) => (
              <Grow in timeout={800 + (index * 200)} key={index}>
                <Grid item xs={6} sm={3}>
                  <Stack 
                    direction="row" 
                    alignItems="center" 
                    spacing={1.5} 
                    justifyContent="center"
                    sx={{
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                      }
                    }}
                  >
                    <Avatar sx={{ 
                      bgcolor: `${theme.palette.primary.light}20`,
                      color: theme.palette.primary.main,
                      width: 44,
                      height: 44
                    }}>
                      {item.icon}
                    </Avatar>
                    <Typography 
                      variant="subtitle1" 
                      fontWeight={600}
                      sx={{
                        fontSize: { xs: '0.875rem', md: '1rem' },
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Stack>
                </Grid>
              </Grow>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section - Using the existing component */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Features />
      </Box>

      {/* Pricing Plans Section - Using the existing component */}
      <Box sx={{ 
        py: { xs: 8, md: 12 },
        bgcolor: theme.palette.background.default,
      }}>
        <PricingPlans />
      </Box>

      {/* Testimonials Section - Using the existing component */}
      <Box sx={{ 
        py: { xs: 8, md: 12 },
        bgcolor: theme.palette.grey[50],
        borderRadius: { md: '30px 30px 0 0' },
        mt: { md: 4 },
      }}>
        <Testimonials />
      </Box>

      {/* CTA Section - Enhanced with modern design elements */}
      <Box sx={{ 
        py: { xs: 8, md: 10 },
        background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Animated background effect */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15) 0%, transparent 25%),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,0.15) 0%, transparent 25%)
          `,
          pointerEvents: 'none',
        }} />
        
        {/* Decorative elements */}
        <Box sx={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: 60,
          height: 60,
          borderRadius: '50%',
          bgcolor: 'rgba(255,255,255,0.1)',
          animation: `${pulseAnimation} 4s infinite ease-in-out`,
        }} />
        <Box sx={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: 80,
          height: 80,
          borderRadius: '50%',
          bgcolor: 'rgba(255,255,255,0.08)',
          animation: `${pulseAnimation} 5s infinite ease-in-out`,
          animationDelay: '1s',
        }} />
        
        <Container maxWidth="md">
          <Fade in timeout={1000}>
            <Box>
              <Typography 
                variant={isMobile ? 'h4' : 'h3'} 
                component="h2"
                sx={{ 
                  fontWeight: 800,
                  mb: 3,
                  textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                  position: 'relative',
                  display: 'inline-block'
                }}
              >
                Ready to Deploy Your Project?
              </Typography>
              <Typography 
                variant={isMobile ? 'body1' : 'h6'} 
                sx={{ 
                  mb: 5,
                  opacity: 0.9,
                  fontWeight: 300,
                  maxWidth: 700,
                  mx: 'auto'
                }}
              >
                Get started in minutes with our easy-to-use platform.
                No long-term contracts, cancel anytime.
              </Typography>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={3} 
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
                    py: 1.8,
                    borderRadius: 3,
                    fontWeight: 600,
                    fontSize: '1.125rem',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                    }
                  }}
                >
                  Start Free Trial
                </Button>
                <Button 
                  variant="outlined" 
                  color="inherit" 
                  size="large"
                  href="/contact"
                  endIcon={<ArrowForward />}
                  sx={{ 
                    px: 6,
                    py: 1.8,
                    borderRadius: 3,
                    fontWeight: 600,
                    fontSize: '1.125rem',
                    borderWidth: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderWidth: 2,
                      bgcolor: 'rgba(255,255,255,0.1)',
                    }
                  }}
                >
                  Contact Sales
                </Button>
              </Stack>
            </Box>
          </Fade>
          
          {/* User count stat */}
          <Fade in timeout={1500}>
            <Box sx={{ 
              mt: 8, 
              pt: 4,
              borderTop: '1px solid rgba(255,255,255,0.2)',
              opacity: 0.9
            }}>
              <Typography variant="h6" component="p" fontWeight={300}>
                Trusted by{' '}
                <Box component="span" sx={{ fontWeight: 700, color: theme.palette.secondary.light }}>
                  10,000+
                </Box>
                {' '}developers & businesses worldwide
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>
      
      {/* Footer link preview */}
      <Box sx={{ 
        py: 2,
        bgcolor: theme.palette.primary.dark,
        color: 'rgba(255,255,255,0.7)',
        textAlign: 'center',
        fontSize: '0.875rem'
      }}>
        <Container>
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={{ xs: 2, sm: 4 }} 
            justifyContent="center"
          >
            <Typography variant="body2">© 2025 Cloud Hosting Inc.</Typography>
            <Typography variant="body2" component="a" href="/terms" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'white' } }}>Terms</Typography>
            <Typography variant="body2" component="a" href="/privacy" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'white' } }}>Privacy</Typography>
            <Typography variant="body2" component="a" href="/security" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: 'white' } }}>Security</Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;