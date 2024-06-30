var listagem = [{
    "nome": "Fone de Ouvido",
    "descricao": "Fone de ouvido intrauricular de auta quao e slidade, com grave auto e supressão de ruídos, é perfeito para ouvir suas músicas favoritas.",
    "valor": 30.00,
    "disponivel": true
}];

function carregar_listagem() {
const listagem_produtos = document.getElementById("listagem");
listagem_produtos.innerHTML = "";
const linha_titulo = document.createElement("thead");
const titulo_nome = document.createElement("td")
const titulo_valor = document.createElement("td")
titulo_nome.innerHTML = "Nome do Produto";
titulo_valor.innerHTML = "Valor";
linha_titulo.appendChild(titulo_nome);
linha_titulo.appendChild(titulo_valor);
listagem_produtos.appendChild(linha_titulo);
for (let i = 0; i < listagem.length; i++) {
    const linha_lista = document.createElement("tr");
    const coluna_nome = document.createElement("td");
    const coluna_valor = document.createElement("td");
    coluna_nome.innerHTML = listagem[i].nome;
    coluna_valor.innerHTML = "R$ " + Number.parseFloat(listagem[i].valor).toFixed(2);
    linha_lista.appendChild(coluna_nome);
    linha_lista.appendChild(coluna_valor);
    listagem_produtos.appendChild(linha_lista);
}
}

function cadastrar() {
const nome = document.getElementById("nome").value;
const disponivel = document.getElementById("disponivel").value;
const valor = document.getElementById("valor").value;
const descricao = document.getElementById("descricao").value;
const item = {
    "nome": nome,
    "descricao": descricao,
    "valor": valor,
    "disponivel": disponivel,
};
listagem.push(item);
listagem.sort(function (a, b) {
    return parseFloat(a.valor) - parseFloat(b.valor); 
});
carregar_listagem(); 
console.log(listagem);
}
carregar_listagem();