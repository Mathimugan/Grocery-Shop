import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Category from "../components/Category";
import Products from "../components/Products";
import Footer from "../components/Footer";
const Home = () =>
{
return(<div>
    <Navbar/>
    <Slider/>
    <Category/>
    <Products/>
    <Footer/>
</div>);
}
export default Home;