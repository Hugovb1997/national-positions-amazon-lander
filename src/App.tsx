import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Concept } from '@/components/sections/Concept';
import { Problem } from '@/components/sections/Problem';
import { Solution } from '@/components/sections/Solution';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Offer } from '@/components/sections/Offer';
import { FAQ } from '@/components/sections/FAQ';
import { CostOfWaiting } from '@/components/sections/CostOfWaiting';
import { Footer } from '@/components/sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark font-sans text-slate-200 antialiased selection:bg-brand-red/30 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Concept />
        <Problem />
        <Solution />
        <CaseStudies />
        <Offer />
        <FAQ />
        <CostOfWaiting />
      </main>
      <Footer />
    </div>
  );
}
