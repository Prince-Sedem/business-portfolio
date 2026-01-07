import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }} // trigger when 30% visible, remove once:true
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Our Company
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            We specialize in providing comprehensive services across multiple industries. 
            Our expertise includes transport services, wholesale, retail, procurement, 
            tire branding services, and general merchant activities. We are committed to 
            delivering quality, reliability, and excellence in every project we handle.
          </p>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Whether you need goods transported efficiently, products procured strategically, 
            or your brand’s tires to stand out, we provide solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }} // trigger when 30% visible
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <img
            src="/images/adrian-sulyok-sczNLg6rrhQ-unsplash.jpg"
            alt="About"
            className="w-full rounded-3xl shadow-xl object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default About;
