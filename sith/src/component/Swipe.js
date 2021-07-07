import React, {useState } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import bg1 from '../assets/image/bg1.png'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";


// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

function Swipe() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        
        spaceBetween={10}
        // navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2"
      >
        
        <SwiperSlide>
        <Link to="/about-user">
        <div className="swiper_style">
          <img src="\image\office_img1.jpg" alt="" srcset="" />
          <div className="swiper_card">
            <div className="swiper_card_inner">
            <i className="far fa-plus-square"></i>
            </div>
          </div>
          </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/about-user">
        <div className="swiper_style">
          <img src="\image\office_img2.jpg" alt="" srcset="" />
          <div className="swiper_card">
            <div className="swiper_card_inner">
            <i className="far fa-plus-square"></i>
            </div>
          </div>
          </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/about-user">
        <div className="swiper_style">
          <img src="\image\office_img1.jpg" alt="" srcset="" />
          <div className="swiper_card">
            <div className="swiper_card_inner">
            <i className="far fa-plus-square"></i>
            </div>
          </div>
          </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/about-user">
        <div className="swiper_style">
          <img src="\image\office_img2.jpg" alt="" srcset="" />
          <div className="swiper_card">
            <div className="swiper_card_inner">
            <i className="far fa-plus-square"></i>
            </div>
          </div>
          </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/about-user">
        <div className="swiper_style">
          <img src="\image\office_img1.jpg" alt="" srcset="" />
          <div className="swiper_card">
            <div className="swiper_card_inner">
            <i className="far fa-plus-square"></i>
            </div>
          </div>
          </div>
        </Link>
        </SwiperSlide>
        
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={4}
        freeMode={true}
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
        className="mySwiper"
      >
         <SwiperSlide>
         <img src="\image\office_img1.jpg" alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="\image\office_img2.jpg" alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="\image\office_img1.jpg" alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="\image\office_img2.jpg" alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="\image\office_img1.jpg" alt="" srcset="" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}

export default Swipe;
