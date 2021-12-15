//El salto perfecto 
/* ¡Estamos haciendo los últimos ajustes para el trineo de Santa Claus!

Como ya sabes, el trineo es volador y estamos ajustando el motor para que haga parabolas lo más óptimas posibles. Para esto el salto debe ser siempre hacia arriba y, a partir del punto más alto, debe bajar siempre hacia abajo...

Nuestro mecánico de confianza, Kiko Belfs, que tiene un Tesla genial, nos ha explicado que los saltos se pueden ver como arrays... y que sólo tenemos que asegurarnos que los números suben y bajan de forma correcta. También nos avisa que sólo pasaremos arrays de, como mínimo, tres posiciones. */

function checkSledJump(heights) {
    for (let i = 1, j = heights.length - 1; i < heights.length/2; i++, j--) {
      if(heights[i - 1] >= heights[i] || heights[j - 1] <= heights[j]) {
        return false
      }
    }
    return true
  }