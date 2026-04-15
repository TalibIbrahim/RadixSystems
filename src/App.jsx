import { useState, useRef } from 'react';
import Aurora from './components/Aurora/Aurora';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

/* ── App ── */
function App() {
  const [email, setEmail] = useState('');
  const contactRef = useRef(null);

  const handleGetQuote = (e) => {
    e.preventDefault();
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      {/* Aurora Background */}
      <div className="aurora-bg">
        <Aurora
          colorStops={['#6e67ff', '#B497CF', '#ac94b8']}
          blend={0.49}
          amplitude={1.0}
          speed={0.8}
        />
      </div>

      <div className="content">
        <Navbar scrollTo={scrollTo} />
        <Hero
          email={email}
          setEmail={setEmail}
          onGetQuote={handleGetQuote}
          scrollTo={scrollTo}
        />
        <Services />
        <Projects />
        <Contact ref={contactRef} email={email} setEmail={setEmail} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
