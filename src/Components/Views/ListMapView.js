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

    var this_div = <div id="body">
                        <div id="photo">
                            {kitchen && <img src={require(`../../img/Kitchen/${kitchen.img[0]}.png`).default}/>}
                        </div>
                        <div id="content">
                            <div id="name" onClick={(e)=>{redirectfunction()}}>
                                {kitchen.name}
                            </div>
                            <div id="price">
                                    {kitchen.price}KRW
                            </div>
                            <div id="information">
                                <div id="utensils">
                                    {kitchen.utensils.map((items, index) => {
                                        return (<div className="utensils" key={index}> {items.num}{items.name}</div>)
                                    })}
                                </div>
                                <div id="ingredients">
                                    <i>Available Ingredients</i>:<br/>
                                    {kitchen.ingredients.map((items, index) => {
                                        return (<div className="ingredients" key={index}> {items.name} </div>)
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
    return this_div;
}

export default ListMapView;