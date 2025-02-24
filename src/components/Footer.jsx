import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  PhoneIcon as WhatsApp,
} from "lucide-react";
import defender from "../assets/photos/defender.jpg"; // Import your local background image
import logo from "../assets/logo/logonew.png";
import {Link} from "react-router-dom";

const Footer = () => {
  const handleSmoothScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="footer"
      className="relative flex flex-col min-h-screen bg-cover bg-center text-white py-40"
      style={{ backgroundImage: `url(${defender})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Top Spacing (Invisible) */}
      <div
        className="w-full"
        style={{
          height: "10px", // Adjust this height to control the space above the main footer content
        }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 flex flex-col justify-between flex-grow">
        {/* Main Footer Content */}
        <div className="flex-grow">
          <div className="grid md:grid-cols-3 gap-12 text-gray-300">
            {/* Brand Section */}
            <div>
              <img src={logo} alt="BuffX Logo" className="mb-6 h-12" />
              <p className="mt-4">
                Where every car Becomes the work of Art! Expert Car Detailing
                Service | Ceramic | PPF Join us on the Road to Automotive
                Brilliance!
              </p>
              <h3 className="mt-6 font-semibold">We Are Social</h3>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.instagram.com/buffx_india?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500"
                >
                  <Instagram size={24} />
                </a>

                <a
                  href="mailto:buffxindia@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-500"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold">Quick Links</h3>
              <div className="mt-6 space-y-4">
                <p
                  className="cursor-pointer hover:text-yellow-500"
                  onClick={() => handleSmoothScroll("about")}
                >
                  About Us
                </p>
                <p
                  className="cursor-pointer hover:text-yellow-500"
                  onClick={() => handleSmoothScroll("testimonials")}
                >
                  Testimonials
                </p>
                <Link to="/our-services" className="hover:text-yellow-500">
                  Our Services
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold">Contact</h3>
              <div className="mt-6 space-y-4">
                <p className="flex items-center gap-2">
                  <Phone size={18} /> +91 70709 40199
                </p>
                <p className="flex items-start gap-2">
                  <MapPin size={18} className="mt-1" />
                  BuffX: The Auto Detailer <br />
                  96FM+MC4, NH39, Concop mecon colony <br />
                  Ranchi-834002, Jharkhand
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-1">
          <div className="border-t border-gray-600 pt-3">
            <p className="text-center text-gray-400 text-sm pt-8">
              &copy; 2025 BuffX: The Auto Detailer. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
