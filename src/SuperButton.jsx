export default function SuperButton({onButtonClick,children }) {
  return (
    <button
    onClick={onButtonClick}
      className="
        super-btn
        relative inline-flex items-center justify-center gap-3
        px-5 py-2
        rounded-full
        text-white font-medium text-base tracking-wide
        border-2 border-white/20
        bg-gradient-to-br from-[#0f0f0f] to-[#1c1c1c]
        shadow-[0_0_20px_rgba(0,255,255,0.1)]
        backdrop-blur-md
        overflow-hidden
        transition-all duration-300
        hover:scale-105 hover:shadow-[0_0_40px_rgba(0,255,255,0.2)]
      "
    >
      {children}
      <svg
        className="w-5 h-5 text-cyan-400 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
      </svg>
    </button>
  );
}
