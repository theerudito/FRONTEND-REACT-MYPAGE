const Pantallas = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const Dispositivos = {
  mobileS: `(min-width: ${Pantallas.mobileS})`,
  mobileM: `(min-width: ${Pantallas.mobileM})`,
  mobileL: `(min-width: ${Pantallas.mobileL})`,
  tablet: `(min-width: ${Pantallas.tablet})`,
  laptop: `(min-width: ${Pantallas.laptop})`,
  laptopL: `(min-width: ${Pantallas.laptopL})`,
  desktop: `(min-width: ${Pantallas.desktop})`,
};
