import React from 'react';
import { useHistory } from 'react-router-dom';
import "./ListMapView.css";

const ListMapView = ({kitchen}) => {  
    const history = useHistory();

    const redirectfunction = () => {
        history.push({
          pathname:"/detail",
          state:{
              key: kitchen.name,
              data: kitchen
           }
        });
    }

    var this_div = <div id="body">
                        <div id="photo">
                            {kitchen && <img class="photo" src={require(`../../img/Kitchen/${kitchen.img[0]}.png`).default}/>}
                        </div>
                        <div id="content">
                            <div id="name" onClick={(e)=>{redirectfunction()}}>
                                {kitchen.name}
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