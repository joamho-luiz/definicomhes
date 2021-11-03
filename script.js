function dimenccamhoDeTela() {
    if (window.matchMedia(`(min-width: ${meiaTela}px)`).matches) {
        corpo.className = 'janela__tamanho--inteira'
    } else {
        corpo.className = 'janela__tamanho--metade'
    }
}

var corpo = document.getElementsByTagName('body')[0]
var texto = document.querySelector('.dimenccamho-da-tela')
var meiaTelaExata = screen.width / 2
var meiaTela = meiaTelaExata + (meiaTelaExata / 100)    //Somar meio porcento

texto.innerHTML = `A largura total da sua tela é <strong>${meiaTelaExata * 2}px</strong>.`

corpo.onresize = dimenccamhoDeTela