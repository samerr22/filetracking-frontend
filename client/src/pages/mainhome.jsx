import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "@fontsource/playfair-display";
import "@fontsource/open-sans";
import Hero from "../img/hero.png";
import Cube from "../img/cube.png";
import Settings from "../img/settings.png";

const leftToCenter = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } }
};

export default function HomePage() {
  return (
    <div className="bg-[#f7f7f7] text-[#2c2c2c] font-sans">
      {/* ⭐ HERO SECTION */}
     <section className="bg-[#f7f7f7] px-4">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-8 relative">
    
    {/* 🖼️ Image section */}
    <div className="w-full md:w-1/2 relative">
      <img
        src={Hero}
        alt="Skincare"
        className="w-full h-auto"
      />

      {/* 📝 Overlay content (visible only on mobile) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center md:hidden ">
        <h1 className="text-3xl font-playfair font-bold mb-4 leading-tight text-center px-4 bg-white bg-opacity-20  rounded-lg inline-block">
  Innovative AI Solutions <br /> & IoT Products for a Connected World
</h1>

        <button className="bg-gray-800 hover:bg-black transition text-white px-6 py-3 rounded-full">
          Contact Us
        </button>
      </div>
    </div>

    {/* 📝 Text content (hidden on mobile, shown on desktop) */}
    <div className="hidden md:block md:w-1/2 text-left">
      <h1 className="text-3xl md:text-5xl font-playfair font-bold mb-6 leading-tight">
         Innovative AI Solutions <br /> & IoT Products for a Connected World
      </h1>
      <button className="bg-gray-800 hover:bg-black transition text-white px-6 py-3 rounded-full">
        Contact Us
      </button>
    </div>

  </div>
</section>


      <section className="text-center px-4 py-20 bg-[#f7f7f7] relative overflow-hidden">
        <motion.h1
          className="text-4xl sm:text-5xl font-playfair font-bold mb-12 text-gray-800"
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          We Ensure The Best Services For Our Clients
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Mobile App Development",
              desc: "We build user-friendly and feature-rich mobile applications for both Android and iOS platforms.",
              icon: "📱"
            },
            {
              title: "Web Application Development",
              desc: "We specialize in creating scalable, secure, and efficient web applications tailored to your business needs.",
              icon: "💻"
            },
            {
              title: "Website Development",
              desc: "Our team designs and develops responsive websites that enhance your online presence and user experience.",
              icon: "🌐"
            },
            {
              title: "Software Development",
              desc: "We create custom software solutions to streamline your business operations and improve productivity.",
              icon: "⚙️"
            },
            {
    title: "AI Solutions",
    desc: "Innovative artificial intelligence solutions to automate processes and enhance decision-making.",
    icon: "🤖"
  },
  {
    title: "IoT Product Manufacturing",
    desc: "Designing and manufacturing IoT products to build a connected and smarter world.",
    icon: "🌐"
  }
          ].map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300"
              variants={leftToCenter}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex justify-center items-center">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100 text-2xl">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-3 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Optional: decorative shape */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      </section>

      {/*about us */}

      <section className="py-10 px-6 sm:px-10 bg-[#f7f7f7] relative overflow-hidden">
        {/* Optional decorative gradient blob */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl z-0"></div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          {/* Text Content */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-3xl sm:text-5xl font-playfair font-bold mb-6 text-gray-900">
              About Us
            </h1>
           <p className="text-gray-700 text-lg leading-relaxed mb-8">
  At <span className="font-semibold text-blue-600">Seora</span>, we deliver innovative digital solutions that empower businesses to thrive in today’s connected world. Our expertise spans <span className="font-semibold">mobile app development</span>, crafting user-friendly apps for Android and iOS that engage and retain customers. We build <span className="font-semibold">web applications</span> tailored to your unique needs—scalable, secure, and efficient—helping you streamline operations and expand your reach.
  <br /><br />
  Our <span className="font-semibold">website development</span> services create responsive, visually stunning sites that strengthen your brand presence. We also develop <span className="font-semibold">custom software</span> designed to optimize workflows and boost productivity. Leading the way in technology, we offer <span className="font-semibold">AI solutions</span> that automate processes and provide actionable insights for smarter decision-making.
  <br /><br />
  Additionally, our <span className="font-semibold">IoT product manufacturing</span> connects devices and systems, enabling smarter environments and improved efficiency. At Seora, we’re not just service providers — we’re your technology partner dedicated to turning ideas into powerful, future-ready solutions.
</p>

  

            <Link to="/about">
              <button className="inline-block bg-gray-800 hover:bg-black text-white px-8 py-4 rounded-full shadow-md transition">
                Learn More
              </button>
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={Cube}
              alt="About Seora"
              className=""
            />
          </motion.div>
        </div>tfpdI
      </section>

      {/* ⭐ VALUES & EXPERTISE */}
      <section className="py-12 px-4 bg-[#f7f7f7]">
        <motion.h1
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-4xl sm:text-5xl font-playfair font-bold mb-12"
        >
          Our Values & Our Expertise
        </motion.h1>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Values */}
          <div className="space-y-6">
            {[
              {
                title: "Innovation",
                desc: "We thrive on solving complex problems with creative, high-tech solutions."
              },
              {
                title: "Quality",
                desc: "Delivering secure, reliable, and user-friendly products."
              },
              {
                title: "Collaboration",
                desc: "Working together with clients to meet expectations."
              },
              {
                title: "Integrity",
                desc: "Transparent and ethical in everything we do."
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm"
                variants={leftToCenter}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="text-xl font-playfair font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-700 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Expertise */}
          <div className="space-y-6">
            {[
              {
                title: "Custom Software Development",
                desc: "Tailored solutions to improve business efficiency."
              },
              {
                title: "Mobile App Development",
                desc: "Building intuitive apps for iOS and Android."
              },
              {
                title: "Web Application Development",
                desc: "Creating responsive, feature-rich web applications."
              },
              {
                title: "Cloud Solutions",
                desc: "Helping businesses adopt cloud technology efficiently."
              }
            ].map((expertise, idx) => (
              <motion.div
                key={idx}
                className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm"
                variants={leftToCenter}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="text-xl font-playfair font-semibold mb-2">
                  {expertise.title}
                </h3>
                <p className="text-gray-700 text-sm">{expertise.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ⭐ PROJECTS  <section className="py-12 px-4 bg-[#f7f7f7]">
        <h1 className="text-center text-4xl sm:text-5xl font-playfair font-bold mb-12">
          Our Existing Projects
        </h1>
        <div className="max-w-6xl mx-auto space-y-12">
          <div>
            <h3 className="text-2xl font-playfair font-semibold mb-4">
              Innovative Web App
            </h3>
            <p className="text-gray-700 mb-4">
              A custom web application designed to solve complex problems with a
              user-friendly interface.
            </p>
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
                  <p className="text-gray-700 text-xs">
                    Project {project} description here.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
     

   


      {/* ⭐ TECHNOLOGIES  <section className="py-12 px-4 bg-[#f7f7f7]">
        <h1 className="text-center text-4xl sm:text-5xl font-playfair font-bold mb-12">
          Technologies We Use
        </h1>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6">
          {["React", "Node.js", "MongoDB", "Flutter", "AWS", "Firebase"].map(
            (tech, idx) => (
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
            )
          )}
        </div>
      </section> */}
     


   
{/* ⭐ WHY CHOOSE US */}
<section className="py-12 px-4 bg-[#f7f7f7]">
  <h1 className="text-center text-4xl sm:text-5xl font-playfair font-bold mb-12">
    Why Choose Us
  </h1>

  <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-44 gap-10">
    {/* ⭐ Reasons grid */}
    <div className="flex flex-col gap-6">
      {[
        {
          title: "Experienced Team",
          desc: "Our developers and designers bring years of expertise to every project.",
          img: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
        },
        {
          title: "Client-Centric Approach",
          desc: "We understand your goals and tailor solutions to meet them.",
          img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        },
        {
          title: "Agile Development",
          desc: "Quick iterations with transparent communication and delivery.",
          img: "https://cdn-icons-png.flaticon.com/512/2721/2721299.png"
        },
        {
          title: "Affordable Pricing",
          desc: "High quality digital solutions at competitive rates.",
          img: "https://cdn-icons-png.flaticon.com/512/1040/1040230.png"
        }
      ].map((reason, idx) => (
        <motion.div
          key={idx}
          className="bg-none border-none p-6 rounded-lg flex items-center gap-6 hover:shadow-md transition"
          variants={leftToCenter}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={reason.img}
            alt={reason.title}
            className="w-14 h-14 object-contain"
          />
          <div>
            <h3 className="text-xl font-playfair font-semibold mb-1">
              {reason.title}
            </h3>
            <p className="text-gray-700 text-sm">{reason.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>

    {/* ⭐ Big horizontal image */}
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <img
        src={Settings} // replace with your own image URL
        alt="Why Choose Us"
        className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px]"
      />
    </motion.div>
  </div>
</section>

   {/* ⭐ TESTIMONIALS */}
   
<section className="py-12 px-4 bg-[#f7f7f7]">
  <h1 className="text-center text-4xl sm:text-5xl font-playfair font-bold mb-12">
    What Our Clients Say
  </h1>
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        name: "John Doe",
        feedback: "They delivered our app on time with excellent quality!",
        link: "https://www.upwork.com/freelancers/~john_doe" // replace with actual Upwork link
      },
      {
        name: "Jane Smith",
        feedback: "Professional team, great communication, highly recommended.",
        link: "https://www.upwork.com/freelancers/~jane_smith"
      },
      {
        name: "Michael Lee",
        feedback: "Our website performance improved dramatically thanks to them.",
        link: "https://www.upwork.com/freelancers/~michael_lee"
      }
    ].map((testimonial, idx) => (
      <motion.a
        href={testimonial.link}
        target="_blank"
        rel="noopener noreferrer"
        key={idx}
        className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm block hover:shadow-md transition"
        variants={leftToCenter}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-gray-700 text-sm mb-4">
          "{testimonial.feedback}"
        </p>
        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
        <p className="text-xs text-gray-500 mt-2">View on Upwork</p>
      </motion.a>
    ))}
  </div>
</section>





    


      {/* ⭐ GET IN TOUCH */}
      <section className="py-12 px-4 text-center bg-[#f7f7f7]">
        <h1 className="text-4xl sm:text-5xl font-playfair font-bold mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-700 mb-6">
          Have questions or feedback? We want to hear from you!
        </p>
        <Link to="/contact">
          <button className="bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-full">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
}
