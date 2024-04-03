import Tags from "./Tags";
import Titulo from "../Titulo";
import Populares from "./Populares";
import styled from "styled-components";
import Imagem from "./imagem";

const GaleriaContainer = styled.div`
    display: flex;

`

const SecaoFluida = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

const ContainerDoTitulo = styled.div`
    grid-area: span 1/2;
    margin-left: -95%;
`

const Galeria = ({fotos = []}) =>{
    return(
        <>
            <Tags/>
            <GaleriaContainer>
                <SecaoFluida>
                    <ContainerDoTitulo><Titulo tituloInteiro={true}>Navegue pela galeria</Titulo></ContainerDoTitulo>
                        {fotos.map(foto => <Imagem foto={foto}/>)}
                </SecaoFluida>
                <Populares/>
            </GaleriaContainer>
        </>
    )
}

export default Galeria;