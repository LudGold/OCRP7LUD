import React from "react";
import Footer from "../components/home/Footer";
import Banner from "../components/home/Banner";
import Header from "../components/home/Header";
import Card from "../components/home/Card";

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
