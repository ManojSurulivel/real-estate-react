import React from 'react';
import { useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../features/properties/propertySlice';

const PropertyCard = ({ property }) => {
  const dispatch = useDispatch();

  const handleAddFavorite = () => {
    dispatch(addToFavorites(property.id));
  };

  const handleRemoveFavorite = () => {
    dispatch(removeFromFavorites(property.id));
  };

  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <h3>{property.title}</h3>
      <p>{property.location}</p>
      <p>Price: ${property.price.toLocaleString()}</p>
      <button style={{margin:"10px"}} onClick={handleAddFavorite}>Add to Favorites</button>
      <button onClick={handleRemoveFavorite}>Remove from Favorites</button>
    </div>
  );
};

export default PropertyCard;
