import Image from "next/image";
import BookingButton from "./booking-button";

export default function Hero() {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="location-dot" /> ODONTOLOGÍA EN ASUNCIÓN, PARAGUAY</p>
        <h1 id="hero-title">Sentite bien.<br />Sonreí con<br /><span>confianza.</span></h1>
        <p className="hero-description">Odontología moderna, atención cercana y el tiempo que tu sonrisa merece.</p>
        <div className="hero-actions">
          <BookingButton />
          <a className="text-link" href="#espacio">Conocé nuestro espacio <span aria-hidden="true">↗</span></a>
        </div>
        <p className="care-note">Una atención pensada en vos, desde el primer contacto.</p>
      </div>
      <figure className="hero-figure" id="espacio">
        <div className="hero-image-wrap">
          <Image src="/images/consultorio.webp" alt="Visualización de un consultorio dental luminoso, con sillón verde salvia, madera clara y vista a un jardín." fill sizes="(max-width: 800px) 100vw, 55vw" priority className="hero-image" />
        </div>
        <figcaption><span>Un espacio para sentirte en calma.</span><span className="image-disclaimer">Imagen ilustrativa · IA</span></figcaption>
      </figure>
      <p className="demo-note">Nova Dental es una clínica ficticia. Proyecto demostrativo, sin atención ni reservas reales.</p>
    </section>
  );
}
