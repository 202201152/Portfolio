import CinematicBackground from './components/Background/CinematicBackground';

function App() {
  return (
    <div className="portfolio-app">
      <CinematicBackground />
      
      <main style={{ position: 'relative', zIndex: 1, padding: '4rem 2rem' }}>
        {/* Placeholder content to demonstrate contrast */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 4rem)', 
            fontWeight: 300, 
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
            opacity: 0.95 
          }}>
            Systems over spectacle.
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'var(--text-muted)', 
            lineHeight: 1.6, 
            maxWidth: '60ch' 
          }}>
            Building reliable digital infrastructure for the modern web.
            Depth, clarity, and performance.
          </p>
          
          <div style={{ height: '200vh' }}></div> {/* Scroll space to test parallax */}
        </div>
      </main>
    </div>
  );
}

export default App;
