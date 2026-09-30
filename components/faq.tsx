const questions = [
  ["¿Cómo puedo reservar una primera consulta?", "El contacto está pensado para realizarse por WhatsApp. En esta demo, los botones muestran un aviso y no envían mensajes ni confirman reservas."],
  ["¿Qué incluye la primera visita?", "La propuesta contempla conversar sobre tus expectativas, revisar tu situación y explicarte las opciones de atención. El alcance y el presupuesto se definen después de una evaluación profesional."],
  ["¿Puedo consultar aunque no sepa qué tratamiento necesito?", "Sí. No necesitás elegir un tratamiento antes de consultar. El primer paso es conversar sobre lo que te gustaría mejorar y recibir orientación individual."],
  ["¿Puedo conocer el presupuesto antes de comenzar?", "La propuesta de Nova Dental es explicar las etapas y los costos antes de iniciar un tratamiento. Esta demo no publica precios ni ofrece presupuestos reales."],
  ["¿Esta clínica y su equipo son reales?", "No. Nova Dental es un proyecto demostrativo. Los perfiles, servicios y horarios son ilustrativos; no se brinda atención odontológica ni se recogen datos de pacientes."],
];
export default function Faq() {
  return <section id="preguntas" className="content-section shell faq-layout" aria-labelledby="faq-title"><div><p className="eyebrow">04 · PREGUNTAS FRECUENTES</p><h2 id="faq-title">Más claridad.<br />Más tranquilidad.</h2><p className="section-intro faq-intro">Antes del primer paso, resolvamos algunas dudas.</p></div><div className="faq-list">{questions.map(([question, answer]) => <details key={question} name="faq"><summary>{question}<span aria-hidden="true" className="faq-symbol" /></summary><p>{answer}</p></details>)}</div></section>;
}
