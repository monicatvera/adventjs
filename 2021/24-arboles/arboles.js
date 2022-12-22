//Comparando árboles de Navidad

/* El abuelo 👴 dice que ve todos los árboles de navidad iguales... La abuela 👵, en cambio, piensa que no. Que todos los árboles de navidad son distintos...

Vamos a hacer una función que nos diga si dos árboles de navidad son iguales. Para ello, vamos a comparar los árboles que ya creamos en el reto 22.

Tenemos que ver si ambos árboles tienen la misma estructura y los mismos valores en todas las ramas. */

function checkIsSameTree(treeA, treeB) {
  return (
    (!treeA && !treeB) ||
    (treeA?.value === treeB?.value &&
      checkIsSameTree(treeA.left, treeB.left) &&
      checkIsSameTree(treeA.right, treeB.right))
  );
}
