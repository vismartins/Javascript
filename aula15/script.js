function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert(`[ERRO] verfique os dados e tente novamente.`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                // criança
                img.setAttribute('src','menino.png')
            } else if (idade >=10 && idade <21){
                // jovem
                img.setAttribute('src','hjovem.png')
            } else if (idade < 60){
                // adulto
                img.setAttribute('src','adulto.png')
            } else {
                //idoso
                img.setAttribute('src','idoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                // criança
                img.setAttribute('src','menina.png')
            } else if (idade >=10 && idade <21){
                // jovem
                img.setAttribute('src','mjovem.png');
            } else if (idade < 60){
                // adulto
                img.setAttribute('src','adulta.png')
            } else {
                //idoso
                img.setAttribute('src','idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Idade Calculada ${idade}, gênero ${genero}.`
        res.appendChild(img)
    }
}