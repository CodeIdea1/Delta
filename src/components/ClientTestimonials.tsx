"use client";

import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
}

const ClientTestimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then((res) => res.json())
      .then((data) => {
        const fakeQuotes = [
          "Amazing work and attention to detail. Highly recommend!",
          "Delta Furniture made our dream office a reality.",
          "Professional, creative, and always on time!"
        ];

        const mapped: Testimonial[] = data.results.map((user: any, i: number) => ({
          id: i + 1,
          name: `${user.name.first} ${user.name.last}`,
          position: "Customer",
          company: user.location.country,
          quote: fakeQuotes[i % fakeQuotes.length],
          avatar: user.picture.large,
          rating: 5,
        }));

        setTestimonials(mapped);
      });
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        <Star fill="#04d9c4" stroke="#04d9c4" size={20} />
      </span>
    ));
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="header">
          <div className="badge">
            <div className='subtitle'>
                <span className="icon">
                <Star fill="#04d9c4" stroke="#04d9c4" size={15} />
                </span>
                Client Testimonials
            </div>
          </div>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="description">
            Trusted by Dubai's most discerning clients for exceptional furniture craftsmanship and service
          </p>
        </div>

        <div className="testimonialContainer">
          <button
            className="navButton prevButton"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} strokeWidth={2} />
          </button>

          <div className="testimonialWrapper">
            <div
              className="testimonialSlider"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonialCard">
                  <div className="quoteIcon">
                  <Quote stroke="#04d9c48c" size={40} strokeWidth={1.5} />
                  </div>

                  <div className="rating">
                    {renderStars(testimonial.rating)}
                  </div>

                  <blockquote className="quote">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="author">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="avatar"
                    />
                    <div className="authorInfo">
                      <h4 className="authorName">{testimonial.name}</h4>
                      <p className="authorTitle">{testimonial.position}</p>
                      <p className="company">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="navButton nextButton"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} strokeWidth={2} />
          </button>
        </div>

        <div className="footer">
          <button className="ctaButton subtitle">
            Join our satisfied clients today
          </button>
          <p className="footerText">
            Experience the Delta Furniture difference - where quality meets craftsmanship
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
