var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

var storyText = "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

var insertx = [ 'Willy the Goblin', 'Big Daddy', 'Father Christmas'];
var inserty = [ 'the soup kitchen', 'Disneyland', 'the White House'];
var insertz = [ 'spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];


randomize.addEventListener('click', result);

function result() {
  
  if(customName.value != '') {
    var name = customName.value; 
  }
  console.log(name);
  
  var x = randomValueFromArray(insertx);
  var y = randomValueFromArray(inserty);
  var z = randomValueFromArray(insertz);
  
  console.log(x);
  console.log(y);
  console.log(z);
  
  if(document.getElementById("uk").checked) {
    var weight = Math.round(300);
    var temperature =  Math.round(94); 
  }
  
  var newStory = storyText;
  //newStory.replace();

  story.textContent = newStory;
  story.style.visibility = 'visible';
}