
const initialState = {
    allProperties: [],
    filteredProperties: [],
  };
  
  const propertyReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PROPERTIES':
        return {
          ...state,
          allProperties: action.payload,
          filteredProperties: action.payload, // Initially, show all properties
        };
      case 'FILTER_PROPERTIES':
        const { location, priceRange } = action.payload;
        const filtered = state.allProperties.filter(property => {
          const matchesLocation = location ? property.location.includes(location) : true;
          const matchesPrice = priceRange ? (property.price >= priceRange[0] && property.price <= priceRange[1]) : true;
          return matchesLocation && matchesPrice;
        });
        return {
          ...state,
          filteredProperties: filtered,
        };
      default:
        return state;
    }
  };
  
  export default propertyReducer;
  