import React from "react";
import { useLocation, useHistory } from 'react-router-dom';
import '../styles/productdetail.scss';

function ProductDetail() {
  const location = useLocation();
  const product = location.state.product;
  const history = useHistory();

  function goBackToProducts() {
    history.push({
      pathname: '/products'
    });
  }

  return (
    <div className="product-detail">
      <h2 className="page-title">{product.title}</h2>

      <div className="product-img">
        <img
          src={product.image}
          alt={product.description}
        />
      </div>

      <div className="product-content">
        <div className="product-price">Price: ${product.price}</div>
        <div className="product-desc">{product.description}</div>
        <div className="goback-btn">
          <button onClick={goBackToProducts}>Go back to products view</button>
        </div>
      </div>

    </div>

  );
}

export default ProductDetail;
