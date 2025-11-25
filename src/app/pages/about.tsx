import Image from "next/image";

export const AboutPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full p-10">
      <div className="mb-12 w-full max-w-screen-lg text-left">
        <h1 className="text-4xl font-bold font-mbgrotesk items-start text-white mb-4">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <h3 className="text-2xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
            vehicula nibh, in consequat turpis. Duis lectus urna, varius a urna
            quis, consectetur consectetur ipsum. Donec sodales rutrum massa sit
            amet maximus. Vestibulum tristique libero in orci tempor rutrum.
            Vivamus mattis tellus nec ipsum lobortis interdum. Praesent sit amet
            blandit leo. Praesent aliquet massa non dolor dapibus, id fringilla
            sapien vulputate. Praesent eu aliquet ante. Etiam a lorem sodales
            mauris suscipit malesuada vitae sed quam. Duis maximus odio turpis,
            quis ultrices augue elementum eget. Nulla tortor lectus, venenatis
            sit amet leo sit amet, condimentum facilisis lorem. Donec ut ligula
            arcu. Donec nec tortor vel mauris sodales volutpat nec a diam.
            Praesent pretium metus in sem malesuada, id aliquet odio malesuada.
            Maecenas eu posuere lacus. Cras ex augue, dapibus eu sollicitudin
            ut, consequat nec augue.
          </h3>
          <Image
            src="/images/arthur.webp"
            alt="About Us Illustration"
            width={180}
            height={100}
            className="md:ml-12 rounded-full border-4 
                    border-white 
                    w-64 h-94 
                    md:mt-0 mt-8 flex-shrink-0"
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-6 mt-8">
          <ListItem>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ListItem>
          <ListItem>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ListItem>
          <ListItem>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ListItem>
          <ListItem>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ListItem>
          <ListItem>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ListItem>
          <ListItem>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </ListItem>
        </div>
      </div>
    </div>
  );
};

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-white font-mbgrotesk font-normal text-xl mb-2">
    * {children}
  </h3>
);
