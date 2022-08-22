import React from "react";
import styled from "styled-components";

const objTemp = [
  { 'id': 1, 'nome': "meropepapadellis" },
  { 'id': 2, 'nome': "trakinaxx" },
  { 'id': 3, 'nome': "nowak" }
]

function Cliente( { id, nome } ) {
  let posicao;

  if (id < 9) {
    posicao = '0'+id
  }

  return (
    <BoxCliente>
      <Numero posicao={id} ><p>{posicao}</p></Numero>
      <Perfil posicao={id} ><p>{nome}</p></Perfil>
    </BoxCliente>
  )
};

function Clientes() {

  return (
    objTemp.map(i => <Cliente key={i.id} id={i.id} nome={i.nome} />)
  );
}

const BoxCliente = styled.li`
  display: flex;
`

const Numero = styled.div`
  width: 50.04px;
  height: 40px;
  background-color: ${props => (props.posicao%2 === 0) ?
                      'var(--cor-cinza)'
                      :
                      'var(--cor-cinza-claro)'};
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
  justify-content: inherit;
  padding-left: 10px;

  background-color: ${props => (props.posicao%2 === 0) ?
                      'var(--cor-cinza)'
                      :
                      'var(--cor-cinza-claro)'};
`


export default Clientes;