"use client";

import { useRef, useCallback } from "react";
import {
  Building,
  Home,
  Star,
  Target,
  CheckCircle2,
  Settings2,
} from "lucide-react";
import { useGsapPortfolioAnimation } from "@/hooks/useGsapPortfolioAnimation";

const Portfolio: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLSpanElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const p2Ref = useRef<HTMLParagraphElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const statsItemRefs = useRef<HTMLElement[]>([]);
  const strengthsRef = useRef<HTMLElement[]>([]);

  const stats = [
    { number: "10,000+", label: "Happy Clients" },
    { number: "500+", label: "Project Done" },
    {
      number: (
        <>
          <span>4.8</span> <Star className="star-icon" />
        </>
      ),
      label: "Customer Rating",
    },
    { number: "50+", label: "Years of Experience" },
  ];

  const services = [
    {
      title: "B2C Excellence",
      title2: "Premium Home Solutions",
      description:
        "Personalized service for discerning homeowners seeking luxury furniture solutions.",
      buttonText: "Download Profile",
      icon: <Home className="strength-icon" size="41px" />,
    },
    {
      title: "B2B Leadership",
      title2: "Commercial & Volume Orders",
      description:
        "Trusted by Dubai’s leading businesses for large-scale furniture projects.",
      buttonText: "Schedule Work",
      buttonClass: "colored",
      icon: <Building className="strength-icon" size="41px" />,
    },
  ];

  const coreStrengths = [
    {
      title: "Expertise",
      description:
        "Deep knowledge in modern web technologies and frameworks with years of hands-on experience.",
      icon: <Target size="35px" />,
    },
    {
      title: "Quality Control",
      description:
        "Rigorous testing and quality assurance processes to deliver bug-free and optimized solutions.",
      icon: <CheckCircle2 size="35px" />,
    },
    {
      title: "Experience",
      description:
        "Proven track record of successful projects across various industries and business domains.",
      icon: <Settings2 size="30px" />,
    },
  ];

  const setCardRef = useCallback((el: HTMLElement | null, index: number) => {
    if (el) cardsRef.current[index] = el;
  }, []);

  const setStatsItemRef = useCallback((el: HTMLElement | null, index: number) => {
    if (el) statsItemRefs.current[index] = el;
  }, []);

  const setStrengthRef = useCallback((el: HTMLElement | null, index: number) => {
    if (el) strengthsRef.current[index] = el;
  }, []);

  useGsapPortfolioAnimation({
    triggerRef: sectionRef,
    tagRef,
    h2Ref,
    pRef,
    p2Ref,
    imgRef,
    statsItemRefs,
    cardsRef,
    strengthsRef,
  });

  return (
    <section className="portfolio-section" ref={sectionRef}>
      <div className="container">
        <div className="portfolio-header">
          <span className="subtitle" ref={tagRef}>
            Why Choose Delta
          </span>
          <h2 className="main-title section-title" ref={h2Ref}>
            Dubai&apos;s Premier Choice
          </h2>
          <p className="description" ref={pRef}>
            Discover what sets Delta Furniture apart from competitors like Al
            Intisar Décor, Koala Furniture, and Al Subaiha Furniture
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-item"
              ref={(el) => setStatsItemRef(el, index)}
            >
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="main-content">
          <div className="content-left">
            <div ref={imgRef} className="image-container">
              <img
                src="/a61IPL8FxFJL._AC_SX679_.jpg"
                className="main-image"
                alt="Delta Furniture"
              />
            </div>
          </div>

          <div className="content-right">
            <h3 className="section-title">The Delta Difference</h3>
            <p className="section-description" ref={p2Ref}>
              While our competitors focus on volume, we focus on value.
              Every piece that leaves our workshop is a testament to our commitment to excellence,
              crafted with the finest materials and attention to detail that has made us Dubai &apos;s premier furniture manufacturer.
            </p>

            <p className="section-description">
              From European ladies seeking elegant home furnishings to high-end businesses
              requiring volume orders, we deliver solutions that exceed expectations every time.
            </p>

            <div className="services-grid">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="service-card"
                  ref={(el) => setCardRef(el, i)}
                >
                  <div className="services-head">
                    {service.icon}
                    <h4 className="service-title">
                      <span className="service-title1">{service.title}</span>
                      <span className="service-title2">{service.title2}</span>
                    </h4>
                  </div>
                  <p className="service-description">{service.description}</p>
                  <button className={`service-button ${service.buttonClass ?? ''}`}>
                    {service.buttonText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="core-strengths">
          <h3 className="strengths-title section-title">Our Core Strengths</h3>
          <p className="strengths-description">
            Three pillars that define our excellence in luxury furniture manufacturing
          </p>
          <div className="strengths-grid">
            {coreStrengths.map((strength, index) => (
              <div
                key={index}
                className="strength-item"
                ref={(el) => setStrengthRef(el, index)}
              >
                <div className="strength-icon">{strength.icon}</div>
                <h4 className="strength-title">{strength.title}</h4>
                <p className="strength-description">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;