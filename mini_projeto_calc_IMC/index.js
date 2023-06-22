//Sempre Evite criar variaveis 
const calcular = document.getElementById('calcular')
const calcSaude = document.getElementById('calcSaude')

function loading(){
    setTimeout(classLoad,100)
    setTimeout(classSumir,3000)

}

function classLoad(){
    
    document.querySelector('#sumir1').classList.add('loading')
    
}
function classSumir(){
    document.querySelector('#sumir1').classList.remove('loading')
}

calcSaude.addEventListener('click', loading)

function imc(){
    const nome = document.getElementById('nome').value
    const altura =  document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')
    
    if(nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso/(altura*altura))
        resultado.textContent = `Ola ${nome} seu imc e ${valorIMC.toFixed(2)}`
    }else{resultado.textContent='Preencha todos os campos'}


}

calcular.addEventListener('click',imc)