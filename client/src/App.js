import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import './App.css';
import Home from './components/home'



function App() {
  return (
    <BrowserRouter>
      <header>
      <nav>
        <h1>Washingtown</h1>
        <NavLink to="/">home</NavLink>
      </nav>
      </header>
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </main>
   </BrowserRouter>
    
  );
}

export default App;
