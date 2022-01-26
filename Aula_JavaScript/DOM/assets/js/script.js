//DOM Document Object Model  Acessar os Elemnetos do HTML


//DOM vs BOM(BROWSER OBJECT MODEL; TUDO QUE ESTA DENTRO DO WINDOW)
//DOM é um elemento dentro do BOM

//Manipulando o DOM

//Metodos
document.getElementById('titulo');
/*
 <li id="titulo">Projeto 1</li>
*/
document.getElementsByTagName('li');
/*
 <li>Projeto 1</li>
*/
document.getElementsByClassName('texto')
/*
 <li class="texto">Projeto 1</li>
*/

//Adcionar Deletar
document.createElement(Element) // cria um novo elemento
document.removeChild(Element) // remove elemento
document.appendChild(Element) //adciona elemento
document.replaceChild(nem, old) //substitui elemento


//trabalhando com Estilos
//Element.classList
const meuElemento = document.getElementById("meu-Elemento")
meuElemento.classList.add("novo-estilo") // adciona a classe "novo-estilo"
meuElemento.classList.remove("novo-estilo") // remove a classe "novo-estilo"
meuElemento.classList.toggle("novo-estilo") //Adciona a classe "novo-estilo" caso ela não faça parte da Lista e remove caso faça parte

//trabalhando com CSS
document.getElementsByTagName("p").style.color = "blue";


//eventos
function outrafuncao(){
    alert("Clicou no botão");
}

const botao = document.getElementById("meubotao");
botao.addEventListener("click", outrafuncao);

//No html
index.html