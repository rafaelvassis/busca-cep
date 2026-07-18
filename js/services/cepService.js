import { normalizarCEP } from "../utils/normalizarCep.js";

export async function consultarCep(cep) {
  // Normaliza entrada
  const cepNormalizado = normalizarCEP(cep);

  // Monta url
  const url = `https://viacep.com.br/ws/${cepNormalizado}/json/`;

  // Faz a chamada
  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();

    return dados;
  } catch (err) {

    return null;
  }
}
