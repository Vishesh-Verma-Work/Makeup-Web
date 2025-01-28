import React from 'react';

const image = [
  "https://www.thimble.com/wp-content/uploads/2021/02/Makeup-Artist.jpg",
  "https://tejaswinimakeupartist.com/wp-content/uploads/2021/05/Kundan-Jewellery-Lehenga-Punjabi-Bride-Makeup-By-For-Punjabi-Bride-Makeup-By-Tejaswni-Jaipur-Udaipur-Wedding-1.jpeg",
  "https://alldolledupmua.com/wp-content/uploads/2021/07/wedding-makeup-artist-making-a-make-up-for-bride.jpg",
  "https://media-api.xogrp.com/images/7256fa18-0a4e-4691-8f51-3bc669ebc83f~rs_768.h",
  "https://tejaswinimakeupartist.com/wp-content/uploads/2021/05/Royal-Maratha-Maharashtrian-Bride-Pune-Mumbai.jpg",
  "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2023/04/high-resolution-jpg-vs-compressed-jpg.png",
  "https://www.thimble.com/wp-content/uploads/2021/02/Makeup-Artist.jpg",
  "https://tejaswinimakeupartist.com/wp-content/uploads/2021/05/Kundan-Jewellery-Lehenga-Punjabi-Bride-Makeup-By-For-Punjabi-Bride-Makeup-By-Tejaswni-Jaipur-Udaipur-Wedding-1.jpeg",
  "https://alldolledupmua.com/wp-content/uploads/2021/07/wedding-makeup-artist-making-a-make-up-for-bride.jpg",
  "https://media-api.xogrp.com/images/7256fa18-0a4e-4691-8f51-3bc669ebc83f~rs_768.h",
  "https://tejaswinimakeupartist.com/wp-content/uploads/2021/05/Royal-Maratha-Maharashtrian-Bride-Pune-Mumbai.jpg",
  "https://alldolledupmua.com/wp-content/uploads/2021/07/wedding-makeup-artist-making-a-make-up-for-bride.jpg",
  "https://media-api.xogrp.com/images/7256fa18-0a4e-4691-8f51-3bc669ebc83f~rs_768.h",
  "https://tejaswinimakeupartist.com/wp-content/uploads/2021/05/Royal-Maratha-Maharashtrian-Bride-Pune-Mumbai.jpg",
  "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2023/04/high-resolution-jpg-vs-compressed-jpg.png",
  "https://www.thimble.com/wp-content/uploads/2021/02/Makeup-Artist.jpg",
  "https://tejaswinimakeupartist.com/wp-content/uploads/2021/05/Kundan-Jewellery-Lehenga-Punjabi-Bride-Makeup-By-For-Punjabi-Bride-Makeup-By-Tejaswni-Jaipur-Udaipur-Wedding-1.jpeg",
  "https://alldolledupmua.com/wp-content/uploads/2021/07/wedding-makeup-artist-making-a-make-up-for-bride.jpg",
];
function GlimsPic() {
  return (
    <div className="main">
    <div className="pin_container">
      {images.map((img, index) => (
        <Card key={index} size={getRandomSize()} img={img} />
      ))}
    </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className={`card ${props.size}`}>
      <img src={props.img} alt="Pinterest Image" className="cardImage" />
    </div>
  );
}

// Function to get random size (small, medium, large)
function getRandomSize() {
  const sizes = ['small', 'medium', 'large'];
  const randomIndex = Math.floor(Math.random() * sizes.length);
  return sizes[randomIndex];
}

export default GlimsPic;
