let quantidadePerguntas = 0;
let perguntasSessao = [];
perguntasSessao = [...perguntas];
let quantidadeTotal = perguntas.length;
let numPerguntas = 0;
let pontuacao = 0
let timer = 30;

function iniciarQuiz(){
    let inicio = document.getElementById("box_inicio");
    let quiz = document.getElementById("box");

    inicio.style.display = "none"
    quiz.style.display = "block";

    atualizarNumero();
    buscarPergunta();
    iniciarTimer();
}

function reiniciar(){
    document.getElementById("pontuacao").innerHTML = '';
    document.getElementById("p_timer").innerHTML = '';
    clearInterval(intervaloTimer);
    quantidadePerguntas = 0;
    perguntasSessao = [...perguntas];
    quantidadeTotal = perguntas.length;
    numPerguntas = 0;
    pontuacao = 0
    timer = 30;

    let inicio = document.getElementById("box_inicio");
    let quiz = document.getElementById("box");

    inicio.style.display = "block"
    quiz.style.display = "none";
}

function proximaPergunta(){
    atualizarNumero();
    buscarPergunta();
}

function atualizarNumero(){
    let numero = document.getElementById("num_pergunta");
    if(numero >= quantidadeTotal){
        return;
    }

    numPerguntas++;

    numero.innerHTML = `${numPerguntas}/${quantidadeTotal}`;
}

function iniciarTimer(){
    let pTimer = document.getElementById("p_timer");

    intervaloTimer = setInterval(()=>{
        timer --;

        pTimer.innerHTML = `${timer} segundos`;

        if(timer <= 0){
            pararTimer();

            erroTimer();

            setTimeout(()=>{
                tirarErroTimer();
                reiniciar();
            },3000);

        }
    },1000)
}

function erroTimer(){
    let telaEscura = document.getElementById("tela-overlay");
    let pontuacaoEsgotado = document.getElementById("pontuacao_esgotado");

    telaEscura.style.display = 'flex';
    pontuacaoEsgotado.innerHTML = `Pontuação: ${pontuacao}`;
}

function finalQuiz(){
    let telaEscura = document.getElementById("tela-overlay-final");
    let msgFinal = document.getElementById("msg_final");
    let pontuacaoFinal = document.getElementById("pontuacao_final");
    let mensagem = '';

    if(pontuacao < 100){

    }else if (pontuacao < 150){

    }else if(pontuacao < 250){

    }else if(pontuacao < 320){

    }else{

    }

    telaEscura.style.display = 'flex';
    msgFinal.innerHTML = 
    `Parabens! <br>
    Você concluiu o quiz <br>
    ${mensagem}
    `;

    pontuacaoFinal.innerHTML = `
    Pontuação Final: ${pontuacao} <br>
    Tempo Restante: ${timer} Segundos`;
}

function fecharMenu(){
    let telaEscura = document.getElementById("tela-overlay-final");
    telaEscura.style.display = 'none';

    reiniciar();
}

function tirarErroTimer(){
    let telaEscura = document.getElementById("tela-overlay");

    telaEscura.style.display = 'none';
}

function pararTimer(){
    clearInterval(intervaloTimer);
}

function buscarPergunta(){

    if(perguntasSessao.length == 0){
        pararTimer();
        finalQuiz();
        return
    }

    quantidadePerguntas = perguntasSessao.length;
    let perguntaAleatoria = Math.floor((Math.random() * quantidadePerguntas ));
    console.log(perguntaAleatoria)

    imprimirPergunta(perguntaAleatoria);
}

function imprimirPergunta(indice){
    let quizPergunta = document.getElementById("quiz_pergunta");
    let perguntas = document.getElementById("perguntas");
    let alfabeto = ['A','B','C','D']
    let imprimir = ``;
    
    quizPergunta.innerHTML = `${perguntasSessao[indice].pergunta}`;
    
    for(let i = 0; i < perguntasSessao[indice].opcoes.length; i++){
        let opcao = perguntasSessao[indice].opcoes[i].correta;
        let resposta = perguntasSessao[indice].opcoes[i].texto;
        
        if(opcao == true){
            imprimir += `<span onclick="verificarResposta(true,${i})" id="${i}">${alfabeto[i]}. ${resposta}</span>`;
        }else{
            imprimir += `<span onclick="verificarResposta(false,${i})" id="${i}">${alfabeto[i]}. ${resposta}</span>`;
        }
    }
    
    perguntasSessao.splice(indice,1);
    perguntas.innerHTML = imprimir;

}

function verificarResposta(certo,indice){
    let span = document.getElementById(`${indice}`);
    let idPontuacao = document.getElementById("pontuacao");

    for(let i = 0; i < 4; i++){
        let spanSemClique = document.getElementById(`${i}`);

        spanSemClique.style.pointerEvents = 'none';
    }

    if(certo){
        span.classList.add('certa');
        timer += 10;
        pontuacao += 20;
        idPontuacao.innerHTML = `Pontuação: ${pontuacao}`;

        setTimeout(()=>{
            proximaPergunta();
        },1000);
    }else{
        span.classList.add('errada');
        timer -= 10;

        setTimeout(()=>{
            proximaPergunta();
        },1000);
    }
}