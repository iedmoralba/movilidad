const acel=document.getElementById('acel');
const fren=document.getElementById('fren');
let autovel=0.5;
let velpress=0;

acel.addEventListener('mousedown',function(){
	acelerar();
});

fren.addEventListener('mousedown',function(){
	frenar();
});

function acelerar(){
	let cant=Number((myCar.vel+autovel).toFixed(1));
	myCar.vel=cant;
	velpress+=10;
	actualizarTacometro();
}

function frenar(){
	let cant=Number((myCar.vel-autovel).toFixed(1));
	if(cant>0){
		myCar.vel=cant;
		velpress-=10;
		actualizarTacometro();
	}else{
		myCar.vel=0;
		velpress=0;
		actualizarTacometro();
	}
}

function actualizarTacometro(){
	let tacometro=document.getElementById('valortacometro');
	tacometro.textContent=velpress;
}