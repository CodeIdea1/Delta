"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseGsapJourneyAnimationOptions {
    triggerRef: React.RefObject<HTMLElement | null>;
    tagRef: React.RefObject<HTMLElement | null>;
    h2Ref: React.RefObject<HTMLHeadingElement | null>;
    pRef: React.RefObject<HTMLParagraphElement | null>;
    cardsRef: React.MutableRefObject<HTMLElement[]>;
    cardTitlesRef: React.MutableRefObject<HTMLElement[]>;
    cardDescriptionsRef: React.MutableRefObject<HTMLElement[]>;
    footerRef?: React.RefObject<HTMLElement | null>;
    }

    export function useGsapJourneyAnimation({
    triggerRef,
    tagRef,
    h2Ref,
    pRef,
    cardsRef,
    cardTitlesRef,
    cardDescriptionsRef,
    footerRef,
    }: UseGsapJourneyAnimationOptions) {
    useEffect(() => {
        const trigger = triggerRef.current;
        if (!trigger) return;

        const headerTl = gsap.timeline({
        scrollTrigger: { trigger, start: "top 50%" },
        });

        headerTl.fromTo(
        [tagRef.current, h2Ref.current, pRef.current],
        { opacity: 0, y: 30, scale: (i) => (i === 1 ? 0.3 : 1) },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out", stagger: 0.2 }
        );

        cardsRef.current.forEach((card, index) => {
        const cardTl = gsap.timeline({
            scrollTrigger: {
            trigger: card,
            start: "top 55%",
            toggleActions: "play none none none",
            },
        });

        cardTl
            .fromTo(
            card,
            { opacity: 0, y: 50, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power1.out" }
            )
            .fromTo(
            [cardTitlesRef.current[index], cardDescriptionsRef.current[index]],
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.1 },
            "-=0.4"
            );
        });

        if (footerRef?.current) {
        gsap.fromTo(
            footerRef.current,
            { opacity: 0, y: 30 },
            {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top 55%",
            },
            }
        );
        }

        return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, [triggerRef, tagRef, h2Ref, pRef, cardsRef, cardTitlesRef, cardDescriptionsRef, footerRef]);
}