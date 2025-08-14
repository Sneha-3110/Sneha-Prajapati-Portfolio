import { BrowserRouter } from "react-router-dom";

import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Galaxy} from './components/index';
import ContactLinks from "./components/ContactLinks";

const App=()=> {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About/>
        {/* <Experience/> */}
        <Tech/>
        <Works/>
        {/* <Feedbacks/> */}
        <div className="relative z-0">
          <div className="absolute inset-0 z-0">
            <Galaxy />
          </div>

          <div className="relative z-10">
            <ContactLinks />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
