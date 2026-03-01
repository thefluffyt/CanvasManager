import { Get_API } from "./APIHandler";

import RandNums from "./components/RandNums";
import Header from "./components/Header";

function App() {
  
  
  return (
    <>
      <div >
        <Header/>
      </div>
      <div className="App">
        <RandNums num={3} min={0} max={4}/>
      </div>
    </>
  )
}

export default App
