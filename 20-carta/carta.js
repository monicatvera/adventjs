//¿Una carta de pangramas? ¡QUÉ!

/* En la clase de español del pueblo de Laponia han creado un reto a la hora de escribir la carta a Papa Noél 🎅: la carta ✉️ tiene que contener todas las letras del alfabeto.

Desde el taller de Santa 🎅 se han enterado y quieren escribir una función que les diga si realmente la cadena de texto que les llega tiene, efectivamente, todas las letras del abecedario español 🔎.

Hay que tener en cuenta las letras en mayúscula y que las letras con acento y diéresis se consideran iguales. Por ejemplo la á y la ä cuenta como una a. */

function pangram(letter) {
  letter = letter
    .toLowerCase()
    .replace(/[áä]/g, "a")
    .replace(/[éë]/g, "e")
    .replace(/[íï]/g, "i")
    .replace(/[óö]/g, "o")
    .replace(/[úü]/g, "u");
  return "abcdefghijklmnñopqrstuvwxyz"
    .split("")
    .every((char) => letter.includes(char));
}