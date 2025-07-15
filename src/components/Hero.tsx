"use client";

import { useRef } from "react";
import { MessageCircle, Trophy, Users, CheckCircle, ChevronDown } from "lucide-react";
import { useGsapHeroAnimation } from "@/hooks/useGsapHeroAnimation";

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    useGsapHeroAnimation({ heroRef, bgRef, contentRef });

    return (
        <div>
            <section className="hero" ref={heroRef}>
                <div className="hero-background" ref={bgRef}></div>

                <div className="overlay"></div>
                <div className="container">
                    <div className="hero-content pre-hidden" ref={contentRef}>
                        <div className="banner-text">Dubai&apos;s Premier Furniture Atelier</div>

                        <h1 className="hero-title">
                            <span>Where Luxury</span>
                            <span className="colored-text">Meets Craftsmanship</span>
                        </h1>

                        <p className="hero-description">
                            Bespoke furniture manufacturing that transforms your vision <br />
                            into timeless pieces of art
                        </p>

                        <button className="hero-button">
                            <MessageCircle size={24} color="black" />
                            <span>Get a Quote</span>
                        </button>

                        <div className="hero-stats">
                            <div className="stat-box">
                                <Trophy className="stat-icon animated-icon animated-icon1" size={55} />
                                <h3>5+</h3>
                                <p>Years Excellence</p>
                            </div>
                            <div className="stat-box">
                                <Users className="stat-icon animated-icon animated-icon2" size={55} />
                                <h3>500+</h3>
                                <p>Happy Clients</p>
                            </div>
                            <div className="stat-box">
                                <CheckCircle className="stat-icon animated-icon animated-icon3" size={55} />
                                <h3>1000+</h3>
                                <p>Projects Delivered</p>
                            </div>
                        </div>
                    </div>

                    <div className="scroll-indicator">
                        <span>Scrolled</span>
                        <ChevronDown size={19} />
                    </div>
                </div>
            </section>
        </div>
    );
}