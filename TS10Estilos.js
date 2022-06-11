var veces=0;
function ComparaIntentos(){
let valor1 = document.getElementById("usuario").value;
let valor2 = document.getElementById("clave01").value;
let valor3 = document.getElementById("clave02").value;

let text = document.getElementById("textpantalla");


if (valor2==valor3) 
{
    text.innerHTML= ("Bienvenido " +  valor1);
    text.style.color="green";
}
    else if(veces<3)
{
veces++;
text.innerHTML=("Las contraseñas ingresadas no coinciden");
text.style.color="red";
if (veces==3)

{
    text.innerHTML=("Ha excedido el limite de intentos permitidos, el sistema se esta bloqueando...");
    text.style.color="red";
}
}
    return false;
}

