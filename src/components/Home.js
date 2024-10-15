import React from 'react';
import '../styles/Home.css';  
import  '../assets/apartment.jpg'; 

const Home = () => {
  return (
    <div className="home-container">
      <aside className="home-sidebar">
        <img src="./assets/apartment.jpg" alt="Real Estate" className="home-image" />
      </aside>

      <main className="home-content">
        <h1>Welcome to Our Real Estate Website</h1>
        <p>Explore the best real estate deals in the country. Whether you're looking for a luxury villa, a modern apartment, or any other type of property, we have it all. Use the navigation bar above to browse our properties or view your favorites.</p>
      </main>
    </div>
  );
};

export default Home;
