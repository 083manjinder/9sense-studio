import "./App.css";
import "./style.css";
import "./style-responsive.css";

import bgImage from "./images/3.jpg";
import React, { useState, useEffect } from "react";
import Header from "./header";
import SlideSection from "./slider-section";
import SocialSection from "./social-section";
import WorkSection from "./work-section";
import Footer from "./footer";
import { animateScroll, Element, scroller } from "react-scroll";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    animateScroll.scrollToTop({ duration: 500, smooth: true });
  };
  return (
    <>
      <div>
        <div
          className="slide-bg"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundColor: "#FFF",
          }}
        >
          <Header />
          <Element name="slider-section">
            <SlideSection />
          </Element>
        </div>
        <Element name="about-section">
          <SocialSection />
        </Element>

        <Element name="work-section">
          <WorkSection />
        </Element>

        <Element name="footer-section">
          <Footer />
        </Element>
        {isVisible && (
          <button
            className="scroll-to-top"
            onClick={handleScrollToTop}
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              padding: "10px 16px",
              fontSize: "20px",
              borderRadius: "50%",
              backgroundColor: "black",
              color: "white",
              cursor: "pointer",
              border: "1px solid black",
            }}
          >
            <i class="bi bi-arrow-up"></i>
          </button>
        )}
      </div>
    </>
  );
}

export default App;
