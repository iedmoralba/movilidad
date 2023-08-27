//se debe enlazar el code js de moveable
//<script src="https://cdnjs.cloudflare.com/ajax/libs/moveable/0.42.2/moveable.min.js"></script>
//se puede crear una funcion que agregue la libreria al html de forma automatica

//lineas para colocar en el header
//<script src="https://cdnjs.cloudflare.com/ajax/libs/moveable/0.42.2/moveable.min.js"></script>
//<script src="js/codemoveable.js"></script>

//asigna el moveable de acuerdo al selector y añade el moveable como propiedad del objeto para
//despuesa acceder a las propiedades del moveable
//element.moveable.draggable=false;
function createMoveable(element) {
	let moveable = new Moveable(document.body, {
		target: element,
		// If the container is null, the position is fixed. (default: parentElement(document.body))
		container: document.body,
		draggable: true,
		resizable: false,
		scalable: false,
		rotatable: false,
		warpable: false,
		// Enabling pinchable lets you use events that
		// can be used in draggable, resizable, scalable, and rotateable.
		pinchable: true, // ["resizable", "scalable", "rotatable"]
		origin: false,
		keepRatio: false,
		// Resize, Scale Events at edges.
		edge: false,
		renderDirections: ["nw", "n", "ne", "w", "e", "sw", "s", "se"],
		throttleDrag: 0,
		throttleResize: 1,
		throttleScale: 0,
		throttleRotate: 0,
		rotationPosition: "top",
		dragArea: false,
		zoom: 1,
		hideDefaultLines:true,
		padding: {
			"left": 0,
			"top": 0,
			"right": 0,
			"bottom": 0
		}
	});
	moveable.target.moveable = moveable;

	/* draggable */
	moveable.on("dragStart", e => {
		//console.log("onDragStart", e.target);
	}).on("drag", e => {
		//console.log("onDrag left, top", e.left, e.top);
		e.target.style.left = `${e.left}px`;
		e.target.style.top = `${e.top}px`;
		// console.log("onDrag translate", dist);
		// target!.style.transform = transform;
		mostrarEspacios(e);
	}).on("dragEnd", e => {
		//console.log("onDragEnd", e.target, e.isDrag);
		checarColisiones(e);
	});

	/* resizable */
	let frame = {
		translate: [0, 0]
	};

	moveable.on("resizeStart", e => {
		//console.log(e);
		e.setOrigin(["%", "%"]);
		e.dragStart && e.dragStart.set(frame.translate);
	}).on("resize", e => {
		const beforeTranslate = e.drag.beforeTranslate;
		frame.translate = beforeTranslate;
		e.target.style.width = `${e.width}px`;
		e.target.style.height = `${e.height}px`;
		e.target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
	}).on("resizeEnd", e => {
		console.log("finalizo resize");
	});

	/* rotatable */
	moveable.on("rotateStart", e => {
		console.log("onRotateStart", e.target);
	}).on("rotate", e => {
		console.log(e);
		console.log("onRotate", e.dist);
		e.target.style.transform = e.transform;
	}).on("rotateEnd", e => {
		console.log("onRotateEnd", e.target, e.isDrag);
	});

	/* warpable */
	this.matrix = [
		1, 0, 0, 0,
		0, 1, 0, 0,
		0, 0, 1, 0,
		0, 0, 0, 1,
	];
	moveable.on("warpStart", e => {
		console.log("onWarpStart", e.target);
	}).on("warp", e => {
		//console.log("onWarp", target);
		// target.style.transform = transform;
		this.matrix = e.multiply(this.matrix, e.delta);
		e.target.style.transform = `matrix3d(${this.matrix.join(",")})`;
	}).on("warpEnd", e => {
		console.log("onWarpEnd", e.target, e.isDrag);
	});
}

//se asigna el moveable a partir de un array en el cual se especifica los selectores
//ejemplo array=['#cudaro1','.circulo'];
function createMoveableArray(array){
	array.forEach(function(item){
		createMoveable(item);
	});
}

//la funcion agrega en evento click para modificar la propiedad resizable de la propiedad 
//moveable de un elemento, por lo tanto el elemento ya debe ser moveable
function mostrarResizable(selector){
	let element=document.querySelector(selector);
	element.addEventListener('click',function(){
		this.moveable.resizable=true;
	});
}

//la funcion a partir de un array asigna la funcion mostrarResizable
function mostrarResizableArray(array){
	array.forEach(function(item){
		mostrarResizable(item);
	});
}

//captura el elemento y modifica a false la propiedad resizable del moveable de cada elemento
function ocultarResizable(selector){
	let element=document.querySelector(selector);
	element.moveable.resizable=false;
}

function hiddenResizableByElement(element){
	element.moveable.resizable=false;
}

//captura los elementos del array y modifica a false la propiedad resizable del moveable 
//de cada elemento
function ocultarResizableArray(array){
	array.forEach(function(item){
		ocultarResizable(item);
	});
}

function hiddenResizableArrayByElement(array){
	array.forEach(function(item){
		hiddenResizableByElement(item);
	});
}

function elementOcultaResizable(selector,array){
	let element=document.querySelector(selector);
	element.addEventListener('click',function(){
		ocultarResizableArray(array);
	})
}

function elementOcultarResizableArray(array1,array){
	array1.forEach(function(item){
		elementOcultaResizable(item,array);
	});
}

function ocultarAllResizable(){
	var elements = document.getElementsByTagName("div");
	//var matchingElements = [];

	for (var i = 0; i < elements.length; i++) {
	  var element = elements[i];
	  if(element.moveable){
	  	 if (element.moveable.resizable === true) {
		    //matchingElements.push(element);
		    element.moveable.resizable=false;
		  }
	  }
	 
	}
}

function agruparMoveables(){
	var elements = document.getElementsByTagName("div");
	var matchingElements = [];

	for (var i = 0; i < elements.length; i++) {
	  var element = elements[i];
	  if(element.moveable){
	  	 if (element.moveable.resizable === true) {
		   	matchingElements.push(element);
		  }
	  }
	}

    let meleft=menorOffsetLeft(matchingElements);
    let maleft=mayorOffsetLeft(matchingElements);
    let cwidth=(maleft.offsetLeft+maleft.offsetWidth)-meleft.offsetLeft;

    let metop=menorOffsetTop(matchingElements);
    let matop=mayorOffsetTop(matchingElements);
    let cheight=(matop.offsetTop+matop.offsetHeight)-metop.offsetTop; 


    // Crear un nuevo div para agrupar los elementos
    var contenedor = document.createElement("div");
    contenedor.id = "contenedor";
    contenedor.style.position="absolute";
    contenedor.style.border="1px solid black";
    contenedor.style.width=cwidth+"px";
    contenedor.style.height=cheight+"px";
    contenedor.style.left=meleft.offsetLeft+"px";
    contenedor.style.top=metop.offsetTop+"px";

    restarMenorLeft(matchingElements,meleft.offsetLeft);
    restarMenorTop(matchingElements,metop.offsetTop);

    hiddenResizableArrayByElement(matchingElements);

    matchingElements.forEach(function(item){
    	contenedor.appendChild(item);
    });
    document.querySelector('#lienzo').appendChild(contenedor);
    createMoveable('#contenedor');
}


//se puede construir una funcion que devuelva el mayor o menor de la propiedad indicada como
//parametro de tal forma no habría que declara dos funciones por propiedad.

//se puede hacer una funcion que aumente o dismiya una propiedad en el valor indicado en el
// parametro de la funcion 

function menorOffsetLeft(array){
	let element="";
	let menor="";
	array.forEach(function(item){
		let df=item.offsetLeft;
		if(menor===""){
			menor=df;
			element=item;
		}else{
			if(df<menor){
				menor=df;
				element=item;
			}
		}
	});
	return(element);
}

function mayorOffsetLeft(array){
	let element="";
	let mayor="";
	array.forEach(function(item){
		let df=item.offsetLeft;
		if(mayor===""){
			mayor=df;
			element=item;
		}else{
			if(df>mayor){
				mayor=df;
				element=item;
			}
		}
	});
	return(element);
}

function restarMenorLeft(array,valor){
	array.forEach(function(item){
		item.style.left=item.offsetLeft-valor+"px";
	});
}

function menorOffsetTop(array){
	let element="";
	let menor="";
	array.forEach(function(item){
		let df=item.offsetTop;
		if(menor===""){
			menor=df;
			element=item;
		}else{
			if(df<menor){
				menor=df;
				element=item;
			}
		}
	});
	return(element);
}

function mayorOffsetTop(array){
	let element="";
	let mayor="";
	array.forEach(function(item){
		let df=item.offsetTop;
		if(mayor===""){
			mayor=df;
			element=item;
		}else{
			if(df>mayor){
				mayor=df;
				element=item;
			}
		}
	});
	return(element);
}

function restarMenorTop(array,valor){
	array.forEach(function(item){
		item.style.top=item.offsetTop-valor+"px";
	});
}