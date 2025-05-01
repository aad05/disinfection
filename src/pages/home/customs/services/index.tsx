import { ShieldCheck, UserCheck, Leaf, Smile } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <div className="text-[#2ec4b6] font-bold text-xs mb-2 tracking-widest">ПОЧЕМУ SANITO</div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#223] mb-3 leading-tight">
          Предоставляем услуги клининга<br />на высшем уровне
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-lg p-7 flex flex-col items-center text-center">
          <ShieldCheck className="text-[#2ec4b6] mb-4" size={38} />
          <h3 className="font-bold text-lg text-[#223] mb-2">Гарантия и страховка</h3>
          <div className="w-8 h-1 bg-[#2ec4b6] mb-2 rounded-full" />
          <p className="text-gray-500 text-sm">Ответственность за бизнес всегда под контролем.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-lg p-7 flex flex-col items-center text-center">
          <UserCheck className="text-[#2ec4b6] mb-4" size={38} />
          <h3 className="font-bold text-lg text-[#223] mb-2">Обученный персонал</h3>
          <div className="w-8 h-1 bg-[#2ec4b6] mb-2 rounded-full" />
          <p className="text-gray-500 text-sm">Наши сотрудники проходят тщательное обучение и проверку.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-lg p-7 flex flex-col items-center text-center">
          <Leaf className="text-[#2ec4b6] mb-4" size={38} />
          <h3 className="font-bold text-lg text-[#223] mb-2">Эко-уборка</h3>
          <div className="w-8 h-1 bg-[#2ec4b6] mb-2 rounded-full" />
          <p className="text-gray-500 text-sm">Используем экологически чистые и безопасные средства.</p>
        </div>
        {/* Card 4 */}
        <div className="bg-white rounded-xl shadow-lg p-7 flex flex-col items-center text-center">
          <Smile className="text-[#2ec4b6] mb-4" size={38} />
          <h3 className="font-bold text-lg text-[#223] mb-2">100% удовлетворение</h3>
          <div className="w-8 h-1 bg-[#2ec4b6] mb-2 rounded-full" />
          <p className="text-gray-500 text-sm">Гарантируем полное удовлетворение каждого клиента.</p>
        </div>
      </div>
    </section>
  );
}
