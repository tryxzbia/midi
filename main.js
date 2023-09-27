/*O método query-Selector busca apenas o primeiro elemento correspondente ao seletor. Exemplo abaixo*/
//tecla Pom
/*function tocaSomPom () {
  document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;

//tecla clap
function tocaSomClap () {
  document.querySelector('#som_tecla_clap').play();
}

document.querySelector('.tecla_clap').onclick = tocaSomClap;

//tecla tim
function tocaSomTim () {
  document.querySelector('#som_tecla_tim').play();
}

document.querySelector('.tecla_tim').onclick = tocaSomTim;

//tecla puff
function tocaSomPuff () {
  document.querySelector('#som_tecla_puff').play();
}

document.querySelector('.tecla_puff').onclick = tocaSomPuff;

//tecla splash
function tocaSomSplash () {
  document.querySelector('#som_tecla_splash').play();
}

document.querySelector('.tecla_splash').onclick = tocaSomSplash;

//tecla toim
function tocaSomToim () {
  document.querySelector('#som_tecla_toim').play();
}

document.querySelector('.tecla_toim').onclick = tocaSomToim;

//tecla psh
function tocaSomPsh () {
  document.querySelector('#som_tecla_psh').play();
}

document.querySelector('.tecla_psh').onclick = tocaSomPsh;

//tecla tic
function tocaSomTic () {
  document.querySelector('#som_tecla_tic').play();
}

document.querySelector('.tecla_tic').onclick = tocaSomTic;

//tecla tom
function tocaSomTom () {
  document.querySelector('#som_tecla_tom').play();
}

document.querySelector('.tecla_tom').onclick = tocaSomTom;
*/

function tocaSomPom () {
  document.querySelector('#som_tecla_pom').play();
}

/*Armazenar a lista de elementos em uma referencia:
Utilizaremos a palavra All que,em português, significa “todos”, o método querySelectorAll 
realiza uma busca por todos os elementos HTML que possuem o mesmo seletor(verificar no html).
No seletor(teste) digitar document.querySelectorAll('.tecla') e dar um enter para visualizar a lista */

//document.querySelectorAll('.tecla');

/*criando referencia - (reduzindo referencia da linha)deve utilizar a palavra reserva-
da const. A palavra const vem de “constante”, ou seja, algo que nunca muda.
Então criar um nome para essa lista(para guardar a lista de botoes)
Para armazenar um valor na referência criada, utilize o comando de atribuição =.
Conclusão:a lista de elementos encontrada por meio do método de busca
querySelectorAll será armazenada na referência listaDeTeclas.*/

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;

//Automatizando a lista - adicionar a estrutura de repetição while.Próxima aula











//Declarar e chamar a função, executar o som através do play
/*
querySelector para selecionar elementos
concede o acesso ao código, atribuir para tocar o som*/