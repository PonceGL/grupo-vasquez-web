import React, { FC } from "react";

// hooks
import { useWindowScroll } from "../../hooks/useWindowScroll";

const FirstText: FC = () => {
  const [scroll] = useWindowScroll();

  return (
    <p
      style={{
        transform: `translateY(-${(scroll / 8).toFixed(2)}px)`,
      }}
      className="p-8 text-neutral-300 text-xl leading-7 transition-bezier duration-150"
    >
      Con 24 años de experiencia en la compra-venta de Material para
      Construcción de Obra Negra, Acabados, Iluminación, manejando los mejores
      productos del país, logrando distribuir a todo el estado de Veracruz. Con
      los mejores Productos de los Mejores Proveedores.
    </p>
  );
};

export default FirstText;
