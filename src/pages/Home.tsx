import React, { ReactElement } from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import AppleItems from "../components/AppleItems/AppleItems";
import SamsungItems from "../components/SamsungItems/SamsungItems";
import XiaomiItems from "../components/XiaomiItems/XiaomiItems";
import PopularCategories from "../components/PopularCategories/PopularCategories";
import Notebooks from "../components/Notebooks/Notebooks";
import Calculator from "../components/Calculator/Calculator";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Reviews from "../components/Reviews/Reviews";
import Pros from "../components/Pros/Pros";
import AboutUs from "../components/AboutUp/AboutUs";
import InstallApp from "../components/InstallApp/InstallApp";

const Home: React.FC = (): ReactElement => {
  return (
    <>
      <Header />
      <main>
        <Main />
        <PopularCategories />
        <AppleItems />
        <SamsungItems />
        <XiaomiItems />
        <Notebooks />
        <Calculator />
        <Reviews />
        <Pros />
        <AboutUs />
        <Contact />
        <InstallApp />
      </main>
      <Footer />
    </>
  );
};

export default Home;
