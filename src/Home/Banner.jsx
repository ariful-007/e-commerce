import React, { useState } from 'react';
import productData from '../products.json'
import { Link } from 'react-router-dom';
import SelectedCategory from '../componets/SelectedCategory';


const title= (
  <h2>Search Your One From <span>Thousand</span> of product</h2>
)
const dese = " We Have the largest collection of product"
const bannerList = [
  {
  iconName: "icofont-users-alt-4",
  text: "1.5 Million Customers",
  },
  {
  iconName: "icofont-notification",
  text: "More then 2000 Marchent",
  },
  {
  iconName: "icofont-globe",
  text: "Buy Anything Online",
  },
  ];

const Banner = () => {
  const [searchProduct, setSearchProduct] = useState("")
  const [filteredProduct, setFilteredProduct] = useState(productData)
// console.log(productData)
  const heandelSearch = (e) =>{
    const searchTearm = e.target.value
    setSearchProduct(searchTearm)
    const filtered = productData.filter((product)=> product.name.toLowerCase().includes(searchTearm.toLowerCase()))
    setFilteredProduct(filtered)
  }
  return (
    <div className='banner-section style-4'>
      <div className='container'>
        <div className='banner-content'>
          {title}
          <form>
            <SelectedCategory select={"all"}/>
            <input type="text" name='search' id='search' placeholder='Search your product' value={searchProduct} onChange={heandelSearch} />
            <button type='submit'>
            <i className="icofont-search"></i>
            </button>
          </form>
          <p>{dese}</p>
          <ul className='lab-ul'>
            {
              searchProduct && filteredProduct.map((product, i) => <li key={i}>
                <Link className={`/shop/${product.id}`} >{product.name}</Link>
              </li>)
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;