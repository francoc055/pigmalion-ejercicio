// Primera función que resuelve el problema iterando sobre el array de números.
// Se realizan dos bucles anidados: el segundo comienza desde el siguiente índice del primero,
// lo que permite comprobar todas las combinaciones posibles de pares de elementos sin repetir ni comparar un número consigo mismo.
// Esta solución no se preocupa por el consumo de recursos ni por la eficiencia, solo por la simplicidad del desarrollo.

function formarSuma(nums, requiredSum) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === requiredSum) {
        return true;
      }
    }
  }
  return false;
}

let respuesta = formarSuma([1,4,3,9], 8);
let respuesta2 = formarSuma([1,2,4,4], 8);

console.log(respuesta);
console.log(respuesta2);

// Segunda función que resuelve el problema de forma eficiente en tiempo de ejecución.
// Recorremos el array una sola vez y, para cada número, calculamos el complemento necesario
// para alcanzar el valor objetivo (requiredSum). Si ese complemento ya fue visto antes (almacenado en un Set),
// significa que existe un par de números cuya suma da el resultado esperado, y retornamos true.
// Si no se encuentra ningún par al finalizar el recorrido, retornamos false.
// Esta solución prioriza la eficiencia usando un Set, lo que permite hacer búsquedas en tiempo constante (O(1)).

function formarSumaEficiente(nums, requiredSum) {
  const vistos = new Set(); 

  for (let num of nums) {
    const complemento = requiredSum - num; 

    if (vistos.has(complemento)) {
      return true; 
    }

    vistos.add(num); 
  }

  return false; 
}

let respuest3 = formarSumaEficiente([1,4,3,9], 8);
let respuesta4 = formarSumaEficiente([1,2,4,4], 8);

console.log(respuesta);
console.log(respuesta2);