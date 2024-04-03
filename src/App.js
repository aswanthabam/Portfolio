import './App.css';
import About from './components/About/About';
import Activities from './components/Activities/Activities';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Page from './components/Page/Page';
import Projects from './components/Projects/Projects';
import SideMenu from './components/SideMenu/SideMenu';
import Skills from './components/Skills/Skills';
import TopBar from './components/TopBar/TopBar';
// Main APP
function App() {
  return (
    <div className="App">
      <Main>
        <SideMenu></SideMenu>
        <Page num={1} id="home" fixedHeight>
          <TopBar></TopBar>
          <Header></Header>
        </Page>
        <Page num={2} id="about" blurred >
          <About/>
        </Page>
        <Page num={3} id="skills" blurred fixedHeight>
          <Skills />
        </Page>
        <Page num={4} id="activity" blurred >
          <Activities/>
        </Page>
        <Page num={5} id="projects" blurred >
          <Projects/>
        </Page>
        <Page num={6} id="contact" blurred fixedHeight>
          <Contact/>
        </Page>
        <Footer/>
      </Main>
    </div>
  );
}

export default App;
