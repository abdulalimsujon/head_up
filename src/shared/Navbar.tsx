import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import { Menu, X } from "lucide-react";
import arrow from "../assets/arrow.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Gallery", id: "gallery" },
    { name: "Services", id: "service" },
    { name: "Equipment", id: "equipment" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          console.warn(`Element with ID "${id}" not found`);
        }
      }, 100);
    }
  }, [location]);

  const handleNav = (id: string) => {
    navigate(id === "equipment" ? `/${id}` : `/#${id}`);
    setIsOpen(false);
  };

  // Determine the current section from the URL hash
  const currentSection = location.hash.replace("#", "");

  return (
    <nav className="w-full flex justify-center items-center px-4 mt-5 md:mt-10 sticky top-0 left-0 z-[500]">
      <div className="w-11/12 md:max-w-[1200px] py-5 rounded-[40px] bg-[#8200FF] flex items-center justify-between px-6 relative shadow-xl">
        {/* Logo */}
        <div className="w-[110px] h-[24px] md:w-[140px] md:h-[36px] flex items-center">
          <img
            loading="lazy"
            className="w-full h-full object-contain cursor-pointer"
            src={logo}
            alt="Logo"
          />
        </div>

        {/* Hamburger menu (mobile) */}
        <div className="lg:hidden flex items-center">
          <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="text-white w-6 h-6" />
            ) : (
              <Menu className="text-white w-6 h-6" />
            )}
          </button>
        </div>

        {/* Nav links (desktop) */}
        <div className="hidden lg:flex gap-6 text-white absolute left-1/2 transform -translate-x-1/2 text-lg font-light">
          {navLinks.map((link) =>
            link.id === "equipment" ? (
              <NavLink
                key={link.id}
                to={`/${link.id}`}
                className={({ isActive }) =>
                  `px-2 font-urbanist cursor-pointer ${
                    isActive ? "text-[#00FFF2]" : ""
                  }`
                }
                onClick={() => handleNav(link.id)}
              >
                {link.name}
              </NavLink>
            ) : (
              <Link
                key={link.id}
                to={`/#${link.id}`}
                className={`px-2 font-urbanist cursor-pointer ${
                  currentSection === link.id ? "text-[#00FFF2]" : ""
                }`}
                onClick={() => handleNav(link.id)}
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* SignUp Button */}
        <div className="hidden gap-[12px] rounded-[99px] lg:flex items-center bg-white font-urbanist px-2 py-2 ps-5">
          <Link
            to="/#contact"
            className={`flex items-center justify-between gap-[12px] cursor-pointer ${
              currentSection === "contact" ? "text-[#00FFF2]" : ""
            }`}
            aria-label="Book a podcast session now"
            onClick={() => handleNav("contact")}
          >
            <div className="text-[18px] tracking-normal font-urbanist text-[#8200ff] font-semibold">
              Book Now
            </div>
            <div className="h-[35px] w-[35px]">
              <img
                loading="lazy"
                className="w-full h-full rounded-full bg-[#f3e6ff] p-2"
                src={arrow}
                alt="Arrow pointing right"
              />
            </div>
          </Link>
        </div>

        {/* Mobile Nav Links */}
        {isOpen && (
          <div className="absolute top-[100%] left-0 w-full bg-[#8200FF] text-white flex flex-col gap-4 p-4 mt-2 rounded-[20px] z-10 lg:hidden">
            {navLinks.map((link) =>
              link.id === "equipment" ? (
                <NavLink
                  key={link.id}
                  to={`/${link.id}`}
                  className={({ isActive }) =>
                    `px-2 font-urbanist cursor-pointer ${
                      isActive ? "text-[#00FFF2]" : ""
                    }`
                  }
                  onClick={() => handleNav(link.id)}
                >
                  {link.name}
                </NavLink>
              ) : (
                <Link
                  key={link.id}
                  to={`/#${link.id}`}
                  className={`px-2 font-urbanist cursor-pointer ${
                    currentSection === link.id ? "text-[#00FFF2]" : ""
                  }`}
                  onClick={() => handleNav(link.id)}
                >
                  {link.name}
                </Link>
              )
            )}
            <div className="flex items-center justify-between border-t pt-4 mt-2">
              <div className="gap-[12px] rounded-[99px] flex items-center bg-white font-urbanist px-2 py-2 ps-5">
                <Link
                  to="/#contact"
                  className={`flex items-center justify-between gap-[12px] cursor-pointer ${
                    currentSection === "contact" ? "text-[#00FFF2]" : ""
                  }`}
                  aria-label="Book a podcast session now"
                  onClick={() => handleNav("contact")}
                >
                  <div className="text-[18px] tracking-normal font-urbanist text-[#8200ff] font-semibold">
                    Book Now
                  </div>
                  <div className="h-[35px] w-[35px]">
                    <img
                      loading="lazy"
                      className="w-full h-full rounded-full bg-[#f3e6ff] p-2"
                      src={arrow}
                      alt="Arrow pointing right"
                    />
                  </div>
                </Link>
              </div>
              <div className="w-[24px] h-[24px] bg-[#F3E6FF] rounded-full flex justify-center items-center">
                <img
                  loading="lazy"
                  className="w-[16px] h-[18px]"
                  src={user}
                  alt="User Icon"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
