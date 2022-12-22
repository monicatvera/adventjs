//¡Es hora de poner la navidad en casa!

/* ¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, 
que será un entero positivo del 1 a, como máximo, 100. */

const XMAS_TREE_SYMBOLS = Object.freeze({
    EMPTY: '_',
    LEAF: '*',
    TRUNK: '#',
})

const XMAS_TRUNK_HEIGHT = 2
  
  export default function createXmasTree(height) {
    return (createXmasTreeTop(height) + createXmasTrunk(height)).trim()
  }
  
  function createXmasTreeTop(height) {
    let treeTop = ''
    for (let i = height; i > 0; --i) {
      treeTop += createXmaxTreeTopLevel(height, i)
    }
    return treeTop
  }
  
  function createXmaxTreeTopLevel(height, level) {
    const emptySpace = fillString(level - 1, XMAS_TREE_SYMBOLS.EMPTY)
    const leavesPart = fillString(height - level, XMAS_TREE_SYMBOLS.LEAF)
    return emptySpace + leavesPart + XMAS_TREE_SYMBOLS.LEAF + leavesPart + emptySpace + '\n'
  }
  
  function fillString(size, filler) {
    return Array(size).fill(filler).join('')
  }
  
  function createXmasTrunk(height) {
    const emptySpace = fillString(height - 1, XMAS_TREE_SYMBOLS.EMPTY)
    return [...Array(XMAS_TRUNK_HEIGHT)].reduce(trunk => trunk += emptySpace + XMAS_TREE_SYMBOLS.TRUNK + emptySpace + '\n', '')
  }