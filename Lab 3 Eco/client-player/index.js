let countdown;
let timeLeft = 10;

document.getElementById("submit-move").addEventListener("click", submitMove);


startTimer();

function startTimer() {
  countdown = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = `Tiempo restante: ${timeLeft}`;

    if (timeLeft === 0) {
      clearInterval(countdown);
      submitMove(); 
    }
  }, 1000);
}

async function submitMove() {
  clearInterval(countdown); 
  const name = document.getElementById("player-name").value;
  const move = document.getElementById("player-move").value;

  if (!name || !move) {
    alert("Por favor, ingresa tu nombre y selecciona una jugada.");
    return;
  }

  const player = { name, move };

  try {
    const response = await fetch("http://localhost:5050/move", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // Specify the content type as JSON
      body: JSON.stringify(player), // Convert the data to a JSON string
    });

    if (!response.ok) throw new Error("Error en el envío");

    document.getElementById("data-container").innerText = "Jugada enviada!";
  } catch (error) {
    console.error("Error:", error);
  }
}
