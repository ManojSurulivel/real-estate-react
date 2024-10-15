const initialState = {
    location: '',
    priceRange: [0, 1000000], // Default price range
  };
  
  const filterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FILTER_PROPERTIES':
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  };
  
  export default filterReducer;
  