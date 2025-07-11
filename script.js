function verificarSenha() {
  const senhaCorreta = "pipica";
  const senhaDigitada = document.getElementById("senha").value;
  const mensagem = document.getElementById("mensagemSecreta");

  if (senhaDigitada === senhaCorreta) {
    mensagem.classList.remove("hidden");
  } else {
    alert("Senha incorreta! Tenta de novo, meu amor 💭");
  }
}
