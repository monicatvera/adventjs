//En busca del reno perdido

/* ¡Hemos perdido a un reno y falta poco más de una semana para Navidad! 😱

Lo peor es que son tantos que no sabemos cuál es el que nos falta... ¡Qué lío! A ver, Elfon Musk ha hecho inventario y nos pasa un array con los ids de cada reno.

👍 Lo bueno: los ids son números que pueden ir del 0 al 100, no están repetidos y sólo se ha perdido un reno.

👎 Lo malo: la lista está desordenada y podría faltar el último... */

function missingReindeer(ids) {
    const sortedIds = [ ...ids ].sort( ( a, b ) => a - b)
      for( let i = 0; i < sortedIds.length; ++i ) 
          if( sortedIds[ i ] !== i ) return i
            return sortedIds.length   
  }