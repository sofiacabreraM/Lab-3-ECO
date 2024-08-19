const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json()); // utility to process JSON in requests
app.use(cors()); // utility to allow clients to make requests from other hosts or ips


let moves = [];
let results = [];

app.post("/move", (req, res) => {
  const player = req.body;
  moves.push(player);

 
  if (moves.length === 2) {
    results.push({ players: moves.map(p => ({ name: p.name, move: p.move })) });
    moves = []; 
  }

  res.status(200).send({ message: `Jugada recibida de ${player.name}` });
});


app.get("/results", (req, res) => {
  res.status(200).send({ results });
});

app.listen(5050, () => {
  console.log("Servidor corriendo en http://localhost:5050");
});
