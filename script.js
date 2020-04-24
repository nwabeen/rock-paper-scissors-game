var userChoice = "";
var computerChoice = Math.random();
var countVict = 0;
var countDef = 0;


function compare(choice1, choice2) {
  var scissors = "scissors";
  var rock = "rock";
  var paper = "paper";

  switch (choice2) {
    case scissors:
      switch (choice1) {
        case rock:
          countVict++;
          return "Ciseaux a perdu !";
          break;
        case paper:
          countDef++;

          return "Ciseaux a gagné !";

          break;
        case scissors:
          return "Match nul...";
          break;
      }
    case rock:
      switch (choice1) {
        case rock:
          return "Match nul...";
          break;
        case paper:
          countVict++;

          return "Pierre a perdu !";
          break;
        case scissors:
          countDef++;
          return "Pierre a gagné !";
          break;
      }
    case paper:
      switch (choice1) {
        case rock:
          countDef++;
          return "Papier gagne !";
          break;
        case paper:
          return "Match nul...";
          break;
        case scissors:
          countVict++;
          return "Papier a perdu...";
          break;
      }
  }
}

function showVictorDef() {
  $("#countVict").text(countVict);
    $("#countDef").text(countDef);


};

function showResult() {
  $("#result").text((compare(userChoice, computerChoice)));
};
function checkComputer() {
  computerChoice = Math.random();
  if (computerChoice < 0.34) {
    computerChoice = "rock";
  } else if (computerChoice <= 0.67) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
}
$("#paper").click(function() {
  userChoice = "paper";
  showResult();
  checkComputer();
   showVictorDef();

});
$("#rock").click(function() {
  userChoice = "rock";
  showResult();
  checkComputer();
   showVictorDef();
});
$("#scissors").click(function() {
  userChoice = "scissors";
  showResult();
  checkComputer();
   showVictorDef();
});