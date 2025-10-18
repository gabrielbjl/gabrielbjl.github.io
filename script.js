document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formContato");
  if (!form) return; // Evita erro nas outras páginas

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    alert("Mensagem enviada com sucesso!");
    form.reset();
  });
});
