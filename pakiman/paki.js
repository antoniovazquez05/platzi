var imagenes = [];
imagenes["cauchin"] = "vaca.png";
imagenes["pokacho"] = "pollo.png";
imagenes["tocinauro"] = "cerdo.png";

console.log(imagenes);



var cauchin = new pakiman("cauchin", 100, 30);
var pokacho = new pakiman("pokacho", 80, 50);
var tocinauro = new pakiman("tocinauro", 120, 40);

var coleccion = [];
coleccion.push(cauchin);
coleccion.push(pokacho);
coleccion.push(tocinauro);

for(var fredito of coleccion)
{
fredito.mostrar();
}

for(var x in coleccion[0])
{
  console.log(x);
}
