// pegando os elementos input no html
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")
let resultado = document.getElementById("resultado")

//função de calculo quando clicar no botão "calcular"
function calcular() {

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let totalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)
    let totalCerveja = cervejaPP(duracao) * adultos
    let totalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas)

    resultado.innerHTML = `<p> ${totalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p> ${Math.ceil(totalCerveja / 355)} Latas de cerveja</p>`
    resultado.innerHTML += `<p> ${Math.ceil(totalBebidas / 2000)} Litros de Refrigerante/Água</p>`
}

//funcão padrão de tempo

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1000
    } else {
        return 1500
    }
}