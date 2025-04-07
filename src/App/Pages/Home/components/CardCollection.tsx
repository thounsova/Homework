import { useEffect, useRef } from "react";

interface Card {
  id: number;
  title: string;
  imageUrl: string;
}

export default function CardCollection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const cards: Card[] = [
    {
      id: 1,
      title: "Alice in Wonderland",
      imageUrl: "src/assets/two.jpg",
    },
    {
      id: 2,
      title: "Alice in Wonderland",
      imageUrl: "src/assets/three.jpg",
    },
    { id: 3, title: "The Snow Queen", imageUrl: "src/assets/two.jpg" },
    { id: 4, title: "The WEIRDLIFE", imageUrl: "src/assets/three.jpg" },
    {
      id: 5,
      title: "The TO SCHNITZEL",
      imageUrl: "src/assets/photo_2025-01-11_13-02-24.jpg",
    },
    {
      id: 6,
      title: "The HARE & TORTOISE",
      imageUrl: "src/assets/three.jpg",
    },
  ];

  // Clone cards for infinite effect
  const allCards = [...cards, ...cards];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5; // pixels per frame

    const animate = () => {
      position += speed;

      // Reset position when half of the cards have scrolled by
      if (position >= slider.scrollWidth / 2) {
        position = 0;
      }

      slider.scrollLeft = position;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="w-full overflow-hidden pb-3.5">
      <div
        ref={sliderRef}
        className="flex overflow-x-hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex gap-4 px-4">
          {allCards.map((card, index) => (
            <div key={`${card.id}-${index}`} className="flex-shrink-0">
              <div className="w-44 rounded-lg overflow-hidden border-2 border-blue-500 shadow-md">
                <div className="h-60 overflow-hidden">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2 text-center">
                  <p className="text-sm font-medium truncate">{card.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
