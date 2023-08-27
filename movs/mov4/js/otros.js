let cicloOtros=window.requestAnimationFrame(moverOtros);
let one=[];
function moverOtros(){
	if(diap===1 && one[diap]===undefined){
		/*myCar2 = new Car();
		myCar2.id="otro1";
		myCar2.vel=1;
		myCar2.update();
		*/
		anime({
		  targets: '#otro1',
		  left: '740px',
		  duration:20000,
		  easing:'linear'
		});
		one[diap]=1;
	}
	if(diap===2 && one[diap]===undefined){
		anime({
		  targets: '#otro2',
		  left: '740px',
		  duration:15000,
		  easing:'linear'
		});
		one[diap]=1;
	}
	window.requestAnimationFrame(moverOtros)
}

