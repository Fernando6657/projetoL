//manipilação de objetos DOM (document object model)
//representação da dados dos objetos que compõem uma estrutura 
//e o conteudo de um documento web

//essencial para manipula e interagir com elementos de uma página
//document.querySelector()

//exemplo:

const titulo = document.querySelector('h1');
titulo.textContent = 'texto Modificado'; //modifica o texto do elemento 

//uso principal: buscar e modificar elementos html

//document.createlement()
//cria novos emelentos dinamicamente

//exemplo:

const novoElemento = document.creatElement('p');
novoElemento.textcontent = 'paragrafo adicionado';
document.body.appendChild(novoElemento);

//uso principal: adicionar novos elementos ao DOM

//addEventlistener()
//funções que lidam com interações dos usuarios
// sua função é adicionar um ouvinte para eventos (como cliente)

const botao = document.querySelector('button');
botao.addEventlistener('click', () => {
    alert('botao Clicando!');
}
);
//uso principal: criar interatividade, como cliques ou movimento do mouse

//settimeout()
//controlam ações que ocorrem em intervalos ou após um tempo 
// executa uma função após um periodo de tempo 

settimeout(() =>{
    alert('executado apos 2 segundos ');
},2000);


//alert ele executa o tostring do seu objeto e apresenta em tela 
//console.log ele registra a informação 
//uso principal: atrasar execuções ou criar temporizadores 
