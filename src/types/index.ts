export interface InfoLoteria {
    acumulado: boolean,
    concursoEspecial: boolean,
    dataApuracao: string,
    dataPorExtenso: string,
    dataProximoConcurso: string,
    dezenas: string[],
    numeroDoConcurso: number,
    quantidadeGanhadores: number,
    tipoJogo: string,
    valorEstimadoProximoConcurso:number,
    valorPremio: number

}

export interface Props{
    megaSena: InfoLoteria;
    lotoFacil: InfoLoteria;
    carregamento:boolean
    setMegaSena: Function;
    setLotoFacil: Function;
    setCarregamento : Function;
}



