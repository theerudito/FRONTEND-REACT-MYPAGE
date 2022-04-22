
import { IconosApp } from "../Home/Iconos";
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
  TecnologiasProfolio,
  TituloPorfolio1,
  TituloPorfolio2,
} from "./Styles/Styles";
import { Skills } from "../Home/Skills";
import { PostProyects } from "./PostPorfolio";
import { Footer } from "../Footer/Footer";

export const PagePorfolio = () => {
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

      <ContenedorPrincipalPorfolio>
        <ContenedorPrincipalCardPorfolio>
          <CardPorfolio>
            <ContenedorNombreImagenProfolio>
              <TituloPorfolio2>
                {PostProyects.name.apicovid.title}
              </TituloPorfolio2>
              <Liks href={PostProyects.name.apicovid.repro} target="_blanck">
                <ImgGitPorfolio src={Skills.github} alt="github" />
              </Liks>
            </ContenedorNombreImagenProfolio>
            <ContendorBodyProfolio>
              <Liks href={PostProyects.name.apicovid.url} target="_blanck">
                <ImgPorfolio
                  src={PostProyects.name.apicovid.pic}
                  alt="proyect"
                />
              </Liks>

              <ContendorTecnologias>
                <ButtonProfolio>
                  <Liks href={PostProyects.name.apicovid.url} target="_blanck">
                  Go to Proyect
                  </Liks>
                </ButtonProfolio>
                <AplicacionesPorfolio>
                  <TecnologiasProfolio src={Skills.react} alt="app1" />
                  <TecnologiasProfolio src={Skills.css} alt="app1" />
                  <TecnologiasProfolio src={Skills.bootstrap} alt="app1" />
                </AplicacionesPorfolio>
              </ContendorTecnologias>
            </ContendorBodyProfolio>
          </CardPorfolio>
        </ContenedorPrincipalCardPorfolio>

        <ContenedorPrincipalCardPorfolio>
          <CardPorfolio>
            <ContenedorNombreImagenProfolio>
              <TituloPorfolio2>
                {PostProyects.name.relojjs.title}{" "}
              </TituloPorfolio2>
              <Liks href={PostProyects.name.relojjs.repro} target="_blanck">
                <ImgGitPorfolio src={Skills.github} alt="github" />
              </Liks>
            </ContenedorNombreImagenProfolio>
            <ContendorBodyProfolio>
              <Liks href={PostProyects.name.relojjs.url} target="_blanck">
                <ImgPorfolio
                  src={PostProyects.name.relojjs.pic}
                  alt="proyect"
                />
              </Liks>

              <ContendorTecnologias>
                <ButtonProfolio>
                  <Liks href={PostProyects.name.relojjs.url} target="_blanck">
                    Go to Proyect
                  </Liks>
                </ButtonProfolio>
                <AplicacionesPorfolio>
                  <TecnologiasProfolio src={Skills.javascript} alt="app1" />
                  <TecnologiasProfolio src={Skills.css} alt="app1" />
                  <TecnologiasProfolio src={Skills.html} alt="app1" />
                </AplicacionesPorfolio>
              </ContendorTecnologias>
            </ContendorBodyProfolio>
          </CardPorfolio>
        </ContenedorPrincipalCardPorfolio>
      </ContenedorPrincipalPorfolio>
      
      <Footer/>
    </>
  );
};
