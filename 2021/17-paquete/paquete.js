//La locura de enviar paquetes en esta época

/* Las empresas de paquetería 📦 se preparan para la época de fiestas y la locura de envíos que les espera.

La empresa funciona con flotas de furgonetas 🚛 y camiones 🚚. Las flotas tienen un organigrama, ya que existen rangos de nivel de experiencia.

Necesitamos saber el número de paquetes que una persona va a poder gestionar en un día. Para ello se cuenta el número de paquetes que puede llevar esa persona y todos los transportistas que tiene en su equipo. Lo malo es que los datos están almacenados de una forma un poco rara en un array */

function countPackages(carriers, carrierID) {
  const lookupIds = new Set();

  let total = 0;

  for (const [id, , deps] of carriers) {
    if (lookupIds.has(id) || id === carrierID) {
      for (const dep of deps) lookupIds.add(dep);
      const [, packages] = carriers.find(([i]) => i === id);
      total += packages;
    }
  }
  return total;
}
