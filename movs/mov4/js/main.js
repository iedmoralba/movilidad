let myCar;
let diap=1;
let mainframes;
let cancel=false;
window.onload=function(){
	myCar = new Car();
	myCar.update();

	document.getElementById('contsemaforo1').luz="red";
	document.getElementById('contsemaforo2').luz="red";

	let botonPlay=document.getElementById("btnplay");
	botonPlay.addEventListener('click',function(){
		mainframes=onEnterFrame();
		mostrarDiap(1);
		mostrarUi();
		startTimer();
		ocultarZonaColision();
	});

	let retro=document.getElementById('retro');
	retro.addEventListener('click',function(){
		window.location.reload();
	});

	animarSemaforo();
}
function ocultarZonaColision(){
	let zonas=document.querySelectorAll('.zonaColision');
	zonas.forEach(function(item){item.style.visibility="hidden";});
}
function onEnterFrame(){
	if(myCar.getLeft()>(731+50) || myCar.getLeft()<-50 || myCar.getTop()>(411+50) || myCar.getTop()<-50){
		mostrarMsg(3);
	}
	if(diap===1){
		let auto=document.getElementById('auto');
		let zona1=document.getElementById('zona1');
		estaTocando(auto,zona1,null,function(){
			let tref=myCar.getTop();
			myCar.id='auto2';
			myCar.setTop(tref);
			myCar.giro=false;
			myCar.girook=false;
			mostrarDiap(2);
			diap=2;
		});
	}
	if(diap===2){
		let auto=document.getElementById('auto2');
		let zona2=document.getElementById('zona2');
		estaTocando(auto,zona2,null,function(){
			let tref=myCar.getTop();
			myCar.id='auto3';
			myCar.setTop(tref);
			myCar.giro=false;
			myCar.girook=false;
			mostrarDiap(3);
			diap=3;
		});
	}
	if(diap===3){
		let auto=document.getElementById('auto3');
		let zona3=document.getElementById('zona3');
		let zona4=document.getElementById('zona4');
		let pare1=document.getElementById('pare1');
		estaTocando(auto,zona3,function(){myCar.giro=true;},function(){
			myCar.giro=false;
		});
		estaTocando(auto,zona4,null,function(){
			let tref=myCar.getTop();
			myCar.id='auto4';
			myCar.setTop(tref);
			myCar.giro=false;
			myCar.girook=false;
			mostrarDiap(4);
			diap=4;
		});
		estaTocando(auto,pare1,function(){
			const obj1 = auto.getBoundingClientRect();
			const obj2 = pare1.getBoundingClientRect();
			if(obj1.right < obj2.right && myCar.vel===0){
				pare1.setAttribute("id","pare2");
			}else if(obj1.right > obj2.right && myCar.vel===0){
				mostrarMsg(1);
				myCar.noUpdate();
			}else if(obj1.left > obj2.left && myCar.vel!==0){
				mostrarMsg(2);
				myCar.noUpdate();
			}
		},null);
	}
	if(diap===4){
		let auto=document.getElementById('auto4');
		let zona5=document.getElementById('zona5');
		let zona6=document.getElementById('zona6');
		estaTocando(auto,zona5,function(){myCar.giro=true;},function(){
			myCar.giro=false;
		});
		estaTocando(auto,zona6,null,function(){
			let tref=myCar.getLeft();
			myCar.id='auto5';
			myCar.setLeft(tref);
			myCar.giro=false;
			myCar.girook=false;
			mostrarDiap(5);
			diap=5;
		});
	}
	if(diap===5){
		let auto=document.getElementById('auto5');
		let zona7=document.getElementById('zona7');
		estaTocando(auto,zona7,null,function(){
			let tref=myCar.getLeft();
			myCar.id='auto6';
			myCar.setLeft(tref);
			myCar.giro=false;
			myCar.girook=false;
			mostrarDiap(6);
			diap=6;
		});
	}
	if(diap===6){
		let auto=document.getElementById('auto6');
		let zona8=document.getElementById('zona8');
		let zona9=document.getElementById('zona9');
		estaTocando(auto,zona8,function(){myCar.giro=true;},function(){
			myCar.giro=false;
		});
		estaTocando(auto,zona9,null,function(){
			let tref=myCar.getTop();
			myCar.id='auto7';
			myCar.setTop(tref);
			myCar.giro=false;
			myCar.girook=false;
			mostrarDiap(7);
			diap=7;
		});
	}
	if(diap===7){
		let auto=document.getElementById('auto7');
		let zona10=document.getElementById('zona10');
		estaTocando(auto,zona10,null,function(){
			let tref=myCar.getTop();
			myCar.id='auto8';
			myCar.setTop(tref);
			myCar.giro=false;
			myCar.girook=false;
			mostrarDiap(8);
			diap=8;
		});
	}
	if(diap===8){
		let auto=document.getElementById('auto8');
		let zona11=document.getElementById('zona11');
		let zona12=document.getElementById('zona12');
		let semaforo1=document.getElementById('semaforo1');
		estaTocando(auto,zona11,function(){myCar.giro=true;},function(){
			myCar.giro=false;
		});
		estaTocando(auto,zona12,null,function(){
			let tref=myCar.getLeft();
			myCar.id='auto9';
			myCar.setLeft(tref);
			myCar.giro=false;
			myCar.girook=false;
			mostrarDiap(9);
			diap=9;
		});
		estaTocando(auto,semaforo1,function(){
			const obj1 = auto.getBoundingClientRect();
			const obj2 = semaforo1.getBoundingClientRect();
			const cont = document.getElementById('contsemaforo1');
			if(obj1.left < obj2.left && cont.luz==="red"){
				mostrarMsg(4);
				myCar.vel=0;
				cancelAnimationFrame(mainframes);
				cancel=true;
			}else if(obj1.left < obj2.left && cont.luz==="yellow"){
				mostrarMsg(5);
				myCar.vel=0;
				cancelAnimationFrame(mainframes);
				cancel=true;
			}
		},null);
	}
	if(diap===9){
		let auto=document.getElementById('auto9');
		let zona13=document.getElementById('zona13');
		estaTocando(auto,zona13,null,function(){
			let tref=myCar.getLeft();
			myCar.id='auto10';
			myCar.setLeft(tref);
			myCar.giro=false;
			myCar.girook=false;
			mostrarDiap(10);
			diap=10;
		});
	}
	if(diap===10){
		let auto=document.getElementById('auto10');
		let zona14=document.getElementById('zona14');
		let zona15=document.getElementById('zona15');
		estaTocando(auto,zona14,function(){myCar.giro=true;},function(){
			myCar.giro=false;
		});
		estaTocando(auto,zona15,null,function(){
			let tref=myCar.getTop();
			myCar.id='auto11';
			myCar.setTop(tref);
			myCar.giro=false;
			myCar.girook=false;
			mostrarDiap(11);
			diap=11;
		});
	}
	if(diap===11){
		let auto=document.getElementById('auto11');
		let zona16=document.getElementById('zona16');
		estaTocando(auto,zona16,null,function(){
			let tref=myCar.getTop();
			myCar.id='auto12';
			myCar.setTop(tref);
			myCar.giro=false;
			myCar.girook=false;
			mostrarDiap(12);
			diap=12;
		});
	}
	if(diap===12){
		let auto=document.getElementById('auto12');
		let zona17=document.getElementById('zona17');
		estaTocando(auto,zona17,null,function(){
			let tref=myCar.getTop();
			myCar.id='auto13';
			myCar.setTop(tref);
			myCar.giro=false;
			myCar.girook=false;
			mostrarDiap(13);
			diap=13;
		});
	}
	if(diap===13){
		let auto=document.getElementById('auto13');
		let zona18=document.getElementById('zona18');
		estaTocando(auto,zona18,null,function(){
			let tref=myCar.getTop();
			myCar.id='auto14';
			myCar.setTop(tref);
			myCar.giro=false;
			myCar.girook=false;
			mostrarDiap(14);
			diap=14;
		});
	}
	if(diap===14){
		let auto=document.getElementById('auto14');
		let zona19=document.getElementById('zona19');
		estaTocando(auto,zona19,null,function(){
			let tref=myCar.getTop();
			myCar.id='auto15';
			myCar.setTop(tref);
			myCar.giro=false;
			myCar.girook=false;
			mostrarDiap(15);
			diap=15;
		});
	}
	if(diap===15){
		let auto=document.getElementById('auto15');
		let zona20=document.getElementById('zona20');
		let zona21=document.getElementById('zona21');
		estaTocando(auto,zona20,function(){myCar.giro=true;},function(){
			myCar.giro=false;
		});
		estaTocando(auto,zona21,null,function(){
			let tref=myCar.getLeft();
			myCar.id='auto16';
			myCar.setLeft(tref);
			myCar.giro=false;
			myCar.girook=false;
			mostrarDiap(16);
			diap=16;
		});
	}
	if(diap===16){
		let auto=document.getElementById('auto16');
		let zona22=document.getElementById('zona22');
		let zona23=document.getElementById('zona23');
		estaTocando(auto,zona22,function(){myCar.giro=true;},function(){
			myCar.giro=false;
		});
		estaTocando(auto,zona23,null,function(){
			let tref=myCar.getTop();
			myCar.id='auto17';
			myCar.setTop(tref);
			myCar.giro=false;
			myCar.girook=false;
			mostrarDiap(17);
			diap=17;
		});
	}
	if(diap===17){
		let auto=document.getElementById('auto17');
		let zona24=document.getElementById('zona24');
		estaTocando(auto,zona24,null,function(){
			let tref=myCar.getTop();
			myCar.id='auto18';
			myCar.setTop(tref);
			myCar.giro=false;
			myCar.girook=false;
			mostrarDiap(18);
			diap=18;
		});
	}
	if(diap===18){
		let auto=document.getElementById('auto18');
		let zona25=document.getElementById('zona25');
		estaTocando(auto,zona25,null,function(){
			let tref=myCar.getTop();
			myCar.id='auto19';
			myCar.setTop(tref);
			myCar.giro=false;
			myCar.girook=false;
			mostrarDiap(19);
			diap=19;
		});
	}
	if(diap===19){
		let auto=document.getElementById('auto19');
		let zona26=document.getElementById('zona26');
		estaTocando(auto,zona26,null,function(){
			let tref=myCar.getTop();
			myCar.id='auto20';
			myCar.setTop(tref);
			myCar.giro=false;
			myCar.girook=false;
			mostrarDiap(20);
			diap=20;
		});
	}
	if(diap===20){
		let auto=document.getElementById('auto20');
		let zona27=document.getElementById('zona27');
		estaTocando(auto,zona27,null,function(){
			let tref=myCar.getTop();
			myCar.id='auto21';
			myCar.setTop(tref);
			myCar.giro=false;
			myCar.girook=false;
			mostrarDiap(21);
			diap=21;
		});
	}
	if(diap===21){
		let auto=document.getElementById('auto21');
		let zona28=document.getElementById('zona28');
		let zona38=document.getElementById('zona38');
		estaTocando(auto,zona28,null,function(){
			let tref=myCar.getTop();
			myCar.id='auto22';
			myCar.setTop(tref);
			myCar.giro=false;
			myCar.girook=false;
			mostrarDiap(22);
			diap=22;
		});
		estaTocando(auto,zona38,function(){
			console.log(myCar.vel)
			if(myCar.vel>1.5){
				mostrarMsg(6);
				myCar.noUpdate();
			}
		},null);
	}
	if(diap===22){
		let auto=document.getElementById('auto22');
		let zona29=document.getElementById('zona29');
		estaTocando(auto,zona29,null,function(){
			let tref=myCar.getTop();
			myCar.id='auto23';
			myCar.setTop(tref);
			myCar.giro=false;
			myCar.girook=false;
			mostrarDiap(23);
			diap=23;
		});
	}
	if(diap===23){
		let auto=document.getElementById('auto23');
		let zona30=document.getElementById('zona30');
		let zona31=document.getElementById('zona31');
		let semaforo2=document.getElementById('semaforo2');

		estaTocando(auto,zona30,function(){myCar.giro=true;},function(){
			myCar.giro=false;
		});
		estaTocando(auto,zona31,null,function(){
			let tref=myCar.getTop();
			myCar.id='auto24';
			myCar.setTop(tref);
			myCar.giro=false;
			myCar.girook=false;
			mostrarDiap(24);
			diap=24;
		});
		estaTocando(auto,semaforo2,function(){
			const obj1 = auto.getBoundingClientRect();
			const obj2 = semaforo2.getBoundingClientRect();
			const cont = document.getElementById('contsemaforo2');
			if(obj1.left < obj2.left && cont.luz==="red"){
				mostrarMsg(4);
				myCar.vel=0;
				cancelAnimationFrame(mainframes);
				cancel=true;
			}else if(obj1.left < obj2.left && cont.luz==="yellow"){
				mostrarMsg(5);
				myCar.vel=0;
				cancelAnimationFrame(mainframes);
				cancel=true;
			}
		},null);
	}
	if(diap===24){
		let auto=document.getElementById('auto24');
		let zona32=document.getElementById('zona32');
		let zona33=document.getElementById('zona33');
		estaTocando(auto,zona32,function(){myCar.giro=true;},function(){
			myCar.giro=false;
		});
		estaTocando(auto,zona33,null,function(){
			let tref=myCar.getLeft();
			myCar.id='auto25';
			myCar.setLeft(tref);
			myCar.giro=false;
			myCar.girook=false;
			mostrarDiap(25);
			diap=25;
		});
	}
	if(diap===25){
		let auto=document.getElementById('auto25');
		let zona34=document.getElementById('zona34');
		estaTocando(auto,zona34,null,function(){
			let tref=myCar.getLeft();
			myCar.id='auto26';
			myCar.setLeft(tref);
			myCar.giro=false;
			myCar.girook=false;
			mostrarDiap(26);
			diap=26;
		});
	}
	if(diap===26){
		let auto=document.getElementById('auto26');
		let zona35=document.getElementById('zona35');
		let zona36=document.getElementById('zona36');
		estaTocando(auto,zona35,function(){myCar.giro=true;},function(){
			myCar.giro=false;
		});
		estaTocando(auto,zona36,null,function(){
			let tref=myCar.getTop();
			myCar.id='auto27';
			myCar.setTop(tref);
			myCar.giro=false;
			myCar.girook=false;
			mostrarDiap(27);
			diap=27;
		});
	}
	if(diap===27){
		let auto=document.getElementById('auto27');
		let zona37=document.getElementById('zona37');
		let mtimer=document.getElementById('timer-container');
		estaTocando(auto,zona37,function(){myCar.giro=true;},function(){
			document.getElementById('diploma').style.display="block";
			pauseTimer();
			mtimer.style.top="373px";
			mtimer.style.left="301px";
		});
	}
	if(cancel===false){
		window.requestAnimationFrame(onEnterFrame);	
	}
	
}
function mostrarDiap(n){
	let diaps=document.querySelectorAll('.diap');
	diaps.forEach(function(item){
		item.style.display="none";
	})
	diaps[n].style.display="block";
}
function mostrarUi(){
	document.getElementById('flechas').style.display="flex";
	document.getElementById('tacometro').style.display="block";
	document.getElementById('acel').style.display="flex";
	document.getElementById('fren').style.display="flex";
}
function mostrarMsg(num){
	let desc=document.getElementById('desc');
	let imagen=document.getElementById('imgmsg');
	switch(num){
		case 1:
			imagen.setAttribute("src","../img/pare.svg");
			desc.textContent="Te has detenido despues de la zona de pare."
		break;
		case 2:
			imagen.setAttribute("src","../img/pare.svg");
			desc.textContent="No has tenido en cuenta la señal de PARE."
		break;
		case 3:
			imagen.setAttribute("src","../img/auto.png");
			desc.textContent="No has tenido en cuenta las señales y has salido de la calzada."
		break;
		case 4:
			imagen.setAttribute("src","../img/semaforo2.svg");
			desc.textContent="Has pasado la intersección con la luz en rojo en el semaforo."
		break;
		case 5:
			imagen.setAttribute("src","../img/semaforo2.svg");
			desc.textContent="Has pasado la intersección con la luz en amarillo en el semaforo."
		break;
		case 6:
			imagen.setAttribute("src","../img/vel30.svg");
			desc.textContent="No has reducido la velocidad a maximo 30 km/h."
		break;
	}
	document.getElementById('retro').style.display="block";
	pauseTimer();
}
function animarSemaforo(){
	const semaforo1=document.getElementById('contsemaforo1');
	const luzroja1=document.getElementById('luzroja1');
	const luzamarilla1=document.getElementById('luzamarilla1');
	const luzverde1=document.getElementById('luzverde1');

	const semaforo2=document.getElementById('contsemaforo2');
	const luzroja2=document.getElementById('luzroja2');
	const luzamarilla2=document.getElementById('luzamarilla2');
	const luzverde2=document.getElementById('luzverde2');

	let timer=setInterval(function(){
		if(semaforo1.luz==="red"){
			luzamarilla1.style.background="yellow";
			luzroja1.style.background="black";
			semaforo1.luz="yellow";
		}else if(semaforo1.luz==="yellow"){
			luzamarilla1.style.background="black";
			luzverde1.style.background="green";
			semaforo1.luz="green";
		}else{
			luzverde1.style.background="black";
			luzroja1.style.background="red";
			semaforo1.luz="red";
		}

		if(semaforo2.luz==="red"){
			luzamarilla2.style.background="yellow";
			luzroja2.style.background="black";
			semaforo2.luz="yellow";
		}else if(semaforo2.luz==="yellow"){
			luzamarilla2.style.background="black";
			luzverde2.style.background="green";
			semaforo2.luz="green";
		}else{
			luzverde2.style.background="black";
			luzroja2.style.background="red";
			semaforo2.luz="red";
		}
	},5000);
}