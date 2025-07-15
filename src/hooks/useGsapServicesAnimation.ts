"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseGsapServicesAnimationOptions {
  triggerRef: React.RefObject<HTMLDivElement>;
  tagRef: React.RefObject<HTMLDivElement>;
  h2Ref: React.RefObject<HTMLHeadingElement>;
  pRef: React.RefObject<HTMLParagraphElement>;
  cardsRef: React.MutableRefObject<HTMLElement[]>;
  cardTitlesRef: React.MutableRefObject<HTMLElement[]>;
  cardDescriptionsRef: React.MutableRefObject<HTMLElement[]>;
  featureRefs?: React.MutableRefObject<HTMLElement[][]>;
  viewMoreRefs?: React.MutableRefObject<HTMLElement[]>;
}

export function useGsapServicesAnimation({
  triggerRef,
  tagRef,
  h2Ref,
  pRef,
  cardsRef,
  cardTitlesRef,
  cardDescriptionsRef,
  featureRefs,
  viewMoreRefs,
}: UseGsapServicesAnimationOptions) {
  useEffect(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;

    const tl = gsap.timeline({
      scrollTrigger: { trigger, start: "top 50%" },
    });

    tl.fromTo(
      [tagRef.current, h2Ref.current, pRef.current],
      { opacity: 0, y: 30, scale: (i) => (i === 0 ? 1 : i === 1 ? 0.3 : 1), rotate: (i) => (i === 0 ? 400 : 0) },
      { opacity: 1, y: 0, scale: 1, rotate: 0, duration: 1, ease: "power2.out", stagger: 0.2 }
    );

    tl.fromTo(
      cardsRef.current,
      { opacity: 0, y: 90, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power1.out", stagger: 0.1 },
      "-=0.5"
    );

    tl.fromTo(
      [...cardTitlesRef.current, ...cardDescriptionsRef.current],
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.1 },
      "-=0.4"
    );

    if (featureRefs?.current) {
      featureRefs.current.forEach((group) => {
        tl.fromTo(
          group,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.1 },
          "-=0.3"
        );
      });
    }

    if (viewMoreRefs?.current) {
      tl.fromTo(
        viewMoreRefs.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "power2.out", stagger: 0.1 },
        "-=0.3"
      );
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [
    triggerRef,
    tagRef,
    h2Ref,
    pRef,
    cardsRef,
    cardTitlesRef,
    cardDescriptionsRef,
    featureRefs,
    viewMoreRefs,
  ]);
}
