//Variables
var piedra = 0;
var papel= 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;
var puntosUsuario = 1;
var puntosMaquina = 1;
var opcionUsuario;
var opcionMaquina;
var opciones = ["Piedra","Papel","Tijera","Lagarto","Spock"];

//Funciones
function aleatorio(minimo, maximo)
{
 var numero = Math.floor( Math.random() * (maximo - minimo +1) + minimo);
  return numero;
}

var nombreUsuario = prompt("¿Cúal es tu nickname?" , "Usuario");
document.getElementById("nombre-usuario").innerHTML = nombreUsuario;

function resetear()
{
    puntosUsuario = 1;
    puntosMaquina = 1;
    document.getElementById("M-Usuario").innerHTML = 0;
    document.getElementById("M-Maquina").innerHTML = 0;
    document.getElementById("resultado").innerHTML = "";
    document.getElementsByClassName("uspiedra")[0].classList.remove("show");
    document.getElementsByClassName("uspapel")[0].classList.remove("show");
    document.getElementsByClassName("ustijera")[0].classList.remove("show");
    document.getElementsByClassName("uslagarto")[0].classList.remove("show");
    document.getElementsByClassName("usspock")[0].classList.remove("show");
    document.getElementsByClassName("mapiedra")[0].classList.remove("show");
    document.getElementsByClassName("mapapel")[0].classList.remove("show");
    document.getElementsByClassName("matijera")[0].classList.remove("show");
    document.getElementsByClassName("malagarto")[0].classList.remove("show");
    document.getElementsByClassName("maspock")[0].classList.remove("show");
}


//Piedra
function rock() {
  opcionUsuario = 0;
if (opcionUsuario == piedra)
  {
    //Usuario
    document.getElementsByClassName("uspiedra")[0].className += " show";
    document.getElementsByClassName("uspapel")[0].classList.remove("show");
    document.getElementsByClassName("ustijera")[0].classList.remove("show");
    document.getElementsByClassName("uslagarto")[0].classList.remove("show");
    document.getElementsByClassName("usspock")[0].classList.remove("show");
    //Maquina
    document.getElementsByClassName("mapiedra")[0].classList.remove("show");
    document.getElementsByClassName("mapapel")[0].classList.remove("show");
    document.getElementsByClassName("matijera")[0].classList.remove("show");
    document.getElementsByClassName("malagarto")[0].classList.remove("show");
    document.getElementsByClassName("maspock")[0].classList.remove("show");
    opcionMaquina = aleatorio (0,4);
    opciones[opcionMaquina];
    if (opcionMaquina == piedra)
    {
        document.getElementsByClassName("mapiedra")[0].className += " show";
        document.getElementById("resultado").innerHTML = "¡Empate!";
    }
    else if (opcionMaquina == papel)
    {
        document.getElementsByClassName("mapapel")[0].className += " show";
        document.getElementById("resultado").innerHTML = "¡Perdiste!";
        document.getElementById("M-Maquina").innerHTML = puntosMaquina++;
    }
    else if (opcionMaquina == tijera)
    {
        document.getElementsByClassName("matijera")[0].className += " show";
        document.getElementById("resultado").innerHTML = "¡Ganaste!";
        document.getElementById("M-Usuario").innerHTML = puntosUsuario++;  
    }
    else if (opcionMaquina == lagarto)
      {
        document.getElementsByClassName("malagarto")[0].className += " show";
        document.getElementById("resultado").innerHTML = "¡Ganaste!";
        document.getElementById("M-Usuario").innerHTML = puntosUsuario++;
      }
    else if (opcionMaquina == spock)
      {
        document.getElementsByClassName("maspock")[0].className += " show";
        document.getElementById("resultado").innerHTML = "¡Perdiste!";
        document.getElementById("M-Maquina").innerHTML = puntosMaquina++;
      }
  }
}

//Papel
function paper() {
  opcionUsuario = 1;
if (opcionUsuario == papel)
  {
    //Usuario
    document.getElementsByClassName("uspapel")[0].className += " show";
    document.getElementsByClassName("uspiedra")[0].classList.remove("show");
    document.getElementsByClassName("ustijera")[0].classList.remove("show");
    document.getElementsByClassName("uslagarto")[0].classList.remove("show");
    document.getElementsByClassName("usspock")[0].classList.remove("show");
    //Maquina
    document.getElementsByClassName("mapiedra")[0].classList.remove("show");
    document.getElementsByClassName("mapapel")[0].classList.remove("show");
    document.getElementsByClassName("matijera")[0].classList.remove("show");
    document.getElementsByClassName("malagarto")[0].classList.remove("show");
    document.getElementsByClassName("maspock")[0].classList.remove("show");
    opcionMaquina = aleatorio (0,4);
    opciones[opcionMaquina];
    
 if (opcionMaquina == piedra)
      {
        document.getElementsByClassName("mapiedra")[0].className += " show";
        document.getElementById("resultado").innerHTML = "¡Ganaste!";
        document.getElementById("M-Usuario").innerHTML = puntosUsuario++; 
      }
    else if (opcionMaquina == papel)
      {
        document.getElementsByClassName("mapapel")[0].className += " show";
        document.getElementById("resultado").innerHTML = "¡Empate!";
      }
    else if (opcionMaquina == tijera)
      {
        document.getElementsByClassName("matijera")[0].className += " show";
        document.getElementById("resultado").innerHTML = "¡Perdiste!";
        document.getElementById("M-Maquina").innerHTML = puntosMaquina++;
      }
    else if (opcionMaquina == lagarto)
      {
        document.getElementsByClassName("malagarto")[0].className += " show";
        document.getElementById("resultado").innerHTML = "¡Perdiste!";
        document.getElementById("M-Maquina").innerHTML = puntosMaquina++;
      }
    else if (opcionMaquina == spock)
      {
        document.getElementsByClassName("maspock")[0].className += " show";
        document.getElementById("resultado").innerHTML = "¡Ganaste!";
        document.getElementById("M-Usuario").innerHTML = puntosUsuario++; 
      }
  }
}

//Tijeras
function ciseaux() {
  opcionUsuario = 2;
  if (opcionUsuario == tijera)
  {
    //Usuario
    document.getElementsByClassName("ustijera")[0].className += " show";
    document.getElementsByClassName("uspapel")[0].classList.remove("show");
    document.getElementsByClassName("uspiedra")[0].classList.remove("show");
    document.getElementsByClassName("uslagarto")[0].classList.remove("show");
    document.getElementsByClassName("usspock")[0].classList.remove("show");
    //Maquina
    document.getElementsByClassName("mapiedra")[0].classList.remove("show");
    document.getElementsByClassName("mapapel")[0].classList.remove("show");
    document.getElementsByClassName("matijera")[0].classList.remove("show");
    document.getElementsByClassName("malagarto")[0].classList.remove("show");
    document.getElementsByClassName("maspock")[0].classList.remove("show");
    opcionMaquina = aleatorio (0,4);
    opciones[opcionMaquina];
    
if (opcionMaquina == piedra)
      {
        document.getElementsByClassName("mapiedra")[0].className += " show";
        document.getElementById("resultado").innerHTML = "¡Perdiste!";
        document.getElementById("M-Maquina").innerHTML = puntosMaquina++;
      }
    else if (opcionMaquina == papel)
      {
        document.getElementsByClassName("mapapel")[0].className += " show";
        document.getElementById("resultado").innerHTML = "¡Ganaste!";
        document.getElementById("M-Usuario").innerHTML = puntosUsuario++; 
      }
    else if (opcionMaquina == tijera)
      {
        document.getElementsByClassName("matijera")[0].className += " show";
        document.getElementById("resultado").innerHTML = "¡Empate!";
      }
    else if (opcionMaquina == lagarto)
      {
        document.getElementsByClassName("malagarto")[0].className += " show";
        document.getElementById("resultado").innerHTML = "¡Ganaste!";
        document.getElementById("M-Usuario").innerHTML = puntosUsuario++; 
      }
    else if (opcionMaquina == spock)
      {
        document.getElementsByClassName("maspock")[0].className += " show";
        document.getElementById("resultado").innerHTML = "¡Perdiste!";
        document.getElementById("M-Maquina").innerHTML = puntosMaquina++;
      }
  }
}

//Lagarto
function lizard() {
  opcionUsuario = 3;
  if (opcionUsuario == lagarto)
  {
    //Usuario
    document.getElementsByClassName("uslagarto")[0].className += " show";
    document.getElementsByClassName("uspapel")[0].classList.remove("show");
    document.getElementsByClassName("ustijera")[0].classList.remove("show");
    document.getElementsByClassName("uspiedra")[0].classList.remove("show");
    document.getElementsByClassName("usspock")[0].classList.remove("show");
    //Maquina
    document.getElementsByClassName("mapiedra")[0].classList.remove("show");
    document.getElementsByClassName("mapapel")[0].classList.remove("show");
    document.getElementsByClassName("matijera")[0].classList.remove("show");
    document.getElementsByClassName("malagarto")[0].classList.remove("show");
    document.getElementsByClassName("maspock")[0].classList.remove("show");
    opcionMaquina = aleatorio (0,4);
    opciones[opcionMaquina];
    

if (opcionMaquina == piedra)
      {
        document.getElementsByClassName("mapiedra")[0].className += " show";
        document.getElementById("resultado").innerHTML = "¡Perdiste!";
        document.getElementById("M-Maquina").innerHTML = puntosMaquina++;
      }
    else if (opcionMaquina == papel)
      {
        document.getElementsByClassName("mapapel")[0].className += " show";
        document.getElementById("resultado").innerHTML = "¡Ganaste!";
        document.getElementById("M-Usuario").innerHTML = puntosUsuario++; 
      }
    else if (opcionMaquina == tijera)
      {
        document.getElementsByClassName("matijera")[0].className += " show";
        document.getElementById("resultado").innerHTML = "¡Perdiste!";
        document.getElementById("M-Maquina").innerHTML = puntosMaquina++;
      }
    else if (opcionMaquina == lagarto)
      {
        document.getElementsByClassName("malagarto")[0].className += " show";
        document.getElementById("resultado").innerHTML = "¡Empate!";
      }
    else if (opcionMaquina == spock)
      {
        document.getElementsByClassName("maspock")[0].className += " show";
        document.getElementById("resultado").innerHTML = "¡Ganaste!";
        document.getElementById("M-Usuario").innerHTML = puntosUsuario++; 
      }
  }
}

//Spock
function mrSpock() {
  opcionUsuario = 4;
  if (opcionUsuario == spock)
  {
    //Usuario
    document.getElementsByClassName("usspock")[0].className += " show";
    document.getElementsByClassName("uspapel")[0].classList.remove("show");
    document.getElementsByClassName("ustijera")[0].classList.remove("show");
    document.getElementsByClassName("uslagarto")[0].classList.remove("show");
    document.getElementsByClassName("uspiedra")[0].classList.remove("show");
    //Maquina
    document.getElementsByClassName("mapiedra")[0].classList.remove("show");
    document.getElementsByClassName("mapapel")[0].classList.remove("show");
    document.getElementsByClassName("matijera")[0].classList.remove("show");
    document.getElementsByClassName("malagarto")[0].classList.remove("show");
    document.getElementsByClassName("maspock")[0].classList.remove("show");
    opcionMaquina = aleatorio (0,4);
    opciones[opcionMaquina];
    

if (opcionMaquina == piedra)
      {
        document.getElementsByClassName("mapiedra")[0].className += " show";
        document.getElementById("resultado").innerHTML = "¡Ganaste!";
        document.getElementById("M-Usuario").innerHTML = puntosUsuario++; 
      }
    else if (opcionMaquina == papel)
      {
        document.getElementsByClassName("mapapel")[0].className += " show";
        document.getElementById("resultado").innerHTML = "¡Perdiste!";
        document.getElementById("M-Maquina").innerHTML = puntosMaquina++;
      }
    else if (opcionMaquina == tijera)
      {
        document.getElementsByClassName("matijera")[0].className += " show";
        document.getElementById("resultado").innerHTML = "¡Ganaste!";
        document.getElementById("M-Usuario").innerHTML = puntosUsuario++; 
      }
    else if (opcionMaquina == lagarto)
      {
        document.getElementsByClassName("malagarto")[0].className += " show";
        document.getElementById("resultado").innerHTML = "¡Perdiste!";
        document.getElementById("M-Maquina").innerHTML = puntosMaquina++;
      }
    else if (opcionMaquina == spock)
      {
        document.getElementsByClassName("maspock")[0].className += " show";
        document.getElementById("resultado").innerHTML = "¡Empate!";
      }
  }
}