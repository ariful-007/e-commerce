import React from "react";
import { Link } from "react-router-dom";
import Ratting from "../Home/Ratting";

const ProductCards = ({ gridList, product }) => {
  return (
    <div
      className={`shop-product-wrap row justify-content-center ${
        gridList ? "grid" : "list"
      }`}
    >
      {product.map((proucts, id) => (
        <div key={id} className="col-lg-4 col-md-6 col-12">
          <div className="product-item">
            {/* product images */}
            <div className="product-thumb">
              <div className="pro-thumb">
                <img src={proucts.img} alt="" />
              </div>
              <div className="product-action-link">
                <Link to={`/shop/${proucts.id}`}><i className="icofont-eye"></i></Link>
                <a href="#"><i className="icofont-heart"></i></a>
                <Link to='/cart-page'><i className="icofont-cart-alt"></i></Link>
              </div>
            </div>
            {/* product thumb */}
            <div className="product-content">
              <h5>
                <Link to={`/shop/${proucts.id}`}>{proucts.name}</Link>
              </h5>
              <p className="productRating">
                <Ratting/>
              </p>
              <h6>${proucts.price}</h6>
            </div>
          </div>

          <div className="product-list-item">
            {/* product images */}
            <div className="product-thumb">
              <div className="pro-thumb">
                <img src={proucts.img} alt="" />
              </div>
              <div className="product-action-link">
                <Link to={`/shop/${proucts.id}`}><i className="icofont-eye"></i></Link>
                <a href="#"><i className="icofont-heart"></i></a>
                <Link to='/cart-page'><i className="icofont-cart-alt"></i></Link>
              </div>
            </div>
            {/* product thumb */}
            <div className="product-content">
              <h5>
                <Link to={`/shop/${proucts.id}`}>{proucts.name}</Link>
              </h5>
              <p className="productRating">
                <Ratting/>
              </p>
              <h6>${proucts.price}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
