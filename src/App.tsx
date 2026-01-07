import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import Cabecalho from './components/Cabecalho'

import themeOrigin from './theme/tema'
import EstiloGlobal, { Container } from './styles'
import { ThemeConsumer, ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={themeOrigin}>
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
