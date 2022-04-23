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
import { Skills } from "../Home/Skills";
import { PostProyects, Tecnologias2 } from "./PostPorfolio";
import { Footer } from "../Footer/Footer";
import { useState } from "react";

export const PagePorfolio = () => {
  const [post, setPost] = useState(PostProyects);

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

        {post.map((posteo) => (
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
