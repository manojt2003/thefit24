
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { Classes } from './components/sections/Classes';
import { Contact } from './components/sections/Contact';
import { Features } from './components/sections/Features';
import { GoogleReviews } from './components/sections/GoogleReviews';
import { Hero } from './components/sections/Hero';
import { Membership } from './components/sections/Membership';
import { RestoBar } from './components/sections/RestoBar';
import { Stats } from './components/sections/Stats';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Stats />
      <Classes />
      <Features />
      <Membership />
      <RestoBar />
      <GoogleReviews />
      <Contact />
      <Footer />
    </div>
  );
}