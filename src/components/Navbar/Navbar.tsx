import { useState } from "react";
import Logo from "../../assets/logo-text.png";
import { Button } from "@heroui/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative border border-base-300 bg-base-100/90 px-5 py-3 shadow-sm backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Hamburger - Mobile Only */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-3xl md:hidden"
        >
          ☰
        </button>

        {/* Logo */}
        <div>
          <img src={Logo} alt="Logo" className="w-36 md:w-auto" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-8">
            <li>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-[#D91B7E]"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-[#D91B7E]"
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-[#D91B7E]"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-[#D91B7E]"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-[#D91B7E]"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="md:text-base">
            Sign In
          </Button>

          <Button size="sm" className="bg-[#D91B7E] text-white md:text-base">
            Sign Up
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-t border-base-300 bg-base-100 p-5 shadow-lg md:hidden">
          <ul className="flex flex-col gap-5">
            <li>
              <a
                href="#"
                className="block transition-colors duration-300 hover:text-[#D91B7E]"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block transition-colors duration-300 hover:text-[#D91B7E]"
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block transition-colors duration-300 hover:text-[#D91B7E]"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block transition-colors duration-300 hover:text-[#D91B7E]"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block transition-colors duration-300 hover:text-[#D91B7E]"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
