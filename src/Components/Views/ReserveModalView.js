import React, { useState } from 'react';


const ReserveModalView = (props) => {


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
                </div>
            </div>
        </div>
}

export default ReserveModalView;