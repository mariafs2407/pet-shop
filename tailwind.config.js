/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        big: "1200px",
      },
      fontFamily: {
        poppins: ["Poppins", "SFMono-Regular"],
      },
      colors: {
        primary: "#7E4C4F",
        secundary: "#ff5559",
      },
      backgroundImage: {
        "fondo-banner1": "url(/background/banner-01.jpg)",
        "fondo-banner2": "url(/background/banner-02.jpg)",
        "fondo-banner3": "url(/background/banner-03.jpg)",
        "fondo-banner4": "url(/background/banner-04.jpg)",
        "fondo-banner5": "url(/background/banner-05.jpg)",
        "fondo-banner6": "url(/background/banner-06.jpg)",
        "fondo-banner7": "url(/background/banner-07.jpg)",
        "fondo-banner8": "url(/background/banner-08.jpg)",
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "disabled"],
  },
  plugins: [],
};
