// BottomNavigation cierra la interfaz con los tres iconos visibles del mockup.
export default function BottomNavigation() {
  return (
    <nav className="bottom-navigation" aria-label="Navegación inferior">
      <button className="nav-item" type="button" aria-label="Inicio">
        🏠
      </button>
      <button className="nav-item" type="button" aria-label="Biblioteca">
        🟪
      </button>
      <button className="nav-item" type="button" aria-label="Menú">
        <span className="nav-menu" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
    </nav>
  );
}
