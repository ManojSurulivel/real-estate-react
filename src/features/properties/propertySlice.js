import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allProperties: [
    {
      id: 1,
      title: 'Luxury Villa in Beverly Hills',
      price: 5000000,
      type: 'Villa',
      location: 'Beverly Hills, CA',
      image: '/images/villa.jpg',
      description: 'A beautiful villa with stunning views.',
    },
    {
      id: 2,
      title: 'Modern Apartment in New York',
      price: 1200000,
      type: 'Apartment',
      location: 'New York, NY',
      image: '/images/apartment.jpg',
      description: 'A stylish modern apartment in the heart of the city.',
    },
    {
        id: 3,
        title: 'Villa in Beverly Hills',
        price: 5000000,
        type: 'Villa',
        location: 'Beverly Hills, CA',
        image: '/images/villa1.jpeg',
        description: 'A beautiful villa with stunning views.',
      },
      {
        id: 4,
        title: 'Apartment in New York',
        price: 1200000,
        type: 'Apartment',
        location: 'New York, NY',
        image: '/images/apartment.jpg',
        description: 'A stylish modern apartment in the heart of the city.',
      },
    // Add more properties here
  ],
  filteredProperties: [], // List of filtered properties
  favorites: [], // Favorite properties
};

const propertySlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    filterPropertiesByType: (state, action) => {
      if (action.payload === '') {
        state.filteredProperties = state.allProperties; // Show all properties if no filter
      } else {
        state.filteredProperties = state.allProperties.filter(
          (property) => property.type === action.payload
        );
      }
    },
    addToFavorites: (state, action) => {
      const property = state.allProperties.find((p) => p.id === action.payload);
      if (property && !state.favorites.some((fav) => fav.id === property.id)) {
        state.favorites.push(property);
      }
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter((fav) => fav.id !== action.payload);
    },
  },
});

export const { filterPropertiesByType, addToFavorites, removeFromFavorites } = propertySlice.actions;

export default propertySlice.reducer;
