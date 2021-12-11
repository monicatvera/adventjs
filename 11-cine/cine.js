//¿Vale la pena la tarjeta fidelidad del cine?

/* Este mes de diciembre hay películas super interesantes en el cine... y tengo que optimizar cómo gasto el dinero.

Mi cine favorito tiene dos posibilidades:
• Entrada de un sólo uso: Cuesta 12$ por cada película.

• Tarjeta de fidelidad: Cuesta 250$ pero que cada vez que vas pagas sólo el 75% del precio del ticket. ¡Lo mejor es que se acumula! Y cada vez que vas, se paga el 75% del precio del ticket que pagaste la última vez. */

function shouldBuyFidelity(times) {
    const ticketPrice = 12;
    const fidelityPrice = 250;
    const fidelityDiscount = 0.75;
    const singleTickets = ticketPrice * times;
    const fidelityTickets = new Array(times)
      .fill(null)
      .map((_, idx) => ticketPrice * fidelityDiscount ** (idx + 1));
    const fidelityTotal =
      fidelityPrice + fidelityTickets.reduce((acc, item) => acc + item, 0);
    return fidelityTotal < singleTickets;
  }