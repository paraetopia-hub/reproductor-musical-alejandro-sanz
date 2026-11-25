import PlayerScreen from "./components/player-screen";
import { activeArtist } from "./data/artists";

export default function Home() {
  return <PlayerScreen artist={activeArtist} />;
}
