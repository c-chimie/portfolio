import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills'
import bootstrap from 'bootstrap';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
