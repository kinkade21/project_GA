'use strict';

export const timer = (deadline) => {
  const timerDays = document.querySelector('.count_1 span');
  const timerHours = document.querySelector('.count_2 span');
  const timerMinutes = document.querySelector('.count_3 span');
  const timerSeconds = document.querySelector('.count_4 span');

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline)
    let dateNow = new Date().getTime()
    let timeRemaining = (dateStop - dateNow) / 1000
    let days = Math.floor(timeRemaining / 60 / 60 / 24)
    let hours = Math.floor((timeRemaining / 60 / 60) % 24)
    let minutes = Math.floor((timeRemaining / 60 ) % 60)
    let seconds = Math.floor(timeRemaining % 60)

    return {timeRemaining, days, hours, minutes, seconds}

  }
   
   

  const updateTime = () => {
    let time = getTimeRemaining();

    if (time.timeRemaining <= 0) {
      timerDays.textContent = '00';
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
    } else {
      timerDays.textContent = addZerro(time.days);
      timerHours.textContent = addZerro(time.hours);
      timerMinutes.textContent = addZerro(time.minutes);
      timerSeconds.textContent = addZerro(time.seconds);
    }

      setInterval( () => {
            if(time.timeRemaining > 0) {
                updateTime();
            }
          }, 1000);

    }

    const addZerro = (num) => (num < 10)  ? '0' + num : num;
    updateTime();
  }



