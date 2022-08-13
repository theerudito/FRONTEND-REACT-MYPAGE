import { IconosApp } from "../Home/Iconos";
import MyPage from "./img/mypage.jpg";
import {
  ContenedorHeader,
  ContenedorIconos,
  ContenedorMenu,
  Liks,
} from "../Home/styles/Styles";
import { NavBarMenu } from "../Menu/NavBarMenu";
import {
  AplicacionesPorfolio,
  ButtonProfolio,
  CardPorfolio,
  ContendorBodyProfolio,
  ContendorTecnologias,
  ContenedorNombreImagenProfolio,
  ContenedorPrincipalCardPorfolio,
  ContenedorPrincipalPorfolio,
  ContenedorTituloPorfolio,
  ImgGitPorfolio,
  ImgPorfolio,
  LiksPorfolio,
  TecnologiasProfolio,
  TituloPorfolio1,
  TituloPorfolio2,
} from "./Styles/Styles";
import { PostProyects } from "./PostPorfolio";
import { Footer } from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPorfolio } from "../../store/slices/edudito/erudito";

export const PagePorfolio = () => {
  const dispach = useDispatch();

  const { porfolio = [] } = useSelector((state) => state.erudito);

  useEffect(() => {
    dispach(getPorfolio(PostProyects));
  }, [dispach]);

  return (
    <>
      <ContenedorHeader>
        <ContenedorMenu>
          <NavBarMenu />
        </ContenedorMenu>

        <ContenedorIconos>
          <IconosApp />
        </ContenedorIconos>
      </ContenedorHeader>
      <hr />

      <ContenedorTituloPorfolio>
        <TituloPorfolio1>My Proyects</TituloPorfolio1>
      </ContenedorTituloPorfolio>

      {/*  */}

      <ContenedorPrincipalPorfolio>
        {/*  */}

        {porfolio.map((posteo) => (
          <ContenedorPrincipalCardPorfolio key={posteo.id}>
            <CardPorfolio>
              <ContenedorNombreImagenProfolio>
                <TituloPorfolio2>{posteo.title}</TituloPorfolio2>
                <LiksPorfolio href={posteo.repro} target="_blanck">
                  <ImgGitPorfolio src={posteo.git} alt="github" />
                </LiksPorfolio>
              </ContenedorNombreImagenProfolio>
              <ContendorBodyProfolio>
                <LiksPorfolio href={posteo.url} target="_blanck">
                  <ImgPorfolio src={posteo.pic} alt="proyect" />
                </LiksPorfolio>

                <ContendorTecnologias>
                  <ButtonProfolio>
                    <LiksPorfolio href={posteo.url} target="_blanck">
                      Go to Proyect
                    </LiksPorfolio>
                  </ButtonProfolio>
                  <AplicacionesPorfolio>
                    <TecnologiasProfolio src={posteo.tec} alt="tec" />
                  </AplicacionesPorfolio>
                </ContendorTecnologias>
              </ContendorBodyProfolio>
            </CardPorfolio>
          </ContenedorPrincipalCardPorfolio>
        ))}

        {/*  */}
      </ContenedorPrincipalPorfolio>

      <Footer />
    </>
  );
};
