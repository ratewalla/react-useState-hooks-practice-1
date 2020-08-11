import React, {useState} from 'react';


function Time() {

    const curTime = new Date().toLocaleTimeString();
    const [time,setTime] = useState(curTime);

    setInterval(updateTime,1000);

    function updateTime(){
    const updatedTime = new Date().toLocaleTimeString();
        setTime(updatedTime)
    };

    return (
        <div className="container">
            <h1>{time}</h1>
            <button onClick={updateTime}>Update Time</button>
        </div>
    )
  
}

export default Time;
