import styled from "styled-components";

export const ContenedorCarousel = styled.div`
  width: 400px;
  height: 400px;
  margin: auto;
  display: grid;
  justify-content: center;
`;

export const CardPorfolio = styled.div`
  width: 550px;
  height: 300px;
  margin: 20px;
  border-radius: 10px;
`;

export const BodyPorfolio = styled.div`
  width: 600px;
  height: 300px;
  margin: auto;

  background-color: orange;
  display: grid;
  grid-template-columns: repeat(1, 3fr);
`;

export const TituloPorfolio1 = styled.p`
  color: black;
  background-color: greenyellow;
  margin-left: 210px;
  width: 300px;
  margin-top: 5px;
`;

export const ImagenGitPorfolio = styled.img`
  background-color: blue;
  margin: 5px;
  width: 30px;
  margin-left: 10px;
`;

export const ContenedorTituloGit = styled.div`
  background-color: yellow;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const ImagenCardPorfolio = styled.img`
  background-color: red;
  width: 200px;
  height: 285px;
  margin-top: -55px;
  margin-left: 5px;
  border-radius: 5px;
`;

export const TituloPorfolio2 = styled.p``;

export const BotonPorfolio = styled.button`
  background-color: orangered;
  border-radius: 10px;
  width: 200px;

  border: none;
  color: black;
  :hover {
    background-color: green;
    color: white;
  }
`;

export const ContenedorTecnologias = styled.div`
  background-color: purple;
  margin: auto;
  display: grid;
  gap: 5px;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;

export const Tecnologias = styled.img`
background-color: white;
width: 30px;
`;

export const LinksPortafolio = styled.a`
  text-decoration: none;
`;
