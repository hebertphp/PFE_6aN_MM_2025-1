let a,b;
let saida = document.getElementById("saida");
a=prompt("Digite o nome");//Bete
b=prompt("Digite o sobrenome");//Oliveira
saida.innerHTML=`${a} ${b}`;//Bete Oliveira
b+=" ";//b="oliveira"+" "//b="Oliveira "
b+=a;//b="Oliveira "+"Bete"//b="Oliveira Bete"
saida.innerHTML+=`<br>${b}`;//