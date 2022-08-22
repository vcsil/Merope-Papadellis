import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";
import styled from "styled-components";

function BarraPesquisa() {
    const [nomeCliente, setNomeCliente] = useState("");

    return (
        <ContainerBarraPesquisa>
            <BoxBarraPesquisa>
                <FaSearch
                    size="24px"
                    color="white"
                    cursor="pointer"
                    style={{ marginRight: "14px" }}
                />
                <InputBarraPesquisa
                    placeholder="Busque o nome da cliente"
                    type="name"
                    id="name"
                    value={nomeCliente}
                    onChange={(e) => setNomeCliente(e.target.value)}
                />
            </BoxBarraPesquisa>
        </ContainerBarraPesquisa>
    );
}

const ContainerBarraPesquisa = styled.div`
    margin: 0 12px;
`;

const BoxBarraPesquisa = styled.div`
    width: 100%;
    height: 40px;
    background: #eeeeee;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 0;
    border-radius: 1000px;
    padding: 6px 10px;
    display: flex;
    align-items: center;
`;

const InputBarraPesquisa = styled.input`
    width: 100%;
    height: 100%;
    background: #eeeeee;
    border: 0;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: #000000;

    ::placeholder {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        color: #ffffff;
    }

    :focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`;

export default BarraPesquisa;
