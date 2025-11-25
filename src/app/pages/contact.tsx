import Image from "next/image";

export const ContactPage = () => {
  return (
    // Container Principal da Página
    <div className="flex justify-center items-center w-full min-h-screen p-10 bg-backcontact text-white">
      
      {/* GRID: Em mobile é 1 coluna, em telas grandes (lg) são 2 colunas */}
      <div className="w-full max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* --- LADO ESQUERDO: Textos e Contatos --- */}
        {/* 'flex flex-col justify-between h-full' faz os contatos irem para baixo */}
        <div className="flex flex-col justify-between h-full min-h-[500px]">
          
          {/* Títulos */}
          <div>
            <h1 className="font-mbgrotesk font-medium text-5xl md:text-6xl leading-tight">
              Tem um projeto?
            </h1>
            {/* Ajuste a cor 'text-button' conforme sua configuração do Tailwind, ou use text-green-400 para testar */}
            <h1 className="text-button font-mbgrotesk font-medium text-5xl md:text-6xl leading-tight">
              Vamos conversar!
            </h1>
          </div>

          {/* Contatos (Alinhados na vertical e à esquerda) */}
          <div className="flex flex-col gap-6 mt-12 lg:mt-0">
            {/* Email */}
            <div className="flex items-center gap-4">
              <Image
                src="/images/o-email.png" // Confirme se o ícone é branco/transparente
                alt="Email Icon"
                width={30}
                height={30}
                className="object-contain"
              />
              <a href="mailto:mjrsilva2000@gmail.com" className="font-mbgrotesk text-lg md:text-xl hover:underline underline-offset-4">
              mjrsilva2000@gmail.com
              </a>
            </div>

            {/* Telefone */}
            <div className="flex items-center gap-4">
              <Image
                src="/images/telefone.png"
                alt="Telefone Icon"
                width={30}
                height={30}
                className="object-contain"
              />
              <a href="tel:+5587999690335" className="font-mbgrotesk text-lg md:text-xl hover:underline underline-offset-4">
                +55 87 99969-0335
              </a>
            </div>
          </div>
        </div>

        {/* --- LADO DIREITO: Formulário --- */}
        <div className="bg-[#0f172a] p-8 md:p-12 rounded-lg shadow-2xl w-full">
          <h2 className="text-white font-mbgrotesk text-xl mb-6">
            Estou interessado em...
          </h2>

          <form className="flex flex-col gap-6">
            {/* Input Nome */}
            <div className="flex flex-col">
              <input 
                type="text" 
                placeholder="Seu nome" 
                className="bg-transparent border border-gray-500 text-white placeholder-gray-300 rounded-lg p-4 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            {/* Input Email */}
            <div className="flex flex-col">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-transparent border border-gray-500 text-white placeholder-gray-300 rounded-lg p-4 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            {/* Textarea Mensagem */}
            <div className="flex flex-col">
              <textarea 
                placeholder="Mensagem" 
                rows={4}
                className="bg-transparent border border-gray-500 text-white placeholder-gray-300 rounded-lg p-4 resize-none focus:outline-none focus:border-white transition-colors"
              />
            </div>

            {/* Botão Enviar */}
            <button 
              type="submit"
              className="bg-white text-black font-bold py-3 px-10 rounded-lg w-fit mt-2 hover:bg-gray-200 transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};