import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

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
    <div className="container mt-4" style={{ width: "1000px" }}>
      <SearchBar setSearchQuery={setSearchQuery} />
      {loading ? (
        <p className="text-center text-muted">Loading products...</p>
      ) : (
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
      )}
    </div>
  );
};

export default ProductList;
