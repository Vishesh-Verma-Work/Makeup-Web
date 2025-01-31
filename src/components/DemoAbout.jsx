import React from 'react';
const App = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="header-title">Akanksha Verma</h1>
        <h2 className="subtitle">THE WONDER BEHIND THE MAGIC</h2>
        <div className="name">Chanderlata.</div>
      </header>

      <section className="bio">
        <div className="bio-text">
          <p>
            Based in Mumbai, Chanderlata has established herself as one of the most recognizable and sought-after names as the best bridal makeup artist in Mumbai. Trust Chanderlata with highlighting your features and bringing out the best in you, as she is highly skilled, be it an easy and subtle makeup or a bold and gorgeous makeup, she can work her magic with the same ease.
          </p>
          <p>
            Enamored by the concept of makeup since a young age, Chanderlata gave in to her inner calling after working as a highly qualified professional in the field of Information Technology for six years. In order to add expertise to her passion, she enrolled in a specialized makeup course by a renowned industry expert and worked under the guidance of leading industry experts, before <span className="highlight-text">launching her brand “BrideMeUp”</span> in 2017, thus making quality makeup services available right at your doorstep.
          </p>
          <button className="read-more">Read More</button>
        </div>
        <div className="bio-image">
          <img src="https://www.byrdie.com/thmb/WAvIPEjWAljt0YqNc8KaJruv3k8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/mua21-c95ac2eff41f4b8682d6a331904ba37d.png" alt="Chanderlata" />
        </div>
      </section>
    </div>
  );
};

export default App;