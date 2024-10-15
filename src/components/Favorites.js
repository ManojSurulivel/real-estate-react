import React from 'react';
import { useSelector } from 'react-redux';

const Favorites = () => {
  const favorites = useSelector(  state => state.properties.favorites);

  return (
    <div className="favorites">
      <h2>Favorites</h2>
      {favorites.length > 0 ? (
        favorites.map((property) => (
          <div key={property.id} className="favorite-card">
            <h4>{property.title}</h4>
            <p>{property.location}</p>
            <p>Price: ${property.price.toLocaleString()}</p>        
            <img src="/assets/apartment.jpeg" alt="Real Estate" className="home-image" />

          </div>
        ))
      ) : (
        <p>No favorite properties yet.</p>
      )}
    </div>
  );
};

export default Favorites;
