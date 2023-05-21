import { TransactionProvider } from "./hooks/useTransaction"
import Routes from "./routes"
import GlobalStyle from './styles/global'

function App() {


  return (
    <TransactionProvider>
      <GlobalStyle />
      <Routes />
    </TransactionProvider>
  )
}

export default App
