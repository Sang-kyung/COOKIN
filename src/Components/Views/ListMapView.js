import React from 'react';
import { useHistory } from 'react-router-dom';
import "./ListMapView.css";
import { overListener, OutListener } from './SearchMap';

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

    const mouseOver = (e) => {
        overListener(kitchen.name)
        
    }

    const mouseOut = () => {
        OutListener(kitchen.name)
    }

    var this_div = <div id="body">
                        <div id="photo"  onClick={(e)=>{redirectfunction()}}>
                            {kitchen && <img src={require(`../../img/Kitchen/${kitchen.img[0]}.png`).default}/>}
                        </div>
                        <div id="content">
                            <div id="name" onMouseOver={mouseOver} onMouseOut={mouseOut} onClick={(e)=>{redirectfunction()}}>
                                {kitchen.name}
                            </div>
                            <br />
                            <div id="dist">
                                    {kitchen.dist}km
                            </div>
                            <div id="price">
                                    {kitchen.price}KRW 
                            </div>
                            <div id="information">
                                <div id="utensils">
                                    {kitchen.utensils.map((items, index) => {
                                        return (<div className="utensils" key={index}>· {items.num} {items.name}&nbsp;</div>)
                                    })}
                                </div>
                                <br />
                                <div id="ingredients">
                                    {kitchen.ingredients.map((items, index) => {
                                        return (<div className="ingredients" key={index}>· {items.name}&nbsp;</div>)
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
    return this_div;
}

export default ListMapView;