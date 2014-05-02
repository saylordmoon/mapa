function generateRadialNav( paper,        // Raphael's paper object
                            cx, cy,       // x and y coordinates of the center of the circle from which the arcs will be calculated
                            inner_radius, // pixels from origin to interior arc
                            radial_thickness,  // width of navigation area in pixels
                            menu_items,   // an object with one key per menu item; the value of each key is arbitrary
                            callback,     // a finalization callback for menu items which should accept three arguments: the menu_items key, the path element, and the menu_items value.  The first and third parameters are taken directly from the menu_items object.
                            options )     // Unused but added out of habit.
{
	options = options || {};

	var start_radians = options.start_radians || 0;
	var end_radians = options.end_radians || Math.PI / 2;
	var menu_item_count = 0;
	for ( var k in menu_items )
		menu_item_count++;

	var slice_radians = ( end_radians - start_radians ) / menu_item_count;

	var index = 0;
	for ( var k in menu_items )
	{
		var path = [];
		path.push( "M", cx + Math.cos( start_radians + slice_radians * index ) * inner_radius, cy + Math.sin( start_radians + slice_radians * index ) * inner_radius );
		path.push( "L", cx + Math.cos( start_radians + slice_radians * index ) * ( inner_radius + radial_thickness ), cy + Math.sin( start_radians + slice_radians * index ) * ( inner_radius + radial_thickness ) );
		path.push( "A", 
			inner_radius + radial_thickness, inner_radius + radial_thickness,
			slice_radians, 0, 1,
			cx + Math.cos( start_radians + slice_radians * ( index + 1 ) ) * ( inner_radius + radial_thickness ), cy + Math.sin( start_radians + slice_radians * ( index + 1 ) ) * ( inner_radius + radial_thickness ) );
		path.push( "L", cx + Math.cos( start_radians + slice_radians * ( index + 1 ) ) * inner_radius, cy + Math.sin( start_radians + slice_radians * ( index + 1 ) ) * inner_radius );
		path.push( "A",
			inner_radius, inner_radius,
			slice_radians, 0, 0, 
			cx + Math.cos( start_radians + slice_radians * index ) * inner_radius, cy + Math.sin( start_radians + slice_radians * index ) * inner_radius );
		path.push( "Z" );

		var element = paper.path( path ).attr( { fill: 'none', stroke: 'none' } );
		callback( k, element, menu_items[k] );

		index++;
	}
}

	// generateRadialNav(paper,bbx.x,bbx.y,200,1,{key1:1,key2:2,key3:3},function(k,p,v)
				// {
				// 	console.log('key',k,'p',p.node.id)
				// 	var bbox = p.getBBox();
				// 	var menuitem = paper.image("img/img2.png",bbox.x,bbox.y,100,100)
				// 	menuitem.node.id = k;
				// 	menu.push(menuitem)
				// });


	// paper.getElementByPoint(mouseX, mouseY).attr({stroke: "#f00"});

			// var createBlink = function(i,that){     
			// 	var fadeIn = function(i){   
			// 		if(i == 100){
			// 			console.log("end fadein");
			// 			return;
			// 		}else{
			// 			console.log("fadein " + i);
			// 			that.animate({ opacity: 0.8 }, 1000, "<" , function(){
			// 				fadeOut(++i) ;
			// 			});
			// 		}
			// 	}
			// 	var fadeOut = function(i){  
			// 		if(i == 100){
			// 			console.log("end fadeout");
			// 			return;
			// 		}else{
			// 			console.log("fadeout " + i);
			// 			that.animate({ opacity: 0.0 }, 1000, "<" , function(){
			// 				fadeIn(++i);
			// 			});
			// 		}
			// 	}
			// 	fadeIn(i);      
// 			// }
// posx = e.pageX - $(document).scrollLeft() - $('#canvas').offset().left;
// posy = e.pageY - $(document).scrollTop() - $('#canvas').offset().top;


			// document.onclick = function() { 

			// 	console.log('mouse',event.offsetX,event.offsetY);

			// 	var item = paper.getElementByPoint(event.offsetX, event.offsetY)

			// 	console.log(item);
			// 	if (item !== null)
			// 	{
			// 		//item.attr({stroke: "#f00"});
			// 		console.log(item.node.id);
			// 	}
			// 	else
			// 	{
			// 		// menu.remove();
			// 	}
			// }

	