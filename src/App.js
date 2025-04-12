import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import VmManagementPage from './pages/VmManagementPage';
import UserManagementPage from './pages/UserManagementPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
//import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
   
        <header>
          <Header/>
        </header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route
              path="/dashboard"
              element={<DashboardPage />}
            />
            <Route
              path="/vms"
              element={<VmManagementPage />}
            />
            <Route
              path="/users"
              element={<UserManagementPage />}
            />
          </Routes>
          <footer>
            <Footer/>
          </footer>
        
      
    </ThemeProvider>
  );
}

export default App;