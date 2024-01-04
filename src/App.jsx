import { BrowserRouter } from "react-router-dom";
import { Navbar, Contact, Experience,About, Hero, Tech, Works, StarsCanvas} from './components'



const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      
      <Contact />
      <StarsCanvas />
  
    </BrowserRouter>
  );
}

export default App;