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
import { PostProyects, Tecnologias } from "./PostPorfolio";
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

        <ContenedorPrincipalCardPorfolio>
          <CardPorfolio>
            <ContenedorNombreImagenProfolio>
              <TituloPorfolio2>{PostProyects[0].title}</TituloPorfolio2>
              <LiksPorfolio href={PostProyects[0].repro} target="_blanck">
                <ImgGitPorfolio src={Skills.github} alt="github" />
              </LiksPorfolio>
            </ContenedorNombreImagenProfolio>
            <ContendorBodyProfolio>
              <LiksPorfolio href={PostProyects[0].url} target="_blanck">
                <ImgPorfolio src={PostProyects[0].pic} alt="proyect" />
              </LiksPorfolio>

              <ContendorTecnologias>
                <ButtonProfolio>
                  <LiksPorfolio href={PostProyects[0].url} target="_blanck">
                    Go to Proyect
                  </LiksPorfolio>
                </ButtonProfolio>
                <AplicacionesPorfolio>
                  <TecnologiasProfolio
                    src={Tecnologias.tecnologias.react}
                    alt="app1"
                  />
                  <TecnologiasProfolio
                    src={Tecnologias.tecnologias.css}
                    alt="app1"
                  />
                  <TecnologiasProfolio
                    src={Tecnologias.tecnologias.bootstrap}
                    alt="app1"
                  />
                </AplicacionesPorfolio>
              </ContendorTecnologias>
            </ContendorBodyProfolio>
          </CardPorfolio>
        </ContenedorPrincipalCardPorfolio>

        {/*  */}

        <ContenedorPrincipalCardPorfolio>
          <CardPorfolio>
            <ContenedorNombreImagenProfolio>
              <TituloPorfolio2>{PostProyects[4].title}</TituloPorfolio2>
              <LiksPorfolio href={PostProyects[4].repro} target="_blanck">
                <ImgGitPorfolio src={Skills.github} alt="github" />
              </LiksPorfolio>
            </ContenedorNombreImagenProfolio>
            <ContendorBodyProfolio>
              <LiksPorfolio href={PostProyects[4].url} target="_blanck">
                <ImgPorfolio src={MyPage} alt="proyect" />
              </LiksPorfolio>

              <ContendorTecnologias>
                <ButtonProfolio>
                  <LiksPorfolio href={PostProyects[4].url} target="_blanck">
                    Go to Proyect
                  </LiksPorfolio>
                </ButtonProfolio>
                <AplicacionesPorfolio>
                  <TecnologiasProfolio
                    src={Tecnologias.tecnologias.react}
                    alt="app1"
                  />
                  <TecnologiasProfolio
                    src={Tecnologias.tecnologias.styledc}
                    alt="app1"
                  />
                  <TecnologiasProfolio
                    src={Tecnologias.tecnologias.mongodb}
                    alt="app1"
                  />
                  <TecnologiasProfolio
                    style={{
                      background: "orange",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    src={Tecnologias.tecnologias.express}
                    alt="app1"
                  />
                  <TecnologiasProfolio
                    src={Tecnologias.tecnologias.node}
                    alt="app1"
                  />
                </AplicacionesPorfolio>
              </ContendorTecnologias>
            </ContendorBodyProfolio>
          </CardPorfolio>
        </ContenedorPrincipalCardPorfolio>

        {/*  */}

        <ContenedorPrincipalCardPorfolio>
          <CardPorfolio>
            <ContenedorNombreImagenProfolio>
              <TituloPorfolio2>{PostProyects[2].title}</TituloPorfolio2>
              <LiksPorfolio href={PostProyects[2].repro} target="_blanck">
                <ImgGitPorfolio src={Skills.github} alt="github" />
              </LiksPorfolio>
            </ContenedorNombreImagenProfolio>
            <ContendorBodyProfolio>
              <LiksPorfolio href={PostProyects[2].url} target="_blanck">
                <ImgPorfolio src={PostProyects[2].pic} alt="proyect" />
              </LiksPorfolio>

              <ContendorTecnologias>
                <ButtonProfolio>
                  <LiksPorfolio href={PostProyects[2].url} target="_blanck">
                    Go to Proyect
                  </LiksPorfolio>
                </ButtonProfolio>
                <AplicacionesPorfolio>
                  <TecnologiasProfolio
                    src={Tecnologias.tecnologias.mongodb}
                    alt="app1"
                  />
                  <TecnologiasProfolio
                    src={Tecnologias.tecnologias.node}
                    alt="app1"
                  />
                  <TecnologiasProfolio
                    src={Tecnologias.tecnologias.javascript}
                    alt="app1"
                  />
                  <TecnologiasProfolio
                    style={{
                      background: "orange",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    src={Tecnologias.tecnologias.express}
                    alt="app1"
                  />
                </AplicacionesPorfolio>
              </ContendorTecnologias>
            </ContendorBodyProfolio>
          </CardPorfolio>
        </ContenedorPrincipalCardPorfolio>

        {/*  */}

        <ContenedorPrincipalCardPorfolio>
          <CardPorfolio>
            <ContenedorNombreImagenProfolio>
              <TituloPorfolio2>{PostProyects[1].title}</TituloPorfolio2>
              <LiksPorfolio href={PostProyects[1].repro} target="_blanck">
                <ImgGitPorfolio src={Skills.github} alt="github" />
              </LiksPorfolio>
            </ContenedorNombreImagenProfolio>
            <ContendorBodyProfolio>
              <LiksPorfolio href={PostProyects[1].url} target="_blanck">
                <ImgPorfolio src={PostProyects[1].pic} alt="proyect" />
              </LiksPorfolio>

              <ContendorTecnologias>
                <ButtonProfolio>
                  <LiksPorfolio href={PostProyects[1].url} target="_blanck">
                    Go to Proyect
                  </LiksPorfolio>
                </ButtonProfolio>
                <AplicacionesPorfolio>
                  <TecnologiasProfolio
                    src={Tecnologias.tecnologias.javascript}
                    alt="app1"
                  />
                  <TecnologiasProfolio
                    src={Tecnologias.tecnologias.css}
                    alt="app1"
                  />
                  <TecnologiasProfolio
                    src={Tecnologias.tecnologias.html}
                    alt="app1"
                  />
                </AplicacionesPorfolio>
              </ContendorTecnologias>
            </ContendorBodyProfolio>
          </CardPorfolio>
        </ContenedorPrincipalCardPorfolio>

        {/*  */}
      </ContenedorPrincipalPorfolio>

      <Footer />
    </>
  );
};
