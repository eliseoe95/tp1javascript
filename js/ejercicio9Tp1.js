let frase = prompt('Ingrese una frase').toLowerCase()
const vocales = [];
for(let i = 0 ; i< frase.length; i++){
    if(frase.charAt(i)==='a' || frase.charAt(i)==='e' ||frase.charAt(i)==='i' ||frase.charAt(i)==='o' ||frase.charAt(i)==='u'){
        vocales.push(frase.charAt(i))
    }
}
document.write('Las vocales de la frase son: ' + vocales);
