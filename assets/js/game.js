var playerName = window.prompt("What is your robots name");

var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(){
  //Alert players that they are starting the round
  window.alert("Welcome to robot Gladiators");

  //subtract the value of the 'plaer attack' from the value of 'enemyHealth' and use that result to update teh value in the 'enemyHealth' variable
  enemyHealth = enemyHealth - playerAttack;
  //Log a result message to the console se we know that it worked
  console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

  //check enemy's health
  if(enemyHealth <= 0){
    window.alert(enemyName + " has died!");
  }
  else{
    window.alert(enemyName + " still has " + enemyHealth + " health left.")
  }
  

  // subtract teh value of 'enemyAttack' from teh value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
  playerHealth = playerHealth - enemyAttack;
  //Log a resulting message to the console so we know that it worked
  console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

  //check enemy's health
  if(playerHealth <= 0){
    window.alert(playerName + " has died!");
  }
  else{
    window.alert(playerName + " still has " + playerHealth + " health left.")
  }

};

fight();