import "./App.scss";
import { BsLightningFill } from "react-icons/bs";
import { FaBluetoothB } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="App-icon">
        <BsLightningFill className="icon" />
        <p>React Icons</p>
      </div>
      <div className="App-icon">
        <FaBluetoothB className="icon" />
        <p>React Icons</p>
      </div>
    </div>
  );
}

export default App;
