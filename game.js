var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red","blue","green","yellow"];
var level = 0;
var count = 0;

function nextSequence()
{
  count = 0;
  userClickedPattern = [];
  var randomVariable = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomVariable];
  gamePattern.push(randomChosenColor);
  $("#"+randomChosenColor).fadeToggle("fast",function(){
    $("#"+randomChosenColor).fadeToggle("fast");
    level++;
    $("h1").html("Level "+level);
  playSound(randomChosenColor);
  });
}

$(document).keypress(function()
{
  if(level===0)
    nextSequence();
})

$(".btn").click(function(){
  userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userChosenColor,++count);
})

function playSound(name)
{
  var x = new Audio("sounds/"+name+".mp3");
  x.play();
}

function animatePress(currentColor)
{
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColor).removeClass("pressed")
  },100);
}

function checkAnswer(checkColor,count)
{   console.log(gamePattern[count-1]);
    console.log(checkColor);
    console.log(count);
    if(gamePattern[count-1]===checkColor)
    {
      if(count===gamePattern.length)
        nextSequence();
      else
        {

        }
    }
    else
    {
      gameOver();
    }

}

function gameOver()
{
  var x = new Audio("sounds/wrong.mp3");
  x.play();
  $("h1").html("Game Over, Press any Key to Restart");
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  },200);
  level = 0;
  gamePattern = [];
}
