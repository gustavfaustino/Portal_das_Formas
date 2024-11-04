// Função para calcular a área do trapézio irregular
document.getElementById('trapezio-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const baseMaior = parseFloat(document.getElementById('baseMaior').value);
    const baseMenor = parseFloat(document.getElementById('baseMenor').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (baseMaior > 0 && baseMenor > 0 && altura > 0) {
        const area = ((baseMaior + baseMenor) * altura / 2).toFixed(2);
        document.getElementById('result').innerHTML = `<p class="text-success">A área do trapézio irregular é: <strong>${area}</strong> m²</p>`;
    } else {
        document.getElementById('result').innerHTML = '<p class="text-danger">Por favor, insira valores válidos para base maior, base menor e altura.</p>';
    }
});
