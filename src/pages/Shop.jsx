import React, { useState } from "react";
import PageHeader from "../componets/PageHeader";

const showResult = "Showing 01 - 12 of 139 Results"
import Date from '../products.json'
import ProductCards from "../Shop/ProductCards";
import Pagination from "../Shop/Pagination";
import Serach from "../Shop/Serach";
import ShopCategory from "../Shop/ShopCategory";
import PopulerPost from "../Shop/PopulerPost";
import Tags from "../Shop/Tags";

const Shop = () => {

  const [gridList, setGridList] = useState(true)
  const [product , setProduct] = useState(Date)

  // pagination 
  const [currentPage,setcurrentPage] = useState(1)
  const productsProPage = 12;
  const indexOfLastProduct = currentPage * productsProPage;
  const indexOfFristProduct = indexOfLastProduct - productsProPage;
  const currentProduct =product.slice(indexOfFristProduct,indexOfLastProduct);
  // funtion to change the current page
  const paginate = (pageNumber) =>{
    setcurrentPage(pageNumber)
  }

  // filter products based on category
  const [selectedCategory, setSelectedCategory] = useState("All")
  const menuItems = [...new Set(Date.map((val) => val.category))]

  const filterItem = (curcat) =>{
    const newItem = Date.filter((newVal) =>{
      return newVal.category === curcat;
    })
    setSelectedCategory(curcat)
    setProduct(newItem)
  }
  
  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="Shop" />
      {/* shop page */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                {/* layout title here */}
                <div className="shop-title d-flex flex-wrap justify-content-between ">
                    <p>{showResult}</p>
                    <div className={`product-view-mode ${gridList ? "gridActive" : "listActive"}`}>
                      <a className="grid" onClick={()=> setGridList(!gridList)}>
                        <i className="icofont-ghost"></i>
                      </a>

                      <a className="list" onClick={()=> setGridList(!gridList)}>
                        <i className="icofont-listine-dots"></i>
                      </a>

                    </div>
                </div>
                {/* products crad */}
                <div>
                  <ProductCards gridList={gridList} product={currentProduct}/>
                </div>

                <div>
                  <Pagination
                  productsProPage={productsProPage}
                  totalProducts={product.length}
                  paginate={paginate}
                  activePage={currentPage}
                  />
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Serach product={product} gridList={gridList}/>
                <ShopCategory
                filterItem={filterItem}
                setItem={setProduct}
                menuItems={menuItems}
                setProduct={setProduct}
                selectedCategory={selectedCategory}
                />
                <PopulerPost/>
                <Tags/>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
