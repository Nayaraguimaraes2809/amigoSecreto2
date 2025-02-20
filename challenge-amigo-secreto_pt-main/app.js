// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo"); // Obtém o input
    let nome = inputAmigo.value.trim(); // Remove espaços extras

    // Validações
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    // Adiciona ao array
    amigos.push(nome);
    
    // Atualiza a lista na interface
    atualizarLista();

    // Limpa o campo de entrada
    inputAmigo.value = "";
}

// Função para atualizar a lista de amigos na interface
function atualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Obtém a lista HTML
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    amigos.forEach((nome) => {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    let resultado = document.getElementById("resultado"); // Obtém o elemento de exibição do resultado
    resultado.innerHTML = ""; // Limpa o resultado anterior

    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    // Gera um índice aleatório com base no tamanho do array
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    
    // Obtém o nome sorteado
    let amigoSorteado = amigos[indiceSorteado];

    // Exibe o resultado na tela
    resultado.innerHTML = `<li>${amigoSorteado} foi sorteado!</li>`;
}
