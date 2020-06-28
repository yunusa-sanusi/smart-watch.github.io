// Selecting the HTML Elements by their IDs
var hour = document.getElementById('hour').innerHTML;
var minute = document.getElementById('minute').innerHTML;
var second = document.getElementById('second').innerHTML;
var blackSkin = document.getElementById('black');
var redSkin = document.getElementById('red');
var blueSkin = document.getElementById('blue');
var pinkSkin = document.getElementById('pink');
var purpleSkin = document.getElementById('purple');
var timeBtn = document.getElementById('time');
var heartRate = document.getElementById('heart-rate');
var time = document.getElementById('time-info');
var heartbeat = document.getElementById('heartbeat');
var numRate = document.getElementById('num-rate');

// Changeing the values of the HTML elements to Integers
var secondsCount = parseInt(second);
var minutesCount = parseInt(minute);
var hoursCount = parseInt(hour);

// Counts and displays the time
setInterval(function() {
  // Increments the seconds value when it is less than 59 and updating it on the HTML document.
  if(secondsCount < 59) {
    secondsCount += 1;
    // Adds zero to the seconds if it is between 0 and 9. e.g 00, 01, 02, 03, 04, 05, 06 e.t.c.
    if(secondsCount >= 0 && secondsCount <= 9) {
      document.getElementById('second').innerHTML = '0' + secondsCount;
    } else {
      document.getElementById('second').innerHTML = secondsCount;
    };
  } else {
    // If the seconds value is greater than 59, It reset the seconds to 0 and increments the minutes by 1 and updates it on the HTML document.
    secondsCount = 0;
    minutesCount += 1;
    // Adds zero to the minute if it is between 0 and 9. e.g 00, 01, 02, 03, 04, 05, 06 e.t.c.
    if(minutesCount >= 0 && minutesCount <=9) {
      document.getElementById('minute').innerHTML = '0' + minutesCount;
      document.getElementById('second').innerHTML = '0' + secondsCount;
    } else {
      document.getElementById('second').innerHTML = '0' + secondsCount;
      document.getElementById('minute').innerHTML = minutesCount;
    };
  };

  // Increments the hour by one when the minutes value is greater than one and resets the minute to 0, also updates it on the HTML document.
  if(minutesCount > 59) {
    minutesCount = 0;
    hoursCount += 1;
    document.getElementById('minute').innerHTML = '0' + minutesCount;
    // Adds zero to the hour if it is between 0 and 9. e.g 00, 01, 02, 03, 04, 05, 06 e.t.c.
    if(hoursCount >= 0 && hoursCount <= 9) {
      document.getElementById('hour').innerHTML = '0' + hoursCount;
    } else {
      document.getElementById('hour').innerHTML = hoursCount;
    };
  };

  if(hoursCount > 23) {
    hoursCount = 0;
    document.getElementById('hour').innerHTML = '0' + hoursCount;
  };
}, 1000);


// Events to change the skin of the watch
// Changes the watch's skin to black
blackSkin.addEventListener('click', function() {
  document.getElementById('smartwatch-skin').src = 'accessories/black.png';
  console.log('Mouse Click');
});

// Changes the watch's skin to red
redSkin.addEventListener('click', function() {
  document.getElementById('smartwatch-skin').src = 'accessories/red.png';
  console.log('Mouse Click');
});

// Changes the watch's skin to blue
blueSkin.addEventListener('click', function() {
  document.getElementById('smartwatch-skin').src = 'accessories/blue.png';
  console.log('Mouse Click');
});

// Changes the watch's skin to pink
pinkSkin.addEventListener('click', function() {
  document.getElementById('smartwatch-skin').src = 'accessories/pink.png';
  console.log('Mouse Click');
});

// Changes the watch's skin to purple
purpleSkin.addEventListener('click', function() {
  document.getElementById('smartwatch-skin').src = 'accessories/purple.png';
  console.log('Mouse Click');
});

// Event that display the time
timeBtn.addEventListener('click', function() {
  time.style.display = 'block'
  heartbeat.style.display = 'none'
  numRate.style.display = 'none'
})

// Event that display the heartbeat and the heartrate
heartRate.addEventListener('click', function() {
  time.style.display = 'none'
  heartbeat.style.display = 'block'
  numRate.style.display = 'block'

  // Make the heart on the watch beat.
  setInterval(function() {
    if(secondsCount % 2 === 0) {
      heartbeat.style.transform = 'scale(1.1)';
      console.log('Even');
    } else {
      heartbeat.style.transform = 'scale(1)';
      console.log('Odd');
    };
  }, 1000);
});