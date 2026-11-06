import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import { Rol1 } from './pages/Rol1/Rol1';
import { Rol2 } from './pages/Rol2/Rol2';
import { Rol3 } from './pages/Rol3/Rol3';
import './App.css';

function MainLayout() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return (
    <Routes>
      {!user ? (
        <Route path="*" element={<Login onLogin={handleLogin} />} />
      ) : (
        <>
          
          {user.role === 'rol1' && <Route path="*" element={<Rol1 user={user} />} />}
          
          {user.role === 'rol2' && <Route path="*" element={<Rol2 user={user} />} />}
          
          {user.role === 'rol3' && <Route path="*" element={<Rol3 user={user} />} />}
        </>
      )}
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}