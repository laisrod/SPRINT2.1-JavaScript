function mostrarValores(a, b, c) {
  console.log(a, b, c);
}

const array = [1, 2, 3];

mostrarValores(...array);


function soma(x, y, z) {
  return x + y + z;
}

const numeros = [4, 5, 6];

console.log(soma(...numeros));