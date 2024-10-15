import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterPropertiesByType } from '../features/properties/propertySlice';
const FilterBar = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterPropertiesByType(filter));  // Dispatch filter action whenever the filter changes
  }, [filter, dispatch]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const style ={
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px",
    padding: "10px",
    width: "100%",
  }

  return (
    <div style={style}>
      <label style={{fontWeight:"bold",fontFamily:"sans-serif"}}>Filter by Type: </label>
      <select style={{margin:"20px"}} value={filter} onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="Villa">Villa</option>
        <option value="Apartment">Apartment</option>
      </select>
    </div>
  );
};

export default FilterBar;
