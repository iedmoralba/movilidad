document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);

function onKeyDown(event) {
  var key = event.keyCode || event.which;
  //console.log(key);
  if(key===37){
  	fleftPresionado();
  }
  if(key===38){
  	ftopPresionado();
  }
  if(key===39){
  	frightPresionado();
  }
  if(key===40){
  	fdownPresionado();
  }
}

function onKeyUp(event) {
  var key = event.keyCode || event.which;
  if(key===37){
  	myCar.teclaPress="";
  }
  if(key===38){
  	myCar.teclaPress="";
  }
  if(key===39){
  	myCar.teclaPress="";
  }
  if(key===40){
  	myCar.teclaPress="";
  }
  if(key===65){
  	acelerar();
  }
  if(key===87){
  	frenar();
  }
}