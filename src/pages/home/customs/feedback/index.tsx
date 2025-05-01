import { MessageCircle } from "lucide-react";

export default function FeedbackSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
        {/* Left: Image & Icon */}
        <div className="relative flex-shrink-0 flex items-center justify-center w-full md:w-[340px] h-[340px]">
          <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg flex items-center justify-center w-36 h-36">
            {/* Placeholder for virus/disinfection icon */}
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="38" stroke="#2ec4b6" strokeWidth="4" fill="#f6fcfa" />
              <path d="M25 55L55 25" stroke="#2ec4b6" strokeWidth="4" strokeLinecap="round" />
              <circle cx="40" cy="40" r="14" fill="#2ec4b6" fillOpacity="0.2" />
              <path d="M40 28v-8M40 60v-8M52 40h8M20 40h8M52.4 52.4l5.6 5.6M27.6 27.6l-5.6-5.6M52.4 27.6l5.6-5.6M27.6 52.4l-5.6 5.6" stroke="#2ec4b6" strokeWidth="2" />
            </svg>
          </div>
          <img
            src="/disinfection.jpg"
            alt="Дезинфекция"
            className="rounded-full object-cover w-full h-full shadow-xl"
            style={{ minWidth: 240, minHeight: 240, maxWidth: 340, maxHeight: 340 }}
            onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </div>
        {/* Right: Text & Feedback */}
        <div className="flex-1 flex flex-col items-start">
          <div className="text-[#2ec4b6] font-bold text-xs mb-2 tracking-widest">КАК ЭТО РАБОТАЕТ</div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#223] mb-4 leading-tight">
            Комплексный подход<br />к клининговым услугам
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl">
            Наши услуги просты и удобны для вас. Мы используем современные методы и средства для эффективной и безопасной уборки. Доверьтесь нашим экспертам и получите лучший результат!
          </p>
          {/* Feedback Card */}
          <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-4 p-5 w-full max-w-md">
            <img
              src="/user1.jpg"
              alt="Отзыв клиента"
              className="w-16 h-16 rounded-full object-cover border-2 border-[#2ec4b6]"
              onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <div className="flex-1 text-left">
              <div className="text-xs text-[#2ec4b6] font-bold mb-1">ШАГ 1</div>
              <div className="font-semibold text-base text-[#223] mb-1">Проконсультируйтесь с нашими экспертами</div>
              <div className="text-gray-500 text-sm">
                Оперативно ответим на ваши вопросы и подберём оптимальное решение для вашего помещения.
              </div>
            </div>
          </div>
          {/* CTA Button */}
          <button className="mt-6 px-8 py-2 bg-[#e7faf6] text-[#2ec4b6] font-bold rounded shadow hover:bg-[#2ec4b6] hover:text-white transition">НАЧАТЬ</button>
        </div>
      </div>
    </section>
  );
}
