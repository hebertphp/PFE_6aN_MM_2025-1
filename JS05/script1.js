let saida = document.getElementById("saida");
let num1 = parseInt( prompt("Digite o primeiro número"));//20
let num2 = parseInt(prompt("Digite o segundo numero"));//25
let soma = num1 + num2;
saida.innerHTML="Soma: "+soma;
saida.innerHTML+="<br>"+typeof(num1);