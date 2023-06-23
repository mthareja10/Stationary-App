import './App.css';
import Home from './Components/Home'
import About from './Components/About'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {AnimatePresence} from 'framer-motion'

function App() {
  return (
    <>
      <Router> 
        <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          {/* <Route  path="/Register" element={<Register />} />
          <Route  path="/Services" element={<Services />} />
          <Route  path="/Contact" element={<Contact />} />
          <Route  path="/Login" element={<Login />} /> */}
        </Routes>
        </AnimatePresence>
      </Router>
    </>
  );
}

export default App;
