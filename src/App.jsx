import { usePortfolioEffects } from './hooks/usePortfolioEffects';
import { useTheme } from './hooks/useTheme';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Nav from './components/Nav';
import Services from './components/Services';
import Skills from './components/Skills';
import Work from './components/Work';

export default function App() {
  const { toggleTheme } = useTheme();
  usePortfolioEffects();

  return (
    <>
      <div className="cursor-dot" aria-hidden="true" />
      <div className="cursor-ring" aria-hidden="true" />

      <div className="grain" aria-hidden="true" />

      <div className="scroll-progress" aria-hidden="true">
        <span />
      </div>

      <Nav onToggleTheme={toggleTheme} />
      <Hero />
      <Marquee />

      <div className="divider" />

      <About />

      <div className="divider" />

      <Work />

      <div className="divider" />

      <Skills />
      <Services />
      <Contact />

      <div className="hover-preview" id="hoverPreview" aria-hidden="true">
        <span className="hover-preview-icon" />
        <span className="hover-preview-title" />
        <span className="hover-preview-tag">View Case Study</span>
      </div>
    </>
  );
}
