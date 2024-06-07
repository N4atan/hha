function mostrarImagens(){
    const h1 = document.querySelector('h1')
    const imagem1 = document.getElementById('ImagemCrazyFrog')
    const imagem2 = document.getElementById('ImagemRecebaInteligencia')

    if(imagem1.style.display === 'none' && imagem2.style.display === 'none'){
        imagem1.style.display = 'block' ;
        imagem2.style.display = 'block' ;
    } else {
        imagem1.style.display = 'none' ;
        imagem2.style.display = 'none' ;
    } 

    if (h1.style.display !== 'none'){
        h1.style.display = 'none'
    } else {
        h1.style.display = 'block'
    }

}

//Serve para dizer que é pra procurar pelo id tal e adicionar um evento a ele, no caso um de clique
document.getElementById("butao1").addEventListener('click', mostrarImagens)


//Função de callback e de mouse
document.getElementById('simpleClick').addEventListener('click', function(){
    alert('OI PRINCESA')   
})

document.getElementById('twoClicks').addEventListener('dblclick', function(){
    alert('BEM GATINHA VOCÊ')
})

document.getElementById('pressButton').addEventListener('mousedown', function(){
    alert('Voce pressionou qualquer botao do mouse')
})

document.getElementById("soltarMouse").addEventListener("mouseup", function() {
    alert("Botão do mouse solto!");
});

document.getElementById("moveMouse").addEventListener("mousemove", function() {
    const botaoMover = document.getElementById('moveMouse');
    botaoMover.style.backgroundColor = "red"; //adicinar if
});

document.getElementById('mouseSobreBotao').addEventListener('mouseover', function(){
    var botao = document.getElementById("mouseSobreBotao");
    var novaPosicaoX = Math.random() * (window.innerWidth - botao.offsetWidth);
    var novaPosicaoY = Math.random() * (window.innerHeight - botao.offsetHeight);
    botao.style.left = novaPosicaoX + "px";
    botao.style.top = novaPosicaoY + "px";
})

document.getElementById("mouseOut").addEventListener("mouseout", function() {
    alert("Voce tirou o mouse de cima do botao");
});


//Funções de teclas

document.getElementById('keydown').addEventListener('keydown', function(){
    alert('APERTASTE UMA TECLA')
})

document.getElementById('keypress').addEventListener('keypress', function(){
    alert('VOCE APERTOU E SOLTOU UMA TECLA')
})

document.getElementById('keyup').addEventListener('keyup', function(){
    alert('VOCE APENAS SOLTOU A TECLA')
})


//De janela
window.addEventListener('resize', function(){
    alert('Faça isso não nengue')
})


//Tempo 

//Uma função chamando outra funcção
document.getElementById('setTimeOutBtn').addEventListener('click', function(){
    setTimeout(function(){
        alert('SetTimeOut: Adicionado após um intervalo de milisegundos')
    }, 2000)
})


document.getElementById('setIntervalBtn').addEventListener('click', function(){
    setInterval(function(){
        alert('SetInterval: Adicionado após um intervalo de milisegundos')
    }, 5000)
})
