import React from "react";
import { Cards } from "../components/home/cards/Cards";
import { ButtonBase } from "../../ui/ButtonBase";
import { Advert } from "../components/home/Advert";

export const HomeView = () => {
  const bannerData = [
    {
      textTit: "Comida diaria para mascotas",
      textSecund: "Pollo Almo Natura",
      textThrid: "DE S/ 20.00",
      backgroundImg: "bg-fondo-banner1",
    },
    {
      textTit: "Cara a cara por cruz",
      textSecund: "Arnés para perros",
      textThrid: "DE 35% DE DESCUENTO",
      backgroundImg: "bg-fondo-banner2",
    },
    {
      textTit: "Fresco Saludable",
      textSecund: "Comida para perros Libertad",
      textThrid: "DE S/ 20.00",
      backgroundImg: "bg-fondo-banner3",
    },
  ];

  const banner2Data = [
    {
      textTit: "Pedigrí Adulto",
      textSecund: "Comida seca para perros y pollo",
      textThrid: "DE S/ 20.00",
      backgroundImg: "bg-fondo-banner4",
    },
    {
      textTit: "Comida sin cereales",
      textSecund: "Arnés para perros",
      textThrid: "Ahorre HASTA 35% DE DESCUENTO",
      backgroundImg: "bg-fondo-banner5",
    },
  ];

  const banner3Data = [
    {
      textTit: "Equilibrio natural",
      textSecund: "Comida para mascotas",
      textThrid: "DE S/ 20.00",
      backgroundImg: "bg-fondo-banner6",
    },
    {
      textTit: "Comida para mascotas",
      textSecund: "Fresco y saludable",
      textThrid: "DE 25% DE DESCUENTO",
      backgroundImg: "bg-fondo-banner7",
    },
    {
      textTit: "Pollo cocinado",
      textSecund: "Alimentos para perros",
      textThrid: "DE S/ 30.00",
      backgroundImg: "bg-fondo-banner8",
    },
  ];

  return (
    <div>
      <Cards data={bannerData}>
        <ButtonBase
          background="bg-white"
          textColor="text-black"
          hoverBackground="#ff5559"
          hoverTextColor="text-white"
          children="COMPRA AHORA"
        />
      </Cards>

      <Cards data={banner2Data} w="md:w-[70%] " h="md:h-[170px]">
        <ButtonBase
          background="bg-white"
          textColor="text-black"
          hoverBackground="#ff5559"
          hoverTextColor="text-white"
          children="COMPRA AHORA"
        />
      </Cards>

      <Advert />

      <Cards data={banner3Data} h="md:h-[170px]" align="right">
        <ButtonBase
          background="bg-white"
          textColor="text-black"
          hoverBackground="#ff5559"
          hoverTextColor="text-white"
          children="COMPRA AHORA"
        />
      </Cards>
    </div>
  );
};
