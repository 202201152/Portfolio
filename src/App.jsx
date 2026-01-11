import CinematicBackground from './components/Background/CinematicBackground';
import Navigation from './components/Layout/Navigation';
import Hero from './components/Sections/Hero';
import Projects from './components/Sections/Projects';
import Philosophy from './components/Sections/Philosophy';

function App() {
  return (
    <div className="portfolio-app">
      <CinematicBackground />
      <Navigation />

      <main>
        <Hero />
        <Projects />
        <Philosophy />
        {/* Future sections will go here */}
        <div style={{ height: '30vh' }}></div>
      </main>
    </div>
  );
}

export default App;
