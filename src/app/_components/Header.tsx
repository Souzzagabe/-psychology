import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-orange-100 w-full flex justify-center items-center text-sm shadow-lg">
      <div className="w-full flex justify-center items-center md:w-[1200px] md:justify-start">
        <Image
          alt="logo"
          src="/flv4log.png"
          width={160}
          height={100}
          className="filter drop-shadow-[0_0_0.1rem_rgba(0,0,0,0.3)]"
        />
      </div>
    </header>
  );
};

export default Header;
