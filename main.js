
document.addEventListener("DOMContentLoaded", function () {
    const ano = document.getElementById("ano");

    if (ano) {
        ano.textContent = new Date().getFullYear();
    }
});
