import {
  Phone,
  Mail,
  Building2,
  Home,
  Star,
} from "lucide-react";

const navLinks = [
  "Главная",
  "О нас",
  "Услуги",
  "Элементы",
  "Блог",
  "Магазин",
  "Контакты",
];

export default function Navbar() {
  return (
    <nav className="w-full bg-white rounded-2xl mt-5 mx-auto relative z-10">
      {/* Top Info Bar */}
      <div className="flex justify-between items-center px-8 pt-2 text-[15px] text-[#3a4b5c]">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Phone size={17} color="#2ec4b6" /> По вопросам +44-123-456-78
          </span>
          <span className="text-gray-300">|</span>
          <span className="flex items-center gap-1.5">
            <Mail size={17} color="#2ec4b6" /> support@infa.com
          </span>
        </div>
        <div className="flex items-center gap-4.5">
          <span className="flex items-center gap-1">
            <Building2 size={17} color="#2ec4b6" /> Коммерческая
          </span>
          <span className="text-gray-300">|</span>
          <span className="flex items-center gap-1">
            <Home size={17} color="#2ec4b6" /> Жилая
          </span>
          <span className="text-gray-300">|</span>
          <span className="flex items-center gap-1">
            <Star size={17} color="#2ec4b6" /> Отзывы
          </span>
        </div>
      </div>
      {/* Main Navigation Bar */}
      <div className="flex items-center justify-between px-8 py-2 mt-1 border-t border-[#f0f2f5]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Логотип Sanito"
            className="w-10 h-10 object-contain"
            onError={e => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <span className="font-extrabold text-2xl text-[#222] tracking-tight">Sanito</span>
        </div>
        {/* Navigation Links */}
        <ul className="flex items-center gap-6 list-none m-0 p-0">
          {navLinks.map((link, i) => (
            <li
              key={link}
              className={`font-semibold text-base cursor-pointer pb-0.5 transition-colors duration-200 ${i === 0 ? "text-[#2ec4b6] border-b-2 border-[#2ec4b6]" : "text-[#3a4b5c]"}`}
            >
              {link}
            </li>
          ))}
        </ul>
        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Cart with badge */}
          {/* <div className="relative mr-2">
            <ShoppingCart size={22} color="#3a4b5c" className="cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-[#2ec4b6] text-white rounded-full text-xs w-5 h-5 flex items-center justify-center font-bold shadow-md">
              0
            </span>
          </div> */}
          {/* Search icon */}
          {/* <Search size={22} color="#3a4b5c" className="cursor-pointer" /> */}
          {/* Request a Quote button */}
          <button
            type="button"
            className="bg-gradient-to-r from-[#2ec4b6] to-[#0b8dcf] text-white font-bold text-sm rounded px-6 py-2 ml-2 cursor-pointer shadow-md tracking-wide transition-colors duration-200"
          >
            ЗАПРОСИТЬ СМЕТУ
          </button>
        </div>
      </div>
    </nav>
  );
}
