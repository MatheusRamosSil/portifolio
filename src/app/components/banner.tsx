import Image from "next/image";

export const Banner = () => {
return (
     // Contêiner principal: relative e define a altura (60vh, 80vh, screen)
      <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-screen bg-black overflow-hidden">
      
      {/* Elemento de Vídeo */}
      <video
        // As propriedades 'autoPlay', 'loop' e 'muted' são essenciais para vídeos de fundo
        autoPlay
        loop
        muted
        preload="auto"
        // A propriedade 'playsInline' ajuda na reprodução em navegadores móveis
        playsInline 
        // Classe para posicionar e garantir que o vídeo cubra toda a área
        className="absolute inset-0 w-full h-full object-cover"
      >
    
        <source 
        
        src="/videos/banner1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50"></div>
    
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white p-4">
          <h1 className="text-4xl font-bold">Conteúdo sobre o Vídeo</h1>
      </div>
     
    </div>
  );
};
