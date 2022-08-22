import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import icon from "../../../assets/image/logo.png";

function Header() {
    return (
        <Head>
            <Icone>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                    <img src={icon} alt="icon" />
                </Link>
            </Icone>
        </Head>
    );
}

const Head = styled.header`
    background-color: var(--cor-rosa);
    z-index: 3;
    position: fixed;
    top: 0;
    left: 0;
    right: 0%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Icone = styled.div`
    img {
        width: 168px;
        height: 90px;
        cursor: pointer;
    }
`;

export default Header;
