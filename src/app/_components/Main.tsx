import Image from "next/image";

const Main = () => {
  return (
    <div className="h-auto bg-orange-100 flex justify-center">
      <div className="w-[1200px] flex flex-col">
        <div className="w-full max-w-[1200px] px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-shadow italic mt-12 sm:mt-16 md:mt-20 font-semibold text-[#8686c7] text-center mb-6 sm:mb-8">
            Entenda as vantagens da terapia on-line
          </h2>
        </div>

        <div className="flex justify-center p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-[1200px]">
            <div className="max-w-[450px] w-full bg-white shadow-lg rounded-lg border border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="bg-blue-500 text-white text-center text-lg sm:text-xl font-bold p-3 rounded-t-lg flex items-center justify-center">
                <span className="text-3xl sm:text-4xl rotate-12">🌟</span>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-gray-600 text-sm sm:text-base">
                  <strong>Mantém o distanciamento:</strong> Promover essa
                  metodologia de atendimento a distância representa vantagens em
                  diferentes aspectos. Além de auxiliar na recuperação da
                  estabilidade emocional, a terapia online também contribui com
                  os protocolos de segurança nesses tempos de crise sanitária.
                </p>
              </div>
            </div>

            <div className="max-w-[450px] w-full bg-white shadow-lg rounded-lg border border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="bg-blue-500 text-white text-center text-lg sm:text-xl font-bold p-3 rounded-t-lg flex items-center justify-center">
                <span className="text-3xl sm:text-4xl rotate-12">💬</span>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-gray-600 text-sm sm:text-base">
                  <strong>Oferece maior flexibilidade:</strong> Bastante
                  acessível e prática, os pacientes têm a oportunidade de
                  conversar com a psicóloga na segurança e no conforto de suas
                  casas. É possível agendar as consultas ou sessões de terapia
                  para os dias e horários mais adequados à rotina. Para
                  facilitar a adesão aos serviços, meus atendimentos acontecem
                  também à noite, fora do horário comercial.
                </p>
              </div>
            </div>

            <div className="max-w-[450px] w-full bg-white shadow-lg rounded-lg border border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="bg-blue-500 text-white text-center text-lg sm:text-xl font-bold p-3 rounded-t-lg flex items-center justify-center">
                <span className="text-3xl sm:text-4xl rotate-12">💡</span>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-gray-600 text-sm sm:text-base">
                  <strong>Garante o apoio emocional:</strong> Um dos benefícios
                  da terapia online é minimizar os impactos gerados pela
                  pandemia sobre a saúde emocional. Nessa fase, houve muitas
                  perdas econômicas, conflitos familiares e desajustes afetivos
                  que abalaram o estado psicológico. Contextualmente, o
                  atendimento virtual se destacou como um importante suporte
                  para promover a reabilitação mental.
                </p>
              </div>
            </div>

            <div className="max-w-[450px] w-full bg-white shadow-lg rounded-lg border border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="bg-blue-500 text-white text-center text-lg sm:text-xl font-bold p-3 rounded-t-lg flex items-center justify-center">
                <span className="text-3xl sm:text-4xl rotate-12">🌍</span>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-gray-600 text-sm sm:text-base">
                  <strong>Minimizar a distância: </strong>Poder contar com o
                  serviço de psicologia à distância favorece as pessoas que
                  moram em regiões isoladas, sobretudo aquelas que não teriam
                  como se deslocar até os locais de atendimento presencial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
