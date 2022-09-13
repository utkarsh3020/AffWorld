import './App.css';
import Cards from './components/Cards';
import Slider from './components/Carousel/Slider';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Cards />
      <Contact />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
