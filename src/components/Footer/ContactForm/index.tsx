import React from "react";

const ContactForm = () => {
  return (
    <form className="w-full p-4 bg-white rounded-2xl">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Nombre"
        className="w-full px-4 py-2 my-1 border-[1px] border-[#267984] rounded-lg text-[#267984] placeholder-[#267984] placeholder:font-bold focus:border-[#2BE8C0] outline-[#2BE8C0]"
        required
      />
      <input
        type="text"
        name="subject"
        id="subject"
        placeholder="Asunto"
        className="w-full px-4 py-2 my-1 border-[1px] border-[#267984] rounded-lg text-[#267984] placeholder-[#267984] placeholder:font-bold focus:border-[#2BE8C0] outline-[#2BE8C0]"
        required
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Correo Electronico"
        className="w-full px-4 py-2 my-1 border-[1px] border-[#267984] rounded-lg text-[#267984] placeholder-[#267984] placeholder:font-bold focus:border-[#2BE8C0] outline-[#2BE8C0]"
        required
      />
      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder="Teléfono"
        className="w-full px-4 py-2 my-1 border-[1px] border-[#267984] rounded-lg text-[#267984] placeholder-[#267984] placeholder:font-bold focus:border-[#2BE8C0] outline-[#2BE8C0]"
      />
      <textarea
        name="message"
        id="message"
        placeholder="Mensaje"
        className="w-full min-h-[100px] max-h-[200px] resize-y px-4 py-2 my-1 border-[1px] border-[#267984] rounded-lg text-[#267984] placeholder-[#267984] placeholder:font-bold focus:border-[#2BE8C0] outline-[#2BE8C0]"
        required
      ></textarea>
      <button
        type="submit"
        className="w-full py-1 px-4 mt-1 bg-[#2BE8C0] text-[#267984] font-bold rounded-lg"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
