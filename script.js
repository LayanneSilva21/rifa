
// Dados iniciais da rifa
const pontos = Array.from({ length: 100 }, (_, i) => ({
    numero: i + 1,
    status: "Livre",
    comprador: "",
    pagou: false,
}));

// Função para renderizar os pontos na tabela
function renderTable() {
    const rifaBody = document.getElementById("rifa-body");
    rifaBody.innerHTML = ""; // Limpa o corpo da tabela

    pontos.forEach((ponto) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${ponto.numero}</td>
            <td>${ponto.status}</td>
            <td>
                <input type="text" value="${ponto.comprador}" 
                       onchange="atualizarNome(${ponto.numero}, this.value)">
            </td>
            <td>
                <input type="checkbox" ${ponto.pagou ? "checked" : ""} 
                       onchange="atualizarPagamento(${ponto.numero}, this.checked)">
            </td>
            <td>
                <button class="livre" onclick="atualizarStatus(${ponto.numero}, 'livre')">Livre</button>
                <button class="reservado" onclick="atualizarStatus(${ponto.numero}, 'Reservado')">Reservado</button>
                <button class="pago" onclick="atualizarStatus(${ponto.numero}, 'Pago')">Pago</button>
            </td>
        `;
        rifaBody.appendChild(row);
    });
}

// Função para atualizar o status de um ponto
function atualizarStatus(numero, status) {
    const ponto = pontos.find((p) => p.numero === numero);
    if (ponto) {
        ponto.status = status;
        if (status !== "pago") {
            ponto.comprador = ""; // Limpa o nome se não for pago
            ponto.pagou = false; // Marca como não pago
        }
        renderTable(); // Atualiza a tabela
    }
}

// Função para atualizar o nome do comprador
function atualizarNome(numero, nome) {
    const ponto = pontos.find((p) => p.numero === numero);
    if (ponto) {
        ponto.comprador = nome;
    }
}

// Função para atualizar o status de pagamento
function atualizarPagamento(numero, pagou) {
    const ponto = pontos.find((p) => p.numero === numero);
    if (ponto) {
        ponto.pagou = pagou;
    }
}

// Renderiza a tabela pela primeira vez
renderTable();