import React, { useState } from "react";
import { Link } from "react-router-dom";

const desc =
  "Energistia an deliver atactica metrcs after avsionary Apropria trnsition enterpris an sources appications emerging psd template";

const ProductDisplay = ({ item }) => {
  const { name, id, price, seller, ratingsCount, img, quantity } = item;
  const [perquantity, setPerquantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");

  const headelSize = (e) => {
    setSize(e.target.value);
  };
  const headelColor = (e) => {
    setColor(e.target.value);
  };

  const headelDecrese = () => {
    if (perquantity > 1) {
      setPerquantity(perquantity - 1);
    }
  };
  const headelIncrese = () => {
    setPerquantity(perquantity + 1);
  };

  const headelSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: id,
      img: img,
      name: name,
      price: price,
      size: size,
      color: color,
      coupon: coupon,
      quantity: perquantity,
    };
 
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = existingCart.findIndex((item) => item.id === id);
    if (existingProduct !== -1) {
      existingCart[existingProduct].quantity += perquantity;
    } else {
      existingCart.push(product);
    }

    // update local storage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // reset form fields
    setPerquantity(1);
    setSize("Select Size");
    setColor("Select Color");
    setCoupon("");
  };

  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span>{ratingsCount} review</span>
          <h4>${price}</h4>
          <h6>{seller}</h6>
          <p>{desc}</p>
        </p>
      </div>
      {/* card components */}
      <div>
        <form onSubmit={headelSubmit}>
          <div className="select-product size">
            <select value={size} onChange={headelSize}>
              <option>Select Size</option>
              <option value="SM">SM</option>
              <option value="MD">MD</option>
              <option value="LG">LG</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>
          <div className="select-product color">
            <select value={color} onChange={headelColor}>
              <option>Select Color</option>
              <option>Pink</option>
              <option>Ash</option>
              <option>Red</option>
              <option>white</option>
              <option>Blue</option>
              <option>Black</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>

          <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={headelDecrese}>
              -
            </div>
            <input
              onChange={(e) => setPerquantity(parseInt(e.target.value, 10))}
              className="cart-plus-minus-box"
              type="text"
              name="qtybutton"
              id="qtybutton"
              value={perquantity}
            />
            <div className="inc qtybutton" onClick={headelIncrese}>
              +
            </div>
          </div>
          <div className="discount-code mb-21">
            <input
              type="text"
              placeholder="Enetr Discount code"
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>
          <button type="submit" className="lab-btn">
            <span>Add to Cart</span>
          </button>
          <Link to="/cart-page" className="lab-btn bg-primary">
            <span>Check Out</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
