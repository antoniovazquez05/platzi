class pakiman
{
  constructor(n, v, a)
  {
    this.imagen = new Image();
    this.nombre = n;
    this.vida = v;
    this.ataque = a;

    this.imagen.src = imagenes[this.nombre];

  }
  hablar()
  {
    alert(this.nombre);
  }
  mostrar()
  {
    document.write("<p>");
    document.body.appendChild(this.imagen);
    document.write("<strong>" + this.nombre + "</strong><br />");
    document.write("vida:" + this.vida +"<br />");
    document.write("ataque:" + this.ataque + "<hr />");
    document.write("</p>");
  }
}
