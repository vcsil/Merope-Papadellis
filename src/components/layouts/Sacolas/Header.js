import styled from "styled-components";
import React from "react";

import icon from "../../../assets/image/Marca_PB-removebg-preview - Editado.png";

function Header() {
    return (
        <ContainerHeader>
            <img src={icon} alt="Ícone" />
        </ContainerHeader>
    );
}

const ContainerHeader = styled.header`
    height: 130px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 70%;
        height: 70%;
    }
`;

export default Header;
