import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './ReserveModalView.css'


const ReserveModalView = (props) => {

    const { onCloseModal, reserveInfo } = props;
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
                    <div>Reservation Complete</div>
                    
                    <div className="Rmodal-info">
                        kitchen: {reserveInfo.name}
                    </div>
                    <div className="Rmodal-info">
                        Date: 
                    </div>
                    <div className="Rmodal-info">
                        Time: {reserveInfo.time}
                    </div>
                    <div className="Rmodal-info">
                        Ingredients: {reserveInfo.ingredients}
                    </div>
                    <div className="Rmodal-info">
                        Total fee: {reserveInfo.price}
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