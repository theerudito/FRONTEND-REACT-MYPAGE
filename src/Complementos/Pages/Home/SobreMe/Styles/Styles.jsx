import styled from "styled-components";
import { Dispositivos } from "../../../../Medias/Medidas";

export const DivFoto = styled.div`
  width: 100px;
  height: 100px;
  margin: auto;
`;

export const Foto = styled.img`
  width: 150px;
  height: 150px;
  margin: 10px auto;
  object-fit: contain;
  border-radius: 50%;
  :hover {
    box-shadow: 0px 0px 20px 5px rgba(224, 219, 219, 0.15);
  }
  @media ${Dispositivos.mobileS} {
    max-width: 320px;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
  }
`;

//----------------------------------------------------------

export const DivContenedorSaludo = styled.div`
  margin: auto;
  margin-top: 70px;
  width: 200px;
  display: grid;
  align-items: center;
  justify-content: center;
  @media ${Dispositivos.mobileS} {
    max-width: 320px;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
  }
`;

export const DivContenedorUbicacion = styled.div`
  margin: auto;
  margin-top: 5px;
  display: flex;
  width: 300px;
  height: 45px;
  @media ${Dispositivos.mobileS} {
    max-width: 320px;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
  }
`;

export const FotoUbicacion = styled.img`
  margin: auto;
  margin-top: 1px;
  display: flex;
  width: 40px;
  object-fit: cover;
`;

export const FotoBandera = styled.img`
  margin: auto;
  margin-top: 1px;
  display: flex;
  width: 40px;
  object-fit: cover;
`;

export const ContendorReloj = styled.div`
  margin: auto;
  margin-top: 10px;
  display: flex;
  width: 40px;
  object-fit: cover;
`;

export const ContendorProgramador = styled.div`
  margin-top: 10px;
  display: flex;
  width: 60px;
`;

export const FotoProgramador = styled.img`
  margin-top: 10px;
  display: flex;
  width: 60px;
  object-fit: cover;
`;

export const ContendorFrase = styled.div`
  margin: auto;
  width: 400px;
  @media ${Dispositivos.mobileS} {
    max-width: 320px;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
  }
`;

export const ContendorSkills = styled.div`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 400px;
  margin: auto;
  border: 1px solid white;
  border-radius: 10px;
  :hover {
    box-shadow: 0px 0px 20px 5px rgba(224, 219, 219, 0.15);
  }
  @media ${Dispositivos.mobileS} {
    max-width: 320px;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
  }
`;

//=================INFOR==================

export const TituloInfor = styled.h1`
  font-size: 25px;
  margin: 10px auto;
  width: 400px;
  display: grid;
  align-items: center;
  justify-content: center;
  border: solid 1px white;
  border-radius: 10px;
  @media ${Dispositivos.mobileS} {
    max-width: 320px;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
  }
`;

export const InforFrontend = styled.div`
  width: 450px;
  margin: 10px auto;
  display: grid;
  justify-content: center;
  align-items: center;
  @media ${Dispositivos.mobileS} {
    max-width: 320px;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
  }
`;

export const InforBackend = styled.div`
  width: 450px;
  margin: 10px auto;
  display: grid;
  justify-content: center;
  align-items: center;
  @media ${Dispositivos.mobileS} {
    max-width: 320px;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
  }
`;
//=================INFOR==================

export const ContendorInformacion = styled.div`
  @media ${Dispositivos.laptop} {
    max-width: 1024px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    margin: auto;
    align-items: center;
    justify-content: center;
    @media ${Dispositivos.mobileS} {
    max-width: 320px;
  }
  @media ${Dispositivos.mobileM} {
    max-width: 375px;
  }
  }
`;
