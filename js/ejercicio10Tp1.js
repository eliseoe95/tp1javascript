let numero = parseInt(prompt('Ingrese un numero'));

if(numero%2==0 || numero%3==0 || numero%5==0 || numero%7==0){
    document.write('El numero ' + numero + ' es divisible por alguno de los siguientes divisores 2,3,5 o 7');
}else{
    document.write('El numero no es divisible por ninguno de los siguientes divisores 2,3,5 o 7')
}