import Image from "next/image";

interface SquareComponenteProps {
  text: string;
  icon: string;
}

export const PageSecond = () => {
    return (
        <div className="relative flex flex-col
                        md:flex-row justify-center 
                        items-center w-full px-4 
                        gap-8 pb-20 pt-10 md:py-40
                        -mt-95 md:mt-0
                        z-20
                        ">
            
            <img
                className=" hidden md:block absolute bottom-0 w-full h-auto -z-10 object-cover" // object-cover ajuda a imagem a não distorcer
                src="/wave.svg"
                alt="Descrição do SVG"
            />
            <SquareComponente text={"Front-end Development"} icon={"/images/front.png"} />
          <div className="
                relative 
                w-[calc(100%+2rem)] -mx-4 h-40 
                -my-16 
                z-0                  /* Z-0 garante que fica ABAIXO do card (que será z-30) */
                md:hidden 
                opacity-50           /* Opacidade ajustada para efeito suave */
                pointer-events-none
            ">
                <Image 
                    src="/wave.svg" 
                    alt="wave separator" 
                    fill 
                    className="object-cover rotate-180"
                />
            </div>
            <SquareComponente text={"Back-end Development"} icon={"/images/back.png"} />
          <div className="
                relative 
                w-[calc(100%+2rem)] -mx-4 h-40 
                -my-16 
                z-0                  /* Z-0 garante que fica atrás */
                md:hidden 
                opacity-50 
                pointer-events-none
            ">
                <Image 
                    src="/wave.svg" 
                    alt="wave separator" 
                    fill 
                    className="object-cover"
                />
            </div>
            <SquareComponente text={"Mobile Development"} icon={"/images/mobile.png"} />
        </div>
    );
}

const SquareComponente = ({ text, icon }: SquareComponenteProps) => {
  return (
    <div className="
      /* 1. Tamanho */
      w-full max-w-sm md:w-80 h-96

      /* 2. O Segredo do Efeito 
      bg-black/20               /* Fundo preto com APENAS 20% de opacidade (bem transparente) */
      backdrop-blur-md          /* Aplica o desfoque na linha amarela que passa por trás */
      border border-white/10    /* Borda fina e quase transparente para delimitar o card */
      
      /* 3. Layout e Interação */
      flex flex-col justify-end items-start px-8 relative rounded-3xl 
      
    ">
      <Image
        src={icon}
        alt="Descrição da imagem"
        width={40}
        height={40}
        className="absolute top-10 left-8"
      />
      <div className="text-white font-mbgrotesk text-3xl mb-12 w-full text-left">
        {text}
      </div>
    </div>
  );
};