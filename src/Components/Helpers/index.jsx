export const calcularLongitud = (alto, ancho) => {
  const longitud = (alto * 2) + (ancho * 2);
  return longitud / 100;
}

export const formatter = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0
})

export const materialPlastico = [
  { nombre: 'Elegir...', precio: 0 },
  { nombre: '1001 05', precio: 140360 },
  { nombre: '10028 05', precio: 162140 },
  { nombre: '1015 02', precio: 171600 },
  { nombre: '10425', precio: 123860 },
  { nombre: '1100', precio: 230340 },
  { nombre: '12646', precio: 327360 },
  { nombre: '172', precio: 39600 },
  { nombre: '173', precio: 59400 },
  { nombre: '214', precio: 21120 },
  { nombre: '2514', precio: 21120 },
  { nombre: '293', precio: 28820 },
  { nombre: '3005', precio: 31900 },
  { nombre: '3120', precio: 37620 },
  { nombre: '314', precio: 27500 },
  { nombre: '317', precio: 23540 },
  { nombre: '3419', precio: 37620 },
  { nombre: '3510', precio: 84700 },
  { nombre: '402', precio: 51040 },
  { nombre: '414', precio: 44220 },
  { nombre: '415', precio: 65340 },
  { nombre: '4218', precio: 42680 },
  { nombre: '4520', precio: 51040 },
  { nombre: '461', precio: 51700 },
  { nombre: '4914', precio: 44660 },
  { nombre: '4929', precio: 65780 },
  { nombre: '494', precio: 64460 },
  { nombre: '555', precio: 59180 },
  { nombre: '616', precio: 73480 },
  { nombre: '670', precio: 84260 },
  { nombre: '7502', precio: 0 },
  { nombre: '7513', precio: 88660 },
  { nombre: '7534', precio: 146960 },
  { nombre: '7919', precio: 90640 },
  { nombre: '821', precio: 94820 },
  { nombre: '8529', precio: 167200 },
  { nombre: '9531', precio: 154440 },
  { nombre: '982', precio: 139040 },
  { nombre: '9929', precio: 186340 },
  { nombre: '999', precio: 170280 },
]


export const materialMadera = [
  { nombre: 'Elegir...', precio: 0 },
  { nombre: 'a1', precio: 1000 },
  { nombre: 'a2', precio: 2000 },
  { nombre: 'a3', precio: 3000 },
  { nombre: 'a4', precio: 4000 },
  { nombre: 'a5', precio: 5000 },
  { nombre: 'a6', precio: 6000 },
  { nombre: 'a7', precio: 7000 },
  { nombre: 'a8', precio: 8000 },
  { nombre: 'a9', precio: 9000 },
  { nombre: 'a10', precio: 10000 },
]