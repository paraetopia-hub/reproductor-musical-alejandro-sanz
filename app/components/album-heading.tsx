type AlbumHeadingProps = {
  name?: string;
  subtitle?: string;
};

// AlbumHeading presenta el artista y el álbum en dos líneas con jerarquía clara.
export default function AlbumHeading({
  name = "Alejandro Sanz",
  subtitle = "— Más —",
}: AlbumHeadingProps) {
  return (
    <header className="album-heading">
      <h1>{name}</h1>
      <p>{subtitle}</p>
    </header>
  );
}
