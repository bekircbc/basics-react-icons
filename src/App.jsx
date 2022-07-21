import "./App.scss";
import { BsLightningFill } from "react-icons/bs";
import { FaBluetoothB } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <h1>React Icons</h1>
      <div className="icon-holder">
        <div className="App-icon">
          <BsLightningFill className="icon" />
          <p>BsLightningFil</p>
        </div>
        <div className="App-icon">
          <FaBluetoothB className="icon" />
          <p>FaBluetoothB</p>
        </div>
      </div>
    </div>
  );
}

export default App;
