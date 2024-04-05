import { styled } from "styled-components"
import fotos from './fotos-populares.json'


const Figure = styled.figure`
    width: ${props => props.$expandida ? '90%' : '212px'};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > div > img {
        max-width: 100%;
        border-radius: 20px;
        cursor: pointer;
    }
`

const ContainerDeImagens = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const Botao = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`;


const ImagemPopular = ({ expandida = false, aoZoomSolicitado }) => {
    return (<Figure $expandida={expandida}>
        <ContainerDeImagens>
            {fotos.map(foto => <img onClick={() => aoZoomSolicitado(foto)} key={foto.id} src={foto.path} alt={foto.alt}/>)}
        </ContainerDeImagens>
        <Botao>Ver mais</Botao>
    </Figure>)
}

export default ImagemPopular