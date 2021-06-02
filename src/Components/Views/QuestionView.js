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
                            <div className="div-descriptions"><span className="descriptions">Step 1. Press the My Page button to sign up or log in.</span></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="pictures" src={require(`../../img/Tutorials/step2.png`).default} />
                            <div className="div-descriptions"><span className="descriptions">Step 2. Type one of your location. If you want to add more locations click enter or "Add Location". For immediate recommendation, click "Recommend Me"</span></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="pictures" src={require(`../../img/Tutorials/step3.png`).default} />
                            <div className="div-descriptions"><span className="descriptions">Step 3. Keep typing your locations one by one.</span></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="pictures" src={require(`../../img/Tutorials/step4.png`).default} />
                            <div className="div-descriptions"><span className="descriptions">Step 4. Click the recommend icon to get your recommended shortest location for your cookout.</span></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="pictures" src={require(`../../img/Tutorials/step5.png`).default} />
                            <div className="div-descriptions"><span className="descriptions">Step 5. Scroll to see kitchen choices and to look for kitchen details.</span></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="pictures" src={require(`../../img/Tutorials/step6.png`).default} />
                            <div className="div-descriptions"><span className="descriptions">Step 6. If you want to buy ingredients, choose the amount you want to buy through + and - signs.</span></div>
                        </SwiperSlide>    
                        <SwiperSlide>
                            <img className="pictures" src={require(`../../img/Tutorials/step7.png`).default} />
                            <div className="div-descriptions"><span className="descriptions">Step 7. Choose your prefered date and time, and reserve.</span></div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="pictures" src={require(`../../img/Tutorials/step8.png`).default} />
                            <div className="div-descriptions"><span className="descriptions">Step 8. In My Page, check or cancel your reservation information.</span></div>
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