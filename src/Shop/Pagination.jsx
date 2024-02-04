import React from "react";

const Pagination = ({
  productsProPage,
  totalProducts,
  paginate,
  activePage,
}) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsProPage); i++) {
    pageNumber.push(i);
  }
  return (
    <ul className="default-pagination lab-ul">
      <li>
        <a href="#" onClick={()=>{
          if(activePage < pageNumber.length){
            paginate(activePage - 1)
          }
        }}>
          <i className="icofont-rounded-left"></i>
        </a>
      </li>
      {pageNumber.map((Number) => (
        <li key={Number} className={`page-item ${ Number === activePage ? "bg-warning" : ""}`}>
          <button onClick={() => paginate(Number)} className="bg-transparent">
            {Number}
          </button>
        </li>
      ))}
      <li>
        <a href="#" onClick={()=>{
          if(activePage < pageNumber.length){
            paginate(activePage + 1)
          }
        }}>
          <i className="icofont-rounded-right"></i>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
