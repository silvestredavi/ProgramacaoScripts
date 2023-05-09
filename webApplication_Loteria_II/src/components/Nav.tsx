import { Link, useLocation } from "react-router-dom";

import "../styles/Nav.css"
export default function Nav(){
    let currentPath = useLocation();
    
    return (
        <div className="nav"> 
            <Link className={currentPath.pathname === "/" ? "nav-lotofacil disabled" : "nav-lotofacil"} to="/">Lotofácil</Link>
            <Link className={currentPath.pathname === "/megasena" ? "nav-megasena disabled" : "nav-megasena"} to='/megasena'>Megasena</Link>
            <Link className={currentPath.pathname === "/quina" ? "nav-quina disabled" : "nav-quina"} to='/quina'>Quina</Link>
        </div>
    )
}

