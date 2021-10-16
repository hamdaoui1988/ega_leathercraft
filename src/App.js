
import './App.css';
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Collection from './components/Collection';
import CountDown from './components/CountDown';
import Testimonial from './components/Testimonial';
import About from './components/About';
import Mailer from './components/Mailer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Collection />
      <CountDown />
      <Testimonial />
      <About />
      <Mailer />
    </div>
  );
}

export default App;
