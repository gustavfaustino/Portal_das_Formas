// Função para calcular a área do retângulo
document.getElementById('rectangle-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const largura = document.getElementById('largura').value;
    const altura = document.getElementById('altura').value;

    if (largura > 0 && altura > 0) {
        const area = (largura * altura).toFixed(2);
        document.getElementById('result').innerHTML = `<p class="text-success">A área do retângulo é: <strong>${area}</strong> m²</p>`;
    } else {
        document.getElementById('result').innerHTML = '<p class="text-danger">Por favor, insira valores válidos para a largura e altura.</p>';
    }
});
