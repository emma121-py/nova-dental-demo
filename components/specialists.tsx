import Image from "next/image";

const specialists = [
  { name: "Lucía Benítez", image: "lucia", area: "Odontología general y prevención", description: "Una mirada cercana al cuidado diario y a los hábitos que acompañan una sonrisa saludable." },
  { name: "Mateo Duarte", image: "mateo", area: "Ortodoncia", description: "Atención centrada en explicar cada etapa y acompañar el proceso con claridad." },
  { name: "Camila Rojas", image: "camila", area: "Estética y rehabilitación oral", description: "Una propuesta de cuidado que busca el equilibrio entre comodidad, función y estética." },
];

export default function Specialists() {
  return (
    <section id="especialistas" className="content-section shell" aria-labelledby="specialists-title">
      <div className="section-heading"><div><p className="eyebrow">03 · ESPECIALISTAS</p><h2 id="specialists-title">Personas que cuidan<br />de tu sonrisa.</h2></div><p className="section-intro">Conocé al equipo de esta propuesta demostrativa. Todos los nombres y perfiles son ficticios; no representan profesionales reales.</p></div>
      <div className="specialists-grid">{specialists.map((person) => <article className="specialist" key={person.name}><Image className="specialist-portrait" src={`/images/${person.image}.webp`} alt={`Retrato ilustrativo del perfil ficticio ${person.name}`} width={900} height={1205} sizes="(max-width: 800px) min( calc(100vw - 40px), 480px), (max-width: 1100px) 30vw, 440px" loading="lazy" /><p className="profile-label">PERFIL FICTICIO</p><h3>{person.name}</h3><p className="specialist-area">{person.area}</p><p className="specialist-description">{person.description}</p></article>)}</div>
    </section>
  );
}

