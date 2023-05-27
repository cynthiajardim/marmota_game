const btnTeste = document.querySelector("#teste")
const score = document.querySelector(".score");
let elementoClicado; 

const removeMarmota = buraco => {
    buraco.classList.remove("up")
}

const sorteiaBuraco = () => {
    const num = Math.trunc( Math.random() * 6) + 1;
    return document.querySelector(`.hole${num}`)
}

const defineTempo = (min, max) => Math.round( (Math.random() * (max-min)) + min )

const pontuar = () => {
    const valor = parseInt(score.innerHTML) + 1;
    score.innerHTML = valor;
}

const mole = document.querySelectorAll(".mole");

mole.forEach(ele => {
    ele.addEventListener("click", function(){
        if(ele.parentNode != elementoClicado){
            elementoClicado = ele.parentNode;
            pontuar();
        }
    })
})

let jogoExecutando = false;
const executando = () => {
    setInterval(function() {
        jogoExecutando = true;
    }, 9000)

    jogoExecutando = false;
}

function startGame(){
    executando();
    const buraco = sorteiaBuraco();
    buraco.classList.add("up")

    const tempoExposicao = Math.round( (Math.random() * 1200)+801);
    setTimeout(function() {
        removeMarmota(buraco)
    }, tempoExposicao)

    setTimeout(function() {
        if(!jogoExecutando){
            startGame()
        } else {
            alert("Fim de jogo! PONTUAÇÃO: "+score.innerHTML);
            score.innerHTML = 0;
        }
    }, 120)
}

