/* =============================================
   RUNWISE — server.js
   API Node.js com login e cadastro
   ============================================= */

const express = require('express');
const cors    = require('cors');
const crypto  = require('crypto');

const app = express();
app.use(cors());
app.use(express.json());

/* ---------- Banco de dados simples (JSON em memória) ---------- */
// Futuramente substituir por SQLite ou PostgreSQL
const usuarios = [];

/* ---------- Funções auxiliares ---------- */

// Gera um token simples (futuramente usar JWT)
function gerarToken(email) {
  return crypto.randomBytes(32).toString('hex');
}

// Hash simples da senha (futuramente usar bcrypt)
function hashSenha(senha) {
  return crypto.createHash('sha256').update(senha).digest('hex');
}

/* =============================================
   ROTAS
   ============================================= */

// Status do servidor
app.get('/', (req, res) => {
  res.json({ status: 'ok', mensagem: 'RunWise API online!' });
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', mensagem: 'Servidor RunWise online!' });
});

/* ---------- CADASTRO ---------- */
app.post('/api/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;

  // Validações
  if (!nome || !email || !senha) {
    return res.status(400).json({ mensagem: 'Preencha todos os campos.' });
  }

  if (senha.length < 8) {
    return res.status(400).json({ mensagem: 'A senha deve ter pelo menos 8 caracteres.' });
  }

  // Verifica se email já existe
  const jaExiste = usuarios.find(u => u.email === email.toLowerCase());
  if (jaExiste) {
    return res.status(409).json({ mensagem: 'Este e-mail já está cadastrado.' });
  }

  // Salva o usuário
  const novoUsuario = {
    id:    usuarios.length + 1,
    nome,
    email: email.toLowerCase(),
    senha: hashSenha(senha),
    criadoEm: new Date().toISOString()
  };

  usuarios.push(novoUsuario);

  console.log(`✅ Novo usuário: ${nome} (${email})`);

  res.status(201).json({ mensagem: 'Conta criada com sucesso!' });
});

/* ---------- LOGIN ---------- */
app.post('/api/login', (req, res) => {
  const { email, senha } = req.body;

  // Validações
  if (!email || !senha) {
    return res.status(400).json({ mensagem: 'Informe e-mail e senha.' });
  }

  // Busca o usuário
  const usuario = usuarios.find(u => u.email === email.toLowerCase());

  if (!usuario) {
    return res.status(401).json({ mensagem: 'E-mail ou senha incorretos.' });
  }

  // Verifica a senha
  if (usuario.senha !== hashSenha(senha)) {
    return res.status(401).json({ mensagem: 'E-mail ou senha incorretos.' });
  }

  // Gera token
  const token = gerarToken(email);

  console.log(`🔐 Login: ${usuario.nome} (${email})`);

  res.json({
    token,
    usuario: {
      id:    usuario.id,
      nome:  usuario.nome,
      email: usuario.email
    }
  });
});

/* ---------- VERIFICAR TOKEN (proteção de rotas) ---------- */
function autenticar(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ mensagem: 'Acesso negado. Faça login.' });
  }
  // Futuramente validar o token de verdade com JWT
  next();
}

/* ---------- ROTA PROTEGIDA (exemplo) ---------- */
app.get('/api/perfil', autenticar, (req, res) => {
  res.json({ mensagem: 'Rota protegida funcionando!' });
});

/* ---------- INICIAR SERVIDOR ---------- */
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 RunWise API rodando em http://localhost:${PORT}`);
  console.log(`📋 Rotas disponíveis:`);
  console.log(`   POST /api/cadastro`);
  console.log(`   POST /api/login`);
  console.log(`   GET  /api/status`);
});