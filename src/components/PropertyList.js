import React from 'react';
import { useSelector } from 'react-redux';
import PropertyCard from './PropertyCard';
import FilterBar from './FilterBar';

const PropertyList = () => {
  const filteredProperties = useSelector( state => state.properties.filteredProperties);

  return (
    <div className="property-list">
             <h1>RealEstate Listings</h1>

      <FilterBar />
      {filteredProperties.length > 0 ? (
        filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))
      ) : (
        <p>No properties found for the selected type.</p>
      )}
    </div>
  );
};

export default PropertyList;
