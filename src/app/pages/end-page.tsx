import React from "react";

export const EndPage = () => {
   return (
    <div className="relative w-full md:h-[600px] h-[500px] overflow-hidden bg-black flex items-end justify-center">

      {/* Camada do SVG */}
      <div className="absolute inset-0 w-full h-full z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 800"
          preserveAspectRatio="xMidYMax slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Arco Externo (Verde Neon) */}
          <circle
            cx="720"
            cy="950"
            r="650"
            fill="none"
            stroke="#D9FF4F"
            strokeWidth="8"
            className="opacity-90"
          />

          {/* Arco Interno (Laranja Coral) */}
          <circle
            cx="720"
            cy="950"
            r="580"
            fill="none"
            stroke="#FF8C69"
            strokeWidth="8"
            className="opacity-90"
          />
        </svg>
      </div>

      {/* Camada de Texto (Sobreposta) */}
      <div className="relative z-10 text-center mb-24 md:mb-40 px-4">
        <p className="text-white text-lg md:text-xl font-mbgrotesk">
          By <span className="font-bold">Matheus Ramos</span>
        </p>
     <p className="text-gray-400 text-sm md:text-base mt-2 font-mbgrotesk">
          Inspired by{" "}
          <a 
            href="https://www.behance.net/gallery/181411305/Portfolio-Website-Design"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold hover:underline transition-all hover:text-yellow-400"
          >
            Portfolio Website Design
          </a>
        </p>
      </div>
    </div>
  );
};