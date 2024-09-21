import React from "react";
import "./ProductSection.css";
import { toast, Toaster } from "react-hot-toast";

const handleProductCard = (e) => {
  e.preventDefault();
  toast((t) => (
    <div
      style={{
        width: "300px",
        height: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "16px",
        gap: "50px",
        fontSize: "14px",
        fontWeight: "700",
        backgroundColor: "white",
        border: "1px solid rgba(0, 0, 0, 0.351)",
      }}
    >
      <p>Product details are not available now.</p>
    </div>
  ));
};

const handletitlecontent = (e) => {
  e.preventDefault();
  toast((t) => (
    <div
      style={{
        width: "300px",
        height: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "16px",
        gap: "50px",
        fontSize: "14px",
        fontWeight: "700",
        backgroundColor: "white",
        border: "1px solid rgba(0, 0, 0, 0.351)",
        boxShadow:
          "0 0 0 1px rgba(14, 12, 12, 0.32), 0 2px 4px rgba(0, 0, 0, 0.374), 0 4px 8px rgba(0, 0, 0, 0.445) 0 8px 16px rgba(23, 23, 23, 0.322), 0 16px 32px rgba(14, 13, 13, 0.324)",
      }}
    >
      <p>More Options are not available now.</p>
    </div>
  ));
};

const ProductSection = () => {
  const products = [
    {
      id: 1,
      name: "Kids Heavy Cotton Tee",
      price: "USD 8.16",
      img: "../images/tea-1.png",
    },
    {
      id: 2,
      name: "Kiss-Cut Stickers",
      price: "USD 1.45",
      img: "../images/stickers.png",
    },
    {
      id: 3,
      name: "Unisex Heavy Blend Sweatshirt",
      price: "USD 16.56",
      img: "../images/sweatshirt-1.png",
    },
    {
      id: 4,
      name: "Tough Phone Cases",
      price: "USD 10.94",
      img: "../images/phonecase.png",
    },
  ];

  return (
    <section className="product-section">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="title">
        <h2>Our Bestsellers</h2>
        <h2 className="titlecontent" onClick={handletitlecontent}>See More</h2>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card" onClick={handleProductCard}>
            <div className="product-image">
              <img src={product.img} alt={product.name} />
            </div>
            <p>
              {product.name} - {product.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
