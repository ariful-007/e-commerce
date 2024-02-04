import React, { useState } from "react";
import { Link } from "react-router-dom";

const Serach = ({ product, gridList }) => {
  const [serachTeam, setSerachTeam] = useState("");
  const filteredProduct = product.filter((products) =>
    products.name.toLowerCase().includes(serachTeam.toLowerCase())
  );

  return (
    <div className="widget widget-search">
      <form className="search-wrapper mb-3">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search..."
          defaultValue={serachTeam}
          onChange={(e)=> setSerachTeam(e.target.value)}
        />
        <button className="icofont-search-2"></button>
      </form>
      <div>
        {
          serachTeam && filteredProduct.map((product) =>(
            <Link key={product.id} to={`/shop/${product.id}`}>
              <div className="d-flex gap-3 p-2">
                <div>
                  <div className="pro-thumb h-25">
                    <img src={product.img} width={70} className="flex-{grow|shrink}-0" alt="" />
                  </div>
                </div>
                <div className="product-content">
                  <p>
                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                  </p>
                  <h6>${product.price}</h6>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Serach;
