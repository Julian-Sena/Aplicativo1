export function Rol1({ user }) {
  return (
    <div>
      <h1>Panel de Rol 1</h1>
      <p>Bienvenido al sistema, <strong>{user?.username || 'Usuario 1'}</strong>.</p>
      <p>Esta vista es exclusiva para el Rol 1.</p>
      <br />
      <img src="https://via.placeholder.com/300x150?text=Rol+1" alt="Imagen Rol 1" />
    </div>
  );
}