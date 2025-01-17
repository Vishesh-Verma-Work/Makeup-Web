import React from 'react';
import '../styles/landing.css';

const Landing = () => {
  return (
    <div className="landing">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__heading">Professional Makeup Artist</h1>
          <p className="hero__description">
            A makeup artist is a professional who specializes in enhancing and transforming a person's appearance through the application of makeup. 
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2 className="section__heading">Our Services</h2>
        <div className="services__cards">
          <div className="card">
            <img src="https://media.istockphoto.com/id/1217815127/photo/woman-in-black-t-shirt-with-makeup-artist-lettering-applying-eye-shadow-on-model.jpg?s=2048x2048&w=is&k=20&c=2YF2FawcxAondXkX1x0HpHjyvRYAK5kL7yNB8nJW-Fk=" alt="Bridal Makeup" className="card__img" />
            <h3 className="card__title">Bridal Makeup</h3>
            <p className="card__description">
              Transform your big day with a stunning bridal look.
            </p>
          </div>
          <div className="card">
            <img src="https://media.istockphoto.com/id/1438382731/photo/professional-makeup-artist-at-work.jpg?s=2048x2048&w=is&k=20&c=9pYEnkhLL_AerN-9N4I3iYvAi_ptu5uRZ7EGRY16PSo=" alt="Party Makeup" className="card__img" />
            <h3 className="card__title">Party Makeup</h3>
            <p className="card__description">
              Shine bright at any party or event with a glamorous touch.
            </p>
          </div>
          <div className="card">
            <img src="https://media.istockphoto.com/id/1217815127/photo/woman-in-black-t-shirt-with-makeup-artist-lettering-applying-eye-shadow-on-model.jpg?s=2048x2048&w=is&k=20&c=2YF2FawcxAondXkX1x0HpHjyvRYAK5kL7yNB8nJW-Fk=" alt="Hairstyling" className="card__img" />
            <h3 className="card__title">Hairstyling</h3>
            <p className="card__description">
              Trendy hairstyles to suit your unique personality.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="section__heading">What Our Clients Say</h2>
        <div className="testimonial__wrapper">
          <blockquote className="testimonial">
            "Absolutely loved my bridal look! The attention to detail was unmatched."
            <footer className="testimonial__author">- Priya Sharma</footer>
          </blockquote>
          <blockquote className="testimonial">
            "Thank you for making me look amazing at the party! Highly recommend."
            <footer className="testimonial__author">- Aditi Verma</footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Landing;
