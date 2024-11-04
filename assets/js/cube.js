// Função para calcular a área do cubo
document.getElementById('cube-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const aresta = document.getElementById('aresta').value;

    if (aresta > 0) {
        const area = 6 * Math.pow(aresta, 2).toFixed(2);
        document.getElementById('result').innerHTML = `<p class="text-success">A área do cubo é: <strong>${area}</strong> m²</p>`;
    } else {
        document.getElementById('result').innerHTML = '<p class="text-danger">Por favor, insira um valor válido para a aresta.</p>';
    }
});
