import Header from "@/components/layout/Header/Header";
import React from "react";
import "@/app/globals.css";

const ProductDetails: React.FC = () => {
  return (
    <>
    <Header/>
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row">
        {/* Product Image Section */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            id="productImage"
            className="zoom w-full h-auto"
            src=""
            alt="Product Image"
          />
        </div>

        {/* Product Details Section */}
        <div className="w-full md:w-1/2 md:pl-6">
          <h2 id="productTitle" className="text-2xl font-bold mb-4">
            Product Title
          </h2>
          <p id="productPrice" className="text-lg font-semibold mb-4">
            $0
          </p>
          <p id="productDescription" className="text-gray-700 mb-4">
            Description
          </p>
          <h3 className="text-xl font-semibold mb-2">Specifications</h3>
          <p id="productSpecifications" className="text-gray-700 mb-4">
            Specifications
          </p>

          {/* Quantity controls */}
          <div className="flex items-center mb-4">
            <button id="decrement" className="px-4 py-2 bg-gray-200 rounded">
              -
            </button>
            <input
              id="quantity"
              className="w-12 text-center mx-2 border rounded"
              type="number"
              defaultValue={1}
              min={1}
            />
            <button id="increment" className="px-4 py-2 bg-gray-200 rounded">
              +
            </button>
          </div>

          {/* Rating */}
          <div id="productRating" className="mb-4"></div>
          <div id="productReviews" className="text-gray-700 mb-4"></div>
          <button
            id="addToCart"
            className="px-6 py-2 bg-blue-500 text-white rounded w-full md:w-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Product Cards */}
          {[
            {
              src: "https://i.pinimg.com/736x/04/b1/2b/04b12ba0af966d02d1a07d1cca4a5f5a.jpg",
              title: "Study Table and Chair",
              price: "$210",
            },
            {
              src: "https://i.pinimg.com/736x/0c/e8/29/0ce8299f7b1c845d575f949b244ea238.jpg",
              title: "Gold Wrist Watch",
              price: "$300",
            },
            // Add more products as objects here...
          ].map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4"
            >
              <img
                src={product.src}
                alt={product.title}
                className="w-full h-60 object-cover rounded-md"
              />
              <h3 className="mt-4 text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-pink-600">
                View Product
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;
