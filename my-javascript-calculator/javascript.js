// Declarei as seguintes variaveis "const" para mais facil acesso as mesma e ao seu conteudo
// Usei "querySelector" para selecioanr os elementos pretendidos atraves da sua class
// "querrySelector" vai sempre retornar o primeiro elemento que corresponde ao selector indicado
// do qual apenas existe sempre apenas um para cada elemento

const calculation = document.querySelector(".calculation");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

// Tendo criado uma variavel que se refere a todos os botoes no HTML
// criei um "EventListener" para ficar a ouvir por um premir de
// qualquer botao. Sempre que algum botao for premido,
// vai fazer disparar o funcao "keypress"
// Depois da funcao "keypress" disparar, a funcao
// vai ser avaliada atraves de "if statments"

keys.forEach(key => {
    key.addEventListener("click", keypress);
});

function keypress() {

    // variavel "let" que nos deixa aceder ao conteudo dos botoes mais facilmente
    // a keyword "this" estando dentro de uma funcao vai estar a referir-se ao
    // elemento que foi clicado, neste caso ao conteudo do elemento/botao que foi clicado

    let buttonText = this.innerText;

    // este "if" vai avaliar se o texto dentro do elemento "AC" e "AC" e se for verdade
    // vai atribuir aos elementos com class "calculation" e "result" uma string vazia de modo
    // a resetar a calculadora

    if (buttonText === "AC") {
        calculation.innerText = "";
        result.innerText = "";
        return;
    }

    // se o texto do elemento for "DEL" vamos retirar "length" ao texto que se traduz
    // em apagar o ultimo caracter

    if (buttonText === "DEL"){
        calculation.textContent = calculation.textContent.substr(0, calculation.textContent.length-1);
        return
    }

    // se o texto do elemento for "=" o texto do elemento "result" vai
    // passar pela funcao "eval" que vai fazer o calculo de acordo com o input

    if (buttonText === "=") {
        result.innerText = eval(calculation.innerText);
    }

    // este "else" vai fazer append do texto do element que foi clicado
    // se todas as outras condicoes forem falsas
    // o que vai resultado em todos os outros botoes
    // eviarem o texto do o ecra da calculadora para
    // consquentemente ser avaliado quando se clicar no botao de "="

    else {
        calculation.textContent += buttonText;
        return;
    }

}