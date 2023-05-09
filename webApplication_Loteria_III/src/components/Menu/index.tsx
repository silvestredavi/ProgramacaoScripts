import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { time, mega, qui } from "../../styles/theme";
export function Nav(){
    let currentPath = useLocation();
    
    return (
        <Menu>
            {currentPath.pathname === "/" ? <CurrentPage to="/">Timemania</CurrentPage> : <ToPage color={time.loteria} to="/">Timemania</ToPage>}

            {currentPath.pathname === "/megasena" ? <CurrentPage to="/megasena">Megasena</CurrentPage> : <ToPage color={mega.loteria} to="/megasena">Megasena</ToPage>}

            {currentPath.pathname === "/quina" ? <CurrentPage to="/quina">Quina</CurrentPage> : <ToPage color={qui.loteria} to="/quina">Quina</ToPage>}
        </Menu>
    )
}

const Menu = styled.div` 
    padding: 30px;
`; 

const CurrentPage = styled(Link)`
    color: #ddd;
    pointer-events: none;
    text-decoration: none;    
    display: inline-block;
    margin-right: 20px;
    font-weight: bold;
    font-size: large;
`;

const ToPage = styled(Link)`
    color: ${(props) => props.color};
    text-decoration: none;
    display: inline-block;
    margin-right: 20px;
    font-weight: bold;
    font-size: large;
`;
