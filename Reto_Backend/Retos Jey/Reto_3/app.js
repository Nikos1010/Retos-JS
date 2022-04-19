const frase = 'JavaScript javascript b'.toLowerCase();
const dic = {};

for(let letra of frase) {
    if(letra !== " "){
        if(dic[letra] == null) {
            dic[letra] = 1;
        } else {
            dic[letra]++;
        }
    }
}

console.log(dic);