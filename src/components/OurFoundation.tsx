"use client";

import React, { useState } from "react";
import { Award, Heart, Users, Lightbulb, ChevronDown, ChevronUp } from "lucide-react";



const OurFoundation: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const cards = [
    {
      icon: <Heart size={35} strokeWidth={2} color="#04d9c4" />,
      title: "CARE",
      description: "True assets lie in our stakeholders.",

      description2: "We prioritize the well-being of our clients, partners, and team members, ensuring every interaction is meaningful and every product reflects our commitment to excellence.",
    },
    {
      icon: <Users size={35} strokeWidth={2} color="#04d9c4" />,
      title: "TEAMWORK",
      description: "Dedicated to consistently delivering quality at all times.",
      description2: "Our collaborative approach brings together diverse skills and perspectives, creating furniture that exceeds expectations through unified expertise.",
    },
    {
      icon: <Lightbulb size={35} strokeWidth={2} color="#04d9c4" />,
      title: "INNOVATION",
      description: "Dependent on the collective energy and contributions of our high-performing team members. ",
      description2: "We continuously evolve our craft, incorporating cutting-edge techniques while honoring traditional craftsmanship to create timeless furniture pieces.",
    },
  ];

  const coreValues = [
    "Excellence in every piece we create",
    "Sustainable and responsible manufacturing",
    "Customer-centric approach to design",
    "Integrity in all business relationships",
    "Continuous innovation and improvement",
  ];

  const accordionItems = [
    {
      title: "Company Core Values:",
      content: (
        <ul className="valuesList">
          {coreValues.map((value, idx) => (
            <li key={idx}>{value}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Delta's Competitive Advantage:",
      content: (
        <p>
          Our competitive advantage lies in our unique blend of traditional craftsmanship and modern innovation,
          combined with our deep understanding of market trends and customer needs.
        </p>
      ),
    },
    {
      title: "Commitment to Care:",
      content: (
        <p>
          We are committed to providing exceptional care in every aspect of our business – from the initial
          design consultation to after-sales support, ensuring customer satisfaction at every touchpoint.
        </p>
      ),
    },
  ];

  return (
    <section className="foundationSection">
      <div className="container">
        <div className="foundationHeader">
          <h2 className="subtitle">
            <span className="foundationIcon">
              <Award size={15} />
            </span>
            Our Foundation
          </h2>
        </div>

        <h1 className="section-title"><span>Our</span> Philosophy</h1>
        <p className="description">
          For stakeholders, partners, and clients seeking more details about our commitment to
          quality through integrity, teamwork & care.
        </p>

        <div className="foundationGrid">
          <div className="contentGrid">
            {cards.map((card, idx) => (
              <div key={idx} className="card">
                <div className="cardIcon">{card.icon}</div>

                <div className="cardContent">
                  <h3>{card.title}</h3>
                  <p className="description">{card.description}</p>
                  <p>{card.description2}</p>

                </div>
              </div>
            ))}
          </div>

          <div className="accordionColumn">
            {accordionItems.map((item, index) => (
              <div key={index} className={`accordionItem ${openIndex === index ? "open" : ""}`}>
                <div className="accordionHeader" onClick={() => toggleAccordion(index)}>
                  <h3>{item.title}</h3>
                  <span className="chevron">
                    {openIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </div>
                {openIndex === index && (
                  <div className="accordionContent">{item.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <button className="subtitle">Experience the Delta Difference</button>
      </div>
    </section>
  );
};

export default OurFoundation;
