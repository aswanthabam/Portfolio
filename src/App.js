import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Page from './components/Page/Page';
import Projects from './components/Projects/Projects';
import SideMenu from './components/SideMenu/SideMenu';
import Skills from './components/Skills/Skills';
import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <div className="App">
      <Main>
        <SideMenu></SideMenu>
        <Page num={1} id="home" fixedHeight>
          <TopBar></TopBar>
          <Header></Header>
        </Page>
        <Page num={2} id="about" blurred fixedHeight>
          <About/>
        </Page>
        <Page num={3} id="skills" blurred fixedHeight>
          <Skills />
        </Page>
        <Page num={4} id="projects" blurred >
          <Projects/>
        </Page>
        <Page num={5} id="contact" blurred fixedHeight>
          Page 4
        </Page>
      </Main>
    </div>
  );
}

export default App;
