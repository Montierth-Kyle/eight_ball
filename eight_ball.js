var button = document.getElementById('answer');

button.addEventListener('click', function(e) {
  answer();  
});
function answer() {
var userQuestion = document.getElementById('question');
var randomNumber = Math.floor(Math.random() * 8);
var eightBall = '';
}
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Cannot predict now';
    break;
  case 3:
    eightBall = 'Don\'t count on it';
    break;
  case 4:
    eightBall = 'My sources say no';
    break;
  case 5:
    eightBall = 'Outlook not so good';
    break;
  case 6:
    eightBall = 'Signs point to yes';
    break;
  case 7:
    eightBall = 'You are in grave danger';
    break;
}

Person.prototype.addToList = function() {
  var list = document.getElementById('userAnswer')
  var li = document.createElement('li');
  li.innerHTML = 'Your magic answer is: ' + eightBall;
  list.appendChild(li)
}

console.log('The user asked: ' + userQuestion);
console.log('The eight ball answered: ' + eightBall);