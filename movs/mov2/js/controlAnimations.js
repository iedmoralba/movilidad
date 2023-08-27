/*Funciones*/
function agregarAnimacion(element,clase,funcion){
	element.classList.add(clase);
	eliminateClassAnimationEnd(element,clase,funcion);
}
function eliminateClassAnimationEnd(element,clase,funcion){
	element.elimclass=clase;
	if(funcion!==null){element.playfunction=funcion;}
	element.addEventListener('animationend',eliminateClass);
}
function eliminateClass(){
	let clase=event.target.elimclass;
	let funcion=event.target.playfunction;
	if(funcion!==undefined){event.target.playfunction(); event.target.playfunction=undefined;}
	event.target.classList.remove(clase);
	event.target.elimclass="";
	event.target.removeEventListener('animationend',eliminateClass);
}
function detectPlayAnimationEnd(array,funcion){
	let contador=0;
	array.forEach(function(item){
		item.addEventListener("animationend",auxiliar1);
	});

	function auxiliar1(){
		event.target.removeEventListener("animationend",auxiliar1);
		contador++;
		if(contador===array.length && funcion!==undefined){
			contador=0;
			funcion();
		}
	}
}

/*Funcion para utilizar*/
/*
function playAnimation(numero,funcion){
	switch(numero){
		case 1:
		break;
	}
}
*/

/*Ejemplo de animaciones individuales y encadenadas*/
/*
function playAnimation(numero, funcion) {
	switch (numero) {
		case 1:
			agregarAnimacion(cuadro, 'tada', funcion);
			break;
		case 2:
			agregarAnimacion(circulo, 'heartBeat', funcion);
			break;
		case 3:
			playAnimation(1);
			playAnimation(2);
			detectPlayAnimationEnd([cuadro, circulo], funcion);
			break;
		case 4:
			agregarAnimacion(cuadro, 'zoomIn', funcion);
			break;
		case 5:
			playAnimation(1, function() {
				console.log("termino cuadro");
				playAnimation(2, function() {
					console.log("termino circulo");
					setTimeout(function() {
						playAnimation(3, function() {
							playAnimation(4);
						});
					}, 0);
				})
			});
			break;
	}
}
*/