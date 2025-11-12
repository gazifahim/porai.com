import React, { useState } from "react";
import "./index.css";
import bt from "./assets/doordie.jpg";
import sm from "./assets/supermario.jpg";
import ff from "./assets/freefire.jpg";
import faf from "./assets/fastandfurious.jpg";
import sb from "./assets/strikeback.jpg";
import cd from "./assets/callofduty.jpg";
import tr from "./assets/templerun.jpg";
import trd from "./assets/trafficrider.jpg";
import nfs from "./assets/needforspeed.jpg";
import sn from "./assets/sniper.jpg";

export default function App() {
  const [activeBatch, setActiveBatch] = useState("HSC-2026");

  const courses = {
    "HSC-2026": [
      {
        name: "ডু অর ডাই",
        details: "HSC -2026- SCIENCE",
        desc: "সকল বিষয়",
        price: "৭০০০৳",
        img: bt,
      },
      {
        name: "সুপার মারিও",
        details: "HSC -2026- SCIENCE",
        desc: "গ্রুপ সাব্জেক্ট",
        price: "৪৫০০৳",
        img: sm,
      },
      {
        name: "ফ্রি ফায়ার",
        details: "HSC -2026- ALL",
        desc: "বাংলা + ইংরেজি + ICT",
        price: "৩০০০৳",
        img: ff,
      },
    ],
    "SSC-2026": [
      {
        name: "ফাস্ট এন্ড ফিউরিয়াস",
        details: "SSC -2026- SCIENCE",
        desc: "গ্রুপ সাব্জেক্ট + সাধারন গনিত",
        price: "৬০০০৳",
        img: faf,
      },
      {
        name: "স্ট্রাইক ব্যাক",
        details: "SSC -2026- ALL",
        desc: "সাধারন গনিত + বাংলা + ইংরেজী",
        price: "৩৫০০৳",
        img: sb,
      },
    ],
    "HSC-2027": [
      {
        name: "কল অব ডিউটি",
        details: "HSC -2027- SCIENCE",
        desc: "সকল বিষয়",
        price: "৭০০০৳",
        img: cd,
      },
      {
        name: "টেম্পল রান",
        details: "HSC -2027- SCIENCE",
        desc: "গ্রুপ সাব্জেক্ট",
        price: "৪৫০০৳",
        img: tr,
      },
      {
        name: "ট্রাফিক রাইডার",
        details: "HSC -2027- ALL",
        desc: "বাংলা + ইংরেজি + ICT",
        price: "৩০০০৳",
        img: trd,
      },
    ],
    "SSC-2027": [
      {
        name: "নিড ফর স্পিড",
        details: "SSC -2027- SCIENCE",
        desc: "গ্রুপ সাব্জেক্ট + সাধারন গনিত",
        price: "৬০০০৳",
        img: nfs,
      },
      {
        name: "স্নাইপার",
        details: "SSC -2027- ALL",
        desc: "সাধারন গনিত + বাংলা + ইংরেজী",
        price: "৩৫০০৳",
        img: sn,
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 to-black text-white font-sans">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full z-20 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 shadow-md flex justify-between items-center px-4 py-3">
        <p className="text-2xl font-bold text-cyan-400 tracking-tight">
          পড়াই<span className="text-white">.com</span>
        </p>
        <div className="flex gap-2">
          <button className="btn-glow">লাইভ কোর্স</button>
          <button className="btn-glow">শিক্ষক পরিচিতি</button>
        </div>
      </header>

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto px-4 pb-24 pt-20">
        {/* Batch Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {Object.keys(courses).map((batch) => (
            <button
              key={batch}
              onClick={() => setActiveBatch(batch)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeBatch === batch
                  ? "bg-cyan-500 text-black scale-105 shadow-md shadow-cyan-400/40"
                  : "bg-slate-800 hover:bg-slate-700"
              }`}
            >
              {batch}
            </button>
          ))}
        </div>

        {/* Courses Section */}
        <div className="space-y-6">
          <p className="text-xl font-semibold text-cyan-400 mb-2">
            {activeBatch}
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses[activeBatch].map((course, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-slate-800 rounded-2xl shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 overflow-hidden"
              >
                {/* Image with gradient overlay */}
                <div className="relative w-full h-40 overflow-hidden">
                  <img
                    src={course.img}
                    alt={course.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-4 flex-1">
                  <div>
                    <p className="text-lg font-bold text-cyan-200 ">
                      কোর্স কোড : {course.name}
                    </p>
                    <p className="text-lg opacity-90">{course.details}</p>
                    <p className="text-sm opacity-90 text-yellow-500">{course.desc}</p>
                  </div>
                  <div className="mt-3 text-cyan-400 font-semibold text-right">
                    {course.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Fixed Footer */}
      <footer className="fixed bottom-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-t border-slate-800 text-center py-3 text-xs text-gray-400">
        © 2025 পড়াই.com | Developed by {" "}
        <span className="text-cyan-400 font-semibold">Gazi Fahim</span>
      </footer>
    </div>
  );
}
