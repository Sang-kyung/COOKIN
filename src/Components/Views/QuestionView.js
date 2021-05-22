import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './QuestionView.css'


const QuestionView = (props) => {

    const { onCloseModal } = props;
    const history = useHistory();

    const handleModalClose = (e) => {
        onCloseModal();
    };

    const goMypage = (e) => {
        history.push("/mypage");
    }

    // const goHome = (e) => {
    //     history.push("/");
    // }

    return <div>
            <div className="Qmodal">
                <div className="Qmodal-question">          
                    <span className="Qclose" onClick={handleModalClose}>&times;</span>
                    <div className="Qmodal-title">
                        How to use COOKIN
                    </div>
                    <div className="Qmodal-grid">
                        <div className="Qmodal-info">
                            <img className="pictures" src={require(`../../img/Tutorials/Home.png`).default} />
                            <div className="descriptions">Step 1. Enter the one of your location.</div>
                        </div>
                        <div className="Qmodal-info">
                            <img className="pictures" src={require(`../../img/Tutorials/Home.png`).default} />
                            <div className="descriptions">Step 2. Keep entering you locations one by one.</div>
                        </div>
                        <div className="Qmodal-info">
                            <img className="pictures" src={require(`../../img/Tutorials/Home.png`).default} />
                            <div className="descriptions">Step 3. Recommend your shortest location and kitchens in there.</div>
                        </div>
                    </div>
                    <div className="Qmodal-grid">
                        <div className="Qmodal-info">
                            <img className="pictures" src={require(`../../img/Tutorials/Home.png`).default} />
                            <div className="descriptions">Step 4. Click certain kitchen to look for specifications.</div>
                        </div>
                        <div className="Qmodal-info">
                            <img className="pictures" src={require(`../../img/Tutorials/Home.png`).default} />
                            <div className="descriptions">Step 5. Set your data and reserve.</div>
                        </div>
                        <div className="Qmodal-info">
                            <img className="pictures" src={require(`../../img/Tutorials/Home.png`).default} />
                            <div className="descriptions">Step 6. In Mypage, there are your information.</div>
                        </div>
                    </div>
                    <div className="Qmodal-buttons">
                        <button className="Qmodal-mypagebutton" onClick={goMypage}>
                            {" "}
                            Sign Up{" "}
                        </button>
                    </div>
                </div>
            </div>
        </div>
}

export default QuestionView;