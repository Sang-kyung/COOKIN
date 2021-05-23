import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import { useHistory } from 'react-router';
import './QuestionView.css'

import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

SwiperCore.use([Pagination, Navigation]);

const QuestionView = (props) => {

    const { onCloseModal } = props;
    const history = useHistory();

    const handleModalClose = (e) => {
        onCloseModal();
    };

    return <div>
            <div className="Qmodal">
                <div className="Qmodal-question">          
                    <span className="Qclose" onClick={handleModalClose}>&times;</span>
                    <div className="Qmodal-title">
                        How to use COOKIN
                    </div>
                    <Swiper pagination={{"type": "progressbar"}} navigation={true} className="mySwiper">
                        <SwiperSlide>
                                <img className="pictures" src={require(`../../img/Tutorials/step1.png`).default} />
                                <div className="div-descriptions"><span className="descriptions">Step 1. Type the one of your location and enter.</span></div>
                            </SwiperSlide>
                        <SwiperSlide>
                                <img className="pictures" src={require(`../../img/Tutorials/step2.png`).default} />
                                <div className="div-descriptions"><span className="descriptions">Step 2. Keep registering your locations one by one.</span></div>
                            </SwiperSlide>
                        <SwiperSlide>
                                <img className="pictures" src={require(`../../img/Tutorials/step3.png`).default} />
                                <div className="div-descriptions"><span className="descriptions">Step 3. Click 'fetch' button to recommend your shortest location to cookout</span></div>
                            </SwiperSlide>
                        <SwiperSlide>
                                <img className="pictures" src={require(`../../img/Tutorials/step4.png`).default} />
                                <div className="div-descriptions"><span className="descriptions">Step 4. Click certain kitchen to look for specifications.</span></div>
                            </SwiperSlide>
                        <SwiperSlide>
                                <img className="pictures" src={require(`../../img/Tutorials/step5.png`).default} />
                                <div className="div-descriptions"><span className="descriptions">Step 5. Check the options and make a reservation.</span></div>
                            </SwiperSlide>
                        <SwiperSlide>
                                <img className="pictures" src={require(`../../img/Tutorials/step6.png`).default} />
                                <div className="div-descriptions"><span className="descriptions">Step 6. In My Page, check or cancel your reservation information.</span></div>
                            </SwiperSlide>
                        </Swiper>
                    {/* <button className="Qmodal-signupbtn" onClick={_signup}>
                        {" "}
                        Sign up{" "}
                    </button> */}
                </div>
            </div>
        </div>
}

export default QuestionView;