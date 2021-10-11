import React from "react";
import { useHistory } from "react-router-dom";
import '../styles/productcard.scss';

function ProductCard(props) {
  const product = props.product;
  const history = useHistory();

  function openProductDetail() {
    history.push({
      pathname: '/productDetail',
      state: {
        product: product
      },
    }); 
  }

  return (
    <div className="card">
      <div className="test">

        <div className="card-img">
          <img
            src={product.image}
            alt={product.description}
          />
        </div>
      </div>

      <div className="card-bottom">
        <div className="card-content">
          <h2 className="card-title">{product.title}</h2>
          <div className="card-price">${product.price}</div>
          <div className="card-desc">{product.description}</div>
        </div>

        <div className="card-btn">
          <button onClick={openProductDetail}>View Product</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
