import { useState } from 'react';

export function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('1234');

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanUser = username.trim();
    if (!cleanUser) return alert('Por favor ingresa un usuario');

    if (password !== '1234') {
      return alert('Contraseña incorrecta)');
    }

    // Mapeo automático de roles según el usuario
    let role = 'rol1'; // Rol por defecto
    const lowerUser = cleanUser.toLowerCase();

    if (lowerUser === 'usuario 2' || lowerUser === 'user2' || lowerUser === '2') {
      role = 'rol2';
    } else if (lowerUser === 'usuario 3' || lowerUser === 'user3' || lowerUser === '3') {
      role = 'rol3';
    } else if (lowerUser === 'usuario 1' || lowerUser === 'user1' || lowerUser === '1') {
      role = 'rol1';
    }

    onLogin({ username: cleanUser, role });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Iniciar Sesión</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left' }}>
        <div style={{ marginBottom: '15px' }}>
          <label>Usuario: </label><br />
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            
            required
            style={{ padding: '8px', width: '220px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Contraseña: </label><br />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
            style={{ padding: '8px', width: '220px' }}
          />
        </div>

        <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer', width: '100%' }}>
          Entrar
        </button>
      </form>
    </div>
  );
}