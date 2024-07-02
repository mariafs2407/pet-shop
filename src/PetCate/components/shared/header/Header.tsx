import React, { useState } from "react";
import img from "../../../../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { Drawer } from "./Drawer";
import { LinkBase } from "../../../../ui/LinkBase";

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="fixed top-0 z-40 w-full bg-white">
      <div className=" mx-auto flex flex-row  justify-center md:justify-between max-w-screen-big items-center gap-4 p-2">
        <button
          className="flex items-center justify-center md:hidden"
          onClick={toggleDrawer}
        >
          <GiHamburgerMenu className="icon" />
        </button>
        {/* logo */}
        <div>
          <img src={img} alt="logo" className="w-[150px]" />
        </div>
        {/* links */}
        <div className="hidden  md:flex gap-2">
          <LinkBase to="/" children="Hogar" />
          <LinkBase to="/" children="Comercio" />
          <LinkBase to="/" children="Categorias" />
          <LinkBase to="/" children="Productos" />
        </div>
        <button>
          <FaUser className="icon" />
        </button>
        <button>
          <HiMiniShoppingBag className="icon" />
        </button>

        {/* Drawer */}
        <Drawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      </div>
    </header>
  );
};
