function Migraciones(paper,x,y,width)
{
	var spaceBetween = 10;
	var migraciones = paper.set();

	var llegadas 	= paper.image("img/llegadas.svg",x,y,width,width);
	var salidas  	= paper.image("img/salidas.svg",width + spaceBetween ,y ,width ,width);

	migraciones.push(llegadas);
	migraciones.push(salidas);
	

	return migraciones;
}