import './App.css';

import Header from "./containers/header/Header";
import Brand from "./components/brand/Brand";
import CTA from "./components/cta/CTA";
import Navbar from "./components/navbar/Navbar";
import WhatGPT3 from "./containers/whatGPT3/WhatGPT3";
import Features from "./containers/features/Features";
import Possibility from "./containers/possibility/Possibility";
import Blog from "./containers/blog/Blog";
import Footer from "./containers/footer/Footer";


function App() {
  return (
    <div className="App">
        <div className="gradient__bg">
            <Navbar/>
            <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  );
}

export default App;

