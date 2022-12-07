import React from "react";
// Import Swiper React components
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { commenstData } from "../Api/commentsData";

import Styles from "./CustomersComments.module.css";
import Comments from "./Comments";
//styles
const CustomersComments = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear",
    };
    //commenst
    return (
        <div>
            <div className={Styles.Comments_title}>
                <span className={Styles.icon}></span>
                <h1 className={Styles.headerTitle}> نظرات مشتریان عزیز </h1>
                <span className={Styles.icon}></span>
            </div>

            <div className={Styles.Slider}>
                <Slider {...settings} className={Styles.img}>
                    {commenstData.map((comment) => (
                        <Comments Data={comment} key={comment.firstName} />
                    ))}

                    
                </Slider>

            </div>
        </div>
    );
};

export default CustomersComments;
