"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface NavbarOptions {
  headerRef?: React.RefObject<HTMLElement | null>;
  navRef?: React.RefObject<HTMLElement | null>;
  isMenuOpen?: boolean;
  isMobile?: boolean;
}

export function useGsapNavbarAnimation(navbarOptions: NavbarOptions) {
  useEffect(() => {
    const header = navbarOptions?.headerRef?.current;
    if (!header) return;

    header.classList.add("navbar-hidden");

    gsap.to(header, {
      delay: 0.4,
      duration: 0.6,
      ease: "power2.out",
      opacity: 1,
      y: 0,
      onStart: () => header.classList.remove("navbar-hidden"),
    });
  }, [navbarOptions?.headerRef]);

  useEffect(() => {
    const header = navbarOptions?.headerRef?.current;
    if (!header) return;

    const navbarStyles = {
      active: {
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid oklab(79.4875% -.141321 -.00656533 / .3)",
        backgroundColor: "rgba(4, 9, 9, 0.96)",
      },
      inactive: {
        backgroundColor: "transparent",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        borderBottom: "none",
      },
    };

    ScrollTrigger.create({
      start: 20,
      trigger: document.body,
      onEnter: () =>
        gsap.to(header, {
          duration: 0.3,
          ease: "power2.out",
          css: navbarStyles.active,
        }),
      onLeaveBack: () =>
        gsap.to(header, {
          duration: 0.3,
          ease: "power2.out",
          css: navbarStyles.inactive,
        }),
    });
  }, [navbarOptions?.headerRef]);

  useEffect(() => {
    if (!navbarOptions?.navRef?.current || !navbarOptions?.isMobile) return;

    const nav = navbarOptions.navRef.current;
    const links = nav.querySelectorAll("a");
    const tl = gsap.timeline();

    if (navbarOptions.isMenuOpen) {
      gsap.set(nav, { height: "auto" });
      const autoHeight = nav.offsetHeight;
      gsap.set(nav, { height: 0, opacity: 0 });
      gsap.set(links, { opacity: 0, x: -30 });

      tl.to(nav, {
        height: autoHeight + 20,
        opacity: 1,
        padding: "20px 0",
        duration: 0.3,
        ease: "power2.out",
      }).to(links, {
        opacity: 1,
        x: 0,
        duration: 0.3,
        ease: "power2.out",
        stagger: 0.1,
      });
    } else {
      tl.to(links, {
        opacity: 0,
        x: -30,
        duration: 0.2,
        ease: "power2.out",
        stagger: 0.05,
      }).to(nav, {
        height: 0,
        opacity: 0,
        padding: "0",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [navbarOptions?.isMenuOpen, navbarOptions?.isMobile, navbarOptions?.navRef]);

  useEffect(() => {
    if (!navbarOptions?.navRef?.current || navbarOptions?.isMobile) return;

    gsap.set(navbarOptions.navRef.current, { clearProps: "all" });
    gsap.set(
      navbarOptions.navRef.current.querySelectorAll("a"),
      { clearProps: "all" }
    );
  }, [navbarOptions?.isMobile, navbarOptions?.navRef]);
}
