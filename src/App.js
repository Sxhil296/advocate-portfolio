import React from "react";
import Banner from "./components/Banner";
import Testimonials from "./components/Testimonials";
import Skills from "./components/Skills";
import Team from './components/Team'
import WhatsAppChatIcon from "./components/WhatsAppChatIcon";
// import About from "./components/About";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTopBtn from "./components/BackToTopBtn";



const App = () => {
  return (
    <div>
      <Banner />
      <Testimonials />
      {/* <About /> */}
      <Skills />
      <Team />
      <Newsletter />
      <Contact/>
      <Footer />
      <WhatsAppChatIcon />
      <BackToTopBtn />
    </div>
  );
};

export default App;
