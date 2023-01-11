var atualiza = window.setInterval(() => {carregar()},1000);

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos}.`
    if(hora >= 0 && hora < 12) {
        msg.innerHTML += ' Bom dia!'
        document.body.style.background = '#6db9f4'
        img.src = 'foto-manha.png'
    } else if(hora >= 12 && hora < 18) {
        msg.innerHTML += ' Boa tarde!'
        document.body.style.background = '#ff8f08'
        img.src = 'foto-tarde.png'
    } else {
        msg.innerHTML += ' Boa noite!'
        document.body.style.background = '#020427'
        img.src = 'foto-noite.png'
    }
}