import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import Home from './components/Home';
import { Route, Routes } from "react-router-dom"
import { About } from './components/About';

function App() {
  return (
    <>
       <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>

      </>
  );
}

export default App;
