import styled from "styled-components";

export const ContenedorPrincipal = styled.div`
  margin: auto;
`;

export const Titulo1 = styled.p`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: aqua;
`;

export const ImgPrincipal = styled.img`
  object-fit: cover;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: solid 1px aqua;
  margin-top: 20px;
`;

export const Contenedor = styled.div`
  margin: 10px auto;
  width: 350px;
  height: 50px;
  border: solid 1px aqua;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const ImgRedes = styled.img`
  margin: auto;
  width: 40px;
  height: 40px;
`;

export const Titulo2 = styled(Titulo1)`
  margin: auto;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const Titulo3 = styled(Titulo1)`
  margin: 20px auto;
  color: aqua;
`;

export const LinksRedes = styled.a`
  list-style: none;
  text-decoration: none;
`;
