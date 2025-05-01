import { useState } from "react";

const IMAGES = [
  // Replace these URLs with your own images if available
  "https://projectcor.com/wp-content/uploads/2022/08/Imagenredondeada_202007-21.png",
  "https://projectcor.com/wp-content/uploads/2022/08/Imagenredondeada_202007-21.png",
  "https://projectcor.com/wp-content/uploads/2022/08/Imagenredondeada_202007-21.png",
  "https://projectcor.com/wp-content/uploads/2022/08/Imagenredondeada_202007-21.png",
  "https://projectcor.com/wp-content/uploads/2022/08/Imagenredondeada_202007-21.png",
  "https://projectcor.com/wp-content/uploads/2022/08/Imagenredondeada_202007-21.png",
  "https://projectcor.com/wp-content/uploads/2022/08/Imagenredondeada_202007-21.png",
  "https://projectcor.com/wp-content/uploads/2022/08/Imagenredondeada_202007-21.png",
  "https://projectcor.com/wp-content/uploads/2022/08/Imagenredondeada_202007-21.png",
  "https://projectcor.com/wp-content/uploads/2022/08/Imagenredondeada_202007-21.png ",
  // Add more URLs as needed
];

const INITIAL_COUNT = 6;

export default function ShowcaseSection() {
  const [expanded, setExpanded] = useState(false);
  const visibleImages = expanded ? IMAGES : IMAGES.slice(0, INITIAL_COUNT);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <div className="text-[#2ec4b6] font-bold text-xs mb-2 tracking-widest">НАШИ ПРОЕКТЫ</div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#223] mb-3 leading-tight">
          Последние работы нашей команды
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {visibleImages.map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-xl shadow-lg bg-gray-50 group relative"
          >
            <img
              src={src}
              alt={`Работа ${idx + 1}`}
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-90 group-hover:shadow-2xl"
              style={{ minHeight: 180 }}
            />
            {/* Optional: Overlay animation */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          type="button"
          className="px-8 py-2 bg-[#e7faf6] text-[#2ec4b6] font-bold rounded shadow hover:bg-[#2ec4b6] hover:text-white transition"
          onClick={() => setExpanded(e => !e)}
        >
          {expanded ? "Скрыть работы" : "Показать больше"}
        </button>
      </div>
    </section>
  );
}
