import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../componets/PageHeader";
import Review from "../Shop/Review";
import PopulerPost from "../Shop/PopulerPost";
import Tags from "../Shop/Tags";



import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductDisplay from "./ProductDisplay";




// import { AutoPlay } from '/node_modules/.vite/deps/swiper_modules.js';

const SingelProduct = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("/src/products.json")
      .then((res) => res.json())
      .then((Data) => setProduct(Data));
  }, []);

  const result = product.filter((p) => p.id === id);
  
  return (
    <div>
      <PageHeader title={"OUR SHOP SINGLE"} curPage={"Shop / Single Product"} />
      <div className="shop-single padding-tb aside-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="product-details">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                      <div className="product-thumb">
                        <div className="swiper-container pro-single-top">
                          <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={"true"}
                            autoplay={{
                              delay: 2000,
                              disableOnInteraction: false,
                            }}
                            // modules={[AutoPlay]}
                            navigation={{
                              prevEl: ".pro-single-prev",
                              nextEl: ".pro-single-next",
                            }}
                            className="mySwiper"
                          >
                            {result.map((item, i) => (
                              <SwiperSlide key={i}>
                                <div className="single-thumb">
                                  <img src={item.img} alt="" />
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                          <div className="pro-single-next">
                            <i className="icofont-rounded-left"></i>
                          </div>
                          <div className="pro-single-prev">
                            <i className="icofont-rounded-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 col-12">
                      <div className="post-content">
                        <div>
                          {
                            result.map(item => <ProductDisplay key={item.id} item={item}/>)
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* review */}
                <div className="review">
                  <Review/>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside className="ps-lg-4">
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

export default SingelProduct;
