import './App.css';
import ScrollToHashElement from '@cascadia-code/scroll-to-hash-element';
import Layout from './Layout/Layout';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Services from './sections/Services';
import { useContext } from 'react';
import { ModeContext } from './context/ModeContext';
function App() {
  const { mode } = useContext(ModeContext);
  return (
    <div
      className={`${
        mode === 'DARK' ? 'bg-black text-white' : 'bg-white text-black'
      }`}>
      <ScrollToHashElement behavior='smooth' inline='center' />
      <Layout>
        <Hero />
        <Projects />
        <Skills />
        <Services />
      </Layout>
    </div>
  );
}

export default App;

