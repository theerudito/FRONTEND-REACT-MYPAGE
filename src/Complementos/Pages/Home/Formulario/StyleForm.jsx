import styled from "styled-components";

export const DivContenedor = styled.div`
  margin: 10px auto;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 350px;
  border-radius: 10px;
  border: 1px solid white;
  margin-bottom: 20px;
  :hover {
    box-shadow: 0px 0px 20px 5px rgba(224, 219, 219, 0.15);
  }
`;

export const ContenedorBoton = styled.button`
  background-color: orange;
  width: 100px;
  height: 30px;
  margin: 10px auto;
  display: grid;
  margin-bottom: 5px;
  border: none;
  border-radius: 10px;
  color: white;
  align-items: center;
  justify-content: center;
  padding: auto;
  :hover {
    background-color: tomato;
  }
`;

export const AlertaFormulario = styled.div`
  background-color: orangered;
  color: white;
  display: flex;
  margin: auto;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border: solid 1px white;
  font-size: 18px
`;
