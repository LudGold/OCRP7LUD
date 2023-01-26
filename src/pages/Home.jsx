import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Banner from "../components/accueil/Banner";
import Card from "../components/accueil/Card";

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <Banner />
      <Card />
      <Footer />
    </div>
  );
}
