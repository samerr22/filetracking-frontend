import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '@fontsource/playfair-display';
import '@fontsource/open-sans';

const leftToCenter = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } }
};

export default function HomePage() {
  return (
    <div className="bg-[#f7f7f7] text-[#2c2c2c] font-sans">

      {/* ⭐ HERO SECTION */}
      <section className="bg-[#f7f7f7] py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-playfair font-bold mb-6 leading-tight">
              Formulate Your <br /> Personalized Skincare
            </h1>
            <button className="bg-gray-800 hover:bg-black transition text-white px-6 py-3 rounded-full">
              Take the Quiz
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg"
              alt="Skincare"
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* ⭐ SERVICES SECTION */}
      <section className="text-center px-4 py-12 bg-[#f7f7f7]">
<motion.h1
  className="text-4xl sm:text-5xl font-playfair font-bold mb-8"
  initial={{ opacity: 0, y: -50, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
>
  We Ensure The Best Services For Our Clients
</motion.h1>





        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { title: 'Mobile App Development', desc: 'We build user-friendly and feature-rich mobile applications for both Android and iOS platforms.' },
            { title: 'Web Application Development', desc: 'We specialize in creating scalable, secure, and efficient web applications tailored to your business needs.' },
            { title: 'Website Development', desc: 'Our team designs and develops responsive websites that enhance your online presence and user experience.' },
            { title: 'Software Development', desc: 'We create custom software solutions to streamline your business operations and improve productivity.' },
            { title: 'Hosting Service', desc: 'Reliable and secure hosting services that ensure your websites and applications are always available.' },
            { title: 'Digital Marketing', desc: 'We offer digital marketing services to help you grow your brand and reach your target audience effectively.' }
          ].map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm"
              variants={leftToCenter}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-xl font-playfair font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-700 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ⭐ ABOUT US */}
      <section className="py-20 px-10 bg-[#f7f7f7]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl font-playfair font-bold mb-6">About Us</h1>
          <p className="text-gray-700 mb-6">
            At Kiyamu, we are a forward-thinking software development company committed to delivering high-quality digital solutions. Specializing in custom software, web, and mobile app development, as well as IT consulting, our goal is to help businesses of all sizes achieve success through innovative technology.
          </p>
          <Link to="/about">
            <button className="bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-full">More</button>
          </Link>
        </div>
      </section>

      {/* ⭐ VALUES & EXPERTISE */}
      <section className="py-12 px-4 bg-[#f7f7f7]">
        <h1 className="text-center text-4xl sm:text-5xl font-playfair font-bold mb-12">Our Values & Our Expertise</h1>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Values */}
          <div className="space-y-6">
            {[
              { title: 'Innovation', desc: 'We thrive on solving complex problems with creative, high-tech solutions.' },
              { title: 'Quality', desc: 'Delivering secure, reliable, and user-friendly products.' },
              { title: 'Collaboration', desc: 'Working together with clients to meet expectations.' },
              { title: 'Integrity', desc: 'Transparent and ethical in everything we do.' }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm"
                variants={leftToCenter}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="text-xl font-playfair font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-700 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Expertise */}
          <div className="space-y-6">
            {[
              { title: 'Custom Software Development', desc: 'Tailored solutions to improve business efficiency.' },
              { title: 'Mobile App Development', desc: 'Building intuitive apps for iOS and Android.' },
              { title: 'Web Application Development', desc: 'Creating responsive, feature-rich web applications.' },
              { title: 'Cloud Solutions', desc: 'Helping businesses adopt cloud technology efficiently.' }
            ].map((expertise, idx) => (
              <motion.div
                key={idx}
                className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm"
                variants={leftToCenter}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="text-xl font-playfair font-semibold mb-2">{expertise.title}</h3>
                <p className="text-gray-700 text-sm">{expertise.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ⭐ PROJECTS */}
      <section className="py-12 px-4 bg-[#f7f7f7]">
        <h1 className="text-center text-4xl sm:text-5xl font-playfair font-bold mb-12">Our Existing Projects</h1>
        <div className="max-w-6xl mx-auto space-y-12">
          <div>
            <h3 className="text-2xl font-playfair font-semibold mb-4">Innovative Web App</h3>
            <p className="text-gray-700 mb-4">A custom web application designed to solve complex problems with a user-friendly interface.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((project, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white border border-gray-200 p-4 rounded-lg"
                  variants={leftToCenter}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <p className="text-gray-700 text-xs">Project {project} description here.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ⭐ TESTIMONIALS */}
<section className="py-12 px-4 bg-[#f7f7f7]">
  <h1 className="text-center text-4xl sm:text-5xl font-playfair font-bold mb-12">What Our Clients Say</h1>
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      { name: 'John Doe', feedback: 'They delivered our app on time with excellent quality!' },
      { name: 'Jane Smith', feedback: 'Professional team, great communication, highly recommended.' },
      { name: 'Michael Lee', feedback: 'Our website performance improved dramatically thanks to them.' },
    ].map((testimonial, idx) => (
      <motion.div
        key={idx}
        className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm"
        variants={leftToCenter}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-gray-700 text-sm mb-4">"{testimonial.feedback}"</p>
        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
      </motion.div>
    ))}
  </div>
</section>


{/* ⭐ TECHNOLOGIES */}
<section className="py-12 px-4 bg-[#f7f7f7]">
  <h1 className="text-center text-4xl sm:text-5xl font-playfair font-bold mb-12">Technologies We Use</h1>
  <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6">
    {['React', 'Node.js', 'MongoDB', 'Flutter', 'AWS', 'Firebase'].map((tech, idx) => (
      <motion.div
        key={idx}
        className="bg-white border border-gray-200 px-6 py-3 rounded-full shadow-sm text-sm font-semibold"
        variants={leftToCenter}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {tech}
      </motion.div>
    ))}
  </div>
</section>


{/* ⭐ WHY CHOOSE US */}
<section className="py-12 px-4 bg-[#f7f7f7]">
  <h1 className="text-center text-4xl sm:text-5xl font-playfair font-bold mb-12">Why Choose Us</h1>
  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    {[
      { title: 'Experienced Team', desc: 'Our developers and designers bring years of expertise to every project.' },
      { title: 'Client-Centric Approach', desc: 'We understand your goals and tailor solutions to meet them.' },
      { title: 'Agile Development', desc: 'Quick iterations with transparent communication and delivery.' },
      { title: 'Affordable Pricing', desc: 'High quality digital solutions at competitive rates.' },
    ].map((reason, idx) => (
      <motion.div
        key={idx}
        className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm"
        variants={leftToCenter}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3 className="text-xl font-playfair font-semibold mb-2">{reason.title}</h3>
        <p className="text-gray-700 text-sm">{reason.desc}</p>
      </motion.div>
    ))}
  </div>
</section>


      {/* ⭐ GET IN TOUCH */}
      <section className="py-12 px-4 text-center bg-[#f7f7f7]">
        <h1 className="text-4xl sm:text-5xl font-playfair font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-700 mb-6">Have questions or feedback? We want to hear from you!</p>
        <Link to="/contact">
          <button className="bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-full">Contact Us</button>
        </Link>
      </section>

    </div>
  );
}
