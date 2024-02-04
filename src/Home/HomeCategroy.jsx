import React from 'react';
import { Link } from 'react-router-dom';


const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
  {
    imgUrl:"https://i.ibb.co/2sb3HDy/theregisti-HSXIp58y-Py-I-unsplash.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "DSLR Camera",
  },
  {
    imgUrl:"https://i.ibb.co/PzMRKcZ/joseph-barrientos-4q-Sb-FWh-HKs-unsplash.jpg" ,
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Shoes",
  },
  {
    imgUrl:"https://i.ibb.co/VSB54sG/kal-visuals-M5-Z-9b-Gc-E3-Y-unsplash.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Photography",
  },
  {
    imgUrl: "https://i.ibb.co/c6zdRQk/hardini-lestari-Muj-ZAKea8-Lw-unsplash.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Formal Dress",
  },
  {
    imgUrl:"https://i.ibb.co/wrsHMPK/tamara-bellis-n-On-T17l-KYz8-unsplash.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Colorful Bags",
  },
  {
    imgUrl: "https://i.ibb.co/3YQfgSx/sidekix-media-Wgk-A3-CSFrjc-unsplash.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Home Decor",
  },
];

const HomeCategroy = () => {
  return (
    <div className='category-section style-4 padding-tb'>
      <div className='container'>
        <div className='section-header text-center'>
          <span className='subtitle'>{subTitle}</span>
          <h2 className=" text-3xl font-bold">{title}</h2>
        </div>
        <div className='section-wrapper'>
          <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
            {
              categoryList.map((val,i) => <div key={i} className='col'>
                <Link to="/shop" className='category-item'>
                  <div className='category-inner'>
                    <div className='category-thubm'>
                      <img src={val.imgUrl} alt="" />
                    </div>
                    <div className='category-content'>
                      <div className='cate-icon'>
                        <i className={val.iconName}></i>
                      </div>
                        <Link to="/shop"><h6>{val.title}</h6></Link>
                    </div>
                  </div>
                </Link>
              </div> )
            }
          </div>
          <div className='text-center mt-5'>
            <Link to="/shop" className='lab-btn'>{btnText}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategroy;
