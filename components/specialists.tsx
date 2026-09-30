const specialists = [
  { name: "Lucía Benítez", area: "Odontología general y prevención", description: "Una mirada cercana al cuidado diario y a los hábitos que acompañan una sonrisa saludable." },
  { name: "Mateo Duarte", area: "Ortodoncia", description: "Atención centrada en explicar cada etapa y acompañar el proceso con claridad." },
  { name: "Camila Rojas", area: "Estética y rehabilitación oral", description: "Una propuesta de cuidado que busca el equilibrio entre comodidad, función y estética." },
];

export default function Specialists() {
  return (
    <section id="especialistas" className="content-section shell" aria-labelledby="specialists-title">
      <div className="section-heading"><div><p className="eyebrow">03 · ESPECIALISTAS</p><h2 id="specialists-title">Personas que cuidan<br />de tu sonrisa.</h2></div><p className="section-intro">Conocé al equipo de esta propuesta demostrativa. Todos los nombres y perfiles son ficticios; no representan profesionales reales.</p></div>
      <div className="specialists-grid">{specialists.map((person) => <article className="specialist" key={person.name}><div className="portrait-placeholder" role="img" aria-label={`Retrato pendiente del perfil ficticio ${person.name}`}><span>Retrato del equipo</span><small>Imagen pendiente</small></div><p className="profile-label">PERFIL FICTICIO</p><h3>{person.name}</h3><p className="specialist-area">{person.area}</p><p className="specialist-description">{person.description}</p></article>)}</div>
    </section>
  );
}
