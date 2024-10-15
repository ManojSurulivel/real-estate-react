import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = useSelector(state =>
    state.properties.allProperties.find(p => p.id === parseInt(id))
  );

  return property ? (
    <div>
      <h2>{property.name}</h2>
      <p>Location: {property.location}</p>
      <p>Price: ${property.price}</p>
      <p>Description: This is a beautiful property located in {property.location}.</p>
    </div>
  ) : (
    <p>Property not found</p>
  );
};

export default PropertyDetails;
