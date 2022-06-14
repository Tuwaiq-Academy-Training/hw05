const { printChess } = require("./HW02_Sol_adjusted");
const games = require("./chessBoardStates.json");
const values = Object.values(games)
values.map((item) => {
  printChess(item.split("/"));
  console.log('--------------------------------------------');
});
