
// Botão muda a cor do background do body 
const cores = ["#7fbb00", "#74d2e7", "#da1884", "#a51890", "#136ad5", "#fe5000"];
let indiceCor = 0;

document.getElementById("btn-mudar-fundo").addEventListener("click", mudarFundo);

function mudarFundo() {
  document.body.style.backgroundColor = cores[indiceCor];
  indiceCor = (indiceCor + 1) % cores.length;
}

//  Botão Formulário
const botao = document.getElementById("botao");
const lista = document.getElementById("lista");

botao.addEventListener("click", function() {
    const texto = document.getElementById("texto").value;
    const novoItem = document.createElement("li");
    novoItem.textContent = texto;
    lista.appendChild(novoItem);
  });

  
// Botão troca imagem
  // Carregando o caminho das imagens em variáveis
var imgAtual = "./img/imagem2.jpg";
var imgAnterior = "./img/imagem1.jpg";

//Inicia a função de trocar
function trocaimg () {
    // Evento de clique do botão
    document.getElementById("imagem").src = imgAtual;
    let aux = imgAtual;
    imgAtual = imgAnterior;
    imgAnterior = aux;

}
