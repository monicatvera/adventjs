//¿Qué deberíamos aprender en Platzi?

/* Con motivo de las fechas más bonitas del año, en Platzi han lanzado una promoción muy especial porque la educación es un regalo 🎁 para siempre.

En Platzi tienen más de 800 cursos 📚 pero, claro, nuestro tiempo es limitado. Así que vamos a optimizar nuestro tiempo disponible para completar dos cursos usando el máximo número de horas disponible.

Tenemos que crear una función que recibe dos parámetros. El primero es el número de horas que tenemos disponible ⏳ y el segundo es un array donde cada índice es un curso y el valor el tiempo que se tarda en completar.

Tenemos claro que queremos hacer dos cursos así que la función debe devolver un array con el índice de los dos cursos que vamos a poder completar con el tiempo disponible proporcionado y usando el máximo tiempo disponible. Si no nos da tiempo, devolvemos null */

function learn(time, courses) {
  let solution = {};
  for (let i = 0; i < courses.length; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      if (courses[i] + courses[j] <= time) {
        if (courses[i] + courses[j] === time) {
          return [i, j];
        }
        solution[courses[i] + courses[j]] = [i, j];
      }
    }
  }
  return Object.keys(solution).length === 0
    ? null
    : solution[Object.keys(solution)[Object.keys(solution).length - 1]];
}
