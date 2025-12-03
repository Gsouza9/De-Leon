// Banco de cartas (carros)
const carros = [
    { nome: "GTA Spano", velocidade: 370, potencia: 925, aceleracao: 2.9, imagem: "img/GTA.jpg" },
    { nome: "McLaren P1", velocidade: 350, potencia: 916, aceleracao: 2.7, imagem: "img/mclarennp1.jpeg" },
    { nome: "Lamborghini Sesto Elemento", velocidade: 350, potencia: 518, aceleracao: 2.5, imagem: "img/sesto.jpg" },
    { nome: "Bugatti Veyron", velocidade: 415, potencia: 1200, aceleracao: 2.5, imagem: "img/bugatti.jpg" },
    { nome: "Saleen S7", velocidade: 400, potencia: 760, aceleracao: 2.8, imagem: "img/saleen.jpeg" },
    { nome: "Koenisegg Agera R", velocidade: 450, potencia: 1140, aceleracao: 2.8, imagem: "img/koenigsegg.jpg" }
];

// Sorteia um item da lista
function sortear(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}

// Função principal (agora com regra de desempate)
function sortearCarros() {
    let c1 = sortear(carros);
    let c2 = sortear(carros);

    while (c1 === c2) {
        c2 = sortear(carros);
    }

    mostrarCarta("carta1", c1);
    mostrarCarta("carta2", c2);

    let resultado = compararCarros(c1, c2);

    document.getElementById("resultado").innerHTML = resultado;
}

// Função de comparação com desempate
function compararCarros(c1, c2) {
    // 1º critério: velocidade
    if (c1.velocidade > c2.velocidade)
        return `Atributo: <strong>VELOCIDADE</strong><br><br>🏆 <strong>${c1.nome}</strong> venceu!`;
    if (c1.velocidade < c2.velocidade)
        return `Atributo: <strong>VELOCIDADE</strong><br><br>🏆 <strong>${c2.nome}</strong> venceu!`;

    // 2º critério: potência
    if (c1.potencia > c2.potencia)
        return `Velocidade empatou!<br>Atributo de desempate: <strong>POTÊNCIA</strong><br><br>🏆 <strong>${c1.nome}</strong> venceu!`;
    if (c1.potencia < c2.potencia)
        return `Velocidade empatou!<br>Atributo de desempate: <strong>POTÊNCIA</strong><br><br>🏆 <strong>${c2.nome}</strong> venceu!`;

    // 3º critério: aceleração (menor é melhor)
    if (c1.aceleracao < c2.aceleracao)
        return `Velocidade e Potência empataram!<br>Atributo final: <strong>ACELERAÇÃO</strong><br><br>🏆 <strong>${c1.nome}</strong> venceu!`;
    if (c1.aceleracao > c2.aceleracao)
        return `Velocidade e Potência empataram!<br>Atributo final: <strong>ACELERAÇÃO</strong><br><br>🏆 <strong>${c2.nome}</strong> venceu!`;

    return "🔥 EMPATE TOTAL! Todos os atributos iguais!";
}

// Monta cada carta na tela
function mostrarCarta(id, carro) {
    document.getElementById(id).innerHTML = `
        <img src="${carro.imagem}" class="carro-img">
        <h3>${carro.nome}</h3>
        <ul>
            <li><strong>Velocidade:</strong> ${carro.velocidade} km/h</li>
            <li><strong>Potência:</strong> ${carro.potencia} cv</li>
            <li><strong>Aceleração:</strong> ${carro.aceleracao}s</li>
        </ul>
    `;
}
