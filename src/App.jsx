import './App.css';
import { ContentItems_Component } from './Components/Content_Item_Component';
import { First_Component, Second_Component } from './Components/First_Component';
import { Third_Component } from './Components/Third_Component';
import { Fourth_Component } from './Components/Fourth_Component';
import { Five_Component } from './Components/Five_Component';
import { Footer_Component } from './Components/Footer_Component';

const App = () => {
  return <div> 
    <First_Component/>
    <Second_Component/>
    <Third_Component/>
    <ContentItems_Component/>
    <Fourth_Component/>
    <Five_Component/>
    <Footer_Component/>
  </div>
}
export default App;