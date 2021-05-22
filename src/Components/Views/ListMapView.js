import React from 'react';
import { useHistory } from 'react-router-dom';
import "./ListMapView.css";

const ListMapView = ({kitchen}) => {  
    const history = useHistory();

    const redirectfunction = () => {
        history.push({
          pathname:"/detail",
          state:{
              data: kitchen
           }
        });
    }

    const image = "../../img/kitchen" + kitchen.img[0] + ".png";
    // <img class="center" src={require({image}).default}></img>
    // .center {
    //     display: block;
    //     margin-left: auto;
    //     margin-right: auto;
    //     width: 50%;
    // }

    var this_div = <div id="body" onDoubleClick={(e)=>{redirectfunction()}}>
                        <div id="photo"></div>
                        <div id="content">
                            <div id="name">
                                <p onClick={(e)=>{redirectfunction()}}>{kitchen.name}</p>
                            </div>
                            <div id="information">
                                <br></br>
                                <div id="price">
                                    Price: {kitchen.price}
                                </div>
                                <br></br>
                                <div id="utensils">
                                    Available Utensils:
                                    {kitchen.utensils.map((items, index) => {
                                        return (<div class="utensils" key={index}>{items.name}: {items.num}</div>)
                                    })}
                                </div>
                                <br></br>
                                <div id="ingredients">
                                    Available Ingredients:
                                    {kitchen.ingredients.map((items, index) => {
                                        return (<div class="ingredients" key={index}> {items.name} </div>)
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
    return this_div;
}

export default ListMapView;