import { normalizarCEP } from "./normalizarCep.js";

export function validarCEP(cep) {
  if (cep === "") return false;

  for (let i = 0; i < cep.length; i++) {
    if (cep[i] !== "." && cep[i] !== "-" && (cep[i] < "0" || cep[i] > "9"))
      return false;
  }

  const apenasValidos = normalizarCEP(cep);

  if (apenasValidos.length !== 8) {
    return false;
  }

  return true;
}
