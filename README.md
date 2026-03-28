# RunWise — Gerenciamento Empresarial Inteligente

> Projeto desenvolvido por estudantes do curso técnico de Desenvolvimento de Sistemas da **EPT - PR 2026**

---

## 📌 Sobre o Projeto

O **RunWise** é um assistente inteligente com Inteligência Artificial voltado para o gerenciamento empresarial de pequenas e médias empresas. O projeto foi desenvolvido como resposta ao desafio:

> *"Ideias que Inspiram, Soluções que Transformam — Como as ideias e soluções criadas nos cursos da EPT podem responder problemas reais do mundo do trabalho e contribuir para melhorar vidas e processos?"*

---

## 💡 Problema Identificado

Pequenas e médias empresas, assim como empreendedores que estão iniciando no mercado, **não possuem acesso fácil a consultoria financeira profissional**, resultando em desperdício de tempo, dinheiro e oportunidades.

---

## ✅ Solução Desenvolvida

Um site institucional integrado a um app web com assistente inteligente que:

- Gerencia finanças da empresa
- Busca e compara produtos e fornecedores
- Gera recomendações estratégicas personalizadas
- Adapta as soluções ao perfil de cada negócio

---

## 🏗️ Estrutura do Repositório

```
RunWise/
│
├── site/                        → Site institucional
│   ├── index.html               → Página principal
│   ├── pages/
│   │   ├── sobre.html           → Sobre o projeto
│   │   ├── servico.html         → Serviços oferecidos
│   │   └── contato.html         → Formulário de contato
│   ├── css/
│   │   └── style.css            → Estilos do site
│   └── js/
│       └── main.js              → Scripts do site
│
├── app/                         → Aplicativo web
│   ├── index.html               → Login e Cadastro
│   ├── pages/
│   │   ├── dashboard.html       → Tela principal
│   │   ├── financeiro.html      → Gestão financeira
│   │   ├── produtos.html        → Busca de produtos
│   │   ├── assistente.html      → Chat com IA
│   │   ├── relatorio.html       → Relatórios e gráficos
│   │   └── perfil.html          → Perfil da empresa
│   ├── css/
│   │   ├── app.style.css        → Estilos globais do app
│   │   └── dashboard.css        → Estilos do dashboard
│   └── js/
│       ├── auth.js              → Login e Cadastro
│       ├── perfil.js            → Perfil da empresa
│       ├── financeiro.js        → Gestão financeira
│       ├── produtos.js          → Busca de produtos
│       ├── relatorio.js         → Relatórios
│       └── assistente.js        → Chat com IA
│
├── backend/                     → API Node.js
│   ├── src/
│   │   ├── routes/              → Rotas da API
│   │   └── server.js            → Servidor Express
│   ├── package.json
│   └── package-lock.json
│
├── python-api/                  → API Python Flask
│   └── app.py                   → Rotas do servidor Flask
│
└── .gitignore
```

---

## 🖥️ Site Institucional

| Página | Descrição |
|--------|-----------|
| `index.html` | Hero, Sobre, Serviços, Diferenciais, Depoimentos, CTA |
| `pages/sobre.html` | História, Missão/Visão/Valores, Equipe |
| `pages/servico.html` | Serviços detalhados, Como funciona, Planos |
| `pages/contato.html` | Formulário de contato e informações |

---

## 📱 Aplicativo Web

| Tela | Arquivo | Descrição |
|------|---------|-----------|
| Login / Cadastro | `index.html` | Porta de entrada do app |
| Dashboard | `pages/dashboard.html` | Resumo geral do negócio |
| Financeiro | `pages/financeiro.html` | Gestão de receitas e despesas |
| Produtos | `pages/produtos.html` | Busca e comparação de produtos |
| Assistente IA | `pages/assistente.html` | Chat com inteligência artificial |
| Relatórios | `pages/relatorio.html` | Gráficos e relatórios do período |
| Perfil | `pages/perfil.html` | Dados e configurações da empresa |

### Funcionalidades

- ✅ Login e Cadastro de empresas
- ✅ Dashboard com resumo financeiro
- ✅ Lançamento de receitas e despesas
- ✅ Gráficos de fluxo de caixa
- ✅ Busca e comparação de produtos
- ✅ Chat com assistente inteligente (IA)
- ✅ Relatórios mensais
- ✅ Perfil e configurações da empresa
- ✅ Menu lateral fixo de navegação
- ✅ Layout responsivo para mobile

---

## 🎨 Identidade Visual

### Paleta de Cores

```css
--azul-principal: #1A3C8F  /* Azul escuro institucional */
--azul-claro:     #2E6BE6  /* Destaque, botões, links */
--azul-hover:     #1550C0  /* Hover dos botões */
--branco:         #FFFFFF  /* Fundo e textos em fundo azul */
--cinza-claro:    #F4F6FB  /* Fundo de cards e seções */
--texto-escuro:   #1A1A2E  /* Texto principal */
--texto-suave:    #5A6278  /* Textos secundários */
```

### Tipografia

- **Títulos** — Poppins (Bold / SemiBold)
- **Textos** — Poppins Regular

---

## 🔧 Tecnologias Utilizadas

### Frontend

| Tecnologia | Uso |
|------------|-----|
| HTML5 | Estrutura das páginas |
| CSS3 | Estilização e responsividade |
| JavaScript ES6+ | Interatividade e lógica |
| Chart.js | Gráficos do dashboard |
| Font Awesome 6.5 | Ícones |
| Google Fonts | Tipografia (Poppins) |

### Backend

| Tecnologia | Uso |
|------------|-----|
| Node.js + Express | API REST principal |
| Python 3 + Flask | API do assistente com IA |

### Ferramentas

| Ferramenta | Uso |
|------------|-----|
| VS Code | Editor de código |
| GitHub | Versionamento |
| Git | Controle de versão |
| Vercel | Deploy do site |

---

## 👥 Equipe

| Membro | Função | Responsabilidades |
|--------|--------|-------------------|
| **Nicolas** | Desenvolvedor Principal | Criação do app, integração da IA, estrutura do projeto, GitHub |
| **Kauan** | Desenvolvedor do App | Apoio na criação e desenvolvimento do aplicativo web |
| **Adryan** | Desenvolvedor do Site | Apoio na criação e desenvolvimento do site institucional |
| **Gustavo** | Desenvolvedor do Site | Apoio na criação e desenvolvimento do site institucional |
| **Vitor** | Idealizador | Contribuição com ideias e direcionamento do projeto |

---

## 🚀 Como Rodar o Projeto

### Site Institucional

```bash
# Clone o repositório
git clone https://github.com/nicolassilveriojr/RunWise.git

# Abra a pasta do site
cd RunWise/site

# Abra o index.html no navegador
```

### App Web

```bash
# Abra a pasta do app
cd RunWise/app

# Abra o index.html no navegador
```

### Backend Node.js

```bash
cd RunWise/backend

# Instale as dependências
npm install

# Rode o servidor
node src/server.js

# Acesse em: http://localhost:3000
```

### API Python (Flask)

```bash
cd RunWise/python-api

# Instale as dependências
pip install flask

# Rode o servidor
python app.py

# Acesse em: http://localhost:5000
```

---

## 📋 Padrão de Commits

| Prefixo | Quando usar | Exemplo |
|---------|-------------|---------|
| `feat` | Criar algo novo | `feat: criando tela de login` |
| `fix` | Corrigir um erro | `fix: corrigindo layout do dashboard` |
| `style` | Mexer só no CSS | `style: estilizando menu lateral` |
| `refactor` | Reorganizar código | `refactor: reestruturando pastas do projeto` |
| `update` | Melhorar algo existente | `update: melhorando cards do financeiro` |
| `docs` | Atualizar documentação | `docs: atualizando README` |
| `chore` | Configurações e manutenção | `chore: atualizando dependências` |

---

## 🏆 Projeto EPT PR 2026

**Desafio:** Ideias que Inspiram, Soluções que Transformam

**Tema:** Assistente Inteligente com IA para Gestão Financeira e Estratégica de Pequenas e Médias Empresas

**Impacto gerado:**

- Reduz tempo gasto em tarefas administrativas
- Ajuda negócios a crescerem com mais segurança
- Democratiza o acesso à inteligência financeira
- Melhora a tomada de decisões empresariais

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais no âmbito do **Desafio EPT PR 2026**.

---

Desenvolvido com 💙 pela equipe **RunWise** — EPT PR 2026
