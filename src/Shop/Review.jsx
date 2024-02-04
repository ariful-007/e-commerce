import React, { useState } from "react";
import Ratting from './../Home/Ratting';


const reviwtitle = "Add a Review";

let ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];

const Review = () => {
  const [reviewShow, setReviewShow] = useState(true);

  return (
    <>
      <ul className={`review-nav lab-ul ${ reviewShow ? "RevActive" : "DescActive"}`}>
        <li onClick={() => setReviewShow(!reviewShow)} className="desc">Description</li>
        <li onClick={() => setReviewShow(!reviewShow)} className="rev">Reviews 4</li>
      </ul>
      <div className={`review-content ${reviewShow ? "review-content-show" : "descrition-show"}`}>

        <div className="review-showing">
          <ul className="content lab-ul">
            {
              ReviewList.map((review, i) =>(
                <li key={i}>
                  <div className="post-thumb">
                    <img src={review.imgUrl} alt="" />
                  </div>
                  <div className="post-content">
                    <div className="entry-meta">
                      <div className="posted-on">
                        <a href="#">{review.name}</a>
                        <p>{review.date}</p>
                      </div>
                    </div>
                    <div className="entry-content">
                      <p>{review.desc}</p>
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>
          {/* add review filed */}
          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>{reviwtitle}</h5>
              </div>
              <form className="row" action="">
                <div className="col-md-4 col-12">
                  <input type="text" name="name" id="name" placeholder="Your Name" />
                </div>
                <div className="col-md-4 col-12">
                <input type="email" name="name" id="name" placeholder="Your Email" />
                </div>
                <div className="col-md-4 col-12">
                  <div className="rating">
                    <span className="me-2">Your Ratting</span>
                    <Ratting/>
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <textarea name="message" id="message" rows="8" placeholder="Type Here Message"></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="default-button">
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* review descaption */}
        <div className="description">
          <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, illum? Eveniet veritatis perspiciatis eum blanditiis officia illum distinctio aut? Vitae, quia ad iste ea consequatur libero nam nemo minima porro perspiciatis fugiat provident ducimus? Soluta eum exercitationem dignissimos cum accusamus, repudiandae provident rerum. Hic non assumenda architecto laboriosam illo consequuntur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, illum? Eveniet veritatis perspiciatis eum blanditiis officia illum distinctio aut? Vitae, quia ad iste ea consequatur libero nam nemo minima porro perspiciatis fugiat provident ducimus? Soluta eum exercitationem dignissimos cum accusamus, repudiandae provident rerum. Hic non assumenda architecto laboriosam illo consequuntur? </p>
          <div className="post-item">

            <div className="post-thumb">
              <img src="/src/assets/images/shop/01.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
