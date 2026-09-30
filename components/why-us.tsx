const reasons = [
  { title: "Primero, escucharte.", text: "Un espacio para hablar de tus expectativas y tus dudas, sin apuros ni presiones." },
  { title: "Todo, con claridad.", text: "Opciones, etapas y presupuesto explicados antes de decidir cómo continuar." },
  { title: "Cuidado en cada detalle.", text: "Un entorno sereno y una atención cercana para que te sientas acompañado durante tu visita." },
];

export default function WhyUs() {
  return (
    <section id="por-que-elegirnos" className="why-section" aria-labelledby="why-title">
      <div className="shell why-layout">
        <div className="why-heading"><p className="eyebrow">02 · NUESTRA FORMA DE CUIDARTE</p><h2 id="why-title">La confianza<br />también se cuida.</h2><p className="section-intro">Queremos que venir al dentista se sienta más simple. Con información clara, tiempo y trato humano.</p></div>
        <div className="reasons-list">{reasons.map((reason, index) => <article className="reason" key={reason.title}><span className="item-number" aria-hidden="true">0{index + 1}</span><div><h3>{reason.title}</h3><p>{reason.text}</p></div></article>)}</div>
      </div>
    </section>
  );
}
