import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './ReserveModalView.css'


const ReserveModalView = (props) => {

    const { onCloseModal } = props;
    const history = useHistory();

    const handleModalClose = (e) => { //input value 비워야돼.
        onCloseModal();
    };

    const goMypage = (e) => {
        history.push("/mypage");
    }

    const goHome = (e) => {
        history.push("/");
    }

    return <div>
            <div className="Rmodal">
                <div className="Rmodal-reserve">           
                    <div className="Rclose">
                        <span className="Rmodal-close" onClick={handleModalClose}>&times;</span>
                    </div>
                    <div className="Rmodal-info">
                        kitchen: 
                    </div>
                    <div className="Rmodal-info">
                        Date: 
                    </div>
                    <div className="Rmodal-info">
                        Time: 
                    </div>
                    <div className="Rmodal-info">
                        Total fee: 
                    </div>
                    <div className="Rmodal-buttons">
                        <button className="Rmodal-mypagebutton" onClick={goMypage}>
                            {" "}
                            My Page{" "}
                        </button>
                        <button className="Rmodal-homebutton" onClick={goHome}>
                            {" "}
                            Home{" "}
                        </button>
                    </div>
                </div>
            </div>
        </div>
}

export default ReserveModalView;