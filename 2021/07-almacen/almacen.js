//Buscando en el almacén... 🏭

/* Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no encuentra nada.

Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos. */


function contains(store, product) {
    return Object.values(store).some(value => {
      if (typeof value === 'object'){
        return contains(value, product);
      }
      return value === product
    }
    )
}