import React from "react";
import { FaStar } from "react-icons/fa";

const ProductItem = ({ product, updatePrice, deleteProduct }) => {
  return (
    <React.Fragment>
      <div className="col-md-4 d-flex">
        <div
          className="card shadow-sm w-100 border-0"
          style={{ minHeight: "450px" }}
        >
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "200px" }}
          >
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid rounded"
              style={{
                maxHeight: "180px",
                objectFit: "contain",
                position: "relative",
              }}
            />
            <p
              className={`badge ${
                product.availability === "In Stock" ? "bg-success" : "bg-danger"
              }`}
              style={{ position:"absolute", top:"10px", right:"10px" }}
            >
              {product.availability}
            </p>
          </div>
          <div className="card-body text-center">
            <h5 className="card-title fw-bold">{product.title}</h5>
            <p className="card-text text-muted small">{product.description}</p>
            <p className="card-text text-primary fw-bold fs-5">
              ${product.price}
            </p>
            <div className="d-flex justify-content-center align-items-center mb-2">
              <span className="text-warning me-1">
                <FaStar /> {product.rating}
              </span>
              <span className="text-secondary">
                ({product.reviews} reviews)
              </span>
            </div>
            <p className="badge bg-secondary">{product.category}</p>
            <div className="d-flex justify-content-between mt-3">
              <button
                className="btn btn-success btn-sm"
                onClick={() => updatePrice(product.id)}
              >
                Update Price
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteProduct(product.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductItem;
