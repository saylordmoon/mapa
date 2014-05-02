function generateMenu(paper,x,y,width,items,callback)
{
	var menu 		  	= paper.set();

	var spaceBetween = 10;

	var ycont = y;

	for ( key in items )
	{
		var menuitem  		= paper.image("img/img2.png", x, ycont ,width,width);
		menuitem.node.id 	= key;

		menu.push(menuitem);

		ycont += width + spaceBetween;

		var value = items[key];
		callback(x,y,key,value);

		console.log(key);
	}

	return menu;

}