import { useState } from "react";
import { MapPin, X } from "lucide-react";

const LOCATIONS = [
  {
    city: "Москва",
    desc: "Профессиональные услуги по всей столице и области.",
    map: "https://yandex.ru/map-widget/v1/?um=constructor%3A2a7a0f7c9e4b1b3b9d2e8b2e9b1b1b3b9d2e8b2e9b1b1b3b9d2e8b2e9b1&source=constructor"
  },
  {
    city: "Санкт-Петербург",
    desc: "Работаем во всех районах города и пригородах.",
    map: "https://yandex.ru/map-widget/v1/?um=constructor%3A7d2b6a5a0e4b1b3b9d2e8b2e9b1b1b3b9d2e8b2e9b1b1b3b9d2e8b2e9b2&source=constructor"
  },
  {
    city: "Казань",
    desc: "Качественная уборка для бизнеса и дома.",
    map: "https://yandex.ru/map-widget/v1/?um=constructor%3A8c2a6b5a0e4b1b3b9d2e8b2e9b1b1b3b9d2e8b2e9b1b1b3b9d2e8b2e9b3&source=constructor"
  },
  {
    city: "Екатеринбург",
    desc: "Современные методы и опытные специалисты.",
    map: "https://yandex.ru/map-widget/v1/?um=constructor%3A9d2a7b5a0e4b1b3b9d2e8b2e9b1b1b3b9d2e8b2e9b1b1b3b9d2e8b2e9b4&source=constructor"
  },
  {
    city: "Новосибирск",
    desc: "Дезинфекция и клининг для любых объектов.",
    map: "https://yandex.ru/map-widget/v1/?um=constructor%3A0e3a8b5a0e4b1b3b9d2e8b2e9b1b1b3b9d2e8b2e9b1b1b3b9d2e8b2e9b5&source=constructor"
  },
  {
    city: "Сочи",
    desc: "Услуги для отелей, квартир и коммерческих помещений.",
    map: "https://yandex.ru/map-widget/v1/?um=constructor%3A1f4a9b5a0e4b1b3b9d2e8b2e9b1b1b3b9d2e8b2e9b1b1b3b9d2e8b2e9b6&source=constructor"
  },
  {
    city: "Владивосток",
    desc: "Быстрый выезд и индивидуальный подход.",
    map: "https://yandex.ru/map-widget/v1/?um=constructor%3A2b5aab5a0e4b1b3b9d2e8b2e9b1b1b3b9d2e8b2e9b1b1b3b9d2e8b2e9b7&source=constructor"
  },
  // Add more cities as needed
];

export default function LocationsSection() {
  const [selected, setSelected] = useState<null | typeof LOCATIONS[0]>(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <div className="text-[#2ec4b6] font-bold text-xs mb-2 tracking-widest">ГДЕ МЫ РАБОТАЕМ</div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#223] mb-3 leading-tight">
          География наших услуг
        </h2>
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 px-4 md:px-12 py-2 snap-x snap-mandatory scroll-smooth">
          {LOCATIONS.map((loc) => (
            <div
              key={loc.city}
              className="min-w-[260px] max-w-xs bg-white rounded-xl shadow-lg flex flex-col items-center justify-center px-8 py-8 mx-auto snap-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group cursor-pointer"
              onClick={() => setSelected(loc)}
              onKeyDown={e => (e.key === 'Enter' || e.key === ' ') ? setSelected(loc) : undefined}
              role="button"
              tabIndex={0}
              aria-label={`Показать карту для ${loc.city}`}
            >
              <div className="bg-[#e7faf6] rounded-full p-4 mb-4 animate-pulse group-hover:animate-none">
                <MapPin className="text-[#2ec4b6]" size={32} />
              </div>
              <h3 className="font-bold text-lg text-[#223] mb-2">{loc.city}</h3>
              <p className="text-gray-500 text-sm text-center">{loc.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Modal for map */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-2xl w-full relative animate-fade-in">
            <button
              type="button"
              className="absolute top-4 right-4 text-gray-400 hover:text-[#2ec4b6] transition"
              onClick={() => setSelected(null)}
              aria-label="Закрыть карту"
            >
              <X size={28} />
            </button>
            <h3 className="font-bold text-xl text-[#223] mb-2 text-center">{selected.city}</h3>
            <div className="mb-4 text-center text-gray-500 text-sm">{selected.desc}</div>
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={selected.map}
                title={`Карта ${selected.city}`}
                width="100%"
                height="100%"
                className="w-full h-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

