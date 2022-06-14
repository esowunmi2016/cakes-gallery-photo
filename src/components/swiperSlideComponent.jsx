import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, FreeMode, Navigation, Thumbs } from "swiper";
import { useState } from "react";
import { Zoom } from "react-reveal";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../style/weddingCakeStyle.css";

function SwiperSlideComponent(props) {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return ( 
    <>
      <Zoom>
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier:1,
              slideShadows: true,
            }}
            thumbs={{ swiper: thumbsSwiper }}
            // pagination={true}
            modules={[EffectCoverflow, Pagination, Thumbs]}
            className="mySwiper"
          >
            {
              props.data.map(data=>(
                <SwiperSlide className="swiperSlide">
                  <img src={data.img} />
                </SwiperSlide>
              ))
            }
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            // loop={true}
            spaceBetween={10}
            slidesPerView={'auto'}
            // freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
        >
          {
            props.data.map(data=>(
              <SwiperSlide className="swiperSlideThumb">
                <img src={data.img} />
              </SwiperSlide>
            ))
            }
        </Swiper>
      </Zoom>
    </>
  );
}

export default SwiperSlideComponent;