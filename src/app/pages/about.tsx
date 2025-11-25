import Image from "next/image";

export const AboutPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full p-10">
      <div className="mb-12 w-full max-w-screen-lg text-left">
        <h1 className="text-4xl font-bold font-mbgrotesk items-start text-white mb-4">
          Sobre mim
        </h1>

        {/* Container Flex: Texto à esquerda, Imagem à direita */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* BLOCO DE TEXTO */}
          <h3 className="text-2xl text-white">
            Sou cientista da computação desde 2024, mas minha jornada no
            desenvolvimento começou muito antes, em 2018. Desde então, venho me
            apaixonando cada vez mais pelo universo da tecnologia. Atuo como
            desenvolvedor full-stack e mobile, com forte afinidade por
            aplicações móveis multiplataformas utilizando React Native e Kotlin
            KMM. No desenvolvimento web, meu foco está em criar soluções
            robustas e escaláveis com tecnologias como Python (Django), Java
            (Spring Boot) e Next.js para o front-end. Acredito que o trabalho em
            equipe é uma das maiores forças da área de tecnologia: compartilhar
            conhecimento, aprender com outras perspectivas e construir soluções
            de forma colaborativa é o que realmente me motiva. Cada projeto é
            uma nova oportunidade de evolução — e eu simplesmente amo fazer isso
            todos os dias.
          </h3>

          {/* BLOCO DA IMAGEM (Alterado) */}
          <div className="md:ml-12 md:mt-0 mt-8 flex-shrink-0">
            <div className="relative w-72 h-[420px] rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="/images/02.jpeg"
                alt="About Us Illustration"
                // Usamos 'fill' para a imagem preencher o container pai
                fill
                priority
                className="object-cover object-center"
                // Ajuda o navegador a carregar o tamanho certo
                sizes="(max-width: 768px) 100vw, 288px"
              />
            </div>
          </div>
        </div>

        {/* LISTA DE ITENS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-6 mt-8">
          <ListItem>
            Experiência em construção de aplicativos móveis multiplataforma com React Native e Kotlin KMM.
          </ListItem>
          <ListItem>
            Desenvolvimento de APIs escaláveis usando Django e Spring Boot.
          </ListItem>
          <ListItem>
            Desenvolvimento front-end moderno com Next.js e boas práticas de UI/UX.
          </ListItem>
          <ListItem>
            Proatividade e autonomia em ambientes dinâmicos.
          </ListItem>
          <ListItem>
            Aplicação de boas práticas como Clean Code, SOLID e versionamento com Git.
          </ListItem>
          <ListItem>
           Trabalho colaborativo, code review, documentação e aprendizado contínuo.
          </ListItem>
        </div>
      </div>
    </div>
  );
};

// Pequeno componente auxiliar para a lista
const ListItem = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-white font-mbgrotesk font-normal text-xl mb-2">
    * {children}
  </h3>
);
