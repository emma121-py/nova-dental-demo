const treatments = [
  { title: "Odontología general", text: "Evaluación, prevención y cuidado cotidiano para acompañar la salud de tu sonrisa.", detail: "El primer paso para cuidarte" },
  { title: "Estética dental", text: "Opciones para armonizar tu sonrisa, respetando tus rasgos y lo que querés mejorar.", detail: "Una sonrisa que se sienta tuya" },
  { title: "Ortodoncia", text: "Planificación individual para mejorar la posición de los dientes y la mordida.", detail: "Un proceso, a tu ritmo" },
  { title: "Rehabilitación oral", text: "Alternativas para recuperar piezas dentales y volver a disfrutar de lo cotidiano.", detail: "Función y bienestar" },
];

export default function Treatments() {
  return (
    <section id="tratamientos" className="content-section shell" aria-labelledby="treatments-title">
      <div className="section-heading">
        <div><p className="eyebrow">01 · TRATAMIENTOS</p><h2 id="treatments-title">Cada sonrisa,<br />un cuidado distinto.</h2></div>
        <p className="section-intro">Empezamos por escucharte. Después, te orientamos sobre las opciones que se adaptan a vos.</p>
      </div>
      <div className="treatments-grid">
        {treatments.map((treatment, index) => (
          <article className="treatment" key={treatment.title}>
            <span className="item-number" aria-hidden="true">0{index + 1}</span>
            <h3>{treatment.title}</h3><p>{treatment.text}</p><span className="treatment-detail">{treatment.detail}</span>
          </article>
        ))}
      </div>
      <p className="section-note">Propuesta ilustrativa de servicios. Cada tratamiento requiere una evaluación profesional previa.</p>
    </section>
  );
}
