export type ArtistProfile = {
  name: string;
  subtitle: string;
};

// Cambia esta clave para mostrar otro artista sin modificar los componentes.
export const artists = {
  "alejandro-sanz": {
    name: "Alejandro Sanz",
    subtitle: "— Más —",
  },
  bisbal: {
    name: "David Bisbal",
    subtitle: "— Corazón Latino —",
  },
} satisfies Record<string, ArtistProfile>;

export const selectedArtistKey: keyof typeof artists = "alejandro-sanz";
export const activeArtist = artists[selectedArtistKey];
