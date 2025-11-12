import React, { useState } from "react";
import "./index.css";

import TeacherList from "./TeacherList";
import LiveCourse from "./LiveCourse";

export default function App() {
  const [showComponent, setShowComponent] = useState("a");
  function handleCourse() {
    setShowComponent("a");
  }

  function handleTeacher() {
    setShowComponent("b");
  }

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 to-black text-white font-sans">
        {/* Fixed Header */}
        <header className="fixed top-0 left-0 w-full z-20 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 shadow-md flex justify-between items-center px-4 py-3">
          <p className="text-2xl font-bold text-cyan-400 tracking-tight">
            পড়াই<span className="text-white">.com</span>
          </p>
          <div className="flex gap-2">
            <button onClick={handleCourse} className="btn-glow btn-glow cursor-pointer">
              লাইভ কোর্স
            </button>
            <button onClick={handleTeacher} className="btn-glow btn-glow cursor-pointer">
              শিক্ষক পরিচিতি
            </button>
          </div>
        </header>

        {/* Scrollable Content */}
        {showComponent === "a" && <LiveCourse />}
        {showComponent === "b" && <TeacherList />}

        {/* Fixed Footer */}
        <footer className="fixed bottom-0 left-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-t border-slate-800 text-center py-3 text-xs text-gray-400">
          © 2025 পড়াই.com | Developed by{" "}
          <span className="text-cyan-400 font-semibold">Gazi Fahim</span>
        </footer>
      </div>
    </>
  );
}
