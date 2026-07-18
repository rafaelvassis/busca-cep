# 📮 Busca CEP

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![Demo](https://img.shields.io/badge/Demo-Online-success?logo=vercel)](https://busca-cep-woad-sigma.vercel.app/)

Aplicação desenvolvida em **HTML, CSS e JavaScript puro** para consulta de endereços brasileiros a partir do CEP, utilizando a API **ViaCEP**.

O projeto foi desenvolvido com foco na prática de **arquitetura de aplicações frontend**, **separação de responsabilidades**, **organização em módulos** e **consumo de APIs REST**, priorizando uma implementação simples, organizada e de fácil manutenção.

---

## 🌐 Aplicação Online

Acesse o projeto:

**https://busca-cep-woad-sigma.vercel.app/**

---

## 📸 Demonstração

![Demonstração da aplicação](docs/demo.gif)

---

## 🚀 Funcionalidades

- ✅ Consulta de CEP utilizando a API ViaCEP
- ✅ Validação da entrada do usuário
- ✅ Normalização automática do CEP informado
- ✅ Exibição completa do endereço encontrado
- ✅ Tratamento de CEP inexistente
- ✅ Tratamento de indisponibilidade da API
- ✅ Cópia do endereço para a área de transferência
- ✅ Limpeza da consulta
- ✅ Interface responsiva

---

## 🧠 Conceitos aplicados

Projeto desenvolvido com foco na prática de fundamentos de arquitetura frontend.

- Levantamento de requisitos
- Separação de responsabilidades
- Organização em camadas (`services` e `utils`)
- Modularização com ES Modules
- Consumo de APIs REST
- Programação assíncrona (`async` / `await`)
- Manipulação do DOM
- Manipulação de eventos
- Validação de entrada
- Normalização de dados
- Tratamento de erros
- Organização de projetos JavaScript sem frameworks

---

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- ViaCEP API
- Visual Studio Code

---

## 📂 Estrutura do projeto

```text
busca-cep/
│
├── docs/
│   └── analise.md
│
├── css/
│   └── style.css
│
├── js/
│   ├── main.js
│   ├── services/
│   │   └── cepService.js
│   └── utils/
│       ├── normalizarCep.js
│       └── validarCep.js
│
├── index.html
├── README.md
└── .gitignore
```

---

## ▶️ Como executar

### Clonar o repositório

```bash
git clone https://github.com/rafaelvassis/busca-cep.git
cd busca-cep
```

### Executar

Abra o arquivo `index.html` em qualquer navegador moderno.

Ou utilize uma extensão como **Live Server** no Visual Studio Code.

---

## 📚 Aprendizados

Durante o desenvolvimento deste projeto foram praticados:

- Planejamento antes da implementação
- Levantamento de requisitos funcionais e não funcionais
- Definição de responsabilidades da aplicação
- Organização da arquitetura antes da escrita do código
- Separação entre interface, regras de negócio e serviços
- Consumo de APIs REST
- Manipulação do DOM
- Programação assíncrona
- Tratamento de erros
- Organização de projetos JavaScript sem frameworks

---

## 🚀 Possíveis melhorias futuras

- Máscara automática para o campo de CEP
- Histórico de consultas
- Compartilhamento do endereço encontrado
- Testes automatizados
- Tema claro/escuro

---

<p align="center">
  <img src="docs/bear_transparent.png" width="100" alt="Bear Logo">
</p>

<p align="center">
  <strong>Desenvolvido por Rafael Vassis</strong>
</p>