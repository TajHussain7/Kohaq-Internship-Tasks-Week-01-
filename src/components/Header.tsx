import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "About", href: "about" },
    { name: "Courses", href: "courses" },
    { name: "Schedule", href: "schedule" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container-custom py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-0.5"
          >
            <img
              src="/kohaq-logo.png"
              alt="Kohaq Logo"
              className="h-20 w-auto"
            />
            <h1 className="text-5xl font-bold text-gray-800 tracking-tight">
              Kohaq
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-gray-600 hover:text-primary cursor-pointer transition-colors text-lg font-medium tracking-wide"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="register"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn btn-primary text-lg font-semibold tracking-wide px-6 py-2.5"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4"
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block py-2 text-gray-600 hover:text-primary cursor-pointer transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="register"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="block py-2 text-primary font-semibold hover:text-secondary cursor-pointer transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Register Now
            </Link>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
