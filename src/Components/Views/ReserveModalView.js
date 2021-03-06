import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './ReserveModalView.css'


const ReserveModalView = (props) => {

    const getFormatDate = (date) => {
        var year = date.getFullYear();
        var month = (1 + date.getMonth());
        month = month >= 10 ? month : '0' + month;
        var day = date.getDate();
        day = day >= 10 ? day : '0' + day;
        return  year + '-' + month + '-' + day;
    }

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
                    <div className="Rmodal-title">
                        Successfully Reserved
                    </div>
                    <div className="reserveInfo">Reservation Info</div>
                    <div className="Rmodal-info">
                        <div className="reserveModalText">Name</div>
                        <div className="reserveModalVal">{reserveInfo.name}</div>
                    </div>
                    <div className="Rmodal-info">
                        <div className="reserveModalText">Date</div>
                        <div className="reserveModalVal">{getFormatDate(reserveInfo.date)}</div>
                    </div>
                    <div className="Rmodal-info">
                        <div className="reserveModalText">Time</div>
                        <div className="reserveModalVal">{reserveInfo.time}</div>
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