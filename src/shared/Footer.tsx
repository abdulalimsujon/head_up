import { useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instragram.png";
import linkedin from "../assets/linkedin.png";
import socialIcon from "../assets/socialIcon.png";
import logo from "../assets/logo.png";

const Footer = () => {
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
    navigate(`/#${id}`);
  };

  return (
    <div className="mt-[140px] px-4 relative">
      <div className="max-w-[1400px] mx-auto bg-[#8200FF] rounded-[40px] px-6 py-10 relative">
        <img
          loading="lazy"
          src="/shapes/star.png"
          className="absolute bottom-0 left-[-2.5%] w-[56px] h-[56px] z-[-10]"
        />
        <div className="max-w-[1200px] mx-auto z-10">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            {/* Left Side */}
            <div className="lg:max-w-[382px] w-full">
              <div className="w-[120px] h-[32px] md:w-[180px] md:h-[36px] flex items-center">
                <img
                  loading="lazy"
                  className="w-full h-full object-contain"
                  src={logo}
                  alt="Logo"
                />
              </div>
              <p className="text-white text-[16px] leading-[160%] mt-5 font-urbanist font-light">
                Headup brings professional podcast setups to your location,
                providing all the equipment and expertise for flawless
                recordings.
              </p>
            </div>

            {/* Right Side */}
            <div className="lg:max-w-[617px] w-full lg:w-max flex flex-col gap-10">
              {/* Nav Links */}
              <div className="flex flex-wrap justify-center lg:justify-end gap-8 text-white md:text-xl font-urbanist font-light border-b border-white/20 w-full pb-5 mt-5">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.id}
                    to={
                      link.id === "equipment" ? `/${link.id}` : `/#${link.id}`
                    }
                    className={({ isActive }) =>
                      `hover:text-cyan-400 ${
                        link.id === "equipment"
                          ? isActive
                            ? "text-[#00FFF2]"
                            : ""
                          : location.hash === `#${link.id}`
                          ? "text-[#00FFF2]"
                          : ""
                      } `
                    }
                    onClick={() => handleNav(link.id)}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              {/* Social Media */}
              <div className="flex flex-col sm:flex-row justify-end items-center gap-5">
                <span className="text-[#FFD900] font-light font-urbanist text-lg">
                  Social media
                </span>
                <div className="flex gap-6">
                  <a href="#" className="w-4 h-4">
                    <img
                      loading="lazy"
                      src={facebook}
                      alt="Facebook"
                      className="w-full h-full object-contain"
                    />
                  </a>
                  <a href="#" className="w-4 h-4">
                    <img
                      loading="lazy"
                      src={socialIcon}
                      alt="twitter"
                      className="w-full h-full object-contain"
                    />
                  </a>
                  <a href="#" className="w-4 h-4">
                    <img
                      loading="lazy"
                      src={instagram}
                      alt="Instagram"
                      className="w-full h-full object-contain"
                    />
                  </a>
                  <a href="#" className="w-4 h-4">
                    <img
                      loading="lazy"
                      src={linkedin}
                      alt="LinkedIn"
                      className="w-full h-full object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-6 pt-6 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center text-white text-sm gap-4">
            <p className="text-center sm:text-left font-light font-urbanist">
              © Head Up Studio. All rights reserved. Site by{" "}
              <a href="#" className="underline hover:text-cyan-400">
                GCC-Marketing
              </a>
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 font-light font-urbanist">
              <a href="#" className="hover:text-cyan-400 underline">
                Copyright
              </a>
              <a href="#" className="hover:text-cyan-400 underline">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
