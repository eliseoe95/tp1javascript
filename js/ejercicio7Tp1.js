let num1 = parseInt(prompt('Ingrese el primer numero'));
let num2 = parseInt(prompt('Ingrese el segundo numero'));
let num3 = parseInt(prompt('Ingrese el tercer numero'));

if(num1>num2 && num1>num3){
    document.write('El primer numero ingresado ' + num1 + ' es el mayor');
}else{ if(num1<num2 && num2>num3){
    document.write('El segundo numero ingresado ' + num2 + ' es el mayor');
}else{ if(num1<=num2 && num2<num3){
    document.write('El tercer numero ingresado ' + num3 + ' es el mayor');
}else{
    document.write('Los numeros ingresados son iguales ' + num1);
}
}
}