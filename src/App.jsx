import './App.css';
import {Routes, Route} from "react-router-dom"
import Accueil from "./components/Home/Accueil"
import About from './components/Home/About';
/* import HeaderLink from './components/Home/Header-link';  */
import Erreur from './components/Error/Erreur';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    /*    (<HeaderLink />))  */
    <div className="App" >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="/navbar" element={<Navbar />} /> 
        <Route path="/about/*" element={<Erreur />} />

      </Routes>
    </div>
  );
  } 

export default App;
