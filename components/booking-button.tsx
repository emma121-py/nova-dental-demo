"use client";

import { useId, useRef } from "react";

export default function BookingButton({ compact = false, floating = false }: { compact?: boolean; floating?: boolean }) {
  const titleId = useId();
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button className={floating ? "booking-button booking-floating" : compact ? "booking-button booking-compact" : "booking-button"} onClick={() => dialog.current?.showModal()}>
        {floating ? "WhatsApp" : compact ? "Reservar cita" : "Reservar por WhatsApp"}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
      </button>
      <dialog ref={dialog} className="booking-dialog" aria-labelledby={titleId} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
        <p className="eyebrow">NOVA DENTAL · DEMO</p>
        <h2 id={titleId}>Tu próxima sonrisa empieza con una conversación.</h2>
        <p>Esta es una clínica ficticia. Las reservas por WhatsApp estarán disponibles cuando se configure un número de contacto autorizado.</p>
        <p>No se envió ningún mensaje ni se realizó una reserva.</p>
        <button className="booking-button" onClick={() => dialog.current?.close()} autoFocus>Entendido</button>
      </dialog>
    </>
  );
}

