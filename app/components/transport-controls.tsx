type ControlButtonProps = {
  label: string;
  children: React.ReactNode;
};

// ControlButton ofrece una etiqueta accesible a cada icono del reproductor.
function ControlButton({ label, children }: ControlButtonProps) {
  return (
    <button className="player-button" type="button" aria-label={label}>
      {children}
    </button>
  );
}

// TransportControls muestra barras decorativas y controles de audio no funcionales.
export default function TransportControls() {
  return (
    <section className="transport-controls" aria-label="Controles del reproductor">
      <div className="volume-row" aria-label="Volumen">
        <span className="small-control" aria-hidden="true">
          ▣
        </span>
        <div className="volume-track" />
        <span className="small-control" aria-hidden="true">
          🔊
        </span>
      </div>
      <div className="control-row">
        <div className="slider-track" aria-hidden="true" />
        <ControlButton label="Anterior">◀◀</ControlButton>
        <ControlButton label="Reproducir">▶</ControlButton>
        <ControlButton label="Pausa">Ⅱ</ControlButton>
        <ControlButton label="Siguiente">▶▶</ControlButton>
        <span className="speaker-icon" aria-hidden="true">
          🔊
        </span>
      </div>
    </section>
  );
}
