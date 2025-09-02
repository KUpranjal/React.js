import { useState } from "react";
import "./App.css";
import { Cardss } from "./components/Cardss"; // <-- import your Cardss component

function App() {
  let products = [
    {
      productId: "P201",
      productName: "Wireless Headphones",
      category: "Electronics",
      price: 2499,
      inStock: true,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    },
    {
      productId: "P202",
      productName: "Smartphone X10",
      category: "Electronics",
      price: 32999,
      inStock: true,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    },
    {
      productId: "P203",
      productName: "Gaming Laptop",
      category: "Computers",
      price: 78999,
      inStock: false,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    },
    {
      productId: "P204",
      productName: "Smartwatch Pro",
      category: "Wearables",
      price: 5999,
      inStock: true,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    },
    {
      productId: "P205",
      productName: "4K LED TV",
      category: "Home Entertainment",
      price: 45999,
      inStock: true,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    },
    {
      productId: "P206",
      productName: "Bluetooth Speaker",
      category: "Audio",
      price: 3499,
      inStock: false,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    },
    {
      productId: "P207",
      productName: "DSLR Camera",
      category: "Photography",
      price: 55999,
      inStock: true,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    },
    {
      productId: "P208",
      productName: "Mechanical Keyboard",
      category: "Computer Accessories",
      price: 4999,
      inStock: true,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    },
    {
      productId: "P209",
      productName: "Ergonomic Chair",
      category: "Furniture",
      price: 12999,
      inStock: false,
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    },
    {
      productId: "P210",
      productName: "Portable Power Bank",
      category: "Accessories",
      price: 1999,
      inStock: true,
      rating: 4.1,
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Product Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <Cardss
            key={item.productId}
            productId={item.productId}
            productName={item.productName}
            category={item.category}
            price={item.price}
            instock={item.inStock}
            rating={item.rating}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
