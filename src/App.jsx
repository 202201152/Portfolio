import CinematicBackground from './components/Background/CinematicBackground';
import Navigation from './components/Layout/Navigation';
import Hero from './components/Sections/Hero';
import Projects from './components/Sections/Projects';
import Philosophy from './components/Sections/Philosophy';
import Contact from './components/Sections/Contact';

function App() {
  return (
    <div className="portfolio-app">
      <CinematicBackground />
      <Navigation />

      <main>
        <Hero />
        <Projects />
        <Philosophy />
        <Contact />
      </main>
    </div>
  );
}

export default App;
