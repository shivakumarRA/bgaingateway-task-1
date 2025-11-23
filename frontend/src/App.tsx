import {
  Header,
  Hero,
  Features,
  Products,
  WhyJoinUs,
  Testimonials,
  GrowCollection,
  Stats,
  Articles,
  Events,
  Footer,
} from './components';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFBEB] via-[#FFFBEB] to-white font-roboto">
      <Header />
      <Hero />
      <Features />
      <Products />
      <WhyJoinUs />
      <Testimonials />
      <GrowCollection />
      <Stats />
      <Articles />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
