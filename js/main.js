import { consultarCep } from "./services/cepService.js";
import { validarCEP } from "./utils/validarCep.js";

// Elementos do formulário
const formulario = document.getElementById("form-busca");
const inputCEP = document.getElementById("cep-input");

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

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  limparResultado();

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
});

btnLimpar.addEventListener('click', ()=>{
  inputCEP.value = "";
  areaMensagens.innerText = "";
  limparResultado();
})

// Criar função para limpeza de campos
function limparResultado(){
  logradouro.innerText = "";
    complemento.innerText = "";
    bairro.innerText = "";
    cidade.innerText = "";
    uf.innerText = "";
    estado.innerText = "";
}


// Criar função para área de transferência
