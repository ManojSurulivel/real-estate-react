// import React from 'react';
// import PropertyList from './components/PropertyList';
// import Favorites from './components/Favorites';
// import './App.css';

// function App() {
//   return (
//     <div className="app-container">
//       <h1>Real Estate - Favorites Listings</h1>
//       <div className="content">
//         <PropertyList />
//         <Favorites />
//       </div>
//     </div>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import PropertyList from './components/PropertyList';
import Favorites from './components/Favorites';
import Navbar from './navbar/Navbar'
import './App.css';

const App = () => {
  return (
   <BrowserRouter className="app-container">
   <Navbar />
   <Routes className="content">
     <Route path="/" element={<Home />}/>
     <Route path="/propertylist" element={<PropertyList />} />
     <Route path="/favorites" element={<Favorites />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
