
import './App.css';
import Contact from './Components/Contact';
import Features from './Components/Features';
// import Gallery from './Components/Gallery';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Pricing from './Components/Pricing';
import Testimonials from './Components/Testimonials';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Header/>
      <Hero/>
      <Features/>
      {/* <Gallery/> */}
      <Testimonials/>
      <Pricing/>
      <Contact/>
      
    </div>
  );
}

export default App;
