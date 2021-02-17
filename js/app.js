'use strict';

let userName = prompt('Please, enter your name!','Enter it here');

alert('You are welcome \''+userName+'\' to our website');

alert('We will start the user story by asking you \''+userName+'\' five yes / no questions.');

alert('You can use [yes,no,y and n] and you can capitalize them of you want!');

let score=0;

let aeroEng = prompt('The first question: Is Shady Enginner?','yes/no,y/n');
aeroEng=aeroEng.toLocaleLowerCase();


if (aeroEng === 'yes' || aeroEng === 'y') {
  alert('Yes \''+ userName + '\' your answer is correct, Shady is an Aeronautical Engineer.');
  score= score +1;
  //console.log('Answer for Q1: yes \'',userName,'\' your answer is correct, Shady is an Aeronautical Engineer.');
} else if (aeroEng === 'n' || aeroEng === 'no') {
  alert('Sorry \''+ userName + '\' your answer is wrong, Shady is an Aeronautical Engineer.');
  //console.log('Answer for Q1: no \'',userName,'\' your answer is wrong, Shady is an Aeronautical Engineer.');
} else{
  alert('Sorry, you do not follow the instruction.');
}

let uni = prompt('The second question: Did Shady study in The University of Jordan ?','yes/no,y/n');
uni=uni.toLocaleLowerCase();

//while (uni !== 'yes' && uni !== 'y' && uni !== 'n' && uni !== 'no' && !aeroEng) {
//  uni = prompt('The first question: Is Shady Enginner?','yes/no,y/n');
//}
if (uni === 'yes' || uni === 'y') {
  alert('Sorry \''+ userName + '\' your answer is wrong, Shady did not study in The University of Jordan');
  //console.log('Answer for Q2: yes \'',userName,'\' your answer is wrong, Shady did not study in The University of Jordan');
} else if (uni === 'n' || uni === 'no') {
  alert('Yes \''+ userName + '\' your answer is correct, Shady did not study in The University of Jordan');
  //console.log('Answer for Q2: no \'',userName,'\' your answer is correct, Shady did not study in The University of Jordan');
  score= score +1;
} else{
  alert('Sorry, you do not follow the instruction.');
}

let hobby = prompt('The third question: Is the drawing one of Shady\'s hoppies ?','yes/no,y/n');
hobby=hobby.toLocaleLowerCase();


if (hobby === 'yes' || hobby === 'y') {
  alert('Sorry \''+ userName + '\' your answer is wrong, drawing is not one of Shady\'s hoppies');
  //console.log('Answer for Q3: yes \'',userName,'\' your answer is wrong, S drawing is not one of Shady\'s hoppies');
} else if (hobby === 'n' || hobby === 'no') {
  alert('Yes \''+ userName + '\' your answer is correct, drawing is not one of Shady\'s hoppies');
  //console.log('Answer for Q3: no \'',userName,'\' your answer is correct,  drawing is not one of Shady\'s hoppies');
  score= score +1;
} else{
  alert('Sorry, you do not follow the instruction.');
}

let anime = prompt('The fourth question: Does Shady watch Anime ?','yes/no,y/n');
anime=anime.toLocaleLowerCase();


if (anime === 'yes' || anime === 'y') {
  alert('Yes \''+ userName + '\' your answer is correct, Shady watchs Anime');
  //console.log('Answer for Q4: yes \'',userName,'\' your answer is correct, Shady watchs Anime');
  score= score +1;
} else if (anime === 'n' || anime === 'no') {
  alert('Sorry \''+ userName + '\' your answer is wrong, Shady watchs Anime');
  //console.log('Answer for Q4: no \'',userName,'\' your answer is wrong, Shady watchs Anime');
} else{
  alert('Sorry, you do not follow the instruction.');
}

let custSuppAdv = prompt('The last question: Does Shady work as a customer support advisor ?','yes/no,y/n');
custSuppAdv=custSuppAdv.toLocaleLowerCase();


if (custSuppAdv === 'yes' || custSuppAdv === 'y') {
  alert('Yes \''+ userName + '\' your answer is correct, Shady works as a customer support advisor');
  //console.log('Answer for Q5: yes \'',userName,'\' your answer is correct, Shady works as a customer support advisor');
  score= score +1;
} else if (custSuppAdv === 'n' || custSuppAdv === 'no') {
  alert('Sorry \''+ userName + '\' your answer is wrong, Shady works as a customer support advisor');
  //console.log('Answer for Q5: no \'',userName,'\' your answer is wrong, Shady works as a customer support advisor');
} else{
  alert('Sorry, you do not follow the instruction.');
}

alert('Now we will play guessing game, press ok to play!');

let guessNum = prompt( 'Turn on your detective skills and guess the number that I have?[You have only 4 attempts]','Write your guessing here' );

let corNum = 5;

let i = 0;

for (i ; i < 3; i++){
  if (guessNum === corNum ) {
    alert('You are right! Did you ever think to be a police detective?');
    score=score+1;
    //console.log('I asked about guessing number and you answerd!');
    break;
  } else if (guessNum > corNum) {
    guessNum = prompt('It is too highe, try again!');
  } else{
    guessNum = prompt('It is too low, try again!');
  }
}
if (i === 3){
  alert('Sorry, you run out if attempts');
  //console.log('I asked about guessing number but you did not answer!');
}



alert('Now we will play another guessing game, press ok to play!');

let fruit = ['banana','apple','kiwi','Cherre'];

let o=0;

for ( o ; o < 6; o++) {
  let guessFruit = prompt('Turn on your detective skills and guess the fruit that I love?[You have only 6 attempts]','Write your guessing here');
  let guess = guessFruit.toLowerCase();
  for (let d = 0; d < fruit.length; d++){
    while (guess === fruit[d]) {
      alert('You do it right!');
      score = score + 1;
      o = 6;
      alert('The right answers are ['+fruit+']');
      //console.log('I asked about guessing my fav fruit and you answerd!');
      break;
    }
  }
  if (o !== 6){
    let attemptsLeft = 6 - ( o + 1 ) ;
    alert('Be ware you only have ['+attemptsLeft+'] attempts');
  }
}


if (o===5){
  alert('Sorry, you run out if attempts');
  alert('The right answers are ['+fruit+']');
  //console.log('I asked about guessing my fav fruit but you did not answer!');
}

alert('Your score is ['+ score +'] from [7]');
