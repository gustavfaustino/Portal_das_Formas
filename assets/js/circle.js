// Função para calcular o raio
document.getElementById('circle-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const raio = document.getElementById('raio').value;

    if (raio > 0) {
        const area = Math.PI * Math.pow(raio, 2).toFixed(2);
        document.getElementById('result').innerHTML = `<p class="text-success">A área do círculo é: <strong>${area}</strong> m²</p>`;
    }
    else {
        document.getElementById('result').innerHTML = '<p class="text-danger">Por favor, insira um valor válido para a área.</p>';
    }
});
