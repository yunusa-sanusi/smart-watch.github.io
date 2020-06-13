var hour = document.getElementById('hour').innerHTML
var minute = document.getElementById('minute').innerHTML
var second = document.getElementById('second').innerHTML
var blackSkin = document.getElementById('black')
var redSkin = document.getElementById('red')
var blueSkin = document.getElementById('blue')
var pinkSkin = document.getElementById('pink')
var purpleSkin = document.getElementById('purple')
var time = document.getElementById('time')
var heartRate = document.getElementById('heart-rate')
var timeBlock = document.getElementById('time-block')
var heartbeat = document.getElementById('heartbeat')
var numRate = document.getElementById('num-rate')


var secondsCount = parseInt(second)
var minutesCount = parseInt(minute)
var hoursCount = parseInt(hour)


// Counts and displays the time
setInterval(function() {
  if(secondsCount < 59) {
    secondsCount += 1
    if(secondsCount >= 0 && secondsCount <= 9) {
      document.getElementById('second').innerHTML = '0' + secondsCount
    } else {
      document.getElementById('second').innerHTML = secondsCount
    }
  } else {
    secondsCount = 0
    minutesCount += 1
    if(minutesCount >= 0 && minutesCount <=9) {
      document.getElementById('minute').innerHTML = '0' + minutesCount
      document.getElementById('second').innerHTML = '0' + secondsCount
    } else {
      document.getElementById('second').innerHTML = '0' + secondsCount
      document.getElementById('minute').innerHTML = minutesCount 
    }
  }

  if(minutesCount > 59) {
    minutesCount = 0
    hoursCount += 1
    document.getElementById('minute').innerHTML = '0' + minutesCount
    if(hoursCount >= 0 && hoursCount <= 9) {
      document.getElementById('hour').innerHTML = '0' + hoursCount
    } else {
      document.getElementById('hour').innerHTML = hoursCount
    }
  }

  if(hoursCount > 23) {
    hoursCount = 0
    document.getElementById('hour').innerHTML = '0' + hoursCount
  }
}, 1000)


// Events to change the skin of the watch
blackSkin.addEventListener('click', function() {
  document.getElementById('smartwatch-skin').src = 'accessories/black.png'
  console.log('Mouse Click')
})

redSkin.addEventListener('click', function() {
  document.getElementById('smartwatch-skin').src = 'accessories/red.png'
  console.log('Mouse Click')
})

blueSkin.addEventListener('click', function() {
  document.getElementById('smartwatch-skin').src = 'accessories/blue.png'
  console.log('Mouse Click')
})

pinkSkin.addEventListener('click', function() {
  document.getElementById('smartwatch-skin').src = 'accessories/pink.png'
  console.log('Mouse Click')
})

purpleSkin.addEventListener('click', function() {
  document.getElementById('smartwatch-skin').src = 'accessories/purple.png'
  console.log('Mouse Click')
})

time.addEventListener('click', function() {
  timeBlock.style.display = 'block'
  heartbeat.style.display = 'none'
  numRate.style.display = 'none'
})

heartRate.addEventListener('click', function() {
  timeBlock.style.display = 'none'
  heartbeat.style.display = 'block'
  numRate.style.display = 'block'

  setInterval(function() {
    if(secondsCount % 2 === 0) {
      heartbeat.style.transform = 'scale(1.1)'
    } else {
      heartbeat.style.transform = 'scale(1)'
    }
  }, 1000)

  
})