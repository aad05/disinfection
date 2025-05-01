import {
  Phone,
  Mail,
  Building2,
  Home,
  Star,
  Menu,
  X,
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

import { useState } from "react";

import { createPortal } from "react-dom";

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="md:hidden flex items-center justify-center p-2 rounded text-[#2ec4b6] hover:bg-[#e7faf6] transition"
        aria-label="Открыть меню"
        type="button"
        onClick={() => setOpen(true)}
      >
        <Menu size={28} />
      </button>
      {/* Sidebar Modal rendered at document.body via portal */}
      {open && typeof window !== "undefined" && createPortal(
        <div className="fixed inset-0 z-[9999] flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-[9999]"
            onClick={() => setOpen(false)}
            aria-label="Закрыть меню"
          />
          {/* Sidebar */}
          <aside className="relative bg-white w-72 max-w-[90vw] h-full shadow-2xl p-6 flex flex-col animate-slide-in-left z-[9999]">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-[#2ec4b6] transition"
              onClick={() => setOpen(false)}
              aria-label="Закрыть меню"
              type="button"
            >
              <X size={28} />
            </button>
            <div className="flex items-center gap-2 mb-8 mt-2">
              <img src="/logo.png" alt="Логотип Sanito" className="w-8 h-8 object-contain" />
              <span className="font-extrabold text-xl text-[#222] tracking-tight">Sanito</span>
            </div>
            <ul className="flex flex-col gap-4 list-none m-0 p-0 mb-8">
              {navLinks.map((link, i) => (
                <li
                  key={link}
                  className={`font-semibold text-base cursor-pointer transition-colors duration-200 ${i === 0 ? "text-[#2ec4b6]" : "text-[#3a4b5c]"}`}
                  onClick={() => setOpen(false)}
                >
                  {link}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="w-full bg-gradient-to-r from-[#2ec4b6] to-[#0b8dcf] text-white font-bold text-sm rounded px-6 py-2 cursor-pointer shadow-md tracking-wide transition-colors duration-200 mb-4"
              onClick={() => setOpen(false)}
            >
              ЗАПРОСИТЬ СМЕТУ
            </button>
            <div className="flex flex-col gap-2 text-sm mt-auto">
              <span className="flex items-center gap-1.5">
                <Phone size={16} color="#2ec4b6" /> +44-123-456-78
              </span>
              <span className="flex items-center gap-1.5">
                <Mail size={16} color="#2ec4b6" /> support@infa.com
              </span>
            </div>
          </aside>
        </div>,
        document.body
      )}
    </>
  );
}


export default function Navbar() {
  return (
    <nav className="w-full bg-white rounded-2xl mt-5 mx-auto relative z-10">
      {/* Top Info Bar */}
      <div className="flex justify-between items-center px-4 md:px-8 pt-2 text-[15px] text-[#3a4b5c]">
        <div className="flex items-center gap-2 md:gap-4">
          <span className="flex items-center gap-1.5">
            <Phone size={17} color="#2ec4b6" /> По вопросам +44-123-456-78
          </span>
          <span className="hidden md:inline text-gray-300">|</span>
          <span className="flex items-center gap-1.5">
            <Mail size={17} color="#2ec4b6" /> support@infa.com
          </span>
        </div>
        <div className="hidden md:flex items-center gap-4.5">
          <button type="button" className="flex items-center gap-1 bg-transparent border-none p-0 m-0 text-inherit cursor-pointer focus:outline-none" tabIndex={0}>
            <Building2 size={17} color="#2ec4b6" /> Коммерческая
          </button>
          <span className="text-gray-300">|</span>
          <button type="button" className="flex items-center gap-1 bg-transparent border-none p-0 m-0 text-inherit cursor-pointer focus:outline-none" tabIndex={0}>
            <Home size={17} color="#2ec4b6" /> Жилая
          </button>
          <span className="text-gray-300">|</span>
          <button type="button" className="flex items-center gap-1 bg-transparent border-none p-0 m-0 text-inherit cursor-pointer focus:outline-none" tabIndex={0}>
            <Star size={17} color="#2ec4b6" /> Отзывы
          </button>
        </div>
      </div>
      {/* Main Navigation Bar */}
      <div className="flex items-center justify-between px-4 md:px-8 py-2 mt-1 border-t border-[#f0f2f5]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Логотип Sanito"
            className="w-10 h-10 object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          <span className="font-extrabold text-2xl text-[#222] tracking-tight">Sanito</span>
        </div>
        {/* Navigation Links: hidden on mobile */}
        <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
          {navLinks.map((link, i) => (
            <li
              key={link}
              className={`font-semibold text-base cursor-pointer pb-0.5 transition-colors duration-200 ${i === 0 ? "text-[#2ec4b6] border-b-2 border-[#2ec4b6]" : "text-[#3a4b5c]"}`}
            >
              {link}
            </li>
          ))}
        </ul>
        {/* Right Actions: hidden on mobile */}
        <div className="hidden md:flex items-center gap-4">
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
        <MobileMenu />
      </div>
    </nav>
  );
}
