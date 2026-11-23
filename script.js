//ELEMENTOS DO CODIGO

//input da tarefa
const tarefa = document.getElementById("tarefaText");

//Botao de adicionar tarefa
const botao = document.getElementById("btnAdicionar");



//Texto edit
const textEdit = document.getElementById("tarefaTextEd");

//btn de editar
const btnEdit = document.getElementById("btnEditar");



//Lista para mostrar as terefas para o usuario
const lista = document.getElementById("listaTask");

//colocar o popap de editar como nulo
const editPopap = document.getElementById("popapEdit");
editPopap.style.display = 'none';



//Fucionalidades

//Adicionar tarefa
function Adicionar() {
     //Pegando o texto e tirando o espacos dos cantos
     const texto = tarefa.value.trim();

     //Valida se o texto esta vazio
     if(texto === "") {
          alert("O texto nao pode ser vazio");
          return; 
     }

     //Criando um id para cada tarefa
     const idUnico = Date.now();

     //criando o li
     const item = document.createElement('li');

     //colocando o id unico dentro do item (li)
     item.dataset.id = idUnico;

     //Adicionando o elemento span e a sua classe junto com o texto
     const spanTexto = document.createElement('span')
     spanTexto.textContent = texto;
     spanTexto.classList.add('texto-tarefa');

     //Aonde vai ficar os botoes de editar e excluir
     const divAcoes = document.createElement('div');
     divAcoes.classList.add('acoes');


     //Botoes
     const btnEditar = document.createElement('button');
     btnEditar.textContent = '✏️';
     btnEditar.id = `editar-${idUnico}`; //juntando o id da acao
     btnEditar.classList.add('editTask')

     const btnExcluir = document.createElement('button');
     btnExcluir.textContent = '🗑️';
     btnExcluir.id = `excluir-${idUnico}`;

     //Estrutura dos elementos
     divAcoes.appendChild(btnEditar);
     divAcoes.appendChild(btnExcluir);

     //Coloca o li dentro do ul
     lista.appendChild(item);

     item.appendChild(spanTexto);
     item.appendChild(btnEditar);
     item.appendChild(btnExcluir);

     //limpar o input
     tarefa.value = '';
     tarefa.focus();
}

botao.addEventListener("click", Adicionar);

//Pegando o Id da task
lista.addEventListener('click', (e) => {
     const li = e.target.closest('li');
     if(!li) return; 

     //guardando o id do li 
     const id = li.dataset.id;

     //verificando se o item clicado for uma Task para editar
     if(e.target.id.startsWith('editar-')) {
          Editar(id, li); 
     }

     if(e.target.id.startsWith('excluir-')) {
          Excluir(id, li);
     }
});




//input do edit para o usuario
const tarefaEdit = document.getElementById("tarefaTextEd");

let idEmEdicao = null;
let liEmEdicao = null;

function Editar(id, li) {
     idEmEdicao = id; 
     liEmEdicao = li;

     const span = li.querySelector('span');
     if(span) {
          tarefaEdit.value = span.textContent;
     }

     editPopap.style.display = '';
} 

btnEdit.addEventListener("click", (e) => {
     e.preventDefault();
     const texto = tarefaEdit.value.trim();

     if(texto === '') {
          alert("Escreva alguam coisa por favor");
          return;
     } 

     const span = li.querySelector('span'); 

     if(span) {
          tarefaEdit.value = span.textContent;
     }

     editPopap.style.display = 'none';

     idEmEdicao = null;
     liEmEdicao = null;
});