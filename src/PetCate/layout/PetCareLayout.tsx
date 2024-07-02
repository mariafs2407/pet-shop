import React from "react";
import { Header } from "../components/shared/header/Header";
import { Footer } from "../components/shared/footer/Footer";

type PetCareProps = {
  children?: React.ReactNode;
};
export const PetCareLayout = (props: PetCareProps) => {
  const { children } = props;

  return (
    <div className="flex flex-col font-poppins text-black">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
