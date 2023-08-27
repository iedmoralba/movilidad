function estaTocando(div1, div2,funcion1,funcion2) {
	if(div1 && div2){
		const rect1 = div1.getBoundingClientRect();
		const rect2 = div2.getBoundingClientRect();
		// Verificar si los bordes de los elementos se superponen
		if (rect1.left < rect2.right && rect1.right > rect2.left && rect1.top < rect2.bottom && rect1.bottom > rect2.top) {
			div1.colision=div2;
			if(funcion1!==null){funcion1();}
		}else{
			if(funcion2!==null && div1.colision===div2){funcion2();div1.colision=undefined;}
		}
	}
}

function estaTocandoArray(div1, array,funcion1,funcion2) {
  	array.forEach(function(item){
		const rect1 = div1.getBoundingClientRect();
  		const rect2 = item.getBoundingClientRect();

		// Verificar si los bordes de los elementos se superponen
		if (rect1.left < rect2.right && rect1.right > rect2.left && rect1.top < rect2.bottom && rect1.bottom > rect2.top) {
			// Los elementos están tocándose
			div1.colision=item;
			funcion1();
				    //return true;
		}else{
			if(funcion1!==null && div1.colision===item){
				//console.log("salio de la colision");
				funcion2();
				div1.colision=undefined;
			}
		}
	});
}