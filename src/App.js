import React from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Routes, Route } from "react-router-dom"
import { AuthContextProvider } from './context/AuthContext';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Account } from './pages/Account';
import { Footer } from './components/Footer';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

          {/* There is a bug here FIX IT */}
          <Route 
          path='/account'
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } 
        />
        </Routes>
        {/* <Footer /> */}
      </AuthContextProvider>
    </>
  );
}

export default App;
