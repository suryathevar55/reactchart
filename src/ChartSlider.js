import React from "react";

import {Swiper,SwiperSlide} from 'swiper/react';
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import Areachart from "./components/Areachart";
import Piechart from "./components/Piechart";
import Linechart from "./components/Linechart";
import Barchat from "./components/Barchart";
const ChartSlider=()=>{
    return(
        <div className="container">
            <Swiper 
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={1}
            spaceBetween={30}>
                <SwiperSlide>
                    <Linechart/>
                </SwiperSlide>
                <SwiperSlide>
                    <Areachart/>
                </SwiperSlide>
                <SwiperSlide>
                    <Barchat/>
                </SwiperSlide>
                <SwiperSlide>
                    <Piechart/>
                </SwiperSlide>

            </Swiper>

        </div>
    );
};

export default ChartSlider;