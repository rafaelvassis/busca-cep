import { consultarCep } from "./services/cepService.js";
import { validarCEP } from "./utils/validarCep.js";

// Elementos do formulário
const formulario = document.getElementById("form-busca");
const inputCEP = document.getElementById("cep-input");
const btnBuscar = document.getElementById("btn-buscar");

// Elementos da área de mensagem
const areaMensagens = document.getElementById("area-mensagens");

// Elementos do resutlado da consulta
const logradouro = document.getElementById("logradouro");
const complemento = document.getElementById("complemento");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const uf = document.getElementById("uf");
const estado = document.getElementById("estado");

// Elementos dos botões de cópia e limpeza
const btnLimpar = document.getElementById("btn-limpar");
const btnCopiar = document.getElementById("btn-copiar");

// Escuta do envio do formulário
formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  btnBuscar.disabled = true;
  btnBuscar.innerText = "Buscando...";

  try {
    limparEndereco();

    if (validarCEP(inputCEP.value)) {
      // Limpa mensagem
      areaMensagens.innerText = "";

      // Faz a consulta
      const dadosCEP = await consultarCep(inputCEP.value);

      // Informa falha na consulta
      if (!dadosCEP) {
        areaMensagens.innerText = "Serviço indisponível";
        return;
      }

      // CEP não localizado
      if (dadosCEP.erro) {
        areaMensagens.innerText = "CEP não localizado na base de dados.";
        return;
      }

      // Mensagem de sucesso
      areaMensagens.innerText = "CEP localizado";

      // Exibe o endereço
      logradouro.innerText = dadosCEP.logradouro;
      complemento.innerText = dadosCEP.complemento;
      bairro.innerText = dadosCEP.bairro;
      cidade.innerText = dadosCEP.localidade;
      uf.innerText = dadosCEP.uf;
      estado.innerText = dadosCEP.estado;
    } else {
      inputCEP.value = "";
      inputCEP.focus();
      areaMensagens.innerText = "CEP inválido! Por favor, digite um CEP válido";
    }
  } finally {
    btnBuscar.disabled = false;
    btnBuscar.innerText = "Buscar";
  }
});

// Escuta do clique no botão copiar
btnCopiar.addEventListener("click", copiarEndereco);

// Escuta do clique no botão limpar
btnLimpar.addEventListener("click", limparTela);

function limparEndereco() {
  logradouro.innerText = "";
  complemento.innerText = "";
  bairro.innerText = "";
  cidade.innerText = "";
  uf.innerText = "";
  estado.innerText = "";
}

function limparTela() {
  inputCEP.value = "";
  areaMensagens.innerText = "";
  limparEndereco();
  inputCEP.focus();
}

// Função para área de transferência
async function copiarEndereco() {
  if (!logradouro.innerText) {
    areaMensagens.innerText = "Não há endereço para copiar!";
    return;
  }
  const textoFormatado =
    `${logradouro.innerText} - ${complemento.innerText}, ${bairro.innerText}. ${cidade.innerText} - ${uf.innerText} (${estado.innerText})`.trim();

  try {
    await navigator.clipboard.writeText(textoFormatado);
    areaMensagens.innerText = "Endereço copiado para a área de transferência!";
  } catch {
    areaMensagens.innerText = "Erro ao copiar o endereço.";
  }
}
