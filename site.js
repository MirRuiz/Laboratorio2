
/* var nombre= "Hotel Kanaki";
var ubicacion= "Costa Rica";
var img= "https://www.costarica.org/wp-content/uploads/2014/12/Kenaki-Lodge-Bungalow-Garden.jpg";


document.getElementById("hotel-name").innerHTML = nombre;

document.getElementById("hotel-location").innerHTML = "Ubicado en "+ ubicacion;

document.getElementById("imagen").src = img;

 puntuacion
var ranking = prompt("Puntuación del 1 al 5");
document.getElementById("ranking").innerHTML = ranking +" estrellas";

anonimo
var siNo =confirm("Quieres que la reseña sea anonima?");
document.getElementById("anonimo").checked = siNo; */

var hoteles ={
    Kanaki:{
        name: "Kanaki",
        location: "Costa Rica",
        img: "https://www.costarica.org/wp-content/uploads/2014/12/Kenaki-Lodge-Bungalow-Garden.jpg",
    },
    Shamana:{
        name: "Shamana",
        location: "Costa Rica",
        img: "https://cf.bstatic.com/images/hotel/max1024x768/164/164733085.jpg",
    },
};


var selectorHotel = prompt("indica el nombre del hotel: Kanaki o Shamana");


document.getElementById("hotel-name").innerHTML = "Hotel "+ hoteles[selectorHotel].name;
document.getElementById("hotel-location").innerHTML = "Ubicado en "+ hoteles[selectorHotel].location;
document.getElementById("imagen").src = hoteles[selectorHotel].img;



