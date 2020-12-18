// Game states
// "Win" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//"Lose" - Player robot's health is zero or less


var playerName = window.prompt("What is your robots name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName){
  while(enemyHealth > 0 && playerHealth > 0){
    
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    if(promptFight === "skip" || promptFight === "SKIP"){
      //player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      
      //if yes(true), leave fight
      if(confirmSkip){
        
        window.alert(playerName + " has decided to skip this fight. Goodbye!")
        // subtract money from playMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("player money", playerMoney);
        break;
      }
      //if no false, ask question again by running fight() again
    }
  
    //Alert players that they are starting the round
    
    //subtract the value of the 'plaer attack' from the value of 'enemyHealth' and use that result to update teh value in the 'enemyHealth' variable
    if(promptFight === "fight"  || promptFight === "FIGHT"){
      enemyHealth = enemyHealth - playerAttack;
      
      //Log a result message to the console se we know that it worked
      console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    
      //check enemy's health
      if(enemyHealth <= 0){
        window.alert(enemyName + " has died!");
        
        playerMoney = playerMoney + 20;
        break;
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
        break;
      }
      else{
        window.alert(playerName + " still has " + playerHealth + " health left.")
      }
      
    }
  }

};

var shop = function(){
  var shopOptionPrompt = window.prompt("would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL' 'UPGRADE', or 'LEAVE' to make a choice");

  switch(shopOptionPrompt){
    case "REFILL":
    case "refill":
      if(playerMoney >= 7){      
        window.alert("refill players health by 20 for 7 dollars.");
        
        //increase player health and decreas money
        playerHealth = playerHelath + 20;
        playerMoney = playerMoney - 7;
      } else{
        window.alert("you dont have enough money!");
      }

      break;
    case "UPGRADE":
    case "upgrade":
      if(playerMoney >= 7){      
        window.alert("Upgrading player's attack by 6 for 7 dollars.");

        //increase attack and decrease money
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
      }else{
        window.alert("you dont have enough money!");
      }

      break;

    case "LEAVE":
    case "leave":
      window.alert("Leaving the store.")
      //do nothing, so function will end
      break;

    default:
      window.alert("You did not pick a valid option. try again.");

      //call shop() again to forc player to pick a valid option
      shop();
      break;


  }
}

var startGame = function(){
  
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for(var i = 0; i < enemyNames.length; i++){
  
    if(playerHealth > 0){
      window.alert("Welcome to Robot Gladiators! round  " + (i +1));
      var pickedEnemyName = enemyNames[i];
      enemyHealth = 50;
      
      fight(pickedEnemyName);

      if(playerHealth > 0 && i < enemyNames.length - 1){
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

        if(storeConfirm){
          shop();
        }
      }
    }else{
      window.alert("We have lost your robot in battle! Game over!");
      break;
    }
    
  }
  
  endGame();
}

var endGame = function(){
  
  for(var i = 0; i < enemyNames.length; i++){
    if(playerHealth > 0){
      window.alert("Great job, you've survived the game You now have a score of " + playerMoney + ".");
    }else{
      window.alert("You've lost your robot in battle.")
    }
    
    //ask player if they would like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    
    if(playAgainConfirm){
      shop();
      startGame();
    }else{
      window.alert("Thank you for playing Robot Galdiator! COme back soon!");
      break;
    }
  }
}

startGame();