// El último juego y hasta el año que viene 👋

/* Ayer, en noche buena, una família cenó por todo lo alto... Con tanta copa 🍾 encima todavía no han retirado los platos y la comida de ayer...

Un ratoncillo llamado midurat 🐭, que vió ayer el festín escondido, está relamiéndose los bigotes al ver todos los manjares que hay en el comedor.

Eso sí, hay que tener cuidado 😶 y sólo hacer los movimientos correctos para comer algo. Por eso, el ratón, que se ha visto los vídeos de midudev, va a crear una función para saber si su próximo movimiento es correcto o no ✅. */

function canMouseEat(direction, game) {
  const [rowIdx, colIdx] = game
    .map((row, idx) => {
      if (row.includes("m")) return [idx, row.indexOf("m")];
      return false;
    })
    .filter(Boolean)[0];

  const moves = {
    up: game?.[rowIdx - 1]?.[colIdx],
    down: game?.[rowIdx + 1]?.[colIdx],
    left: game?.[rowIdx]?.[colIdx - 1],
    right: game?.[rowIdx]?.[colIdx + 1],
  };

  return moves[direction] === "*";
}
