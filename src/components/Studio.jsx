import React from 'react';

const Studio = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="header-title">Makeup & Hair Academy in Mumbai</h1>
        <h2 className="subtitle">Become a professional Makeup Artist</h2>
        <p className="quote">“Makeup is not a mask... Makeup is art. Makeup is a passion. Makeup is an expression.”</p>
      </header>
      
      <section className="intro">
        <p className="intro-text">
          Do you want to see yourself as a professional freelance makeup artist in the bridal industry? 
          We, at <span className="academy-name">BrideMeUp makeup academy</span> offer professional courses 
          with innovative programs that help you with the career path so that your dreams come true! 
          Irrespective of the skill level, we cater our courses to those who are looking to develop their 
          skills in order to retain a cutthroat contour. With us, you don’t need to compromise with quality or 
          attention to the details. Instead, we prefer you to focus on learning to win the mastery of the tools and 
          techniques that will help you make a global identification. Eventually, you’ll remain at the forefront of the 
          latest crazes related to makeup and fashion. Come to us and walk out with the eligibility to begin a great career 
          in this billion-dollar industry!
        </p>
        <button className="know-more">Know More</button>
      </section>

      <section className="image-gallery">
        <div className="image-container">
          <img src="https://cdn1.treatwell.net/images/view/v2.i1476487.w720.h480.xE7362AD0/" alt="Makeup work" />
        </div>
        <div className="image-container">
          <img src="https://dreamweddinghub.com/public/uploads/vendor_images/1722082134-RK%20Makeup%20Studio.jpg" alt="Makeup work" />
        </div>
        <div className="image-container">
          <img src="https://images.squarespace-cdn.com/content/v1/5c28752ae749405f9e27fa8a/1557292223436-5X3AJO2FRHW473G3L63S/LOVELYLIGHTIMAGERY_PCM-47.jpg?format=2500w" alt="Makeup work" />
        </div>
      </section>
    </div>
  );
};

export default Studio;