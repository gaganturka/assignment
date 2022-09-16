import logo from './logo.svg';
import './App.css';
import GetList from './component/getreq';
import InsertDat from './component/postreq';
import HookC from './component/statehook';
import HookS from './component/hookCounterfor';
import Title from './component/title';
import HookMouse from './component/HookMouse'

function App() {
  return (
    <div className="App">
{/*      
<GetList/>
<InsertDat/>
<HookC/>
{<HookS/>}
{<Title/>} */}
<HookMouse/>


    </div>
  );
}

export default App;
