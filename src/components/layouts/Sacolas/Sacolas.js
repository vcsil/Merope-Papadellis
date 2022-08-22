import styled from "styled-components";
import React from "react";
import Header from "./Header";
import BarraPesquisa from "./BarraPesquisa";

function Sacolas() {
    return (
        <ContainerSacolas>
            <Header />
            <BarraPesquisa />
        </ContainerSacolas>
    );
}

const ContainerSacolas = styled.main`
    background-color: #fecccb;
    height: 100vh;
    width: 100vw;
`;

export default Sacolas;
