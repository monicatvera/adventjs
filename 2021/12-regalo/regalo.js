//La ruta perfecta para dejar los regalos

/* En el taller de Santa 🎅 se están preparando los trineos de motor eléctrico para poder hacer la ruta perfecta para dejar los regalos.

La ruta empieza en el punto 0 y de ahí va hacia la derecha en línea recta.

El Keanu Relfes 🧝 nos ha preparado una lista de obstáculos a evitar. El problema es que nos ha dado la lista de posiciones de los obstáculos desordenada... 😅 aunque al menos nunca la posición 0 puede tener un obstáculo.

Encima, el trineo sólo se puede configurar para saltar un número fijo de posiciones... 😱

Necesitamos una función que nos diga la longitud mínima del salto del trineo para ir evitando todos los obstáculos en la ruta. */

function getMinJump(obstacles) {
    let no_multiples = Array.from([...Array(Math.max(...obstacles) + 1).keys()]);
    no_multiples.splice(0, 1);

    obstacles.map((obstacles_index) => {
        no_multiples = no_multiples.filter((number) => obstacles_index % number != 0 || number > obstacles_index);
    });

    return Math.min(...no_multiples);
}