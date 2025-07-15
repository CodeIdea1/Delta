"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroOptions {
  heroRef: React.RefObject<HTMLElement | null>;
  bgRef: React.RefObject<HTMLElement | null>;
  contentRef: React.RefObject<HTMLElement | null>;
}

export function useGsapHeroAnimation(heroOptions: HeroOptions) {
  useEffect(() => {
    if (
      !heroOptions?.heroRef?.current ||
      !heroOptions?.bgRef?.current ||
      !heroOptions?.contentRef?.current
    )
      return;

    const { heroRef, bgRef, contentRef } = heroOptions;

    contentRef.current!.classList.remove("pre-hidden");
    gsap.from(contentRef.current!.children, {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 1,
      delay: 1.5,
      ease: "power2.out",
    });


    // Background
    gsap.to(bgRef.current, {
      scale: 1.4,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const scale = 1 + self.progress * 0.4;
          gsap.set(bgRef.current, { scale });
        },
        onEnterBack: () => {
          gsap.to(bgRef.current, {
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        },
      },
    });

    //Content
    gsap.to(contentRef.current, {
      opacity: 0,
      y: -30,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "50% top",
        scrub: 1,
      },
    });
  }, [heroOptions]);
}
