import imagengato from '../../imagenes/gato.jpg';
export function Rol2({ user }) {
  return (
    <div>
      <h1>Panel de Rol 2</h1>
      <p>Bienvenido al sistema, <strong>{user?.username || 'Usuario 2'}</strong>.</p>
      <p>Esta vista es exclusiva para el Rol 2.</p>
      <br />
      <img src={imagengato} alt="Imagen Rol 2" />
    </div>
  );
}