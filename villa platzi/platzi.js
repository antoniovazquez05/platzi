var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");



var fondo=
{
  url: "tile.png",
  cargaOK: false
};


var vaca = {
  url: "vaca.png",
  cargaOK: false
};

    var cantidad = aleatorio(5, 25);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);


vaca.objeto = new Image();
vaca.objeto.src = "vaca.png";
vaca.objeto.addEventListener("load", cargarvaca);


function cargarFondo()
{
fondo.cargaOK = true;
dibujar();
}
function cargarvaca()
{
vaca.cargaOK = true;
dibujar();
}

function dibujar()
{
if(fondo.cargaOK == true)
  {
    papel.drawImage(fondo.imagen, 10, 10);
  }
if(vaca.cargaOK == true)
  {

    console.log(cantidad);
    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0, 10);
        var y = aleatorio(0, 10);
        var x = x * 80;
        var y = y * 80;
      papel.drawImage(vaca.objeto, x, y);
    }

  }

}
function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
