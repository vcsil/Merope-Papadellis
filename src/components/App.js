import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "../assets/styles/globalStyles";
import Reset from "../assets/styles/reset";
import Live from "./layouts/Live/Live";
import Sacolas from "./layouts/Sacolas/Sacolas";

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Reset />

            <Routes>
                <Route path="/live" element={<Live />} />
                <Route path="/sacolas" element={<Sacolas />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
