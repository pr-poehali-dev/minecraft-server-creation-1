import React from "react";

export default function MiniLogo() {
  return (
    <div className="relative">
      <style jsx>{`
        @keyframes rainbow-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .mini-logo-text {
          background: linear-gradient(
            45deg,
            #ff0000,
            #ff7f00,
            #ffff00,
            #00ff00,
            #0000ff,
            #4b0082,
            #9400d3,
            #ff1493,
            #00ced1,
            #ff6347,
            #32cd32,
            #ff0000
          );
          background-size: 800% 800%;
          animation: rainbow-flow 10s ease-in-out infinite;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-black/20 backdrop-blur-md border border-white/10">
        <span className="text-2xl font-heading font-bold mini-logo-text drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
          HC
        </span>
      </div>
    </div>
  );
}
