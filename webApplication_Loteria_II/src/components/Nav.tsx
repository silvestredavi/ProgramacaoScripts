import { Link } from "react-router-dom";
import "../styles/Nav.css"

export default function Nav(){
    function disabled(e:any){
        var link = document.getElementsByTagName('a');
        e.target.classList.add("disabled");

        for(var i = 0; i< link.length; i++){
            if(link[i] !== e.target)
                link[i].classList.remove("disabled");
        }
    }

    return (
        <div className="nav">
            <Link onClick={e => disabled(e)} className='nav-lotofacil disabled' to="/">Lotofácil</Link>
            <Link onClick={e => disabled(e)} className='nav-megasena' to='/megasena'>Megasena</Link>
            <Link onClick={e => disabled(e)} className='nav-quina' to='/quina'>Quina</Link>
        </div>
    )
}

