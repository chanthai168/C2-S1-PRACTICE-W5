import { data } from "./data";
import Place from "./components/Place";

function App() {
  return (
    <>
    <div className="container">
      {data.map(e=> <Place data={e} key={e.id}/>)}
    </div>
    </>
  )
}

export default App;
