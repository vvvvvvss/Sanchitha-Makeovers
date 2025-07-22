export default function HexagonGrid() {
  const hexItems = [
    { type: "image", src: "/images/img1.jpg", alt: "Bridal Look 1" },
    { type: "color", color: "var(--purple-light)" },
    { type: "image", src: "/images/img2.jpg", alt: "Bridal Look 2" },
    { type: "color", color: "var(--purple-secondary)" },
    { type: "image", src: "/images/img3.jpg", alt: "Bridal Look 3" },
    { type: "color", color: "var(--purple-primary)" },
  ];

  return (
    <section id="home" className="homepage-container">
      <div className="hexagon-grid">
        {hexItems.map((item, index) => (
          <div
            key={index}
            className="hex"
            style={{
              backgroundColor: item.type === "color" ? item.color : undefined,
            }}
          >
            {item.type === "image" && (
              <img src={item.src} alt={item.alt} className="hex-img" />
            )}
          </div>
        ))}
      </div>

      <div className="signature-area">
        <h1>Sanchitha Makeovers</h1>
        <p>Where every moment becomes a timeless masterpiece</p>
      </div>
    </section>
  );
}
