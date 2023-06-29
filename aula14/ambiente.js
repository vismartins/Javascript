/*var c = 1
while(c <= 5){
    console.log(c)
    c++
}

for(var c=1;c<=10;c++){
    console.log(c)
}*/

let valores = [2, 6, 9, 7, 1, 3]
valores.sort()
for(let pos =0;pos < valores.length;pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
console.log(`-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=`)
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}