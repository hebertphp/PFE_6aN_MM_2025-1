let saida = document.getElementById("saida");//
const num1 = parseFloat(prompt ("Digite o número1: "));//7
const num2 = parseFloat(prompt ("Digite o número2:"));//2
let soma;
soma=num1+num2;//12
saida.innerHTML="<br>Soma = "+soma;//12
saida.innerHTML+="<br>Subtração = "+(num1-num2);//8
saida.innerHTML+="<br>Multiplicação = "+num1*num2;//20
saida.innerHTML+="<br>Divisão = "+(num1/num2);//5
saida.innerHTML+="<br>Resto = "+(num1%num2);//0
saida.innerHTML+="<br>Expo = "+(num1**num2);//100
/*
4878985478%2=0
487898547%2=1

7%4=3
*/