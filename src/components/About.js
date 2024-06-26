import React from 'react'
// import LawyerImage from "../assets/img/aboutLawer.jpeg";
import LawyerImage from "../assets/img/about.png";

const About = () => {
  return (
    <section id="about" className="section pb-6 sm:pb-32">
    <div className="container mx-auto text-center">
      <h2 className="text-5xl font-primary font-extrabold mb-4 lg:pb-10">About Me</h2>
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 pt-6'>
          <img src={LawyerImage} alt="Advocate Amjad Malik"  className='w-full' />
        </div>
        <div>
        <p className="max-w-[540px] mx-auto px-6 pt-6 sm:text-[18px] lg:px-0 mb-[60px] text-justify lg:ml-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          consequatur autem ipsum voluptatem dolorem vitae perferendis, unde
          laudantium pariatur nemo voluptatibus molestiae quasi adipisci fugiat
          deleniti alias ipsa quae iste.
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse doloribus ipsum corrupti expedita error harum asperiores adipisci, ipsam iure assumenda et quo possimus nesciunt atque est. Molestiae consectetur laboriosam nemo.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsa repellendus expedita ducimus, adipisci eligendi pariatur sed error omnis. Consectetur eum nemo incidunt modi enim, a tenetur? Itaque, perspiciatis distinctio!
        </p>
        </div>
      </div>
      
     
     
    </div>
  </section>
  )
}

export default About