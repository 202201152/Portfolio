import CinematicBackground from './components/Background/CinematicBackground';
import Navigation from './components/Layout/Navigation';
import Hero from './components/Sections/Hero';

function App() {
  return (
    <div className="portfolio-app">
      <CinematicBackground />
      <Navigation />

      <main>
        <Hero />
        {/* Future sections will go here */}
        <div style={{ height: '50vh' }}></div>
      </main>
    </div>
  );
}

export default App;
