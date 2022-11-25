import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import './App.css'
import Main from './components/Main/Main'
function App() {
  return (
    <Main>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Routes>
    </Main>
  );
}

export default App;
