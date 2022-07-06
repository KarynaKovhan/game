var myCards = document.getElementById('container');
var resultsArray = [];
var counter = 0;
var text = document.getElementById('text');
var second = 00;
var msecond = 00;
var tries = 0;
var appendmsecond = document.getElementById("msecond");
var appendSecond = document.getElementById("second");
var buttonbtn1 = document.getElementById('btn1');

var Interval;
var images = [
    '1', '2', '3', '4', '5', '6', '7', '8',  '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'
];

var clone = images.slice(0); 
var cards = images.concat(clone);

const shuffle = (o) => {
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i],   o[i] = o[j], o[j] = x);
  return o;
}
shuffle(cards);

// cards.forEach(item => {
//   card = document.createElement('div');
//   card.dataset.item = item;
//   card.dataset.view = "card";
//   myCards.appendChild(card);

//   card.onclick = () => {
//     console.log(card);
//     if (this.className != 'flipped' && this.className != 'correct') {
//         this.className = 'flipped';
//         console.log(this);
//         let result = this.dataset.item;
//         resultsArray.push(result);
//         clearInterval(Interval);
//         Interval = setInterval(startTimer, 10);
//     }

//     if (resultsArray.length > 1) {
//       if (resultsArray[0] === resultsArray[1]) {
//         check("correct");
//         counter++;
//         win();
//       } else {
//         check("reverse");
//       }

//       resultsArray = [];
//     }
//   } 
// })

 for (var i = 0; i < cards.length; i++) {
  card = document.createElement('div');
  card.dataset.item = cards[i];
  card.dataset.view = "card";
  myCards.appendChild(card);

  card.onclick = function () {
    if (this.className != 'flipped' && this.className != 'correct'){
        this.className = 'flipped';
        console.log(this);
        var result = this.dataset.item;
        resultsArray.push(result);
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }


    if (resultsArray.length > 1) {
      if (resultsArray[0] === resultsArray[1]) {
        check("correct");
        counter++;
        win();
        resultsArray = [];
      } else {
        check("reverse");
        resultsArray = [];
      }

    }

  }

};


window.onload = () => {
    span = document.getElementById('triesid');
    var tries = 0;
    span.innerHTML = tries;
    document.body.onclick = (e) => {
        e = e;
        console.log(e);
        var target = e.target || e.srcElement;
        if (target.className != 'flipped') return;
        tries++;
        span.innerHTML = Math.floor(tries / 2);
    }
}




var check = (className) => {
  var x = document.getElementsByClassName("flipped");

  setTimeout(() => {
    for(var i = (x.length - 1); i >= 0; i--) {
      x[i].className = className;
    }

  },500);
}

var win = () => {
  if(counter === 18) {
    clearInterval(Interval);
      text.innerHTML = "Счет: " + (5000 - (second + tries));
  }
}

const change_color = (obj) => obj.value && (document.body.style.backgroundColor = obj.value);

buttonbtn1.onclick = () => clearInterval(Interval);

const startTimer = () => {
  msecond++;

  if(msecond < 9){
    appendmsecond.innerHTML = "0" + msecond;
  }

  if (msecond > 9){
    appendmsecond.innerHTML = msecond;
  }

  if (msecond > 99) {
    second++;
    appendSecond.innerHTML = "0" + second;
    msecond = 0;
    appendmsecond.innerHTML = "0" + 0;
  }

  if (second > 9){
    appendSecond.innerHTML = second;
  }
}

var i = 0;
var timer1=null;
var isRunning =false;
const jieDian = (id) => document.getElementById(id);

const startBtn = () => {
        timer1=setInterval(() => {
        i++
        jieDian("msecond").innerHTML =doubleLing(i%100);
        jieDian("second").innerHTML =doubleLing(parseInt(i/100)%60) ;
        jieDian("minute").innerHTML =doubleLing(parseInt(i/6000)%60) ;
        jieDian("houer").innerHTML =doubleLing(parseInt(i/360000)) ;
    },10)
}

const pasueBtn = () => clearInterval(timer1)


jieDian("btn1").onclick = () => {
    if(!isRunning){
        jieDian("btn1").innerHTML = "Пауза";
        isRunning = true;
        startBtn();
    }else{
        jieDian("btn1").innerHTML="Начинать";
        isRunning = false;
        pasueBtn();
    }
}

jieDian("reset").onclick = () => {
    clearInterval(timer1)
    i = 0;
    isRunning = false;
    jieDian("btn1").innerHTML="Продолжить";
    jieDian("msecond").innerHTML ="00"
    jieDian("second").innerHTML ="00";
    jieDian("minute").innerHTML ="00";
    jieDian("houer").innerHTML ="00";
}

const doubleLing = (i) => i < 10 ? "0"+i : i
  







