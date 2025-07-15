"use client";

import { useRef, useCallback } from "react";
import { Calendar, Sparkles } from "lucide-react";
import { useGsapJourneyAnimation } from "@/hooks/useGsapJourneyAnimation";

interface JourneyItem {
  id: string;
  title: string;
  description: string;
  image: string;
  year?: string;
}

const journeyData: JourneyItem[] = [
  {
    id: "1",
    title: "The Foundation",
    description:
      "Started as a small workshop, we began with a vision to design exceptional furniture that would stand the test of time.",
    image: "/photo-1581833971358-2c8b550f87b3.png",
    year: "1970s",
  },
  {
    id: "2",
    title: "Innovation Era",
    description:
      "Introduced advanced manufacturing techniques while preserving traditional craftsmanship, setting new standards in our industry.",
    image: "/photo-1540932239986-30128078f3c5.png",
    year: "1980s",
  },
  {
    id: "3",
    title: "Modern Leadership",
    description:
      "Leading today's furniture industry with cutting-edge designs, sustainable practices, and unwavering quality standards.",
    image: "/photo-1586023492125-27b2c045efd7.png",
    year: "2000s",
  },
];

const OurJourney: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const cardTitlesRef = useRef<HTMLHeadingElement[]>([]);
  const cardDescriptionsRef = useRef<HTMLParagraphElement[]>([]);

  const setCardRef = useCallback((el: HTMLDivElement | null, index: number) => {
    if (el) cardsRef.current[index] = el;
  }, []);

  const setCardTitleRef = useCallback(
    (el: HTMLHeadingElement | null, index: number) => {
      if (el) cardTitlesRef.current[index] = el;
    },
    []
  );

  const setCardDescriptionRef = useCallback(
    (el: HTMLParagraphElement | null, index: number) => {
      if (el) cardDescriptionsRef.current[index] = el;
    },
    []
  );

  useGsapJourneyAnimation({
    triggerRef: sectionRef,
    tagRef,
    h2Ref,
    pRef,
    footerRef,
    cardsRef,
    cardTitlesRef,
    cardDescriptionsRef,
  });

  return (
    <section ref={sectionRef} className="journey-section">
      <div className="container">
        <div className="journey-header">
          <div ref={tagRef} className="subtitle">
            <span>
              <Calendar size={18} stroke="#04d9c4" strokeWidth={2} />
            </span>
            Our Journey
          </div>
          <h2 className="section-title" ref={h2Ref}>
            Five Decades of Excellence
          </h2>
          <p className="journey-subtitle" ref={pRef}>
            These pivotal moments shaped Deka Furniture into todays premier
            luxury furniture brand.
          </p>
        </div>

        <div className="journey-container">
          <div className="journey-line" />
          {journeyData.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => setCardRef(el, index)}
              className={`journey-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="journey-dot" />
              <div className="journey-content">
                <div className="image-wrapper">
                  <div className="overlay" />
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="journey-text">
                  <h3
                    className="journey-item-title"
                    ref={(el) => setCardTitleRef(el, index)}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="journey-item-description"
                    ref={(el) => setCardDescriptionRef(el, index)}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="journey-footer" ref={footerRef}>
          <div className="footer-content">
            <h3 className="footer-title">
              <Sparkles size={24} stroke="#04d9c4" strokeWidth={2} />
              <span>Ready to be part of our story?</span>
            </h3>
            <p className="footer-description">
              Lets create something together with our expert furniture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;