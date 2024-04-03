import { styled } from "styled-components"
import EstilosGlobais from "./Componentes/EstilosGlobais/index"
import Cabecalho from "./Componentes/Cabecalho"
import BarraLateral from "./Componentes/BarraLateral"
import Banner from "./Componentes/TituloEstilizado"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

function App() {

  return (
    <FundoGradiente>
      <EstilosGlobais/>
      <Cabecalho/>
      <BarraLateral/>
    </FundoGradiente>
  )
}

export default App
