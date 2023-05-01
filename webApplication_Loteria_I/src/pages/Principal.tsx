import Carregamento from "../components/Carregamento";
import LotoFacil from "../components/LotoFacil";
import MegaSena from "../components/MegaSena";
function Principal() {
    return (
        <>
            <div className="row">
                <h1 style={{color:"#0066b3", textAlign:"center"}}>Confira os últimos resultados</h1>
                <MegaSena />
                <Carregamento />
                <LotoFacil />
            </div>
        </>
    )
}
export default Principal;