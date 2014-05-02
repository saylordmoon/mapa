function Migraciones(paper,x,y,width)
{
	var spaceBetween = 10;
	var migraciones = paper.set();

	var llegadas 	= paper.image("img/llegadas.svg",x,y,width,width);
	var llegadasTxt = paper.text(100, 110, "llegadas").attr({fill: '#ff0000'});
	llegadasTxt.transform("s2.5,2.5");
	var salidas  	= paper.image("img/salidas.svg",width + spaceBetween ,y ,width ,width);
	// vae salidasTxt = paper.

	migraciones.push(llegadas);
	migraciones.push(llegadasTxt);
	// migraciones.push(salidas);
	

	return migraciones;
}