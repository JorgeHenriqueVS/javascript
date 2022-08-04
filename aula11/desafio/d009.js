function verificar() {
    var country = window.document.getElementById('pais').value
    var res = window.document.querySelector('div#res')
    res.innerHTML = `<p>Vivendo em <strong>${country}</strong></p>`
    if (country == 'Brasil', 'brasil') {
        res.innerHTML += '<p>Você é <strong>Brasileiro</strong>!</p>'
    } else {
        res.innerHTML += '<p>Você é <strong>Estrangeiro</strong>!</p>'
    }
}        
