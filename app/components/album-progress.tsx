// AlbumProgress dibuja las dos barras estáticas que aparecen bajo el encabezado.
export default function AlbumProgress() {
  return (
    <div className="track-progress" aria-label="Progreso de reproducción">
      <div className="progress-line progress-line--thin" />
      <div className="progress-line" />
    </div>
  );
}
