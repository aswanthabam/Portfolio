import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Page from './components/Page/Page';
import SideMenu from './components/SideMenu/SideMenu';
import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <div className="App">
      <Main>
        <SideMenu></SideMenu>
        <Page num={1} id="home">
          <TopBar></TopBar>
          <Header></Header>
        </Page>
        <Page num={2} id="about" blurred>
          Page 2
        </Page>
        <Page num={3} id="projects" blurred>
          Page 3
        </Page>
        <Page num={4} id="contact" blurred>
          Page 4
        </Page>
      </Main>
    </div>
  );
}

export default App;
