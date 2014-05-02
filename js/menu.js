function generateMenu(paper,x,y,width,items,callback)
{
	var menu 		  	= paper.set();

	var spaceBetween 	= 10;

	var ycont = y;

	for ( key in items )
	{
		var menuitem  		= paper.image("img/img2.png", x, ycont ,width,width);
		var menuitemtext	= paper.text(x, ycont+width ,items[key]);
		menuitemtext.scale(2);
		menuitem.node.id 	= key;
		menuitem.attr({cursor:'pointer'});

		var value = items[key];

		menu.push(menuitem);

		ycont += width + spaceBetween;
	}

	menu.click (function() 
	{ 
		console.log(this.node.id);
		callback(this.node.id,"");
	}); 


	return menu;

}