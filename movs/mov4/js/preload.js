let imgprecargadas=0; 
function preloadImages(images,contenedor) {
  for (const image of images) {
    const img = new Image();
    img.src = image.src;
    img.onload = function() {
    	contenedor.appendChild(img);
    	imgprecargadas++;
    	contarImagenes();
    };
  }
}

function contarImagenes(){
	if(imgprecargadas===images.length){
		console.log("imagenes cargadas")
		setTimeout(function(){
			document.getElementById("txtloading").style.display="none";
			document.getElementById('btnplay').style.display="block";
		},1000);
	}
}

let almaceng=document.createElement('div');
almaceng.setAttribute('id','almaceng');
almaceng.setAttribute('style','visibility:hidden; position:absolute; top:-9000px; left:-9000px; width:0px; height:0px; opacity:0;');
document.getElementById('lienzo').appendChild(almaceng);

const images = [
  {src:'../img/anunciopare.svg'},
	{src:'../img/anunsemaforo.svg'},
	{src:'../img/auto.png'},
	{src:'../img/btnfs.svg'},
	{src:'../img/btnfs2.svg'},
	{src:'../img/btnplay.svg'},
	{src:'../img/concepto-fondo-abstracto_23-2148557828.jpg'},
	{src:'../img/curvapder.svg'},
	{src:'../img/curvapizq.svg'},
	{src:'../img/d1.svg'},
	{src:'../img/d10.svg'},
	{src:'../img/d11.svg'},
	{src:'../img/d12.svg'},
	{src:'../img/d13.svg'},
	{src:'../img/d14.svg'},
	{src:'../img/d15.svg'},
	{src:'../img/d16.svg'},
	{src:'../img/d17.svg'},
	{src:'../img/d18.svg'},
	{src:'../img/d19.svg'},
	{src:'../img/d2.svg'},
	{src:'../img/d20.svg'},
	{src:'../img/d21.svg'},
	{src:'../img/d22.svg'},
	{src:'../img/d23.svg'},
	{src:'../img/d24.svg'},
	{src:'../img/d25.svg'},
	{src:'../img/d26.svg'},
	{src:'../img/d27.svg'},
	{src:'../img/d3.svg'},
	{src:'../img/d4.svg'},
	{src:'../img/d5.svg'},
	{src:'../img/d6.svg'},
	{src:'../img/d7.svg'},
	{src:'../img/d8.svg'},
	{src:'../img/d9.svg'},
	{src:'../img/diploma.png'},
	{src:'../img/diploma.svg'},
	{src:'../img/doscontrauno.svg'},
	{src:'../img/ensader.svg'},
	{src:'../img/ensaizq.svg'},
	{src:'../img/flechas.svg'},
	{src:'../img/fondo-abstracto-formas-blancas_79603-1362.jpg'},
	{src:'../img/fondo-formas-abstractas-dibujadas-mano_23-2149086618.jpg'},
	{src:'../img/fondo-formas-dibujadas-mano_23-2148976373.jpg'},
	{src:'../img/fondo-formas-hexagono-abstracto-degradado_23-2149120168.jpg'},
	{src:'../img/fondo-garabato-abstracto-plano_23-2149315774.jpg'},
	{src:'../img/fondo-geometrico-abstracto-degradado_23-2149120339.jpg'},
	{src:'../img/fondo-geometrico-plano_23-2148957201.jpg'},
	{src:'../img/fondo-geometrico-plano_23-2148967370.jpg'},
	{src:'../img/fondo-geometrico-verde-abstracto_23-2148374529.jpg'},
	{src:'../img/fondo-memphis-semitono-azul-lineas-amarillas-formas-circulos_1017-31954.jpg'},
	{src:'../img/fondo-minimalista-dibujado-mano_23-2148999828.jpg'},
	{src:'../img/fondo-minimo-abstracto_52683-41567.jpg'},
	{src:'../img/fondo-semitono-abstracto_23-2148595343.jpg'},
	{src:'../img/girobder.svg'},
	{src:'../img/girobizq.svg'},
	{src:'../img/mapadenuevo.svg'},
	{src:'../img/menu.svg'},
	{src:'../img/nopase.svg'},
	{src:'../img/pare.svg'},
	{src:'../img/pidle.svg'},
	{src:'../img/portada.png'},
	{src:'../img/portada.svg'},
	{src:'../img/redasim.svg'},
	{src:'../img/reduder.svg'},
	{src:'../img/reduizq.svg'},
	{src:'../img/semaforo.svg'},
	{src:'../img/semaforo2.svg'},
	{src:'../img/siga.svg'},
	{src:'../img/tacometro.svg'},
	{src:'../img/underwater-2966572_1280.jpg'},
	{src:'../img/vel30.svg'},
];
let mcontenedor=document.getElementById('almaceng');
preloadImages(images,mcontenedor);

