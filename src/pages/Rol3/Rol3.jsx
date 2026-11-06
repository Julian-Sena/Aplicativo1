import imagenperro from '../../imagenes/perro.jpg';
export function Rol3({ user }) {
  return (
    <div>
      <h1>Panel de Rol 3</h1>
      <p>Bienvenido al sistema, <strong>{user?.username || 'Usuario 3'}</strong>.</p>
      <p>Esta vista es exclusiva para el Rol 3.</p>
      <br />
      <img src={imagenperro} alt="Imagen Rol 3" />
    </div>
  );
}