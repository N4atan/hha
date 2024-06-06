function apertarBotao(){
    const h1 = document.querySelector('h1')
    const imagem1 = document.getElementById('ImagemCrazyFrog')

    if(imagem1.style.display === 'none'){
        imagem1.style.display = 'block' ;
    } else {
        imagem1.style.display = 'none' ;
    } 

    if (h1.style.display !== 'none'){
        h1.style.display = 'none'
    } else {
        h1.style.display = 'block'
    }

}

//Serve para dizer que é pra procurar pelo id tal e adicionar um evento a ele, no caso um de clique
document.getElementById("butao1").addEventListener('click', apertarBotao)