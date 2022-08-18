import { ContenedorHeader, ContenedorMenu, HR } from "../Home/styles/Styles";
import { NavBarMenu } from "../Menu/NavBarMenu";
import {
  ContenedorBodyPortafolio,
  ContenedorImagenPortafolio,
  ContenedorPrincipalCardPorfolio,
  ContenedorPrincipalPorfolio,
  ContenedorTituloPorfolio,
  ImagenPortafolio,
  TitlePortafolio,
  ImageGitGub,
  ContenedorTitleYGitHub,
  ContenedorInfoPortafolio,
  TitleBodyPortafolio,
  ButtonBodyPortafolio,
  ImageBodyPortafolio,
  ContenedorBodyTechologies,
  LiksProyects,
  ContenedorCardPortafolio,
  TituloPortafolio,
} from "./Styles/Styles";
import { PostProyects } from "./PostPorfolio";
import { Footer } from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPorfolio } from "../../store/slices/edudito/erudito";
import { SPANISH } from "../Languages/ES";
import { ENGLISH } from "../Languages/EN";

export const PagePorfolio = () => {
  const dispach = useDispatch();

  const { porfolio = [] } = useSelector((state) => state.erudito);
  const languages = localStorage.getItem("language");
  const theme = localStorage.getItem("theme");
  useEffect(() => {
    dispach(getPorfolio(PostProyects));
  }, [dispach]);

  return (
    <>
      <ContenedorHeader>
        <ContenedorMenu>
          <NavBarMenu />
        </ContenedorMenu>
      </ContenedorHeader>
      <HR theme={theme} />

      <ContenedorTituloPorfolio>
        {languages === "ES" ? (
          <TituloPortafolio theme={theme}>{SPANISH.portfolio.title} </TituloPortafolio>
        ) : (
          <TituloPortafolio theme={theme}>{ENGLISH.portfolio.title} </TituloPortafolio>
        )}
      </ContenedorTituloPorfolio>
      <ContenedorPrincipalPorfolio>
        {porfolio.map((item) => (
          <ContenedorCardPortafolio key={item.id}>
            <ContenedorPrincipalCardPorfolio>
              <ContenedorImagenPortafolio>
                <LiksProyects href={item.url} target="_blank">
                  <ImagenPortafolio src={item.pic} alt="pic" />
                </LiksProyects>
              </ContenedorImagenPortafolio>
            </ContenedorPrincipalCardPorfolio>

            <ContenedorBodyPortafolio>
              <ContenedorTitleYGitHub style={{ display: "flex" }}>
                <TitlePortafolio>{item.title} </TitlePortafolio>
                <LiksProyects href={item.repro} target="_blank">
                  <ImageGitGub
                    src="https://firebasestorage.googleapis.com/v0/b/imagenes-cd065.appspot.com/o/tecnologias%2Fgithub-original.svg?alt=media&token=3e01a60a-7b89-40ff-aa84-1d1af4e704c7"
                    alt="nombre"
                  />
                </LiksProyects>
              </ContenedorTitleYGitHub>
              <ContenedorInfoPortafolio>
                <LiksProyects href={item.url} target="_blank">
                  <ButtonBodyPortafolio>
                    {languages === "ES"
                      ? SPANISH.portfolio.go
                      : ENGLISH.portfolio.go}{" "}
                  </ButtonBodyPortafolio>
                </LiksProyects>

                <TitleBodyPortafolio>
                  {languages === "ES"
                    ? SPANISH.portfolio.tec
                    : ENGLISH.portfolio.tec}{" "}
                </TitleBodyPortafolio>
              </ContenedorInfoPortafolio>
              <ContenedorBodyTechologies>
                <ImageBodyPortafolio src={item.tec} alt="nombre" />
              </ContenedorBodyTechologies>
            </ContenedorBodyPortafolio>
          </ContenedorCardPortafolio>
        ))}
      </ContenedorPrincipalPorfolio>
      <Footer />
    </>
  );
};
