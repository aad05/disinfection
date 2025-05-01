import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    image: "https://www.lysol.com/content/dam/commerce/lysol-us/us/en/de71406d3fc6d31dd1c82656b4774bd6c2d25716/_jcr_content/renditions/original",
    title: "Личный подход подтверждает наш профессионализм",
    desc: "Возмущение и неприязнь к людям, которых так обольстили и деморализовали прелести момента удовольствия.",
    btn1: { text: "О КОМПАНИИ", href: "#" },
    btn2: { text: "ИНДЕКС-2.HTML", icon: Calendar, sub: "INFO@EXAMPLE.COM", href: "#" },
  },
  {
    image: "https://www.lysol.com/content/dam/commerce/lysol-us/us/en/de71406d3fc6d31dd1c82656b4774bd6c2d25716/_jcr_content/renditions/original",
    title: "Качественный сервис для каждого клиента",
    desc: "Мы предоставляем надежную и безопасную дезинфекцию для вашего бизнеса и дома.",
    btn1: { text: "НАШИ УСЛУГИ", href: "#" },
    btn2: { text: "СВЯЗАТЬСЯ С НАМИ", icon: Calendar, sub: "ПОЗВОНИТЕ НАМ СЕЙЧАС", href: "#" },
  },
  // Добавьте больше слайдов при необходимости
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState<'in' | 'out'>('in');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Helper to change slide with fade
  const changeSlide = (newIdx: number) => {
    setFade('out');
    if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    fadeTimeoutRef.current = setTimeout(() => {
      setCurrent(newIdx);
      setFade('in');
    }, 300); // 300ms fade duration
  };

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      changeSlide((current + 1) % slides.length);
    }, 5000);
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [current]);

  useEffect(() => {
    return () => {
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
    };
  }, []);

  const goTo = (idx: number) => {
    if (idx !== current) changeSlide(idx);
  };
  const prev = () => changeSlide(current === 0 ? slides.length - 1 : current - 1);
  const next = () => changeSlide((current + 1) % slides.length);

  const slide = slides[current];

  return (
    <div className="relative w-full h-[540px] md:h-[600px] flex items-center justify-center bg-muted overflow-hidden mt-6">
      {/* BG Image with fade animation */}
      <img
        src={slide.image}
        alt="slide bg"
        className={`absolute inset-0 w-full h-full object-cover object-center z-0 transition-opacity duration-300 ${fade === 'in' ? 'opacity-100' : 'opacity-0'}`}
        draggable={false}
      />
      {/* Overlay */}
      <div className={`absolute inset-0 bg-black/10 z-10 transition-opacity duration-300 ${fade === 'in' ? 'opacity-100' : 'opacity-0'}`} />
      {/* Slide content with fade animation */}
      <div className={`relative z-20 flex w-full h-full items-center justify-between px-6 md:px-16 transition-opacity duration-300 ${fade === 'in' ? 'opacity-100' : 'opacity-0'}`}>
        {/* Left Card */}
        <div className="bg-white/95 rounded-xl shadow-lg p-8 md:p-14 max-w-[520px] w-full flex flex-col gap-5">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-1 leading-tight">
            {slide.title}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            {slide.desc}
          </p>
        </div>
        {/* Right Card */}
        <div className="bg-white/95 rounded-xl shadow-lg p-8 md:p-10 flex flex-col gap-6 min-w-[320px] max-w-[360px] w-full items-center">
          <Button variant="ghost" className="w-full font-bold shadow-none">
            {slide.btn1.text}
          </Button>
          <a href={slide.btn2.href} className="w-full flex items-center gap-3 rounded-lg px-4 py-2 hover:bg-primary/5 transition">
            <slide.btn2.icon className="text-primary" size={22} />
            <div className="flex flex-col items-start">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">{slide.btn2.text}</span>
              <span className="text-xs text-muted-foreground">{slide.btn2.sub}</span>
            </div>
          </a>
        </div>
      </div>
      {/* Nav Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md z-30"
        onClick={prev}
        aria-label="Previous slide"
        type="button"
      >
        <ArrowLeft className="text-primary" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md z-30"
        onClick={next}
        aria-label="Next slide"
        type="button"
      >
        <ArrowRight className="text-primary" />
      </button>
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${i === current ? "bg-primary" : "bg-primary/30"}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
