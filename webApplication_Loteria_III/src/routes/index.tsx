import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "../components/Menu";
import Timemania from "../pages/Timemania";
import Mega from "../pages/Megasena";
import Quina from "../pages/Quina";

function Index(){
    return(
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route index element={<Timemania />} />
                <Route path="/megasena" element={<Mega />} />
                <Route path="/quina" element={<Quina />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Index;