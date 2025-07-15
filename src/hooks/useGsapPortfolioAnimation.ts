"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseGsapPortfolioAnimationOptions {
    triggerRef: React.RefObject<HTMLElement | null>;
    tagRef: React.RefObject<HTMLElement | null>;
    h2Ref: React.RefObject<HTMLHeadingElement | null>;
    pRef: React.RefObject<HTMLParagraphElement | null>;
    p2Ref: React.RefObject<HTMLParagraphElement | null>;
    imgRef: React.RefObject<HTMLElement | null>;
    statsItemRefs: React.MutableRefObject<HTMLElement[]>;
    cardsRef: React.MutableRefObject<HTMLElement[]>;
    strengthsRef: React.MutableRefObject<HTMLElement[]>;
    }

    export function useGsapPortfolioAnimation({
    triggerRef,
    tagRef,
    h2Ref,
    pRef,
    p2Ref,
    imgRef,
    statsItemRefs,
    cardsRef,
    strengthsRef,
    }: UseGsapPortfolioAnimationOptions) {
    useEffect(() => {
        const trigger = triggerRef.current;
        if (!trigger) return;

        const tl = gsap.timeline({
        scrollTrigger: { trigger, start: "top 60%" },
        });

        tl.fromTo(
        [tagRef.current, h2Ref.current, pRef.current],
        { opacity: 0, y: 30, scale: (i) => (i === 1 ? 0.3 : 1) },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out", stagger: 0.2 }
        );

        tl.fromTo(
        statsItemRefs.current,
        { opacity: 0, scale:0 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "power1.out", stagger: 0.1 },
        "-=0.5"
        );

        tl.fromTo(
        [p2Ref.current, ...cardsRef.current],
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.1 },
        "-=0.4"
        );

        if (imgRef.current) {
        gsap.fromTo(
            imgRef.current,
            {  y: 40, scale: 1 },
            {
            
            y: 0,
            scale: 1.2,
            scrollTrigger: {
                trigger: imgRef.current,
                start: "top 80%",
                end: "bottom 20%",
                scrub: true,
            },
            }
        );
        }

        tl.fromTo(
        strengthsRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out", stagger: 0.1 },
        "-=0.3"
        );

        return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, [triggerRef, tagRef, h2Ref, pRef, p2Ref, imgRef, statsItemRefs, cardsRef, strengthsRef]);
}