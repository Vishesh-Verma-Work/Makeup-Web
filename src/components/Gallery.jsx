import React from "react";
import "../styles/gallery.css";
import bridal from "../utils/bridal.png";
import mehendi from "../utils/mehendi.png";
import party from "../utils/party.png";

import img1 from "../utils/glims/Screenshot 2025-01-28 172225.png";
import img2 from "../utils/glims/Screenshot 2025-01-28 172307.png";
import img3 from "../utils/glims/Screenshot 2025-01-28 172313.png";
import img4 from "../utils/glims/Screenshot 2025-01-28 172321.png";
import img5 from "../utils/glims/Screenshot 2025-01-28 172344.png";
import img6 from "../utils/glims/Screenshot 2025-01-28 172349.png";

import img7 from "../utils/glims/Screenshot 2025-01-28 172356.png";
import img8 from "../utils/glims/Screenshot 2025-01-28 172402.png";
import img9 from "../utils/glims/Screenshot 2025-01-28 172447.png";
import img10 from "../utils/glims/Screenshot 2025-01-28 172456.png";
import img11 from "../utils/glims/Screenshot 2025-01-28 172503.png";
import img12 from "../utils/glims/Screenshot 2025-01-28 172513.png";
import img13 from "../utils/glims/Screenshot 2025-01-28 172523.png";

import img14 from "../utils/glims/Screenshot 2025-01-28 172539.png";
import img15 from "../utils/glims/Screenshot 2025-01-28 172548.png";
import img16 from "../utils/glims/Screenshot 2025-01-28 172559.png";
import img17 from "../utils/glims/Screenshot 2025-01-28 172610.png";
import img18 from "../utils/glims/Screenshot 2025-01-28 172621.png";
import img19 from "../utils/glims/Screenshot 2025-01-28 172634.png";
import img20 from "../utils/glims/Screenshot 2025-01-28 172653.png";
import img21 from "../utils/glims/Screenshot 2025-01-28 172707.png";

// Collecting all imported images in an array
const a1 = [img1, img2, img3, img4, img5, img6, img7, img4];

const a2 = [img9, img10, img11, img12, img13, img14, img19, img20, img21, img1];

const a3 = [
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img1,
  img19,
  img20,
  img21,
  img1,
];

const Gallery = () => {
  return (
    <>
      <div className="gallery-upper">
        <div className="gallery-upper-content">
          <h3 className="gallery-heading">Bridal Makeup</h3>
          <p className="bridalMakeup-description">
            Elevate your wedding look with our premium bridal makeup
            services, ensuring a flawless, long-lasting finish. We
            specialize in HD & Airbrush makeup, using top-tier brands for a
            radiant glow.
          </p>
          <p className="bridalMakeup-description">
            Our experienced makeup artists customize each look based on
            skin type and wedding attire, providing a seamless blend of
            elegance and tradition.
          </p>
         
        </div>
        <img src={bridal} alt="pic" />
      </div>
      <div className="pic-container">
        <div className="main-pic">
          {a1.map((x, index) => {
            return <img src={x} key={index} alt={`img-${index}`} />;
          })}
        </div>
      </div>

      <hr className="g-space" />    

      <div className="gallery-upper">
        <div className="gallery-upper-content">
          <h3 className="gallery-heading">Mehendi Making</h3>
          <p className="bridalMakeup-description">
            Elevate your wedding look with our premium bridal makeup
            services, ensuring a flawless, long-lasting finish. We
            specialize in HD & Airbrush makeup, using top-tier brands for a
            radiant glow.
          </p>
          <p className="bridalMakeup-description">
            Our experienced makeup artists customize each look based on
            skin type and wedding attire, providing a seamless blend of
            elegance and tradition.
          </p>
        </div>
        <img src={mehendi} alt="pic" />
      </div>
      <div className="pic-container">
        <div className="main-pic">
          {a2.map((x, index) => {
            return <img src={x} key={index} alt={`img-${index}`} />;
          })}
        </div>
      </div>


<hr />

      <div className="gallery-upper">
        <div className="gallery-upper-content">
          <h3 className="gallery-heading">Party Makeup</h3>
          <p className="bridalMakeup-description">
            Elevate your wedding look with our premium bridal makeup
            services, ensuring a flawless, long-lasting finish. We
            specialize in HD & Airbrush makeup, using top-tier brands for a
            radiant glow.
          </p>
          <p className="bridalMakeup-description">
            Our experienced makeup artists customize each look based on
            skin type and wedding attire, providing a seamless blend of
            elegance and tradition.
          </p>
        </div>
        <img src={party} alt="pic" />
      </div>
      <div className="pic-container">
        <div className="main-pic">
          {a3.map((x, index) => {
            return <img src={x} key={index} alt={`img-${index}`} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Gallery;

