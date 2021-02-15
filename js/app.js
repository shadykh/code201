'use strict';
let userName = prompt('Please, enter your name!','Enter it here');

alert('You are welcome \''+userName+'\' to our website');

alert('We will start the user story by asking you \''+userName+'\' five yes / no questions.');

alert('You can use [yes,no,y and n] and you can capitalize them of you want!');

let aeroEng = prompt('The first question: Is Shady Enginner?','yes/no,y/n');

switch (aeroEng.toLowerCase()) {
case 'yes':
  alert('Yes \''+ userName + '\' your answer is correct, Shady is an Aeronautical Engineer.');
  //console.log('Answer for Q1: yes \'',userName,'\' your answer is correct, Shady is an Aeronautical Engineer.');
  break;
case 'y':
  alert('Yes \''+ userName + ' your answer is correct, Shady is an Aeronautical Engineer.');
  //console.log('Answer for Q1: yes \'',userName,'\' your answer is correct, Shady is an Aeronautical Engineer.');
  break;
case 'no':
  alert('Sorry \''+ userName + '\' your answer is wrong, Shady is an Aeronautical Engineer.');
  //console.log('Answer for Q1: no \'',userName,'\' your answer is wrong, Shady is an Aeronautical Engineer.');
  break;
case 'n':
  alert('Sorry \''+ userName + '\' your answer is wrong, Shady is an Aeronautical Engineer.');
  //console.log('Answer for Q1: no \'',userName,'\' your answer is wrong, Shady is an Aeronautical Engineer.');
  break;
default:
  alert('What is the wrong \''+ userName + '\' you do not answer with yes/no! Please, stick with the rules');
  break;
}

let uni = prompt('The second question: Did Shady study in The University of Jordan ?','yes/no,y/n');

switch (uni.toLowerCase()) {
case 'yes':
  alert('Sorry \''+ userName + '\' your answer is wrong, Shady did not study in The University of Jordan');
  //console.log('Answer for Q2: yes \'',userName,'\' your answer is wrong, Shady did not study in The University of Jordan');
  break;
case 'y':
  alert('Sorry \''+ userName + '\' your answer is wrong, Shady did not study in The University of Jordan');
  //console.log('Answer for Q2: yes \'',userName,'\' your answer is wrong, Shady did not study in The University of Jordan');
  break;
case 'no':
  alert('Yes \''+ userName + '\' your answer is correct, Shady did not study in The University of Jordan');
  //console.log('Answer for Q2: no \'',userName,'\' your answer is correct, Shady did not study in The University of Jordan');
  break;
case 'n':
  alert('Yes \''+ userName + '\' your answer is correct, Shady did not study in The University of Jordan');
  //console.log('Answer for Q2: no \'',userName,'\' your answer is correct, Shady did not study in The University of Jordan');
  break;
default:
  alert('What is the wrong \''+ userName + '\' you do not answer with yes/no! Please, stick with the rules');
  break;
}

let hobby = prompt('The third question: Is the drawing one of Shady\'s hoppies ?','yes/no,y/n');

switch (hobby.toLowerCase()) {
case 'yes':
  alert('Sorry \''+ userName + '\' your answer is wrong, drawing is not one of Shady\'s hoppies');
  //console.log('Answer for Q3: yes \'',userName,'\' your answer is wrong, S drawing is not one of Shady\'s hoppies');
  break;
case 'y':
  alert('Sorry \''+ userName + '\' your answer is wrong, drawing is not one of Shady\'s hoppies');
  //console.log('Answer for Q3: yes \'',userName,'\' your answer is wrong, S drawing is not one of Shady\'s hoppies');
  break;
case 'no':
  alert('Yes \''+ userName + '\' your answer is correct, drawing is not one of Shady\'s hoppies');
  //console.log('Answer for Q3: no \'',userName,'\' your answer is correct,  drawing is not one of Shady\'s hoppies');
  break;
case 'n':
  alert('Yes \''+ userName + '\' your answer is correct, drawing is not one of Shady\'s hoppies');
  //console.log('Answer for Q3: no \'',userName,'\' your answer is correct,  drawing is not one of Shady\'s hoppies');
  break;
default:
  alert('What is the wrong \''+ userName + '\' you do not answer with yes/no! Please, stick with the rules');
  break;
}

let anime = prompt('The fourth question: Does Shady watch Anime ?','yes/no,y/n');

switch (anime.toLowerCase()) {
case 'yes':
  alert('Yes \''+ userName + '\' your answer is correct, Shady watchs Anime');
  //console.log('Answer for Q4: yes \'',userName,'\' your answer is correct, Shady watchs Anime');
  break;
case 'y':
  alert('Yes \''+ userName + '\' your answer is correct, Shady watchs Anime');
  //console.log('Answer for Q4: yes \'',userName,'\' your answer is correct, Shady watchs Anime');
  break;
case 'no':
  alert('Sorry \''+ userName + '\' your answer is wrong, Shady watchs Anime');
  //console.log('Answer for Q4: no \'',userName,'\' your answer is wrong, Shady watchs Anime');
  break;
case 'n':
  alert('Sorry \''+ userName + '\' your answer is wrong, Shady watchs Anime');
  //console.log('Answer for Q4: no \'',userName,'\' your answer is wrong, Shady watchs Anime');
  break;
default:
  alert('What is the wrong \''+ userName + '\' you do not answer with yes/no! Please, stick with the rules');
  break;
}

let custSuppAdv = prompt('The last question: Does Shady work as a customer support advisor ?','yes/no,y/n');

switch (custSuppAdv.toLowerCase()) {
case 'yes':
  alert('Yes \''+ userName + '\' your answer is correct, Shady works as a customer support advisor');
  //console.log('Answer for Q5: yes \'',userName,'\' your answer is correct, Shady works as a customer support advisor');
  break;
case 'y':
  alert('Yes \''+ userName + '\' your answer is correct, Shady works as a customer support advisor');
  //console.log('Answer for Q5: yes \'',userName,'\' your answer is correct, Shady works as a customer support advisor');
  break;
case 'no':
  alert('Sorry \''+ userName + '\' your answer is wrong, Shady watchs Anime');
  //console.log('Answer for Q5: no \'',userName,'\' your answer is wrong, Shady works as a customer support advisor');
  break;
case 'n':
  alert('Sorry \''+ userName + '\' your answer is wrong, Shady watchs Anime');
  //console.log('Answer for Q5: no \'',userName,'\' your answer is wrong, Shady works as a customer support advisor');
  break;
default:
  alert('What is the wrong \''+ userName + '\' you do not answer with yes/no! Please, stick with the rules');
  break;
}

