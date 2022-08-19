import styled from "styled-components";
import { ThemeDark, ThemeLight } from "../../Themes/Theme";

export const Titulo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.theme === "light" ? ThemeLight.color : ThemeDark.color};
`;

export const ButtonAccount = styled.button`
  margin: auto;
  background-color: orange;
  border-radius: 10px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BotonCrear = styled.button`
  background-color: blue;
  color: white;
  border-radius: 10px;
  border: none;
  margin: 10px auto;
  display: flex;
  transition: 0.5 ease-out;
  margin-bottom: 20px;
  :hover {
    background-color: blueviolet;
    color: white;
  }
`;

export const BotonEliminar = styled.button`
  background-color: red;
  color: black;
  border-radius: 10px;
  border: none;
  margin: 0 5px;
  &:hover {
    background-color: #c6002b;
    color: white;
  }
`;

export const BotonEditar = styled.button`
  background-color: greenyellow;
  color: black;
  border-radius: 10px;
  border: none;
  &:hover {
    background-color: #00b708;
    color: white;
  }
`;

export const BotonCerrarModal = styled.button`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  margin: auto;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: greenyellow;
  color: black;
  border: none;

  &:hover {
    background-color: #00b708;
    color: white;
  }
`;

export const BotonGuardar = styled.button`
  background-color: greenyellow;
  color: black;
  border-radius: 10px;
  border: none;
  margin: auto;
  display: flex;
  &:hover {
    background-color: #00b708;
    color: white;
  }
`;

export const ContenedorFormulario = styled.div`
  color: black;
`;

export const ContenedorPrincipal = styled.div`
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 600px;
  clear: both;
  overflow: hidden;
`;

export const Profile = styled.img`
  background-color: aquamarine;
  border-radius: 10px;
`;

export const ContainerTitles = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: orange;
  color: black;
  width: 885px;
  border: solid 1px orangered;
  border-right: solid 1px orangered;
  border-top: solid 1px orangered;
`;

export const ContainerUsers = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 800px;
  border-left: solid 1px orangered;
  border-right: solid 1px orangered;
`;

export const ULTitles = styled.ul`
  font-size: 20px;
  margin: auto;
  display: flex;
  list-style: none;
  gap: 10px;
  align-items: center;
  justify-content: center;

  .name {
    width: 80px;
    margin: auto;
    display: grid;
    align-items: center;
    justify-content: center;
  }
  .pic {
    width: 30px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .email {
    width: 160px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .phone {
    width: 100px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .messages {
    width: 250px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .actiones {
    width: 180px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ULUsers = styled.ul`
  font-size: 16px;
  margin: auto;
  display: flex;
  list-style: none;
  gap: 10px;
  background-color: gray;
  color: white;
  border-bottom: solid 1px;
  cursor: pointer;
  :hover {
    background-color: #597dfb;
    color: black;
    border-bottom: solid 1px;
  }
  .pic {
    width: 32px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .name {
    width: 80px;
    margin: auto;
    display: grid;
    align-items: center;
    justify-content: left;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .email {
    width: 160px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: left;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .phone {
    width: 100px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: left;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .messages {
    width: 250px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: left;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .actiones {
    width: 180px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ImgProfile = styled.img`
  margin: auto;
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: aquamarine;
  width: 30px;
  border-radius: 50%;
`;

export const LITitles = styled.li``;

export const LIUsers = styled.li``;

export const ContainnerSearch = styled.div`
  width: 150px;
  margin-left: 955px;
  margin-top: -20px;
`;

export const InputSeach = styled.input`
  width: 150px;
  border-radius: 10px;
  border: none;
  height: 30px;
  font-size: 16px;
  margin: 5px;
`;
