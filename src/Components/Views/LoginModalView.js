import React, { useState } from 'react';
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import './LoginModal.css'
import { useDispatch } from 'react-redux';
import db from '../../firebase';
import { login } from '../../reducers/user';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LoginModalView = (props) => {

    const {isReservePage, onCloseModal } = props;

    const dispatch = useDispatch();
    const history = useHistory();

    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");

    const user = useSelector(state => state.user);

    const _login = () => {
    if(phone === "" || name === ""){
        return;
    }
    db.collection("user_list").doc(phone)
    .get().then((doc) => {
        if (doc.exists) {
            if(doc.data().name !== name){
                alert("Wrong name");
                return;
            }
            else{
                dispatch(login({phone, name}));
                !isReservePage && history.push("/mypage");
            }
        }
        else {
            db.collection("user_list").doc(phone).set({
                name: name,
                phone: phone
            }).then(() => {
                dispatch(login({phone, name}));
                !isReservePage && history.push("/mypage");
            })
        }
        }).catch((error) => {
            console.log("Login Firestore error: ", error);
        });
    }

    const onPhoneChange = (e) => {
        console.log(e.target.value);
        setPhone(e.target.value);
    }

    const onNameChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    const handleModalClose = (e) => { //input value 비워야돼.
        onCloseModal();
        setPhone("");
        setName("");
    };

    return <div>
            <div className="modal">
                <div className="modal-login">                
                <div className="close">
                    <span className="modal-close" onClick={handleModalClose}>&times;</span>
                </div>
                <div className="modal-title">
                    COOKIN
                </div>
                {isReservePage && user.isloggedIn
                    ?
                    <div>
                        You're logged in. Reserve the kitchen now!
                    </div> 
                    :
                    <div>
                        <input className="modal-input" value={phone} type="text" onChange={onPhoneChange} placeholder="Phone Number" />
                        <input className="modal-input" value={name} type="text" onChange={onNameChange} placeholder="Username" />
                        <button className="modal-loginbtn" onClick={_login}>
                            {" "}
                            Log In{" "}
                        </button>
                    </div>
                }
                {/* <Tabs defaultActiveKey="Log In" id="" */}
                </div>
            </div>
        </div>
}

export default LoginModalView;