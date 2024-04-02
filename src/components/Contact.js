import React from "react";

import { social } from "../data";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-primary text-white min-h-[732px] section"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-primary font-extrabold mb-4">
          Contact
        </h2>
        <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-[64px]">
        Thank you for considering me for your legal matters. I'm available for consultations and eager to assist you with your legal needs. Whether you have questions about a specific case or need general legal advice, feel free to contact me. I look forward to the opportunity to work together and provide the support and guidance you deserve.
        </p>
        {/* form */}
        <form
          // action="https://getform.io/f/be6d6939-62dc-4a0a-947c-b6ecad71bdb0"
          method="POST"
          className="px-8 lg:px-0 max-w-[600px] mx-auto flex flex-col space-y-6 mb-[64px]"
        >
          <input type="text" placeholder="Your Name" className="form-control" />
          <input
            type="email"
            placeholder="Your Email Address"
            className="form-control"
          />
          <textarea className="textarea" placeholder="Your Message"></textarea>
          <button className="btn bg-accent hover:bg-accent-hover">
            Send Message
          </button>
        </form>
        {/* socials */}
        <div className="flex items-center justify-between max-w-[205px] mx-auto">
            {social.map((item, index)=> {
                return (
                    <a href={item.socialLink} key={index} target="_blank" rel="noreferrer">
                        <img src={item.icon} alt="social" />
                    </a>
                )

            })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
