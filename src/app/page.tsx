"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Phone, MapPin, Clock, Star, ShoppingBag, Plus, Minus,
  ChevronLeft, ChevronRight, Flame, Sparkles, Heart, Send,
  Instagram, Twitter, Ghost, MessageCircle,
} from "lucide-react";
import { CATEGORIES, DISHES, formatPrice, type Dish } from "@/lib/data";

const PHONE = "+966 55 161 3755";
const SNAPCHAT_URL = "https://share.snapchat.com/m/IMyPBd0yTpWu6FieZ2tCnQGf9F1y_HgItrlxfELimRU?share_id=6FIR16n3TKadBH0sGjpmrw&locale=ar_SA@calendar%3Dgregorian";
const WHATSAPP_URL = `https://wa.me/966551613755`;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [cart, setCart] = useState<{ dish: Dish; qty: number }[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filteredDishes = activeCategory === "all"
    ? DISHES
    : DISHES.filter((d) => d.category === activeCategory);

  const addToCart = (dish: Dish) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.dish.id === dish.id);
      if (existing) {
        return prev.map((c) => c.dish.id === dish.id ? { ...c, qty: c.qty + 1 } : c);
      }
      return [...prev, { dish, qty: 1 }];
    });
    setCartOpen(true);
  };

  const updateQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev.map((c) => c.dish.id === id ? { ...c, qty: Math.max(0, c.qty + delta) } : c).filter((c) => c.qty > 0)
    );
  };

  const cartTotal = cart.reduce((sum, c) => sum + c.dish.price * c.qty, 0);
  const cartCount = cart.reduce((sum, c) => sum + c.qty, 0);

  return (
    <div className="min-h-screen bg-[#1a1208]">
      {/* Navbar */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#1a1208]/95 backdrop-blur-md shadow-lg shadow-black/50" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden ring-2 ring-[#d4a017]/40 group-hover:ring-[#d4a017] transition-all animate-glow">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="صناع الطعم" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base sm:text-xl font-extrabold text-gold-gradient">صناع الطعم</span>
              <span className="text-[9px] sm:text-xs text-[#d4a017]/60 tracking-widest">TASTE MAKERS</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#home" className="text-sm font-semibold text-[#fff8ee]/80 hover:text-[#d4a017] transition-colors">الرئيسية</a>
            <a href="#menu" className="text-sm font-semibold text-[#fff8ee]/80 hover:text-[#d4a017] transition-colors">القائمة</a>
            <a href="#about" className="text-sm font-semibold text-[#fff8ee]/80 hover:text-[#d4a017] transition-colors">من نحن</a>
            <a href="#reservation" className="text-sm font-semibold text-[#fff8ee]/80 hover:text-[#d4a017] transition-colors">احجز طاولة</a>
            <a href="#contact" className="text-sm font-semibold text-[#fff8ee]/80 hover:text-[#d4a017] transition-colors">تواصل</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-1.5 bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] px-3 py-2 rounded-full text-xs font-bold hover:bg-[#25D366]/30 transition-colors">
              <Phone size={14} />
              اطلب
            </a>
            <button onClick={() => setCartOpen(true)} className="relative p-2 sm:p-3 rounded-full bg-[#d4a017]/10 border border-[#d4a017]/30 text-[#d4a017] hover:bg-[#d4a017]/20 transition-colors">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#c0392b] text-white text-[10px] font-bold rounded-full flex items-center justify-center">{cartCount}</span>
              )}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-[#fff8ee]">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#1a1208] border-t border-[#d4a017]/20 py-4">
            <nav className="flex flex-col px-4 gap-1">
              {["الرئيسية", "القائمة", "من نحن", "احجز طاولة", "تواصل"].map((link) => (
                <a key={link} href={`#${link === "الرئيسية" ? "home" : link === "القائمة" ? "menu" : link === "تواصل" ? "contact" : link === "احجز طاولة" ? "reservation" : "about"}`} onClick={() => setMenuOpen(false)} className="py-3 text-sm font-semibold text-[#fff8ee]/80 hover:text-[#d4a017] border-b border-[#d4a017]/10">{link}</a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1208] via-[#2a1f10] to-[#1a1208]" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #d4a017 0%, transparent 50%), radial-gradient(circle at 70% 30%, #c0392b 0%, transparent 40%)" }} />

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 right-10 w-40 h-40 rounded-full bg-[#d4a017]/10 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-10 w-60 h-60 rounded-full bg-[#c0392b]/10 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="text-center lg:text-right">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <span className="inline-flex items-center gap-2 bg-[#d4a017]/10 border border-[#d4a017]/30 text-[#d4a017] px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6">
                <Sparkles size={14} />
                مطبخ سعودي ويمني فاخر
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              نُبدع <span className="text-gold-gradient">الطعم</span><br />
              بأيدي صنّاع مهرة
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-base sm:text-lg text-[#fff8ee]/70 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              اكتشف أشهى الأطباق السعودية واليمنية الأصيلة، محضّرة بأجود المكونات وبلمسة عصرية تجمع بين الأصالة والإبداع.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a href="#menu" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d4a017] to-[#f0c040] text-[#1a1208] font-bold px-7 py-3.5 rounded-full shadow-3d hover:scale-105 transition-transform">
                <ShoppingBag size={18} />
                تصفّح القائمة
              </a>
              <a href="#reservation" className="inline-flex items-center gap-2 bg-[#fff8ee]/5 border-2 border-[#d4a017]/40 text-[#fff8ee] font-bold px-7 py-3.5 rounded-full hover:bg-[#d4a017]/10 transition-colors">
                احجز طاولة
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex gap-6 sm:gap-10 mt-12 justify-center lg:justify-start">
              {[
                { num: "20+", label: "طبق فاخر" },
                { num: "5K+", label: "عميل سعيد" },
                { num: "4.9", label: "تقييم", icon: Star },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-gold-gradient">{s.num}</span>
                    {s.icon && <s.icon size={16} className="text-[#d4a017] fill-current" />}
                  </div>
                  <span className="text-xs text-[#fff8ee]/50">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — 3D image showcase */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="relative hidden lg:block perspective-1500">
            <div className="relative w-full h-[500px] preserve-3d">
              {/* Main dish — center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full overflow-hidden shadow-3d animate-float z-20 ring-4 ring-[#d4a017]/30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/dishes/mandi.png" alt="مندي اللحم" className="w-full h-full object-cover" />
              </div>
              {/* Floating dish 1 — top right */}
              <div className="absolute top-4 right-4 w-40 h-40 rounded-2xl overflow-hidden shadow-3d animate-float card-3d z-10" style={{ animationDelay: "0.5s" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/dishes/kibbeh-fried.png" alt="كبة" className="w-full h-full object-cover" />
              </div>
              {/* Floating dish 2 — bottom left */}
              <div className="absolute bottom-4 left-4 w-44 h-44 rounded-2xl overflow-hidden shadow-3d animate-float card-3d z-10" style={{ animationDelay: "1s" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/dishes/cheesecake.png" alt="تشيز كيك" className="w-full h-full object-cover" />
              </div>
              {/* Floating dish 3 — top left */}
              <div className="absolute top-12 left-12 w-32 h-32 rounded-2xl overflow-hidden shadow-3d animate-float card-3d z-10" style={{ animationDelay: "1.5s" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/dishes/samosa.png" alt="سمبوسة" className="w-full h-full object-cover" />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 rounded-full border-2 border-dashed border-[#d4a017]/20 animate-spin-slow" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features bar */}
      <section className="py-8 bg-[#2a1f10] border-y border-[#d4a017]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Flame, title: "طازج يومياً", desc: "نطبخ كل يوم" },
            { icon: Clock, title: "توصيل سريع", desc: "خلال 30 دقيقة" },
            { icon: Star, title: "جودة عالية", desc: "أجود المكونات" },
            { icon: Heart, title: "طعم أصيل", desc: "وصفات تقليدية" },
          ].map((f, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#d4a017]/10 flex items-center justify-center text-[#d4a017] shrink-0">
                <f.icon size={22} />
              </div>
              <div>
                <p className="font-bold text-sm text-[#fff8ee]">{f.title}</p>
                <p className="text-xs text-[#fff8ee]/50">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#d4a017] uppercase tracking-widest">قائمتنا</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#fff8ee] mt-2">أشهى الأطباق</h2>
            <div className="w-20 h-1 bg-[#d4a017] mx-auto mt-4 rounded-full" />
          </div>

          {/* Category filters */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4 mb-8 justify-start sm:justify-center">
            {CATEGORIES.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-4 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${activeCategory === cat.id ? "bg-gradient-to-r from-[#d4a017] to-[#f0c040] text-[#1a1208] shadow-3d" : "bg-[#2a1f10] border border-[#d4a017]/20 text-[#fff8ee]/70 hover:border-[#d4a017]/50"}`}>
                <span>{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>

          {/* Dishes grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredDishes.map((dish) => (
                <motion.div key={dish.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }}>
                  <DishCard dish={dish} onAdd={() => addToCart(dish)} onClick={() => setSelectedDish(dish)} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-24 bg-[#2a1f10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold text-[#d4a017] uppercase tracking-widest">من نحن</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#fff8ee] mt-2 mb-6">قصتنا</h2>
            <p className="text-[#fff8ee]/70 text-lg leading-relaxed mb-4">
              في "صناع الطعم"، نؤمن بأن الطعام ليس مجرد وجبة، بل تجربة ثقافية كاملة. نحرص على تقديم أطباق سعودية ويمنية أصيلة محضّرة بأجود المكونات الطبيعية وبطرق تقليدية متوارثة عبر الأجيال.
            </p>
            <p className="text-[#fff8ee]/70 text-lg leading-relaxed mb-6">
              فريقنا من الطهاة المهرة يجمع بين الخبرة التقليدية واللمسة العصرية، لنقدّم لك أطباقاً لا تُنسى تليق بذوقك الرفيع.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { num: "20+", label: "طبق متنوع" },
                { num: "5K+", label: "عميل سعيد" },
                { num: "4.9★", label: "تقييم العملاء" },
              ].map((s, i) => (
                <div key={i} className="text-center bg-[#1a1208] rounded-2xl p-4 border border-[#d4a017]/10">
                  <div className="text-2xl font-extrabold text-gold-gradient">{s.num}</div>
                  <div className="text-xs text-[#fff8ee]/50 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#d4a017]/20 to-[#c0392b]/10 rounded-3xl blur-2xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden shadow-3d aspect-[3/4] card-lift">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/dishes/jareesh.png" alt="جريش" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-3d aspect-[3/4] mt-8 card-lift">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/dishes/thareed.png" alt="ثريد" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservation" className="py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#d4a017] uppercase tracking-widest">احجز الآن</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#fff8ee] mt-2">احجز طاولتك</h2>
            <div className="w-20 h-1 bg-[#d4a017] mx-auto mt-4 rounded-full" />
          </div>
          <ReservationForm />
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="bg-[#2a1f10] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl overflow-hidden ring-2 ring-[#d4a017]/40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo.png" alt="صناع الطعم" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-lg font-extrabold text-gold-gradient">صناع الطعم</p>
                  <p className="text-[10px] text-[#d4a017]/60 tracking-widest">TASTE MAKERS</p>
                </div>
              </div>
              <p className="text-sm text-[#fff8ee]/60 mb-4 leading-relaxed">مطبخ سعودي ويمني فاخر يقدّم أشهى الأطباق الأصيلة بلمسة عصرية.</p>
              {/* Social */}
              <div className="flex gap-2">
                <a href={SNAPCHAT_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#fff8ee]/10 hover:bg-[#fffc00]/20 flex items-center justify-center text-[#fffc00] transition-colors" aria-label="Snapchat">
                  <Ghost size={18} />
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#fff8ee]/10 hover:bg-[#25D366]/20 flex items-center justify-center text-[#25D366] transition-colors" aria-label="WhatsApp">
                  <MessageCircle size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#fff8ee]/10 hover:bg-[#d4a017]/20 flex items-center justify-center text-[#d4a017] transition-colors" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#fff8ee]/10 hover:bg-[#d4a017]/20 flex items-center justify-center text-[#d4a017] transition-colors" aria-label="Twitter">
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold text-[#d4a017] mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-sm text-[#fff8ee]/60">
                <li><a href="#home" className="hover:text-[#d4a017]">الرئيسية</a></li>
                <li><a href="#menu" className="hover:text-[#d4a017]">القائمة</a></li>
                <li><a href="#about" className="hover:text-[#d4a017]">من نحن</a></li>
                <li><a href="#reservation" className="hover:text-[#d4a017]">احجز طاولة</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-bold text-[#d4a017] mb-4">الفئات</h4>
              <ul className="space-y-2 text-sm text-[#fff8ee]/60">
                {CATEGORIES.slice(1).map((cat) => (
                  <li key={cat.id}><a href="#menu" onClick={() => setActiveCategory(cat.id)} className="hover:text-[#d4a017]">{cat.icon} {cat.name}</a></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-[#d4a017] mb-4">تواصل معنا</h4>
              <ul className="space-y-3 text-sm text-[#fff8ee]/60">
                <li className="flex items-center gap-2"><Phone size={16} className="text-[#d4a017]" /><span dir="ltr">{PHONE}</span></li>
                <li className="flex items-center gap-2"><Clock size={16} className="text-[#d4a017]" /><span>يومياً 11ص - 12م</span></li>
                <li className="flex items-center gap-2"><MapPin size={16} className="text-[#d4a017]" /><span>جدة، السعودية</span></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-[#d4a017]/10 text-center text-xs text-[#fff8ee]/40">
            <p>© 2026 صناع الطعم. جميع الحقوق محفوظة.</p>
            <p className="mt-2 text-[#d4a017]">صُمّم بكل ❤ حب بواسطة <a href="https://khalid-cyber-security.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-[#fff8ee]">خالد محمد</a></p>
          </div>
        </div>
      </footer>

      {/* Cart drawer */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setCartOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25 }} className="fixed top-0 bottom-0 left-0 w-full sm:w-96 bg-[#1a1208] z-[70] overflow-y-auto border-l-2 border-[#d4a017]/20">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-extrabold text-[#fff8ee]">سلة الطلبات</h3>
                  <button onClick={() => setCartOpen(false)} className="p-2 text-[#fff8ee]/60 hover:text-[#fff8ee]"><X size={20} /></button>
                </div>
                {cart.length === 0 ? (
                  <div className="text-center py-20"><ShoppingBag size={64} className="mx-auto text-[#d4a017]/20 mb-4" /><p className="text-[#fff8ee]/50">السلة فارغة</p></div>
                ) : (
                  <>
                    <div className="space-y-3 mb-6">
                      {cart.map((item) => (
                        <div key={item.dish.id} className="flex gap-3 bg-[#2a1f10] rounded-2xl p-3 border border-[#d4a017]/10">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={item.dish.image} alt={item.dish.name} className="w-16 h-16 rounded-xl object-cover shrink-0" />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-sm text-[#fff8ee] line-clamp-1">{item.dish.name}</h4>
                            <p className="text-[#d4a017] font-bold text-sm">{formatPrice(item.dish.price)}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <button onClick={() => updateQty(item.dish.id, -1)} className="w-7 h-7 rounded-lg bg-[#1a1208] flex items-center justify-center text-[#fff8ee] hover:bg-[#d4a017]/20"><Minus size={14} /></button>
                              <span className="font-bold text-sm w-6 text-center">{item.qty}</span>
                              <button onClick={() => updateQty(item.dish.id, 1)} className="w-7 h-7 rounded-lg bg-[#1a1208] flex items-center justify-center text-[#fff8ee] hover:bg-[#d4a017]/20"><Plus size={14} /></button>
                            </div>
                          </div>
                          <p className="font-extrabold text-[#d4a017] shrink-0">{formatPrice(item.dish.price * item.qty)}</p>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-[#d4a017]/20 pt-4 mb-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-[#fff8ee]/60">الإجمالي</span>
                        <span className="text-2xl font-extrabold text-gold-gradient">{formatPrice(cartTotal)}</span>
                      </div>
                    </div>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold py-4 rounded-xl hover:scale-[1.02] transition-transform">
                      <Send size={18} />اطلب عبر واتساب
                    </a>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Dish detail modal */}
      <AnimatePresence>
        {selectedDish && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedDish(null)} className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[80] flex items-center justify-center p-4" >
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="bg-[#1a1208] border-2 border-[#d4a017]/20 rounded-3xl max-w-md w-full overflow-hidden shadow-3d" >
                <div className="relative aspect-square">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={selectedDish.image} alt={selectedDish.name} className="w-full h-full object-cover" />
                  <button onClick={() => setSelectedDish(null)} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80"><X size={18} /></button>
                  {selectedDish.isPopular && <span className="absolute top-4 left-4 bg-[#d4a017] text-[#1a1208] text-xs font-bold px-3 py-1 rounded-full">الأكثر طلباً</span>}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-extrabold text-[#fff8ee] mb-2">{selectedDish.name}</h3>
                  <p className="text-[#d4a017] text-2xl font-extrabold mb-4">{formatPrice(selectedDish.price)}</p>
                  <p className="text-[#fff8ee]/70 leading-relaxed mb-6">{selectedDish.description}</p>
                  <button onClick={() => { addToCart(selectedDish); setSelectedDish(null); }} className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#d4a017] to-[#f0c040] text-[#1a1208] font-bold py-4 rounded-xl hover:scale-[1.02] transition-transform">
                    <Plus size={18} />أضف إلى السلة
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

function DishCard({ dish, onAdd, onClick }: { dish: Dish; onAdd: () => void; onClick: () => void }) {
  return (
    <div className="bg-[#2a1f10] rounded-3xl overflow-hidden border border-[#d4a017]/10 card-lift shine-effect group">
      <div className="relative aspect-[4/3] overflow-hidden cursor-pointer" onClick={onClick}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={dish.image} alt={dish.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute top-3 right-3 flex flex-col gap-1">
          {dish.isPopular && <span className="bg-[#d4a017] text-[#1a1208] text-[10px] font-bold px-2 py-1 rounded-full">الأكثر طلباً</span>}
          {dish.isNew && <span className="bg-[#27ae60] text-white text-[10px] font-bold px-2 py-1 rounded-full">جديد</span>}
          {dish.oldPrice && <span className="bg-[#c0392b] text-white text-[10px] font-bold px-2 py-1 rounded-full">خصم</span>}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-[#fff8ee] mb-1 line-clamp-1 group-hover:text-[#d4a017] transition-colors cursor-pointer" onClick={onClick}>{dish.name}</h3>
        <p className="text-xs text-[#fff8ee]/50 mb-3 line-clamp-2 leading-relaxed">{dish.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-extrabold text-[#d4a017]">{formatPrice(dish.price)}</span>
            {dish.oldPrice && <span className="text-xs text-[#fff8ee]/30 line-through">{formatPrice(dish.oldPrice)}</span>}
          </div>
          <button onClick={onAdd} className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#d4a017] to-[#f0c040] text-[#1a1208] flex items-center justify-center hover:scale-110 transition-transform shadow-3d">
            <Plus size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

function ReservationForm() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "", guests: "2" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: "", phone: "", date: "", time: "", guests: "2" }); }, 3000);
  };

  if (sent) {
    return (
      <div className="bg-[#2a1f10] rounded-3xl p-8 border border-[#d4a017]/20 text-center">
        <div className="w-20 h-20 mx-auto bg-[#27ae60] rounded-full flex items-center justify-center mb-4">
          <Sparkles size={40} className="text-white" />
        </div>
        <h3 className="text-2xl font-extrabold text-[#fff8ee] mb-2">تم الحجز بنجاح! 🎉</h3>
        <p className="text-[#fff8ee]/60">سنتواصل معك لتأكيد الحجز</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#2a1f10] rounded-3xl p-6 sm:p-8 border border-[#d4a017]/20">
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm font-medium text-[#fff8ee]/70 block mb-2">الاسم *</label>
          <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-[#1a1208] border border-[#d4a017]/20 text-[#fff8ee] focus:outline-none focus:border-[#d4a017]/50 transition-colors" placeholder="الاسم الكامل" />
        </div>
        <div>
          <label className="text-sm font-medium text-[#fff8ee]/70 block mb-2">الجوال *</label>
          <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-[#1a1208] border border-[#d4a017]/20 text-[#fff8ee] focus:outline-none focus:border-[#d4a017]/50 transition-colors" placeholder="05XXXXXXXX" dir="ltr" />
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="text-sm font-medium text-[#fff8ee]/70 block mb-2">التاريخ *</label>
          <input type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-[#1a1208] border border-[#d4a017]/20 text-[#fff8ee] focus:outline-none focus:border-[#d4a017]/50 transition-colors" />
        </div>
        <div>
          <label className="text-sm font-medium text-[#fff8ee]/70 block mb-2">الوقت *</label>
          <input type="time" required value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-[#1a1208] border border-[#d4a017]/20 text-[#fff8ee] focus:outline-none focus:border-[#d4a017]/50 transition-colors" />
        </div>
        <div>
          <label className="text-sm font-medium text-[#fff8ee]/70 block mb-2">الضيوف</label>
          <select value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-[#1a1208] border border-[#d4a017]/20 text-[#fff8ee] focus:outline-none focus:border-[#d4a017]/50 transition-colors">
            {[1,2,3,4,5,6,8,10].map((n) => <option key={n} value={n}>{n} {n === 1 ? "شخص" : "أشخاص"}</option>)}
            <option value="12+">12+ أشخاص</option>
          </select>
        </div>
      </div>
      <button type="submit" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#d4a017] to-[#f0c040] text-[#1a1208] font-bold py-4 rounded-xl hover:scale-[1.02] transition-transform shadow-3d">
        احجز الآن
      </button>
    </form>
  );
}
