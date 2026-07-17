import { validarCEP } from "./utils/validarCep.js";

const formulario = document.getElementById("form-busca");
const inputCEP = document.getElementById("cep-input");
const areaMensagens = document.getElementById("area-mensagens");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const cepValido = validarCEP(inputCEP.value);

  if (cepValido) {
    areaMensagens.innerText = "";
    console.log("Cep válidado com sucesso. Prosseguir com o serviço.");

    // o acionamento da chamda do serviço virá aqui.
  } else {
    areaMensagens.innerText = "CEP inválido! Por favor, digite um CEP válido";
  }
});
