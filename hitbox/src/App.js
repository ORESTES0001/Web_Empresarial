import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/NavBar';
import { Banner } from './Components/Banner';
import { Development } from './Components/Development';
import { Info } from './Components/Info';
import { APPS } from './Components/APPS';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <Development/>
      <Info/>
      <APPS/>
    </div>
  );
}

export default App;
