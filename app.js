const listaAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    const lista = document.getElementById("listaAmigos");
    
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    
    listaAmigos.push(nome);
    
    const listItem = document.createElement("li");
    listItem.textContent = nome;
    lista.appendChild(listItem);
    
    input.value = "";
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("A lista está vazia. Adicione nomes antes de sortear.");
        return;
    }
    
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceSorteado];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
}

