import styled from "styled-components";
import { Dispositivos } from "../../Medias/Medidas";



export const ContenedorIconos = styled.div`
  @media ${Dispositivos.laptop} {
    max-width: 1024px;
    margin-left: auto;
  }
`;

export const Instagram = styled.i`
  color: white;
  margin: 0 5px;
  :hover {
    color: #405de6;
  }
`;

export const Facebook = styled.i`
  margin: 0 5px;
  color: white;
  :hover {
    color: #3b5998;
  }
`;

export const GitHub = styled.i`
  margin: 0 5px;
  color: white;
  :hover {
    color: #171515;
  }
`;

export const Whatssap = styled.i`
  margin: 0 5px;
  color: white;
  :hover {
    color: #00bb2d;
  }
`;

export const Linkedin = styled.i`
  margin: 0 5px;
  color: white;
  :hover {
    color: #0e76a8;
  }
`;

export const Gmail = styled.i`
  margin: 0 5px;
  color: white;
  :hover {
    color: red;
  }
`;

export const Twitter = styled.i`
  margin: 0 5px;
  color: white;
  :hover {
    color: aqua;
  }
`;

export const Lista = styled.nav`
  border-radius: 10px;
  color: white;
  transition: 0.1s ease-in;
  :hover {
    background-color: greenyellow;
    border-radius: 10px;
    color: black;
  }
  .nav {
    color: white;
    :hover {
      color: black;
    }
  }
`;

export const Menu = styled.link`
  color: white;
  :hover {
    color: black;
  }
`;
