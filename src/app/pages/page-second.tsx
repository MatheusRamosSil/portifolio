import { SquareComponente } from "../components/square";
import Image from "next/image";

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
           <SquareComponente 
                text={"Front-end Development"} 
                icon={"/images/front.png"} 
               tags={[
                    { name: "Next.js", iconPath: "/icons/nextjs.png" }, // <--- Novo formato
                    { name: "HTML", iconPath: "/icons/html.svg" },
                    { name: "CSS", iconPath: "/icons/css.svg" } // <--- Novo formato
                ]}
            />
          <div className="
                relative 
                w-[calc(100%+2rem)] -mx-4 h-40 
                -my-16 
                z-0                  
                md:hidden 
                opacity-50           
                pointer-events-none
            ">
                <Image 
                    src="/wave.svg" 
                    alt="wave separator" 
                    fill 
                    className="object-cover rotate-180"
                />
            </div>
            <SquareComponente 
                text={"Back-end Development"} 
                icon={"/images/back.png"} 
                 tags={[
                    { name: "Java", iconPath: "/icons/java.svg" }, // <--- Novo formato
                    { name: "Python", iconPath: "/icons/python.svg" } // <--- Novo formato
                ]}
            />
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
            <SquareComponente 
                text={"Mobile Development"} 
                icon={"/images/mobile.png"} 
                 tags={[
                    { name: "Kotlin", iconPath: "/icons/kotlin.svg" }, // <--- Novo formato
                    { name: "React Native", iconPath: "/icons/react.svg" } // <--- Novo formato
                ]}
            />
        </div>
    );
}

