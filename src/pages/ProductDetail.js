import React from "react";
import '../styles/productdetail.scss';

function ProductDetail(props) {
  const { product } = props;
  return (
    <div className="product-card">
      <div>
        <div>
          <figure className="product-img">
            <img
              src={product.image}
              alt={product.description}
            />
          </figure>
        </div>
        <div className="media-content">
          <b>
            {product.title}
          </b>
          <span className="product-price">${product.price}</span>
          <div>{product.description}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
