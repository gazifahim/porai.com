import Accordion from "./Accordion";
import SuperButton from "./SuperButton";
import heropic from "./assets/heropic.jpg";

export default function Hero({ onButtonClick }) {
  return (
    <section className="w-full px-4 py-16  flex  justify-center ">
      {/* Wrapper to handle left/right layout */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-2">
        {/* LEFT SIDE — HERO */}
        <div className="w-full flex flex-col justify-center">
          <div
            className="w-full from-cyan-900 via-blue-900 to-indigo-950


 border border-white/5 rounded-2xl p-6 md:p-8 shadow-[0_0_30px_rgba(0,0,0,0.35)] text-center flex flex-col items-center gap-2"
          >
            <img
              src={heropic}
              alt="animated-pic"
              className="w-full object-cover transition-transform duration-300 hover:scale-105 relative  h-70 overflow-hidden"
            />
            {/* Text */}

            <p className="text-white/70 font-bangla text-sm md:text-sm leading-relaxed text-center">
              SSC & HSC শিক্ষার্থীদের জন্য দেশের প্রথম 1v1 হোম টিউটরিং
              প্ল্যাটফর্ম <br />তোমার পড়াশোনাকে সহজ করতে পুরো প্রস্তুত।
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
