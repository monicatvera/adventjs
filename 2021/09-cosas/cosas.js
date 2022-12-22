//Agrupando cosas automáticamente

/* En la fábrica de Papa Noél 🎅 se acerca el día especial... y todavía tenemos un montón de cosas por contar. 😅

Por suerte a Mark Zucktheelf 🧝 se le ha ocurrido crear una función que permita agrupar un array, que puede ser de valores u objetos, a través de una función o de una propiedad. */

function groupBy(collection, it) {
    const fn = item => typeof it === 'string' ? item[it] : it(item)
    return collection.reduce(
      (accum, item) => ({ ...accum, [fn(item)]: [...(accum[fn(item)] ?? []), item] })
      , {}
    )
  }