import React from "react";

export const BackgroundArcs = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[800px] overflow-hidden bg-black flex items-end justify-center">
      
      {/* Camada do SVG */}
      <div className="absolute inset-0 w-full h-full z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 800"
          // 'slice' garante que o arco preencha a tela mantendo a proporção, ideal para mobile
          preserveAspectRatio="xMidYMax slice" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ajuste cx (centro X) para metade da viewBox */}
          {/* Ajuste cy (centro Y) para baixo da viewBox para esconder a metade inferior do circulo */}
          
          {/* Arco Externo (Verde Neon) */}
          <circle 
            cx="720" 
            cy="850" 
            r="750" 
            fill="none" 
            stroke="#D9FF4F" 
            strokeWidth="8" 
            className="opacity-90"
          />
          
          {/* Arco Interno (Laranja Coral) */}
          <circle 
            cx="720" 
            cy="850" 
            r="680" 
            fill="none" 
            stroke="#FF8C69" 
            strokeWidth="8" 
            className="opacity-90"
          />
        </svg>
      </div>

      {/* Camada de Texto (Sobreposta) */}
      <div className="relative z-10 text-center pb-12 md:pb-20">
        <p className="text-white font-mbgrotesk text-lg">
          By <span className="font-bold">Matheus Ramos</span>
        </p>
        <p className="text-gray-400 font-mbgrotesk text-sm mt-1">
          Inspired by <span className="text-white font-bold">Jayanta Biswas</span>
        </p>
      </div>
    </div>
  );
};