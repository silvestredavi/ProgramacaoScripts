import "../styles/Informacao.css";
function Informacao({img, tipo, cor, data}:any) {
    return (
        <>
            <div className="header-container">
                <div className="image-header">
                    <img src={img} />
                </div>
                <div className="logo-header" style={{color:cor}}>
                    <h3 >{tipo}</h3>
                </div>

            </div>
            <div className="descricao">
                Estimativa de premio do proximo concuncurso. Sorteio {data}
            </div>
        </>
    )
}

export default Informacao;