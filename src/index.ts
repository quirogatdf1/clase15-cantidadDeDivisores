const btnSubmit = document.getElementById("btnSubmit");
let etiquetaResultado = document.getElementById("etiquetaResultado");

function esMultiplo(dividendo: number, divisor: number) {
  return dividendo % divisor === 0;
}

function cantidadDeDivisores(dividendo: number): string {
  let resultado = 0;
  for (let i = 0; i <= dividendo; i++) {
    if (esMultiplo(dividendo, i)) {
      resultado++;
    }
  }
  return `La cantidad de divisores es ${resultado}`;
}

btnSubmit.addEventListener("click", () => {
  const valor = Number(document.getElementById("numeroEntero").value);
  etiquetaResultado.innerText = cantidadDeDivisores(valor);
  /* Mostrar mensaje emergente
  alert(cantidadDivisores(valor)); */
});
