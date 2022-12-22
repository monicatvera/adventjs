//El sistema operativo de Santa Claus

/* Evelyn Belefzin 👩‍💻 está trabajando en un sistema operativo para ser usado en el taller de Santa Claus 🎅.

Se ha dado cuenta que en el taller nadie le presta atención a los nombres de los ficheros y a veces intentan guardar el mismo fichero más de una vez... así que es importante que gestionemos bien los nombres duplicados.

Tenemos que crear una función que al pasarnos un array de nombres de archivo devolvamos un array con el mismo número de elementos pero donde los nombres que se repetían se anexe al final (k) donde k sería el número de veces que se encontró repetido. */

function fixFiles(files) {
  let goodFiles = [],
    ayuda = {},
    fileName;
  for (let i = 0; i < files.length; i++) {
    if (ayuda[files[i]] != undefined) {
      fileName = files[i] + "(" + ayuda[files[i]] + ")";
      ayuda[files[i]]++;
    } else {
      ayuda[files[i]] = 1;
      fileName = files[i];
    }
    goodFiles.push(fileName);
  }
  return goodFiles;
}
