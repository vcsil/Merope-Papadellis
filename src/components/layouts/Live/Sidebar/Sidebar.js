import React from "react";
import styled from "styled-components"
import Clientes from "./Clientes";

function Sidebar() {
  return (
    <Direita>
      <DireitaCor>
        <ContainerClientes>
          <CabecalhoClientes>
            <Numero><p>N°</p></Numero>
            <Perfil><p>Perfil do instagram</p></Perfil>
          </CabecalhoClientes>
          <Clientes />
        </ContainerClientes>
      </DireitaCor>
    </Direita>
  );
}

const Direita = styled.aside`
  position: fixed;
  z-index: 3;
  margin-top: 100px;
  top: 0;
  bottom: 0;
  right: 0;
  width: 240px;
`

const DireitaCor = styled.div`
  background-color: var(--cor-rosa);
  width: 240px;
  height: 100%;
  padding: 12px 20px;
`

const ContainerClientes = styled.ul`
  width: 100%;
  height: 100%;
  border: 1px solid white;
  border-radius: 4px;
`

const CabecalhoClientes = styled.li`
  display: flex;
`

const Numero = styled.div`
  width: 50px;
  height: 40px;
  background-color: var(--cor-cinza-escuro);
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
`

const Perfil = styled(Numero)`
  width: 150px;
  border-right: 0;
`

export default Sidebar;