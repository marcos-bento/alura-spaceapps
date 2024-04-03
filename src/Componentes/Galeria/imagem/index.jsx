import styled from "styled-components";

const ContainerImagem = styled.figure`
    display: flex;
    flex-direction: column;
    width: ${(props) => (props.$expandida ? '90%' : '460px')};
    max-width: 100%;
`

const ImagemDaGaleria = styled.img`
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    max-width: 100%;
`

const ContainerInfosImagem = styled.figcaption`
    display: flex;
    flex-direction: column;
    background-color: #001634;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    box-sizing: border-box;
`

const  TituloDaImagem = styled.h3`
    padding: 0 1rem;
    margin: 1rem 0 0 0;
    color: white;
    font-family: 'GandhiSansBold';
`

const  ContainerDescricaoDaImagem = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.5rem;
    padding: 0 1rem;
`

const DescrivaoDaImagem = styled.p`
    color: white;
    padding: 0;
`

const BotoesDaImagem = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
`

const Imagem = ({foto}) =>{
    return(
        <ContainerImagem>
            <ImagemDaGaleria src={foto.path} alt={foto.titulo} />
            <ContainerInfosImagem>
                <TituloDaImagem>{foto.titulo}</TituloDaImagem>
                <ContainerDescricaoDaImagem>
                    <DescrivaoDaImagem>{foto.fonte}</DescrivaoDaImagem>
                    <div>
                        <BotoesDaImagem><img src="./icones/favorito.png" alt="Ícone de favoritar" /></BotoesDaImagem>
                        <BotoesDaImagem><img src="./icones/expandir.png" alt="Ícone de expandir a imagem" /></BotoesDaImagem>
                    </div>
                </ContainerDescricaoDaImagem>
            </ContainerInfosImagem>
        </ContainerImagem>
    )
}

export default Imagem;