let num1 = parseInt(prompt('Ingrese el primer numero'));
let num2 = parseInt(prompt('Ingrese el segundo numero'));
if(num1>num2){
    document.write('<p>El primer numero ingresado es el mayor ' + num1 + '</p>');

}else{
    if(num1<num2){
        document.write('<p>El segundo numero ingresado es el mayor ' + num2 + '</p>');
    }else{
        if(num1===num2){
            document.write('<p>Los numeros ingresados son iguales' + num1 + '</p>');
        }
    }
}