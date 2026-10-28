
document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario");
    const mensagem = document.getElementById("mensagem");

    if (!formulario || !mensagem) {
        return;
    }

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        if (!formulario.reportValidity()) {
            return;
        }

        const nome = document.getElementById("nome").value;

        mensagem.textContent =
            "Obrigado, " + nome +
            "! Sua solicitação foi recebida neste exemplo.";

        formulario.reset();
    });
});
