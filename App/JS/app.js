// BOTÃO ENTRAR
document.getElementById("btn-entrar").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (email === "" || senha === "") {
    alert("Preencha todos os campos!");
    return;
  }

  // Redireciona para o dashboard
  window.location.href = "dashboard.html";
});

// Perfil

var nome = document.getElementById("nome de usuario").value;

var localmensagem = document.getElementById("mensagem").value;

if (nome.trim() !== "") {
  localmensagem.textcontent = "Ola " + nome + "a";
} else {
  localmensagem.textcontent = "Por favor, digite seu nome.";
}

let isEditing = false;

function enableEdit() {
  isEditing = true;

  // Habilitar campos
  document.getElementById("companyName").disabled = false;
  document.getElementById("segment").disabled = false;
  document.getElementById("email").disabled = false;
  document.getElementById("phone").disabled = false;
  document.getElementById("address").disabled = false;

  // Habilitar botão salvar
  document.getElementById("btnSave").disabled = false;

  // Desabilitar botão editar
  document.getElementById("btnEdit").disabled = true;
  document.getElementById("btnEdit").style.opacity = "0.5";

  // Focus no primeiro campo
  document.getElementById("companyName").focus();
}

function saveChanges() {
  // Coletar dados
  const data = {
    nomeUsuario: document.getElementById("nomeUsuario").value,
    segment: document.getElementById("segment").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
  };

  // Desabilitar campos
  document.getElementById("nomeUsuario").disabled = true;
  document.getElementById("segment").disabled = true;
  document.getElementById("email").disabled = true;
  document.getElementById("phone").disabled = true;
  document.getElementById("address").disabled = true;

  // Desabilitar botão salvar
  document.getElementById("btnSave").disabled = true;

  // Habilitar botão editar
  document.getElementById("btnEdit").disabled = false;
  document.getElementById("btnEdit").style.opacity = "1";

  // Reset flag
  isEditing = false;

  // Mostrar confirmação
  alert("Alterações salvas com sucesso!");
  console.log("Dados salvos:", data);
}

// BOTÃO CRIAR CONTA
document.getElementById("btn-cadastro").addEventListener("click", function () {
  alert("Tela de cadastro em breve!");
});
