import Nav from "../styledComponents/Nav";
import { useEffect, useState, useRef } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const burgerRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!burgerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [burgerRef, setIsOpen]);

  return (
    <>
      <Nav id="desktop_nav">
        <div className="logo">My Portfolio</div>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </Nav>
      <nav id="burger_nav">
        <div className="logo">My Porfolio</div>
        <div ref={burgerRef} className="burger_menu">
          <div
            className={`burger_icon ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu_links ${isOpen ? "open" : ""}`}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}
