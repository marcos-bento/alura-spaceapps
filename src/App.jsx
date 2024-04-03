import { styled } from "styled-components"
import EstilosGlobais from "./Componentes/EstilosGlobais/index"
import Cabecalho from "./Componentes/Cabecalho"
import BarraLateral from "./Componentes/BarraLateral"
import Banner from "./Componentes/Banner"
import bannerBackground from './assets/banner.png'
import Galeria from "./Componentes/Galeria"
import fotos from './fotos.json'
import { useState } from "react"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer  = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoDaGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {
  const [fotosDaGaleria,setFotosDaGaleria] = useState(fotos);
  return (
    <FundoGradiente>
      <EstilosGlobais/>
      <AppContainer>
        <Cabecalho/>
        <MainContainer>
          <BarraLateral/>
          <ConteudoDaGaleria>
            <Banner texto={"A galeria mais completa de fotos do espaço!"} backgroundImage={bannerBackground}/>
            <Galeria fotos={fotosDaGaleria}/>
          </ConteudoDaGaleria>
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  )
}

export default App
