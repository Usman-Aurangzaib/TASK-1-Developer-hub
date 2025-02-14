"use client";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Homepage from "@/components/Homepage/page"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from "@/pages/product-details";
export default function Home() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:id" element={<ProductDetails/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
