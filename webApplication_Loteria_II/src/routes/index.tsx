import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mega from "../pages/Megasena";
import Loto from "../pages/Lotofacil";
import Nav from "../components/Nav";
import Quina from "../pages/Quina";

function Index(){
    return(
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route index element={<Loto />} />
                <Route path="/megasena" element={<Mega />} />
                <Route path="/quina" element={<Quina />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Index;