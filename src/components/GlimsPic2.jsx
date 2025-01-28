import React from 'react';

// Static imports of all images
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
const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, 
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img1
];

const GlimsPic2 = () => {
  return (
    <div className="pic-container">
      <div className="main-pic">
        {images.map((x, index) => {
          return <img src={x} key={index} alt={`img-${index}`} />;
        })}
      </div>
    </div>
  );
};

export default GlimsPic2;
