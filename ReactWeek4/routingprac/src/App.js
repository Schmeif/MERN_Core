import './App.css';
import Index from './components/Index';
import Parameters from './components/Parameters';
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route element={<Home />} path="/"/>
        <Route element={<Index />} path="/home"/>
        <Route element={<Parameters />} path="/:word" />
        <Route element={<Parameters />} path="/:word/:color/:bgColor" />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;