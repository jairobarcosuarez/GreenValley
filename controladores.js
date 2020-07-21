//comsumo servicio de spotyfy
//musica de green valley
let url ="https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks?country=ES";

//definir la variable para las imagenes
let imagen1=document.getElementById("imagen1");
let imagen2=document.getElementById("imagen2");
let imagen3=document.getElementById("imagen3");
let audio1=document.getElementById("audio1");
let audio2=document.getElementById("audio2");
let audio3=document.getElementById("audio3");
let titulo1=document.getElementById("titulo1");
let titulo2=document.getElementById("titulo2");
let titulo3=document.getElementById("titulo3");


// definir permiso
let token="  Bearer BQAk0rq5HrlfmsI5t1OiZopCRRjNqX4G4nia98BMtZWbAjUpdYfzPPamdrN1uu42QgMcXEuIPEAmzZJFA87o-9EJl5n8CQNdlVTWxdH5CF5hS0fbSKUEfGNiMjGLabilPXyyVS9kH8G6jCJDiWqdUyEESivlaIKD-dE";

//definir objectoAJAX
let objectoAJAX = new XMLHttpRequest();

//abrir conexion
objectoAJAX.open('GET', url, true);

//crear conexion
objectoAJAX.setRequestHeader('Authorization', token);

objectoAJAX.onload=function(){
let respuesta=JSON.parse(this.responseText);
console.log(respuesta);

console.log(respuesta.tracks[0].album.images[0].url);
imagen1.src=respuesta.tracks[0].album.images[0].url;

console.log(respuesta.tracks[0].album.name);
titulo1.textContent=respuesta.tracks[0].album.name;

console.log(respuesta.tracks[0].preview_url);
audio1.src=respuesta.tracks[0].preview_url;
//-------------------------------------

console.log(respuesta.tracks[1].album.images[1].url);
imagen2.src=respuesta.tracks[1].album.images[1].url;

console.log(respuesta.tracks[1].album.name);
titulo2.textContent=respuesta.tracks[1].album.name;

console.log(respuesta.tracks[1].preview_url);
audio2.src=respuesta.tracks[1].preview_url;
//-----------------------------------------

console.log(respuesta.tracks[4].album.images[1].url);
imagen3.src=respuesta.tracks[4].album.images[0].url;

console.log(respuesta.tracks[4].album.name);
titulo3.textContent=respuesta.tracks[4].album.name;

console.log(respuesta.tracks[4].preview_url);
audio3.src=respuesta.tracks[4].preview_url;
}

//enviamos peticion
objectoAJAX.send();






