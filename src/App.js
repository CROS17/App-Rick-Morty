import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Contact from './pages/Contac';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<Welcome name="Esperanzo" platillo="Le encanta el Atun"/>
      </header>
    </div>
  );
}

export default App;
