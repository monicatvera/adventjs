//Contando los días para los regalos

/* Con la emoción, ya estamos empezando a contar los días del calendario hasta el 25 de diciembre 📆.

Para ayudar a esto, vamos a crear una función que pasándole una instancia de Date nos diga el número de días que faltan. */

function daysToXmas(date) {
    // ¡Y no olvides compartir tu solución en redes!
    const date_time_xmas = new Date("Dec 25, 2021").getTime()
    return Math.ceil((date_time_xmas - date.getTime())/(24*3600*1000))
}