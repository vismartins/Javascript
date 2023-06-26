function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Erro! Dados invalidos.')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <=0){
            window.alert('Passo inválido!')
        }
        if(i < f){
            for(var c = i;c <=f;c+=p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }else {
            for(let c=i;c >=f;c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3c1}`
    }

}