import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './CancelModalView.css';
import db from '../../firebase';
import { del } from '../../reducers/reservation';

const CancelModalView = (props) => {
    const { onCloseModal } = props;
    const resState = useSelector(state => state.reservation);
    const phone = resState.phone;
    const res = resState.res;
    const history = useHistory();
    const dispatch = useDispatch();

    const handleModalClose = (e) => {
        onCloseModal();
    };

    const cancel = ({phone, res}) => {
        let reservations = new Array();
        db.collection("reservation_list").doc(phone).get()
        .then((doc) => {
            reservations = doc.data().reservations;
            const idx = reservations.findIndex(e => e.name === res.name && new Date(e.date.toDate()).getTime() === new Date(res.date).getTime());
            if (idx > -1) reservations.splice(idx, 1);
            db.collection("reservation_list").doc(phone).set({reservations})
            .then(() => {
                dispatch(del());
                window.location.reload();
            })
            .catch((error) => {
                console.error("database cancel reservation failed", error);
            })
        })
        .catch((error) => {
            console.error("database load reservation failed", error);
        });
    }

    return <div>
            
            <div className="Cmodal">
                <div className="Cmodal-cancel">
                    <div className="Cmodal-title">
                        Cancel
                    </div>
                    <div className="Cmodal-Info">
                        Are you sure to Cancel?
                    </div>
                    <div className="Cmodal-buttons">
                        <button className="Cmodal-cancelbutton" onClick={() => cancel({phone, res})}>
                            {" "}
                            Cancel{" "}
                        </button>
                        <button className="Cmodal-closebutton" onClick={handleModalClose}>
                            {" "}
                            Back{" "}
                        </button>
                    </div>
                </div>
            </div>
        </div>
}

export default CancelModalView;