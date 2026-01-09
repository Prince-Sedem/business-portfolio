import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      title: "Transport Service",
      description:
        "Reliable and efficient transport solutions for your goods, across all routes.",
      image: "/images/rhys-moult-7eaFIKeo1MQ-unsplash.jpg",
    },
    {
      title: "Wholesale",
      description:
        "Bulk products handled with care, organized for smooth wholesale operations.",
      image: "/images/arum-visuals-VnMbc9Szs-E-unsplash.jpg",
    },
    {
      title: "Retail",
      description:
        "Customer-ready products available for purchase with excellent service.",
      image: "/images/pexels-tima-miroshnichenko-6169177.jpg",
    },
    {
      title: "Procurement",
      description:
        "Strategic sourcing and procurement to ensure your business gets the best.",
      image: "/images/istockphoto-1849962697-612x612.jpg",
    },
    {
      title: "Tire Sales and Branding Services",
      description:
        "Custom Tire Branding & Sales – Boost your brand and sell more with branded tires that get noticed on every road.",
      image: "/images/tire-servicing.png",
    },
    {
      title: "General Merchant",
      description:
        "Versatile trade services covering a wide range of products and goods.",
      image: "/images/grocery.png",
    },
  ];

  return (
    <section id="services" className="bg-gray-100 py-24 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-14"
        >
          Our Services
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map(function (service, index) {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -30 }} // start above
                whileInView={{ opacity: 1, y: 0 }} // fade down
                viewport={{ amount: 0.3 }} // triggers when 30% visible
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
