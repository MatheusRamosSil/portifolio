import Image from "next/image";

interface TagData {
  name: string;
  iconPath: string; // O caminho (path) para o ícone
}

interface SquareComponenteProps {
  text: string;
  icon: string;
  tags: TagData[]; 
}

export const SquareComponente = ({ text, icon, tags }: SquareComponenteProps) => {
  return (
    <div className="
      /* 1. Tamanho */
      w-full max-w-sm md:w-80 h-96

      /* 2. Efeito e Borda */
      bg-black/20 backdrop-blur-md border border-white/10
      flex flex-col justify-between items-start px-8 py-10 relative rounded-3xl 
      
    ">
      
      {/* Container Superior (Icone e Tags) */}
     <div className="flex flex-col items-start w-full">
        {/* 1. Icone */}
        <Image
          src={icon}
          alt="Descrição da imagem"
          width={40}
          height={40}
        />
        
        {/* 2. Container para as Tags */}
        <div className="flex flex-wrap gap-2 mt-4"> 
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="
                text-white text-l 
                border border-white/50
                rounded-full                 
                px-3 py-2                   
                font-medium
                flex items-center gap-1  /* Adicionado flex e items-center para alinhar o ícone e o texto */
              "
            >
              <Image 
                src={tag.iconPath} // Usando o caminho do ícone
                alt={tag.name} 
                width={45} // Tamanho pequeno para o ícone dentro da tag
                height={40} 
                className="w-5 h-5" // Garantir o tamanho
              />
              {tag.name}
            </span>
          ))}
        </div>
      </div>
      
      {/* Título (Posicionado na parte inferior) */}
      <div className="text-white font-mbgrotesk text-3xl w-full text-left">
        {text}
      </div>
    </div>
  );
};