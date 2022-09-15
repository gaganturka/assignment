import logo from './logo.svg';
import './App.css';
import Func from './component/funct'
import Welcome from './component/welcome';
import Msg from './component/msg';
import Counter from './component/counter';
import Click from './component/functinClick';
import Event from './component/eventbind'
import ParentCom from './component/parentCom';
import StyleSheet from './component/stylesheet';
import Forms from './component/form';
import Clickk from './component/clickCount';


function App() {
  return (
    <div className="App">
{/* <Func name="harsh">
  <p>hi i am good</p>
</Func>
<Func name='aman' age='12'>
  <button>action</button>
</Func>

<Welcome/>

<Msg/>
<Counter/>
<Click/>

<Event/>
<ParentCom/>
<StyleSheet/> */}

{/* <Forms/> */}
<Clickk/>

    </div>
  );
}

export default App;
