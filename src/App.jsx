import React from "react";
// import "./index.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Popular from "./Components/Popular/Popular";
import Offer from "./Components/Offer/Offer";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Popular />
      <Offer />
      <About />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
