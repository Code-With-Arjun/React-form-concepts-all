import React from "react";
import { IoMenu } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import data from "./data.json";
import Navbar from "./Navbar";
import Slider from "react-slick";
import "../css/JsonFileData.css";
const JsonfileData = () => {
  console.log(data);
  const renderItems = data.map((val, index) => {
    return (
      <div
        className="col-md-4 col-sm-6 mb-1 col-lg-4 col-xl-4 text-center"
        key={index}
      >
        <div class="card rounded border-0 card_height" style={{ width: "90%" }}>
          <div class="card-body p-4">
            <figure>
              <img
                src={val.image}
                alt=""
                class="img-fluid d-block mx-auto mb-3"
                style={{ width: "40%", height: "120px" }}
              />
            </figure>
            <h5>
              {" "}
              <a href="#" class="text-dark text-decoration-none">
                {val.title.slice(1, 60)}
              </a>
            </h5>
            <p class="small text-muted font-italic ">
              {val.description.slice(1, 100)}
            </p>
            <ul class="list-inline small">
              <li class="list-inline-item m-0">
                <FaStar className="text-danger" />
              </li>
              <li class="list-inline-item m-0">
                {" "}
                <FaStar className="text-danger" />
              </li>
              <li class="list-inline-item m-0">
                {" "}
                <FaStar className="text-danger" />
              </li>
              <li class="list-inline-item m-0">
                {" "}
                <FaStar />
              </li>
              <li class="list-inline-item m-0">
                {" "}
                <FaStar />
              </li>
            </ul>
          </div>
          {/* <div class="hover-text">
            <a href="#">
              <span class="valign">
                <span class="name">{val.title.slice(1, 20)}</span>
                <span class="cta"></span>
              </span>
            </a>
          </div> */}
        </div>
      </div>
    );
  });
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 606,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div style={{ backgroundColor: "#f6f4f4" }}>
        <Navbar />
        <div className="container mt-2">
          {/* <div className="row " >   
   <Slider {...settings}>
        {renderItems} 
      
      </Slider>
    </div> */}
          <div className="row my-sm-3">{renderItems}</div>
        </div>
      </div>
    </>
  );
};

export default JsonfileData;
