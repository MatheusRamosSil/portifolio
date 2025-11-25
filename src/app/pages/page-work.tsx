interface BackgroundImageWithOverlayProps {
  uri: string;
  Title:string; 
  description:string;
}

export const PageWorks = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-full max-w-screen-lg p-12">
        
        <div className="flex flex-col md:flex-row items-start mb-12">
          <div className="text-white font-sans mt-2 md:mt-4 md:mr-4  tracking-widest text-sm">
            Trabalhos
          </div>
          <h1 className="text-white font-mbgrotesk font-medium text-4xl md:text-6xl">
            <span>Meus melhores</span>
            <br />
            <span>trabalhos</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <BackgroundImageWithOverlay
            uri={
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmDxq6JI_2BcKJktNvCc4SMLK2YpqUuwqAbAnZNqThNcyr_FCo"
            }
            Title={"Paint hourse"}
            description={"Is a beautiful hourse"}
          />
          <BackgroundImageWithOverlay
            uri={
              "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSmDxq6JI_2BcKJktNvCc4SMLK2YpqUuwqAbAnZNqThNcyr_FCo"
            }
            Title={"Paint hourse"}
            description={"Is a beautiful hourse"}
          />
        </div>
      </div>
    </div>
  );
};



export const BackgroundImageWithOverlay = ({ uri,Title, description }:BackgroundImageWithOverlayProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
       className="
            w-full h-80 
            bg-cover bg-center 
            rounded-lg shadow-lg
            
            /* ANIMAÇÃO SUAVE */
            transition-all duration-500 ease-in-out
            
            /* ESTADO PADRÃO: CINZA */
            filter grayscale
            
            /* INTERAÇÃO (DESKTOP E MOBILE) */
            /* hover: Desktop (mouse) e Mobile (toque rápido) */
            hover:filter-none 
            
            /* active: Mobile (enquanto o dedo pressiona o ecrã) */
            active:filter-none
            
            /* focus: Garante que se clicar, mantém a cor */
            focus:filter-none
        "
        style={{ backgroundImage: `url('${uri}')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-white opacity-30"></div>
        <div className="relative z-10 text-white flex items-center justify-center h-full">

          
        </div>
      </div>
      <h4 className="text-white font-mbgrotesk font-medium text-2xl mt-4">
        {Title}
      </h4>
      <div className="text-white mr-4 font-thin">{description}</div>
    </div>
  );
};
