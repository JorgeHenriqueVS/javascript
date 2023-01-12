var button = window.document.getElementById('btn');
button.addEventListener('click', verificar);

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var inputAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (inputAno.value.length == 0 || Number(inputAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var inputSex = document.getElementsByName('radsex')
        var idade = ano - Number(inputAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (inputSex[0].checked) {
            if (idade >= 0 && idade < 12) {
                genero = 'Menino'
                img.setAttribute('src', 'foto-menino.png')
            } else if (idade < 19) {
                genero = 'Garoto'
                img.setAttribute('src', 'foto-garoto.png')
            } else if (idade < 50) {
                genero = 'Homem'
                img.setAttribute('src', 'foto-homem.png')
            } else {
                genero = 'Senhor'
                img.setAttribute('src', 'foto-senhor.png')
            }
        } else if (genero = 'Mulher') {
            if (idade >= 0 && idade < 12) {
                genero = 'Menina'
                img.setAttribute('src', 'foto-menina.png')
            } else if (idade < 19) {
                genero = 'Garota'
                img.setAttribute('src', 'foto-garota.png')
            } else if (idade < 50) {
                genero = 'Mulher'
                img.setAttribute('src', 'foto-mulher.png')
            } else {
                genero = 'Senhora'
                img.setAttribute('src', 'foto-senhora.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}