import Accordion from "./Accordion";
import SuperButton from "./SuperButton";

export default function Hero({ onButtonClick }) {
  return (
    <section className="w-full px-4 py-16  flex  justify-center ">
      {/* Wrapper to handle left/right layout */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT SIDE — HERO */}
        <div className="w-full flex flex-col justify-center">
          <div
            className="w-full bg-slate-900
 border border-white/5 rounded-2xl p-6 md:p-8 shadow-[0_0_30px_rgba(0,0,0,0.35)] text-center flex flex-col items-center gap-2"
          >
            {/* Text */}

            <p className="text-white/70 font-bangla text-lg md:text-xl leading-relaxed text-justify">
              SSC & HSC শিক্ষার্থীদের জন্য দেশের প্রথম 1v1 হোম টিউটরিং
              প্ল্যাটফর্ম—তোমার পড়াশোনাকে সহজ করতে পুরো প্রস্তুত। নিজের লেভেল
              আর প্রয়োজন অনুযায়ী খুঁজে নাও উপযুক্ত মেন্টর। ফ্রি টাইম পেলেই বুক
              করে ফেলো সেশন—কোনো ঝামেলা ছাড়াই। জটিল বিষয়গুলো হবে খুব সহজ, কারণ
              পুরো সাপোর্টটাই পার্সোনাল। একাডেমিক গ্রোথ এখন তোমার হাতে—সঠিক
              মেন্টরের সাথে।
            </p>

            {/* Button */}
            <SuperButton onButtonClick={onButtonClick}>কোর্স</SuperButton>
          </div>
        </div>

        {/* RIGHT SIDE — ACCORDION */}
        <div className="w-full">
          <Accordion />
        </div>
      </div>
    </section>
  );
}
