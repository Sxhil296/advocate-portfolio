import React from "react";
import Header from "../components/Header";
import Appointment from "../components/Appointment";

// import LawyerImage from "../assets/img/lawyer_banner.png";
import LawyerImage from "../assets/img/hero.png";

const Banner = () => {
  return (
    <section
      id="home"
      className="lg:h-full lg:max-h-800 bg-gradient-to-t from-[#f8f3ec] to-[#e0c8ac]"
    >
      <Header />
      <div className="container mx-auto h-full lg:flex pt-32">
        {/* left side */}
        <div className="text-center mx-auto h-full lg:text-left px-8 md:p-0">
          <h1 className="font-primary font-black text-6xl lg:text-7xl text-primary mb-4 lg:mt-[70px] leading-tight lg:leading-[90px]">
          Resolving Disputes,<br /> <span className="text-accent"> Restoring Peace.</span>
          </h1>
          <p className="max-w-sm mx-auto mb-[50px] lg:mx-0 mg:max-w-[540px]">Resolving disputes and restoring peace are our core principles. We uphold integrity, advocate for fairness, and provide diligent legal representation. Our experienced team navigates legal complexities, ensuring optimal outcomes for our clients.</p>
     
         <div className="lg:absolute mx-auto max-w-[445px] lg:mx-0">
           <Appointment />
         </div>
        </div>
        {/* right */}
        <div className="hidden flex-1 lg:flex lg:flex-col items-end">
          <img src={LawyerImage} alt="Advocate Amjad Malik" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
