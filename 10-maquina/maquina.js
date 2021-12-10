//La máquina de cambio

/* Para mejorar la productividad de la tienda en la que trabajamos, 
vamos a crear una pequeña máquina que calcula el mínimo 
número de monedas que debemos usar para dar el cambio de una compra en metálico. */

function getCoins(change) {
    const coins = [1, 2, 5, 10, 20, 50].reverse();
    return coins.map(coin => {
      const div = parseInt(change / coin);
      change = change % coin;
      return div >= 1 ? div : 0;
    }).reverse();
  }