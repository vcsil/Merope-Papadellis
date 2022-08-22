import React from "react";
import styled from "styled-components";

const objTemp = [
  {'cod': '0020', 'descricao': 'Blusa tricot lista, verde rosa amarelo, U', 'preco': 29.9}
]

function Footer() {
  return (
    <Abaixo>

    </Abaixo>
  );
}

const Abaixo = styled.footer`
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;
  right: 0;
  height: 174px;
  background-color: gray;
  margin-right: 240px;
`

export default Footer;