document.getElementById("fetch-results").addEventListener("click", fetchResults);

async function fetchResults() {
  try {
    const response = await fetch("http://localhost:5050/results");
    if (!response.ok) throw new Error("Error obteniendo resultados");

    const data = await response.json();
    renderResults(data.results);
  } catch (error) {
    console.error("Error:", error);
  }
}

function renderResults(results) {
  const container = document.getElementById("data-container");
  container.innerHTML = ""; // Clear previous data

  results.forEach(result => {
    const div = document.createElement("div");
    div.className = "item";
    const playerMoves = result.players.map(player => `${player.name}: ${player.move}`).join(" vs ");
    div.innerText = `Jugadas: ${playerMoves}`;
    container.appendChild(div);
  });
}
