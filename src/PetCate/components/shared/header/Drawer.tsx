import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import img from "../../../../assets/logo.png";
import { LinkBase } from "../../../../ui/LinkBase";

type DrawerProps = {
  isOpen: boolean;
  toggleDrawer: () => void;
};

export const Drawer = (props: DrawerProps) => {
  const { isOpen, toggleDrawer } = props;

  return (
    <>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed right-0 top-0 h-[100vh] w-[100vw] bg-white/20 backdrop-blur-md hover:cursor-pointer`}
        onClick={toggleDrawer}
      ></div>
      {/* Drawer */}
      <section
        className={`fixed left-0 top-0 z-10 flex h-[100vh] w-[70vw] flex-col transition-transform duration-300 md:hidden ${
          isOpen ? "" : "-translate-x-[100%]"
        }`}
      >
        <div className="bg-dark-50 mb-4 flex items-center justify-center py-8 shadow-md">
          <FaRegArrowAltCircleLeft
            style={{ fontSize: "30px" }}
            onClick={toggleDrawer}
          />
          <Link to="/">
            <img className="px-2 sm:pl-2" src={img} alt="logo" height="150px" />
          </Link>
        </div>
        {/* Links */}
        <nav className="m-4">
          <div className="flex  flex-col gap-4 space-y-2 overflow-y-auto overflow-x-hidden">
            <LinkBase to="/" children="Hogar" onClick={toggleDrawer} />
            <LinkBase to="/" children="Comercio" onClick={toggleDrawer} />
            <LinkBase to="/" children="Categorias" onClick={toggleDrawer} />
            <LinkBase to="/" children="Productos" onClick={toggleDrawer} />
          </div>
        </nav>
      </section>
    </>
  );
};
