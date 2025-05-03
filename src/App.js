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
import { authActions } from './store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

//import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const isAdmin = useSelector(state => state.isAdmin);


console.log(localStorage.getItem('iaas-admin'));

   // Update state based on changes in Redux store
   useEffect(() => {
    if(localStorage.getItem('iaas-token')) {
      dispatch(authActions.login());
    }
    if(localStorage.getItem('iaas-admin')){
     console.log("set admin");
     dispatch(authActions.setAdmin());
    }

     
   
  }, [localStorage]); // Watch specific properties, not the entire cart object


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
            { isLoggedIn && <>
            <Route
              path="/dashboard"
              element={<DashboardPage />}
            />
            <Route
              path="/vms"
              element={<VmManagementPage />}
            />
            </>}

            {isAdmin && <><Route
              path="/users"
              element={<UserManagementPage />}
            /></>}
          </Routes>
          <footer>
            <Footer/>
          </footer>
        
      
    </ThemeProvider>
  );
}

export default App;