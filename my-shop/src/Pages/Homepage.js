import React from "react";
//compontns
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Aboutus from "../components/Aboutus";
import Menu from "../components/Menu";
// import menu context
import FoodApiContext from "../context/FoodApiContext";
import OurChefs from "../components/OurChefs";
import CustomersComments from "../components/CustomersComments";
import Footer from "../components/Footer";
import BackToTopBtn from "../components/BackToTopBtn";
import ContactUs from "../components/ContactUs";

const Homepage = () => {
    return (
        <FoodApiContext>
            <Navbar />
            <Header />
            <Aboutus />
            <OurChefs />
            <Menu />
            <CustomersComments />
            <ContactUs/>
            <Footer />
            <BackToTopBtn/>
        </FoodApiContext>
    );
};

export default Homepage;
