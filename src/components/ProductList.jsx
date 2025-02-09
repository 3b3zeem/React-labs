import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductItem from "./ProductItem";

import img1 from "../assets/images/laptop.jpg";
import img2 from "../assets/images/Iphone.jpg";
import img3 from "../assets/images/watch.jpg";

const initialProducts = [
  {
    id: 1,
    title: "Laptop",
    image: img1,
    price: 1000,
    description: "High-performance laptop with 16GB RAM and 512GB SSD.",
    rating: 4.5,
    reviews: 120,
    availability: "In Stock",
    category: "Electronics",
  },
  {
    id: 2,
    title: "iPhone",
    image: img2,
    price: 500,
    description: "Latest iPhone with A15 Bionic chip and 128GB storage.",
    rating: 4.7,
    reviews: 230,
    availability: "In Stock",
    category: "Mobile Phones",
  },
  {
    id: 3,
    title: "Watch",
    image: img3,
    price: 150,
    description: "Smartwatch with heart rate monitor and GPS tracking.",
    rating: 4.3,
    reviews: 95,
    availability: "Limited Stock",
    category: "Wearables",
  },
  {
    id: 4,
    title: "Tablet",
    image: img1,
    price: 300,
    description: "10-inch tablet with 8GB RAM and 256GB storage.",
    rating: 4.4,
    reviews: 180,
    availability: "Out of Stock",
    category: "Tablets",
  },
  {
    id: 5,
    title: "Smart TV",
    image: img2,
    price: 1200,
    description: "55-inch 4K UHD Smart TV with HDR and Dolby Atmos.",
    rating: 4.6,
    reviews: 310,
    availability: "In Stock",
    category: "Home Appliances",
  },
  {
    id: 6,
    title: "Headphones",
    image: img3,
    price: 200,
    description:
      "Wireless noise-canceling headphones with 30-hour battery life.",
    rating: 4.8,
    reviews: 270,
    availability: "In Stock",
    category: "Audio Devices",
  },
  {
    id: 7,
    title: "Gaming Console",
    image: img1,
    price: 700,
    description: "Next-gen gaming console with 4K gaming and 1TB SSD.",
    rating: 4.9,
    reviews: 450,
    availability: "Pre-Order",
    category: "Gaming",
  },
  {
    id: 8,
    title: "Wireless Speaker",
    image: img2,
    price: 180,
    description: "Bluetooth speaker with deep bass and 12-hour battery life.",
    rating: 4.5,
    reviews: 210,
    availability: "In Stock",
    category: "Audio Devices",
  },
  {
    id: 9,
    title: "Camera",
    image: img3,
    price: 850,
    description: "DSLR camera with 24MP sensor and 4K video recording.",
    rating: 4.7,
    reviews: 350,
    availability: "Limited Stock",
    category: "Photography",
  },
  {
    id: 10,
    title: "Smart Home Kit",
    image: img1,
    price: 400,
    description: "Smart home automation kit with voice control support.",
    rating: 4.6,
    reviews: 150,
    availability: "In Stock",
    category: "Smart Home",
  },
];

const ProductList = () => {
  const [products, setProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState("");

  const updatePrice = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, price: product.price + 10 } : product
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.price.toString().includes(searchQuery)
  );

  return (
    <React.Fragment>
      <div className="container mt-4" style={{ width: "1000px" }}>
        <SearchBar setSearchQuery={setSearchQuery} />
        <div className="row mt-4 g-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                updatePrice={updatePrice}
                deleteProduct={deleteProduct}
              />
            ))
          ) : (
            <p className="text-center text-muted">No Products available</p>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductList;
