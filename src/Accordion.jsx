import { useState } from "react";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const items = [
    {
      q: "1. পড়াই.com কিভাবে কাজ করে?",
      a: "তুমি নিজের ক্লাস, সাবজেক্ট এবং মেন্টর বেছে নিলেই সেশন বুক করা যাবে।",
    },
    {
      q: "2. কি ধরনের শিক্ষক পাওয়া যায়?",
      a: "SSC, HSC, Science, Commerce, Arts — সব ধরনের স্পেশালাইজড মেন্টর পাওয়া যাবে।",
    },
    {
      q: "3. কিভাবে পেমেন্ট করতে হয়?",
      a: "বিকাশ, নগদ, রকেট — সব পেমেন্ট মেথড সাপোর্টেড।",
    },
    {
      q: "4. সেশন কি লাইভ হবে?",
      a: "হ্যাঁ, 1v1 লাইভ সেশন হবে যেখানে শুধু তুমি আর তোমার মেন্টর থাকবেন।",
    },
    {
      q: "5. ক্লাস মিস করলে কি হবে?",
      a: "আগে জানালে রিশিডিউল করা যাবে।",
    },
  ];

  return (
    <div className="w-full px-4 py-10  text-white flex  justify-center">
      <div className="w-full max-w-lg flex flex-col gap-4">

        {items.map((item, i) => (
          <div
            key={i}
            className="bg-[#111827] border border-white/10 rounded-xl p-4"
          >
            {/* Question */}
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center text-left font-bangla text-sm "
            >
              <span>{item.q}</span>
              <span
                className={`transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === i ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-yellow-500/80 font-bangla leading-relaxed ">
                {item.a}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
