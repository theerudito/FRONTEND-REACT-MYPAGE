import Light from "./img/sun.png";
import Dark from "./img/luna.png";
import { ImagenModos } from "./styles/Styles";
import { useDispatch } from "react-redux";
import { setDark, setLight } from "../../store/slices/edudito/erudito";

export const ModoLight = () => {
  const dispatch = useDispatch();

  const handleClickLight = () => {
    dispatch(setLight("light"));
  };

  return (
    <ImagenModos src={Light} alt="light" onClick={() => handleClickLight()} />
  );
};

export const ModoDark = () => {
  const dispatch = useDispatch();
  const handleClickDark = () => {
    dispatch(setDark("dark"));
  };

  return (
    <ImagenModos src={Dark} alt="dark" onClick={() => handleClickDark()} />
  );
};
