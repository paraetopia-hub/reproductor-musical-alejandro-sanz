import type { ArtistProfile } from "../data/artists";
import AlbumHeading from "./album-heading";
import AlbumProgress from "./album-progress";
import ArtistCard from "./artist-card";
import ArtistSearch from "./artist-search";
import BottomNavigation from "./bottom-navigation";
import CheckboxShowcase from "./checkbox-showcase";
import MoodCarousel from "./mood-carousel";
import TransportControls from "./transport-controls";

type PlayerScreenProps = {
  artist?: ArtistProfile;
};

// PlayerScreen compone las secciones independientes dentro del marco del dispositivo.
export default function PlayerScreen({ artist }: PlayerScreenProps) {
  return (
    <main className="stage">
      <div className="device-shell">
        <section className="player-device" aria-label="Reproductor musical">
          <p className="status-time" aria-label="Hora">
            17:08
          </p>
          <AlbumHeading name={artist?.name} subtitle={artist?.subtitle} />
          <AlbumProgress />
          <ArtistCard name={artist?.name} />
          <TransportControls />
          <CheckboxShowcase />
          <ArtistSearch artistName={artist?.name} />
          <MoodCarousel />
          <BottomNavigation />
        </section>
      </div>
    </main>
  );
}
