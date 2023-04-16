import React, { useState, useEffect } from "react";
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      // setLoading(true);
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
        // setLoading(false);
      } catch (err) {
        console.log(err);
        // setError("Error fetching data!");
        // setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home products={products} />} />
            <Route path="shop" element={<Shop />} />
            <Route
              path="product/:id"
              element={<SingleProduct products={products} />}
            />
            <Route path="about" element={<About />} />
            <Route path="faq" element={<Faq />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </Router>
  );
};

export default App;
