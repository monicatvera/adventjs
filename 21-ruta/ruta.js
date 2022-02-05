//La ruta con los regalos

/* Se están preparando las rutas para el trineo de Santa 🎅. Tenemos almacenes por todo el mundo para que Santa pueda recoger los regalos y entregarlos en el destino final. 🎁

Necesitamos saber si las rutas que estamos creando tienen sentido o si Santa va a tener que dejar tirados regalos por el camino. 🥺 */

function canCarry(capacity, trip) {
  let packages = 0;
  for (let i = 0; i < trip.length; i++) {
    if (trip[i - 1] != undefined && trip[i][1] === trip[i - 1][2]) {
      packages -= trip[i - 1][0];
    }
    packages += trip[i][0];
    if (packages > capacity) {
      return false;
    }
  }
  return true;
}
