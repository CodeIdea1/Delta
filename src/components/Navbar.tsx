"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { useGsapNavbarAnimation } from "@/hooks/useGsapNavbarAnimation";

export default function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useGsapNavbarAnimation({ headerRef, navRef, isMenuOpen, isMobile });

  return (
    <header ref={headerRef} className="navbar-hidden">
      <div className="container">
        <div className="logo">
          <Image src="/delta_logo_simple2.png" alt="Logo" fill />
        </div>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav ref={navRef} className={isMenuOpen ? "active" : ""}>
          <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link href="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </nav>

        <div className="navbar-phone">
          <FaPhone className="phone-icon" />
          <span className="phone-number">+20 123 456 789</span>
        </div>
      </div>
    </header>
  );
}
