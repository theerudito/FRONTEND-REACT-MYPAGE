import Light from "./img/sun.png";
import Dark from "./img/luna.png";
import { ImagenModos } from "./styles/Styles";

export const ModoLight = () => {
  return <ImagenModos src={Light} alt="light" />;
};

export const ModoDark = () => {
  return <ImagenModos src={Dark} alt="dark" />;
};
