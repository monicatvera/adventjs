# ¡Es hora de poner la navidad en casa! 🎄

¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

Si le pasamos el argumento **5**, se pintaría esto:

```javascript
____*____
___***___
__*****__
_*******_
*********
____#____
____#____

```

Creamos un triángulo de asteríscos * con la altura proporcionada y, a los lados, usamos el guión bajo **_** para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de **#**.

Otro ejemplo con un árbol de altura **3**:

```javascript
__*__
_***_
*****
__#__
__#__

```

Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.
## Solución propuesta

```javascript

 const XMAS_TREE_SYMBOLS = Object.freeze( {
  EMPTY: '_',
  LEAF: '*',
  TRUNK: '#',
 })

const XMAS_TRUNK_HEIGHT = 2

export default function createXmasTree( height ) {
  return ( createXmasTreeTop( height ) + createXmasTrunk( height ) ).trim()
}

function createXmasTreeTop( height ) {
  let treeTop = ''
  for( let i = height; i > 0; --i ) {
      treeTop += createXmaxTreeTopLevel( height, i )
  }
  return treeTop
}

function createXmaxTreeTopLevel ( height, level ) {
    const emptySpace = fillString( level - 1, XMAS_TREE_SYMBOLS.EMPTY )
    const leavesPart = fillString( height - level, XMAS_TREE_SYMBOLS.LEAF )
    return emptySpace + leavesPart + XMAS_TREE_SYMBOLS.LEAF + leavesPart + emptySpace + '\n'
}

function fillString( size, filler ) {
  return Array( size ).fill( filler ).join('')
}

function createXmasTrunk( height ) {
  const emptySpace = fillString( height - 1, XMAS_TREE_SYMBOLS.EMPTY )
  return [ ...Array( XMAS_TRUNK_HEIGHT ) ].reduce( trunk => trunk += emptySpace + XMAS_TREE_SYMBOLS.TRUNK + emptySpace + '\n', '' )
}
```

---

Eso es todo, ¡Muchas gracias! 😎