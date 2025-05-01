import { Mail, Phone, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2ec4b6] text-white py-10 px-4 mt-12 animate-fade-in-up">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand & Contact */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-2xl font-extrabold tracking-tight">Дезинфекция PRO</div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="w-4 h-4" />
            <a href="tel:+79991234567" className="hover:underline">+7 (999) 123-45-67</a>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4" />
            <a href="mailto:info@dezpro.ru" className="hover:underline">info@dezpro.ru</a>
          </div>
        </div>
        {/* Navigation */}
        <nav className="flex flex-col items-center gap-2 text-sm">
          <a href="#services" className="hover:text-[#223] transition">Услуги</a>
          <a href="#feedback" className="hover:text-[#223] transition">Отзывы</a>
          <a href="#showcase" className="hover:text-[#223] transition">Наши работы</a>
          <a href="#locations" className="hover:text-[#223] transition">География</a>
        </nav>
        {/* Socials */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <a href="https://t.me/yourcompany" target="_blank" rel="noopener noreferrer" className="hover:text-[#223] transition" aria-label="Telegram">
              <Send className="w-6 h-6" />
            </a>
            <a href="https://vk.com/yourcompany" target="_blank" rel="noopener noreferrer" className="hover:text-[#223] transition" aria-label="VK">
              {/* VK SVG icon */}
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12.004 17.804h-1.06c-3.463 0-6.62-2.86-8.44-5.26-.354-.47-.504-.97-.39-1.44.11-.45.48-.74 1.06-.74h2.03c.58 0 .87.19 1.07.61.45.97 1.52 2.81 2.03 2.81.16 0 .21-.09.21-.61v-2.09c-.04-.86-.25-1.02-.97-1.02h-1.16c-.58 0-.74-.29-.74-.61 0-.32.17-.61.74-.61h3.84c.57 0 .74.29.74.61 0 .32-.17.61-.74.61h-1.15c-.72 0-.93.16-.97 1.02v2.09c0 .52.05.61.21.61.51 0 1.58-1.84 2.03-2.81.2-.42.5-.61 1.07-.61h2.03c.58 0 .95.29 1.06.74.12.47-.04.97-.39 1.44-1.82 2.4-4.98 5.26-8.44 5.26h-1.06z"/></svg>
            </a>
          </div>
          <div className="text-xs text-white/70">© {new Date().getFullYear()} Дезинфекция PRO. Все права защищены.</div>
        </div>
      </div>
    </footer>
  );
}
