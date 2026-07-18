export function validarCEP(cep) {
  if (cep === "" || cep.length > 10 || cep.length < 8) return false;

  for (let i = 0; i < cep.length; i++) {
    if (cep[i] !== "." && cep[i] !== "-" && (cep[i] < "0" || cep[i] > "9"))
      return false;
  }

  return true;
}
