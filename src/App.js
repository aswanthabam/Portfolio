import './App.css';
import Main from './components/Main/Main';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home"
function App() {
  return (
    <div className="App">
      <Main>
          <Routes>
            <Route element={<Home/>} path="/"></Route>
          </Routes>
      </Main>
    </div>
  );
}

export default App;
