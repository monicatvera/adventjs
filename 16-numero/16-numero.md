# Descifrando los números..
Lara Eloft ha encontrado unos restos élficos en una cueva, cerca del Círculo Polar Ártico, a 8 km al norte de Rovaniemi.

Ahora se encuentra descifrando unas misteriosas cartas que contiene información sobre unos números que le puede hacer llegar al próximo objetivo.

Lara tiene un documento que contiene una serie de números que pueden ser usados para descifrarlos:
```javascript
Símbolo       Valor
  .             1
  ,             5
  :             10
  ;             50
  !             100
```
Lara, además, ha notado una cosa. **Los símbolos se restan si están inmediatamente a la izquierda de otro mayor.** 😱

Tenemos que crear una función que nos pasa una cadena de texto con símbolos y tenemos que transformarlo al número correcto. ¡Ojo! Si encuentras un símbolo que no entendemos, mejor que devolvamos un NaN:

```javascript
decodeNumbers('...') // 3
decodeNumbers('.,') // 4 (5 - 1)
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(',...') // 8 (5 + 3)
decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers('.;') // 49 (50 - 1)
decodeNumbers('..,') // 5 (-1 + 1 + 5)
decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!') // 49 (-1 -50 + 100)
decodeNumbers('!!!') // 300
decodeNumbers(';!') // 50
decodeNumbers(';.W') // NaN
```

## Solución propuesta

```javascript
function decodeNumber(symbols) 
{
  let anteriorValor=1;
  let actualValor;
  let suma=0;

  for(let i=symbols.length-1; i>=0; i--)
  {
    let mSymbol=symbols[i];
    switch(mSymbol)
    {
      case '.':
        actualValor=1;
        break;
      case ',':
        actualValor=5;
        break;
      case ':':
        actualValor=10;
        break;
      case ';':
        actualValor=50;
        break;
      case '!':
        actualValor=100;
        break;

      default:  
        return NaN;
        
    }
    if(anteriorValor<=actualValor)
      suma+=actualValor;
    else
      suma-=actualValor;
    
    anteriorValor=actualValor;
  }
  
  return suma;
}
```

---

Eso es todo, ¡Muchas gracias! 😎