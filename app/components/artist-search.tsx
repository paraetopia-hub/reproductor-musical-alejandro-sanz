type ArtistSearchProps = {
  artistName?: string;
};

// ArtistSearch mantiene el nombre visible en el campo del mockup.
export default function ArtistSearch({
  artistName = "Alejandro Sanz",
}: ArtistSearchProps) {
  return (
    <input
      className="artist-search"
      type="search"
      value={artistName}
      readOnly
      aria-label="Buscar artista"
    />
  );
}
