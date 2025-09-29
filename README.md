# 🎯 Quiz Interativo React

<div align="center">

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-000000?style=for-the-badge&logo=css3&logoColor=white)

**Um quiz interativo e dinâmico sobre React, desenvolvido com as melhores práticas de componentização e gerenciamento de estado.**

[Sobre](#-sobre) • [Funcionalidades](#-funcionalidades) • [Instalação](#-instalação) • [Estrutura](#-estrutura-do-projeto) • [Tecnologias](#-tecnologias)

</div>

---

## 📖 Sobre

Este projeto é um **quiz interativo** que testa conhecimentos sobre React, desenvolvido como uma aplicação prática dos conceitos fundamentais do framework. O usuário responde 10 questões sobre hooks, componentes e ecossistema React, com um sistema de pontuação baseado no tempo de resposta.

### 🎨 Características do Design

- Interface moderna e responsiva
- Tema inspirado em Breaking Bad (amarelo característico)
- Feedback visual para respostas corretas e incorretas
- Timer em tempo real com centésimos de segundo
- Transições suaves e animações

---

## ✨ Funcionalidades

### 🎮 Durante o Quiz

- ⏱️ **Timer Dinâmico**: Cronômetro que conta regressivamente para cada questão
- 📊 **Indicador de Progresso**: Mostra a questão atual e o total
- 🎯 **5 Alternativas**: Cada questão possui opções de A a E
- 🚀 **Avanço Automático**: Ao selecionar uma resposta, avança automaticamente
- ⚡ **Pontuação por Velocidade**: Quanto mais rápido responder, mais pontos

### 📈 Placar Final (ScoreBoard)

O componente ScoreBoard exibe um relatório completo após finalizar o quiz:

- **Resumo Geral**:
  - Total de questões respondidas
  - Quantidade de acertos e percentual
  - Pontuação final acumulada
  - Menor tempo de resposta registrado

- **Detalhamento por Questão**:
  - Enunciado da questão
  - Resposta escolhida pelo usuário
  - Resposta correta
  - Tempo restante no momento da resposta
  - Pontos conquistados
  - Destaque visual: ✅ verde para corretas, ❌ vermelho para incorretas

- **Botão Reiniciar**: Permite recomeçar o quiz a qualquer momento

---

## 🚀 Instalação

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone <seu-repositorio>
cd quiz-interativo
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

### Outros Comandos

```bash
npm run build    # Gera build de produção
npm run preview  # Visualiza build de produção
npm run lint     # Executa linter ESLint
```

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header/
│   │   ├── index.jsx
│   │   └── Header.module.css
│   ├── Game/
│   │   ├── index.jsx
│   │   └── Game.module.css
│   ├── QuestionCard/
│   │   ├── index.jsx
│   │   └── QuestionCard.module.css
│   └── ScoreBoard/
│       ├── index.jsx
│       └── ScoreBoard.module.css
├── data/
│   └── questions.js
├── App.jsx
├── App.module.css
├── index.css
└── main.jsx
```

### 🧩 Componentes

#### `Header`
Cabeçalho da aplicação com título e subtítulo do quiz.

#### `Game`
Componente orquestrador que gerencia:
- Estado atual do quiz (questão sendo exibida)
- Coleta de respostas
- Transição entre quiz e placar
- Reset do jogo

#### `QuestionCard`
Responsável por exibir cada questão:
- Timer regressivo com precisão de centésimos
- Enunciado da questão
- 5 alternativas clicáveis (A-E)
- Cálculo de pontos baseado no tempo restante
- Bloqueio após resposta ou tempo esgotado

#### `ScoreBoard`
Exibe o resultado final:
- Estatísticas gerais do desempenho
- Lista detalhada de todas as questões
- Feedback visual com cores (verde/vermelho)
- Comparação entre resposta dada e correta

---

## 🛠️ Tecnologias

### Core
- **React 19.1.1**: Biblioteca JavaScript para interfaces
- **Vite 7.1.7**: Build tool e dev server ultrarrápido
- **CSS Modules**: Estilos escopados por componente

### Conceitos Aplicados

#### Hooks React
- `useState`: Gerenciamento de estado local
- `useEffect`: Efeitos colaterais (timer)

#### Boas Práticas
- **Componentização por Responsabilidade**: Cada componente tem uma função clara
- **Passagem de Props**: Comunicação unidirecional entre componentes
- **CSS Modules**: Evita conflitos de estilos
- **Separação de Dados**: Questions isolados em arquivo próprio

### Sistema de Pontuação

A pontuação é calculada proporcionalmente ao tempo restante:

```javascript
pontos = Math.round((tempoRestante / duracaoTotal) * 100)
```

- Resposta imediata: ~100 pontos
- Resposta no último segundo: ~0 pontos
- Sem resposta (timeout): 0 pontos

---

## 🎓 Requisitos Atendidos

✅ Quiz com 10 questões de múltipla escolha (A-E)  
✅ Timer individual por questão com reset automático  
✅ Indicador de progresso (questão atual/total)  
✅ Avanço automático ao selecionar resposta  
✅ CSS Modules em todos os componentes  
✅ Componentização por responsabilidade  
✅ useState e useEffect aplicados  
✅ Passagem de props entre componentes  
✅ ScoreBoard completo com:
  - Resumo de desempenho
  - Detalhamento por questão
  - Feedback visual (cores)
  - Comparação resposta dada x correta
  - Tempo de resposta
  - Pontuação individual e total  
✅ Botão de reiniciar quiz

---

## 📝 Questões do Quiz

O quiz aborda os seguintes tópicos sobre React:

1. Hooks de estado (`useState`)
2. Hooks de efeito (`useEffect`)
3. Props e comunicação entre componentes
4. Extensões de arquivo (`.jsx`)
5. Criação de projetos com Vite
6. Hook `useRef`
7. Hook `useMemo`
8. Hook `useCallback`
9. Re-renderização
10. React DevTools

---

## 🎨 Paleta de Cores

```css
--bg: #0b1020        /* Background escuro */
--card: #f6f6f8      /* Cards claros */
--accent: #c6b63d    /* Amarelo Breaking Bad */
--muted: #9aa3b2     /* Texto secundário */
```

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.

---

<div align="center">

**Desenvolvido com ❤️ e React**

⭐ Se gostou do projeto, deixe uma estrela!

</div>