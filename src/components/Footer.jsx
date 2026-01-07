import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";



function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div className="">
            <div className="bg-white rounded-full shadow-lg inline-block">
            <img
             src="/images/Fedostar-logo.png" 
             alt="" 
             className="w-20 h-20 object-contain"
            />

            </div>
          <h2 className="text-2xl font-bold text-white">Fedostar Enterprise</h2>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "Services", "Contact"].map((home) => (
              <li key={home}>
                <a href={`#${home.toLowerCase()}`} className="hover:text-white transition">
                  {home}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2">
            {["Transport", "Wholesale", "Retail", "Procurement", "Tire Branding", "General Merchant"].map((service) => (
              <li key={service}>
                <a href="#" className="hover:text-white transition">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>

          <div className="space-y-3 text-gray-300">
            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-yellow-400 mt-1" />
              <span>
                5 Bobo Street, Dome <br />
                Accra, Ghana
              </span>
            </p>
            <p className="flex items-start gap-3">
              <FaEnvelope t className="text-yellow-400 mt-1" />
              <span>
                fedostarenterprise@gmail.com
              </span>
            </p>
            <p className="flex items-start gap-3">
              <FaPhoneAlt t className="text-green-400 mt-1" />
              <span>
                +233 24 078 6972
              </span>
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center text-gray-500 py-6 mt-10">
        &copy; {new Date().getFullYear()} Fedostar Enterprise. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
