import "../styles/InfoJogo.css"

function InfoJogo({numero, dataExtenso}:any){
    return(
        <p className="infoJogo">
        Concurso {numero} - {dataExtenso}
    </p>
    )
}
export default InfoJogo;