var playerName = window.prompt("What is your robots name");

var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(){
  
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  
  //Alert players that they are starting the round
  window.alert("Welcome to robot Gladiators");

  //subtract the value of the 'plaer attack' from the value of 'enemyHealth' and use that result to update teh value in the 'enemyHealth' variable
  if(promptFight === "fight"  || promptFight === "FIGHT"){
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
  
    //check players health
    if(playerHealth <= 0){
      window.alert(playerName + " has died!");
    }
    else{
      window.alert(playerName + " still has " + playerHealth + " health left.")
    }
  } else if(promptFight === "skip" || promptFight === "SKIP"){
    //player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
    //if yes(true), leave fight
    if(confirmSkip){
      window.alert(playerName + " has decided to skip this fight. Goodbye!")
      // subtract money from playMoney for skipping
      playerMoney = playerMoney - 2;
    }
    //if no false, ask question again by running fight() again
  }else{
    fight();
  }

};

fight();