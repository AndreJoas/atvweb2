import "./index.css";
import logo from "../src/imagens/foto-0.png";
import Cabeca from "./components/cabeca/index";
import Posto from "../src/components/inputCalculator/index"

function App() {
  return (
    <div>
      <hr/>
      <div style={{ maxWidth: "100%", display: 'flex', justifyContent: "center", flexDirection: "column", alignItems: "center" }}><img src={logo} alt="nao encontrado" style={{ width: "300px", height: "250px" }} /></div>
      <Cabeca />
      <Posto />
      <hr/>
    </div>
  )
}

export default App
