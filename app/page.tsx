"use client";

import Image from "next/image";
import Link from "next/link"; 
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function HomePage() {
  return (
    <main className="relative w-full min-h-screen bg-white text-[#1F1F1F] font-[Unbounded]">
      {/* HEADER */}
      <Header />

      {/* HERO SECTION */}
      <section className="flex flex-col items-center text-center mt-[140px]">
        <h2 className="text-[#100147] font-semibold text-[40px] leading-[75px] max-w-[1096px]">
          Сделано с душой — почувствуй вкус Азии
        </h2>

        <p className="mt-[40px] text-[14px] font-light text-black max-w-[892px] leading-[20px]">
          Добро пожаловать в <span className="font-semibold">Rolls & Souls</span> — уютное азиатское кафе, где каждая деталь сделана с душой.
          Мы готовим рамен, роллы, бабл-ти и десерты по рецептам, вдохновлённым уличной кухней Азии.
        </p>

      <div className="flex gap-[30px] mt-[50px]">
        <Link
          href="/menu"
          className="border border-black w-[210px] h-[55px] flex items-center justify-center text-[16px] font-normal text-[#1F1F1F] hover:bg-[#f7f7f7] transition shadow-md"
        >
          Посмотреть меню
        </Link>
        <Link
          href="/booking"
          className="bg-[#100147] border border-black text-white w-[210px] h-[55px] flex items-center justify-center text-[16px] font-normal hover:bg-[#1c0f4b] transition shadow-md"
        >
          Забронировать
        </Link>
      </div>

      </section>

      {/* АДРЕСА */}
      <section className="relative mt-[120px] w-full h-[486px]">
        <Image
          src="/cafe-bg.jpg"
          alt="Интерьер кафе"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/60" />
        <div className="absolute left-[29px] top-[39px] w-[671px] h-[405px] bg-black/80 p-[40px]">
          <h3 className="text-white text-[18px] font-medium mb-6">Где нас найти?</h3>
            <p className="text-white text-[18px] font-normal leading-[20px] whitespace-pre-line">
              {`Город: Алматы

            1) Атакент: улица Тимирязева, 42

            2) Мега центр: улица Макатаева, 127/1 / проспект Сейфуллина, 483

            3) Мега центр: улица Розыбакиева, 247`}
            </p>

        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
