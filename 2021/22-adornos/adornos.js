//¿Cuantos adornos necesita el árbol?

/* ¡Ay! Que llega la Navidad y no hemos decorado todavía el árbol. 🎄😱

Necesitamos una función que pasándole un árbol binario nos diga el número de decoraciones que necesitamos. Para ello tenemos un objeto que sería la representación del árbol y que nos indica en cada nivel el número de ramas a decorar. */

function countDecorations(bigTree) {
  return bigTree
    ? bigTree.value +
        countDecorations(bigTree.left) +
        countDecorations(bigTree.right)
    : 0;
}
