import React from "react";
import Contact from "../components/contact/Contact";
import Gallery from "../components/gallery/Gallery";
import Round from "../components/round/Round";
import Banner from "./../components/banner/Banner";

function home() {
  return (
    <div>
      <Banner />
      <Gallery />
      <Round />
      <Contact />
    </div>
  );
}

export default home;
