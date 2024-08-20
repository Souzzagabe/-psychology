import React from "react";
import Image from "next/image";

const Content = () => {
  return (
    <div className="bg-[#8686c7] flex flex-col lg:flex-row justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 p-10">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-screen-xl">
        {/* Texto e Botão */}
        <div className="flex flex-col items-start w-full lg:w-[700px] lg:h-[500px] p-4 lg:p-8">
          <h1 className="mt-[60px] font-bold text-[24px] sm:text-[30px] md:text-[35px] lg:text-[40px] italic mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-shadow">
            Precisa de ajuda para enfrentar as dificuldades da vida?
          </h1>
          <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] mb-2 text-shadow">
            Olá sou a <strong>Flávia Rosa</strong>, psicóloga.
          </p>
          <strong className="mb-4 text-[22px] sm:text-[24px] md:text-[26px] lg:text-[26px] text-shadow">
            Vamos Conversar?
          </strong>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 bg-green-500 rounded-xl shadow-lg hover:bg-green-600 transition duration-300 gap-2 text-white text-sm sm:text-base"
          >
            <p>Agende sua primeira consulta</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M12.004 2.003c-5.514 0-9.998 4.484-9.998 9.997 0 1.764.459 3.478 1.333 5.003l-1.396 5.097 5.168-1.358c1.505.822 3.155 1.257 4.875 1.257 5.514 0 9.998-4.484 9.998-9.997 0-5.514-4.484-9.999-9.998-9.999zm0 18.131c-1.55 0-3.032-.402-4.327-1.162l-.307-.174-3.063.81.827-2.986-.199-.308c-.786-1.209-1.199-2.616-1.199-4.034 0-4.253 3.46-7.713 7.713-7.713 4.252 0 7.713 3.46 7.713 7.713.001 4.252-3.46 7.713-7.713 7.713zm4.302-5.544l-1.247-.594c-.165-.079-.349-.125-.53-.125-.258 0-.503.099-.691.282-.316.303-.722.478-1.143.478-.453 0-.868-.158-1.198-.448-.476-.412-.886-.896-1.213-1.435-.233-.377-.402-.806-.498-1.245-.081-.353-.115-.712-.098-1.07.009-.186-.053-.365-.171-.505l-.834-.963c-.255-.295-.607-.459-.985-.459-.137 0-.273.022-.403.066-.386.135-.669.463-.754.867-.232 1.12-.04 2.306.532 3.368.479.906 1.163 1.701 2 2.322.822.609 1.785 1.044 2.8 1.272.27.06.548.09.822.09.916 0 1.782-.289 2.504-.836.335-.253.558-.622.631-1.033.072-.406-.011-.823-.232-1.177-.149-.235-.354-.43-.594-.568z" />
            </svg>
          </a>
        </div>

        {/* Imagem */}
        <div className="flex justify-center items-center w-full lg:w-[500px] lg:h-[500px] mt-6 lg:mt-0">
          <Image
            alt="logo"
            className="filter drop-shadow-[0_0_1rem_rgba(0,0,0,0.8)]"
            src="/fotofl.png"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
