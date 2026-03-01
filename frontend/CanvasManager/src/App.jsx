import { Get_API } from "./APIHandler";

import RandNums from "./components/RandNums";
import Header from "./components/Header";

function App() {
  
  
  return (
    <>
      <div className="Header">
        <Header text="Text Component"/>
      </div>
      <div className="App">
        <RandNums numbers={Get_API("/randNums", {"count":1})}/>
      </div>
    </>
  )
}

export default App
