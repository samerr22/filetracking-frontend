import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "@fontsource/playfair-display";
import "@fontsource/open-sans";
import Hero from "../img/dashboard.png";

const leftToCenter = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } }
};

export default function ProjectM() {
  return (
    <div className="bg-[#f7f7f7] text-[#2c2c2c] font-sans">
      {/* ⭐ HERO SECTION */}
      <section className="bg-[#f7f7f7] py-32 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-8 relative">
          {/* 🖼️ Image section */}
          <div className="w-full md:w-1/2 relative">
            <img
              src={Hero}
              alt="Technology Transforming Business"
              className="w-full h-auto"
            />

            {/* 📝 Overlay content (visible only on mobile) */}
            <div className="absolute inset-0 flex flex-col justify-center items-center md:hidden">
              <h1 className="text-3xl font-playfair font-bold mb-4 leading-tight text-center px-4 bg-white bg-opacity-20 rounded-lg inline-block">
                Understand how technology <br /> transforms business
              </h1>

              <p className="text-white text-center px-4 mb-4">
                Gain insights to drive smarter decisions <br />
                Empower your teams with connected solutions
              </p>

              <button className="bg-gray-800 hover:bg-black transition text-white px-6 py-3 rounded-full">
                Contact Us
              </button>
            </div>
          </div>

          {/* 📝 Text content (hidden on mobile, shown on desktop) */}
          <div className="hidden md:block md:w-1/2 text-left">
            <h1 className="text-3xl md:text-5xl font-playfair font-bold mb-6 leading-tight">
              Understand how technology <br /> transforms business
            </h1>
            <p className="text-gray-800 mb-6">
              Gain insights to drive smarter decisions. Empower your teams with
              connected solutions that enhance productivity, drive growth, and
              keep you ahead in a rapidly evolving digital landscape.
            </p>
            <button className="bg-gray-800 hover:bg-black transition text-white px-6 py-3 rounded-full">
              Get Demo
            </button>
          </div>
        </div>
      </section>

      {/*about us */}

      <section className="py-10 px-6 sm:px-10 bg-[#f7f7f7] relative overflow-hidden">
        <div className="flex justify-center items-center">
          <div>
            <motion.h1
              className="text-4xl sm:text-5xl font-playfair font-bold mb-12 text-gray-800"
              initial={{ opacity: 0, y: -50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              See the complete picture of your workforce
            </motion.h1>
          </div>
        </div>

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
              Manage remote teams with confidence
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              No more worrying or awkward conversations about whether your
              remote or hybrid teams are working.
              <br />
              <br />
              Keep an eye on everyone from one dashboard — wherever they are in
              the world.
              <br />
              <br />
              Understand and verify work done including:
              <br />
              <br />
              Screenshots, website and application usage Identify unusual work
              patterns Inactivity alerts, and productivity ratings
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={Hero} alt="About Seora" className="" />
          </motion.div>
        </div>
      </section>

      <section className="py-10 px-6 sm:px-10 bg-[#f7f7f7] relative overflow-hidden">
        {/* Optional decorative gradient blob */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl z-0"></div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          {/* Image */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={Hero} alt="About Seora" className="" />
          </motion.div>
          {/* Text Content */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-3xl sm:text-5xl font-playfair font-bold mb-6 text-gray-900">
              Spot work bottlenecks & team burnout
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Spot inefficient processes and overwhelmed teams. Identify who's
              struggling or disengaged. Reduce turnover by acting early.
              <br />
              <br />
              Accurate time and attendance tracking Payroll, schedules, time
              approvals Work-life balance metrics
            </p>

            <Link to="/Pricing">
              <button className="inline-block bg-gray-800 hover:bg-black text-white px-8 py-4 rounded-full shadow-md transition">
                Get a Demoo
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

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
              Protect your teams, profits, and business outcomes.
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Identify and improve processes Get rid of unused software
              licenses. Compare productivity metrics across teams.
              <br />
              <br />
              Application usage Web & app usage reports Executive dashboard
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={Hero} alt="About Seora" className="" />
          </motion.div>
        </div>
      </section>

      <section className="py-10 px-6 sm:px-10 bg-[#f7f7f7] relative overflow-hidden">
        {/* Optional decorative gradient blob */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl z-0"></div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          {/* Image */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={Hero} alt="About Seora" className="" />
          </motion.div>
          {/* Text Content */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-3xl sm:text-5xl font-playfair font-bold mb-6 text-gray-900">
              Retain your best people
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Identify team challenges before they affect morale. Give your best
              performers the support they need. Reduce unwanted turnover.
              <br />
              <br />
            </p>

            <Link to="/about">
              <button className="inline-block bg-gray-800 hover:bg-black text-white px-8 py-4 rounded-full shadow-md transition">
                Get a Demo
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ⭐ GET IN TOUCH */}
      <section className="py-12 px-4 text-center bg-[#f7f7f7]">
        <h1 className="text-4xl sm:text-5xl font-playfair font-bold mb-4">
          See exactly how work gets done
        </h1>
        <p className="text-gray-700 mb-6">
          Get clear insights into your team's workflow and efficiency.
        </p>
        <Link to="/contact">
          <button className="bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-full">
            Get a Demo
          </button>
        </Link>
      </section>
    </div>
  );
}
