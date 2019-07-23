function start (){ /*Esta función oculta elementos innecesarios y coloca el navegador en pantalla completa*/
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
      }
    // document.body.style.overflow ="hidden";
    document.getElementById("nav").style.display = "none";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("exitButton").style.display = "block";
    document.getElementById("interface").style.display = "inline-block"; 
    document.getElementById("buttons").style.display = "inline-block";   
}
function goBack(){ /*Esta función devuelve la página y el navegador a su estado normal*/
    if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    document.getElementById("nav").style.display = "block";
    document.getElementById("startButton").style.display = "block";
    document.getElementById("exitButton").style.display = "none";
    document.getElementById("interface").style.display = "none ";
    document.getElementById("buttons").style.display="none";
    document.getElementById("dispIMG").src = "../media/default.png";
    document.getElementById("descTXT").innerHTML= "¡Selecciona uno de los lugares de Ba Sing en los botones de abajo para conocer más!";    
}

/*Las siguientes funciones modifican el contenido del panel derecho dependiendo del botón presionado*/ 
function click1(){
    document.getElementById("dispIMG").src = "../media/Muro_Exterior_de_Ba_Sing_Se.png";
    document.getElementById("descTXT").innerHTML= "El muro es la estructura que mantiene a la ciudad segura contra la nación del fuego.";
    document.getElementById("moreInfo").style.visibility = "visible";
    document.getElementById("moreInfo").setAttribute("href","https://avatar.fandom.com/es/wiki/Ba_Sing_Se#Muro_Externo");
}
function click2(){
    document.getElementById("dispIMG").src = "../media/Sector_bajo.png";
    document.getElementById("descTXT").innerHTML= "En el sector bajo viven los recíen llegados y la gente con menos recursos.";
    document.getElementById("moreInfo").style.visibility = "visible";
    document.getElementById("moreInfo").setAttribute("href","https://avatar.fandom.com/es/wiki/Ba_Sing_Se#Sector_Bajo");
}
function click3(){
    document.getElementById("dispIMG").src = "../media/Sector_medio.png";
    document.getElementById("descTXT").innerHTML= "En el sector medio viven los comerciantes y gente de clase media en general.";
    document.getElementById("moreInfo").style.visibility = "visible";
    document.getElementById("moreInfo").setAttribute("href","https://avatar.fandom.com/es/wiki/Ba_Sing_Se#Sector_Medio");
}
function click4(){
    document.getElementById("dispIMG").src = "../media/Sector_alto.png";
    document.getElementById("descTXT").innerHTML= "En el sector alto vive la nobleza y los mas ricos de la ciudad.";
    document.getElementById("moreInfo").style.visibility = "visible";
    document.getElementById("moreInfo").setAttribute("href","https://avatar.fandom.com/es/wiki/Ba_Sing_Se#Sector_Alto");
}
function click5(){
    document.getElementById("dispIMG").src = "../media/Dragón_del_Jazmín.png";
    document.getElementById("descTXT").innerHTML= "El dragón del Jazmín es la tienda de té creada por el general Iroh dentro de la ciudad, llegó a ser la más exitosa de la ciudad.";
    document.getElementById("moreInfo").style.visibility = "visible";
    document.getElementById("moreInfo").setAttribute("href","https://avatar.fandom.com/es/wiki/Drag%C3%B3n_del_Jazm%C3%ADn");
}
function click6(){
    document.getElementById("dispIMG").src = "../media/Palacio_Real_del_Reino_Tierra.png";
    document.getElementById("descTXT").innerHTML= "El palacio real es la sede del gobierno del Reino Tierra, en el vive el Rey Tierra.";
    document.getElementById("moreInfo").style.visibility = "visible";
    document.getElementById("moreInfo").setAttribute("href","https://avatar.fandom.com/es/wiki/Palacio_Real_del_Reino_Tierra");
}
function click7(){
    document.getElementById("dispIMG").src = "../media/Monorriel.png";
    document.getElementById("descTXT").innerHTML= "El monorriel es el principal sistema de transporte de la ciudad. Lleva a la gente desde las lejanas murallas exteriores a la ciudad.";
    document.getElementById("moreInfo").style.visibility = "visible";
    document.getElementById("moreInfo").setAttribute("href","https://avatar.fandom.com/es/wiki/Monorriel");
}
function click8(){
    document.getElementById("dispIMG").src = "../media/Lago_Laogai.png";
    document.getElementById("descTXT").innerHTML= "El lago Laogai es un lago a las afueras de la ciudad. Contiene una estructura subterranea utilizada en secreto por los Dai li.";
    document.getElementById("moreInfo").style.visibility = "visible";
    document.getElementById("moreInfo").setAttribute("href","https://avatar.fandom.com/es/wiki/Lago_Laogai");
}
function click9(){
    document.getElementById("dispIMG").src = "../media/Sector_intermuros.png";
    document.getElementById("descTXT").innerHTML= "Entre las murallas externas y la ciudad, se encuentra un gran terreno que se usa para cultivar la comida de los ciudadanos.";
    document.getElementById("moreInfo").style.visibility = "visible";
    document.getElementById("moreInfo").setAttribute("href","https://avatar.fandom.com/es/wiki/Ba_Sing_Se#Zona_Agraria");
}
function click10(){
    document.getElementById("dispIMG").src = "../media/Lagos_Este_y_Oeste.png";
    document.getElementById("descTXT").innerHTML= "El paso de la serpiente es una estrecha franja de Tierra que da acceso a la ciudad, está resguardado por una monstruosa serpiente.";
    document.getElementById("moreInfo").style.visibility = "visible";
    document.getElementById("moreInfo").setAttribute("href","https://avatar.fandom.com/es/wiki/Paso_de_la_Serpiente");
}
function click11(){
    document.getElementById("dispIMG").src = "../media/Zoológico.png";
    document.getElementById("descTXT").innerHTML= "El zoológico de Ba Sing Se solía ser solitario y lúgubre, el avatar Aang lo reconstruye a las afueras con Tierra Control.";
    document.getElementById("moreInfo").style.visibility = "visible";
    document.getElementById("moreInfo").setAttribute("href","https://avatar.fandom.com/es/wiki/Zool%C3%B3gico_de_Ba_Sing_Se");
}

function click12(){
    document.getElementById("dispIMG").src = "../media/Taladro.jpg";
    document.getElementById("descTXT").innerHTML= "Este taladro fue usado por la nación del fuego para tratar de penetrar el Muro exterior. El equipo Avatar lo logra destruir.";
    document.getElementById("moreInfo").style.visibility = "visible";
    document.getElementById("moreInfo").setAttribute("href","https://avatar.fandom.com/es/wiki/Taladro_de_la_Naci%C3%B3n_del_Fuego");
}
function click13(){
    document.getElementById("dispIMG").src = "../media/Campamento.png";
    document.getElementById("descTXT").innerHTML= "El campamento de la orden del Loto Blanco fue usado por la orden antes de el día del Cometa de Sozin, para preparar la liberación de la ciudad";
    document.getElementById("moreInfo").style.visibility = "visible";
    document.getElementById("moreInfo").setAttribute("href","https://avatar.fandom.com/es/wiki/Taladro_de_la_Naci%C3%B3n_del_Fuego");    
}
