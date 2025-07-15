"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Crown,
  Star,
  Hammer,
  Scissors,
  Menu,
  Paintbrush,
} from "lucide-react";
import { useGsapServicesAnimation } from "@/hooks/useGsapServicesAnimation";

const services = [
  {
    title: "Custom Furniture Manufacturing",
    description: "Bespoke pieces crafted to your exact specifications.",
    image: "/61IPL8FxFJL._AC_SX679_.jpg",
    features: ["Custom Design", "Premium Materials"],
    link: "/services/custom",
    icon: <Hammer size={41} />,
  },
  {
    title: "Refurbishment & Re-upholstery",
    description: "Reupholstery with premium European fabrics.",
    image: "/photo-1586023492125-27b2c045efd7.png",
    features: ["European Fabrics", "Custom Cushioning"],
    link: "/services/refurbishment",
    icon: <Scissors size={41} />,
  },
  {
    title: "Curtains & Blinds",
    description: "Curtains with motorized smart options.",
    image: "/photo-1540932239986-30128078f3c5.png",
    features: ["Smart Home Integration", "Custom Sizes"],
    link: "/services/curtains",
    icon: <Menu size={41} />,
  },
  {
    title: "Outdoor Furniture Upholstery",
    description: "Weather-resistant covers and fabrics.",
    image: "/photo-1555041469-a586c61ea9bc.png",
    features: ["UV Protection", "Weather Resistant"],
    link: "/services/outdoor",
    icon: <Paintbrush size={41} />,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null!);
  const tagRef = useRef<HTMLDivElement>(null!);
  const h2Ref = useRef<HTMLHeadingElement>(null!);
  const pRef = useRef<HTMLParagraphElement>(null!);

  const cardsRef = useRef<HTMLElement[]>([]);
  const cardTitlesRef = useRef<HTMLElement[]>([]);
  const cardDescriptionsRef = useRef<HTMLElement[]>([]);
  const featureRefs = useRef<HTMLElement[][]>([]);
  const viewMoreRefs = useRef<HTMLElement[]>([]);

  const setCardRef = useCallback((el: HTMLElement | null, index: number) => {
    if (el) cardsRef.current[index] = el;
  }, []);

  const setCardTitleRef = useCallback(
    (el: HTMLElement | null, index: number) => {
      if (el) cardTitlesRef.current[index] = el;
    },
    []
  );

  const setCardDescriptionRef = useCallback(
    (el: HTMLElement | null, index: number) => {
      if (el) cardDescriptionsRef.current[index] = el;
    },
    []
  );

  const setFeatureRef = useCallback(
    (el: HTMLElement | null, serviceIndex: number, featureIndex: number) => {
      if (!featureRefs.current[serviceIndex]) {
        featureRefs.current[serviceIndex] = [];
      }
      if (el) featureRefs.current[serviceIndex][featureIndex] = el;
    },
    []
  );

  const setViewMoreRef = useCallback(
    (el: HTMLElement | null, index: number) => {
      if (el) viewMoreRefs.current[index] = el;
    },
    []
  );

  useGsapServicesAnimation({
    triggerRef: sectionRef,
    tagRef,
    h2Ref,
    pRef,
    cardsRef,
    cardTitlesRef,
    cardDescriptionsRef,
    featureRefs,
    viewMoreRefs,
  });

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="container">
        <div className="services-header">
          <div className="premium-tag" ref={tagRef}>
            <Crown size={19} />
            <span>Premium Services</span>
            <Star size={17} />
          </div>
          <h2 ref={h2Ref}>Services</h2>
          <p ref={pRef}>
            Five decades of expertise in creating bespoke furniture solutions
            for Dubai&apos;s <br /> most discerning clients
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div
              className="service-card"
              key={i}
              ref={(el) => setCardRef(el, i)}
            >
              <div className="image-wrapper">
                <div className="overlay"></div>
                <div className="card-icon-container">{service.icon}</div>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={250}
                  className="service-image"
                />
              </div>

              <div className="card-content">
                <h3 ref={(el) => setCardTitleRef(el, i)}>{service.title}</h3>
                <p ref={(el) => setCardDescriptionRef(el, i)}>
                  {service.description}
                </p>
                <ul>
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      ref={(el) => setFeatureRef(el, i, idx)}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  className="view-more"
                  href={service.link}
                  ref={(el) => setViewMoreRef(el, i)}
                >
                  View More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div
          className="explore-all-wrapper"
          style={{ textAlign: "center", marginTop: "2rem" }}
        >
          <Link href="/services" className="explore-all-btn">
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
