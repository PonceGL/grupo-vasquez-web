import React, { FC } from "react";

// hooks
// import { useWindowScroll } from "../../hooks/useWindowScroll";

const FirstText: FC = () => {
  // const [scroll] = useWindowScroll();

  return (
    <p
      // style={{
      //   transform: `translateY(-${(scroll / 8).toFixed(2)}px)`,
      // }}
      className="p-8 text-sky-800 text-xl leading-7 transition-bezier duration-150"
    >
      <strong>Con 24 años de experiencia</strong> en la compra-venta de{" "}
      <strong>Material para Construcción</strong> de Obra Negra, Acabados,
      Iluminación, manejando los mejores productos del país, logrando distribuir
      a todo el estado de <strong>Veracruz</strong>. Con los mejores Productos
      de los Mejores Proveedores.
    </p>
  );
};

export default FirstText;