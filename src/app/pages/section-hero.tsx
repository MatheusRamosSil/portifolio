import { Banner } from "../components/banner";
import { PageSecond } from "./page-second";
import Image from "next/image";

export const SectionHero = () => {
 return (
    <div>
        <Hero />
        <PageSecond />
    </div>
  );
};

export const Hero = () => {
  return (
      <div className="relative w-full h-screen flex flex-col items-center justify-start bg-black">
            <div className="relative w-full max-w-xl"> 
                <ImageBanner />
                <TextBanner />
            </div>
        </div>
  );

}

export const ImageBanner = () => {
  return (
    <div className="relative w-full h-[40vh] md:h-[80vh] overflow-visible bg-black flex items-end justify-center"> 
   <div className="relative 
          w-[55%] h-[85%]        /* Mobile: Imagem ocupa 85% da largura/altura */
          md:w-[80%] md:h-full  /* Desktop: Ajuste fino para ecrãs maiores */
          shadow-2xl z-10"       /* z-10 garante que a imagem respeita a ordem de empilhamento */
      >
        <Image
          src="/images/artprofile.png"
          alt="Iuri Silva"
          fill 
          className="object-cover rounded-xl" 
          sizes="(max-width: 768px) 80vw, 50vw"
          priority
        />
      </div>
    </div>
  );
};

export const TextBanner = () => {
  return (
    // O GRADIENTE DEVE ESTAR NO CONTÊINER ABSOLUTO
    <div className="absolute inset-x-0 bottom-[-120px] md:bottom-[-124px] z-30 text-center flex flex-col justify-end items-center">
      {/* Container de Texto Principal */}
      <div className="bg-gradient-to-t from-black via-black to-transparent rounded-xl">
        <h1
          className="font-mbgrotesk 
                  font-medium text-white 
                  text-4xl sm:text-3xl md:text-9xl 
                  leading-none whitespace-nowrap
                  text-shadow-md"
        >
          Olá, Sou Matheus Ramos.
        </h1>
        <div>
          <p className="font-mbgrotesk
          font-normal text-white 
          text-xl sm:text-xl md:text-6xl">
            Full Stack Developer & Mobile Multiplatforms
          </p>
        </div>
      </div>

      {/* Detalhes e Botão */}
      <div className="text-gray-300 font-mbgrotesk text-sm bg-background sm:text-xl py-3 md:py-4">
        <p>Sou desenvolvedor full stack e mobile há 5 anos</p>
        <p>
          Moro em{" "}
          <span className="underline font-mbgrotesk font-semibold">Tavares - Paraíba - Brasil</span>.
        </p>
      </div>
      <button className="mt-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold text-base hover:bg-yellow-500 transition">
        Fale comigo
      </button>
    </div>
  );
};
