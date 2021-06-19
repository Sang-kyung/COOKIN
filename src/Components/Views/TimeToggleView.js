import React from 'react';
import './TimeToggleView.css';

const TimeToggleView = (props) => {

    const { onTimeChange, date } = props;

    const handleTimeChange = (e) => {
        onTimeChange(e.target.value);
    };

    var day, hour, nowday, nowhour, future=false;

    day = date.getDate();
    hour = date.getHours();

    var now = new Date()
    nowday = now.getDate();
    nowhour = now.getHours();

    console.log(day)
    console.log(hour)
    console.log(nowday)
    console.log(nowhour)

    if( day > nowday ){
        future = true;
    }
    
    if( future == true ){
        return (
        <select className={"timeSelect"} onChange={handleTimeChange}>
            <option value="">Select Time</option>
            <option value="09:00-12:00">09:00-12:00</option>
            <option value="12:00-15:00">12:00-15:00</option>
            <option value="15:00-18:00">15:00-18:00</option>
            <option value="18:00-21:00">18:00-21:00</option>
        </select>
        )
    }
    else{
        if(nowhour < 9){
            return (
                <select className={"timeSelect"} onChange={handleTimeChange}>
                    <option value="">Select Time</option>
                    <option value="09:00-12:00">09:00-12:00</option>
                    <option value="12:00-15:00">12:00-15:00</option>
                    <option value="15:00-18:00">15:00-18:00</option>
                    <option value="18:00-21:00">18:00-21:00</option>
                </select>
                )

        }
        else if(nowhour > 9 && nowhour < 12){
            return (
                <select className={"timeSelect"} onChange={handleTimeChange}>
                    <option value="">Select Time</option>
                    <option value="12:00-15:00">12:00-15:00</option>
                    <option value="15:00-18:00">15:00-18:00</option>
                    <option value="18:00-21:00">18:00-21:00</option>
                </select>
                )
        }
        else if(nowhour > 12 && nowhour < 15){
            return (
                <select className={"timeSelect"} onChange={handleTimeChange}>
                    <option value="">Select Time</option>
                    <option value="15:00-18:00">15:00-18:00</option>
                    <option value="18:00-21:00">18:00-21:00</option>
                </select>
                )
        }
        else if(nowhour > 15 && nowhour < 18){
            return (
                <select className={"timeSelect"} onChange={handleTimeChange}>
                    <option value="">Select Time</option>
                    <option value="18:00-21:00">18:00-21:00</option>
                </select>
                )
        }
        else{
            return (
                <select className={"timeSelect"} onChange={handleTimeChange}>
                    <option value="">Select Time</option>
                </select>
                )
        }
    }
}
export default TimeToggleView;