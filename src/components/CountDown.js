import React, { useEffect, useRef, useState } from "react"
import pngegg from '../pngegg.png'


function CountDown() {
  const [timerDays,setTimerDays] = useState('00');
  const [timerHours,setTimerHours] = useState('00');
  const [timerMinutes,setTimerMinutes] = useState('00');
  const [timerSeconds,setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('January 1, 2022 00:00:00').getTime();
    
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if(distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    }, 1000);
  };


  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  

  return (
    <div id="countdown" className="countdown">
      <div className="countdown-left">
      <h2>Deal Of The Week</h2>
      <hr/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
             do ipsum dolor sit amet, consectetur adipisicing elit</p>
             <div className="products_price">
             <span>$35.00 </span>
             <p>/ Wallet</p>
             </div>
      <br/>
      
      <div className="countdown-container">
          <div className="countdown-timer">
        <p>{timerDays}</p>
        <p><small>DAYS</small></p>
          </div>
          <div className="countdown-timer">
          <p>{timerHours}</p>
        <p><small>HRS</small></p>
          </div>
          <div className="countdown-timer">
          <p>{timerMinutes}</p>
        <p><small>MINS</small></p>
          </div>
         <div className="countdown-timer">
         <p>{timerSeconds}</p>
        <p><small>SEC</small></p>
         </div>
      </div>
      
      </div>
      
      <div className="countdown-right">
      <img src={pngegg} />
      <div className="sales_sticker">
        <h2>50% OFF</h2>
      </div>
      </div>

      
    </div>
  )
}

export default CountDown
