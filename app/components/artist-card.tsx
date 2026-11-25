type ArtistCardProps = {
  name?: string;
};

// ArtistCard reserva el espacio del retrato y anuncia el marcador del artista.
export default function ArtistCard({ name = "Alejandro Sanz" }: ArtistCardProps) {
  return (
    <section className="artist-card" aria-label={`Información de ${name}`}>
      <div
        className="artist-placeholder"
        role="img"
        aria-label={`Marcador para la imagen de ${name}`}
      />
      <div className="artist-lines" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}
