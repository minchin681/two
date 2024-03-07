import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import './App.css';
import Home from './components/home'
import Contact from './components/contact'


function App() {
  return (
    <BrowserRouter>
      <header>
      <nav>
        <h1>Washingtown</h1>
        <NavLink to="/">home</NavLink>
        <NavLink to="contact">contact</NavLink>
      </nav>
      </header>
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      </main>
   </BrowserRouter>
    
  );
}

export default App;
