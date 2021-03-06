// Game states
// "Win" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//"Lose" - Player robot's health is zero or less

var randomNumber = function(min , max){
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
}

var getPlayerName = function(){
  var name = "";
  
  while(name === "" || name === null){
    name = prompt("what is your robots name?");
  }
  console.log("Your robot's name is " + name);
  return name;
}

var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function(){
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function(){
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function(){
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  }
};

console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Andriod",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
];


var fightOrSkip = function() {
  // ask player if they'd like to fight or skip using fightOrSkip function
  var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  // Conditional Recursive Function Call
  if (!promptFight) {
    window.alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
  }
  
  promptFight = promptFight.toLowerCase();
  // if player picks "skip" confirm and then stop the loop
  if (promptFight === "skip") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerInfo.playerMoney = playerInfo.money - 10;
      
      return true;
    }
  }
  return false;
};

var fight = function(enemy){
  
  var isPlayerTurn = true;
  if(Math.random() > 0.5){
    isPlayerTurn = false;
  }

  while(enemy.health > 0 && playerInfo.health > 0){
    if(isPlayerTurn){
      if(fightOrSkip()){
        //if true leave fight
        break;
      }
    
      
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

      enemy.health = Math.max(0, enemy.health - damage);
      
      //Log a result message to the console se we know that it worked
      console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
    
      //check enemy's health
      if(enemy.health <= 0){
        window.alert(enemy.name + " has died!");
        
        playerInfo.money = playerInfo.money + 20;
        break;
      }
      else{
        window.alert(enemy.name + " still has " + enemy.health + " health left.")
      }
      
    
      // subtract teh value of 'enemyAttack' from teh value of 'player Health' and use that result to update the value in the 'player Health' variable
      

      playerInfo.health = Math.max(0, playerInfo.health - damage);
      //Log a resulting message to the console so we know that it worked
      console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
    
      //check players health
      if(playerInfo.health <= 0){
        window.alert(playerInfo.name + " has died!");
        break;
      }
      else{
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.")
      }
    }
    
    //switch turn order for next round
    isPlayerTurn = !isPlayerTurn;
    
  }

};



var shop = function(){
  var shopOptionPrompt = window.prompt("Type 1 to REFILL your health, type 2 to UPGRADE your attack, or type 3 to LEAVE the store?");
  shopOptionPrompt = parseInt(shopOptionPrompt);

  switch(shopOptionPrompt){
    
      case 1:
      playerInfo.refillHealth();
      break;

    
      case 2:
      playerInfo.upgradeAttack();
      break;

    
      case 3:
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
  
//reset player stats
playerInfo;

  for(var i = 0; i < enemyInfo.length; i++){
  
    if(playerInfo.health > 0){
      window.alert("Welcome to Robot Gladiators! round  " + (i +1));
      var pickedEnemyObj = enemyInfo[i];
      pickedEnemyObj.health = randomNumber(40, 60);
      
      fight(pickedEnemyObj);

      if(playerInfo.health > 0 && i < enemyInfo.length - 1){
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
  window.alert("THe game has now ended. Lets see how you did!");

  //checkstorage for highscore, if its not there, use 0
  var highScore = localStorage.getItem("highscore");
  if(highScore === null){
    highScore = 0;
  }

  //if player have more money than the high score , player has new highscore!
  if(playerInfo.money > highScore){
    localStorage.setItem("highscore", playerInfo.name);
    localStorage.setItem("name", playerInfo.name);

    alert(playerInfo.name + " now has the high score of " + playerInfo.money + "!");
  }
  else{
    alert(playerInfo.name + " did not beat the highscore of " + highScore + ". Maybe next time!");
  }

  //ask player if they'd like to play again

  var playAgainConfirm = window.confirm("Would you like to play again?");

  if(playAgainConfirm){
    startGame();
  }
  else{
    window.alert("Thank you for playing Robot Gladiators! Come back soon !");
  }

}

startGame();