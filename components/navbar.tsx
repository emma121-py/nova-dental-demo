import BookingButton from "./booking-button";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar shell" aria-label="Navegación principal">
        <a href="#inicio" className="wordmark" aria-label="Nova Dental, inicio">nova<span className="wordmark-light">dental</span><span className="brand-dot">.</span></a>
        <div className="nav-actions">
          <a className="nav-link" href="#espacio">Nuestro espacio</a>
          <BookingButton compact />
        </div>
      </nav>
    </header>
  );
}
