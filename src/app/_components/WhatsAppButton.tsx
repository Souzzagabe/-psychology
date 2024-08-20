// components/WhatsAppButton.js
import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/55YOURPHONENUMBER" // Substitua pelo seu número de telefone
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // URL do ícone do WhatsApp
        alt="WhatsApp"
        className="w-16 h-16 rounded-full bg-green-500 p-3 shadow-xl"
      />
    </a>
  );
};

export default WhatsAppButton;
