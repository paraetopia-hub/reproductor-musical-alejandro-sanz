const moods = ["😶", "😅", "🤠", "😈", "🤖"];

// MoodCarousel centra y resalta un emoji para reproducir el carrusel del diseño.
export default function MoodCarousel() {
  return (
    <nav className="mood-carousel" aria-label="Estados de ánimo">
      {moods.map((mood, index) => (
        <span
          className={`mood-item${index === 2 ? " mood-item--active" : ""}`}
          key={mood}
          aria-current={index === 2 ? "true" : undefined}
          aria-label={`Estado ${index + 1}`}
        >
          {mood}
        </span>
      ))}
    </nav>
  );
}
