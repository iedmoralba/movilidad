let menu=document.getElementById("menu");
		let btnmenu=document.getElementById("btnmenu");
		let btnfulls=document.getElementById("btnfulls");
		//let btncerrar=document.getElementById("btncerrar");

		btnmenu.addEventListener("click", function(){
			if(menu.classList.contains('open')){
				plegarMenu();
			}else{
				desplegarMenu();
			}
		});
		btnfulls.addEventListener("click",function(){
			toggleFullscreen(document.getElementById("marco"));
		});
		/*
		btncerrar.addEventListener("click",function(){
			console.log("esperando codigo para cerrar");
			plegarMenu();
		});
		*/
		function desplegarMenu(){
			btnmenu.style.transform="rotate(90deg)";
			addStyle(btnfulls,{'top':'35px','opacity':'1'});
			//addStyle(btncerrar,{'top':'70px','opacity':'1'});
			menu.classList.add("open");
		}
		function plegarMenu(){
			btnmenu.style.transform="rotate(0deg)";
			addStyle(btnfulls,{'top':'0px','opacity':'0'});
			//addStyle(btncerrar,{'top':'0px','opacity':'0'});
			menu.classList.remove("open");
		}
		function toggleFullscreen(element) {
		  if (
		    !document.fullscreenElement &&
		    !document.mozFullScreenElement && 
		    !document.webkitFullscreenElement && 
		    !document.msFullscreenElement
		  ) { // El elemento no está en modo de pantalla completa
		    colocarFullS(element);
			ponerIconoQF();
			plegarMenu();
		  } else { // El elemento está en modo de pantalla completa
		    quitarFullS(element);
		    ponerIconoF();
		    plegarMenu();
		  }
		}
		function colocarFullS(element){
			if (element.requestFullscreen) {
		      element.requestFullscreen();
		    } else if (element.mozRequestFullScreen) {
		      element.mozRequestFullScreen();
		    } else if (element.webkitRequestFullscreen) {
		      element.webkitRequestFullscreen();
		    } else if (element.msRequestFullscreen) {
		      element.msRequestFullscreen();
		    }
		}
		function quitarFullS(element){
			if (document.exitFullscreen) {
		      document.exitFullscreen();
		    } else if (document.mozCancelFullScreen) {
		      document.mozCancelFullScreen();
		    } else if (document.webkitExitFullscreen) {
		      document.webkitExitFullscreen();
		    } else if (document.msExitFullscreen) {
		      document.msExitFullscreen();
		    }
		}
		function ponerIconoQF(){btnfulls.setAttribute('src','../img/btnfs2.svg');}
		function ponerIconoF(){btnfulls.setAttribute('src','../img/btnfs.svg');}
		function addStyle(element, stylejson) {
		    for (const property in stylejson) {
		        //console.log(`${property}: ${stylejson[property]}`);
		        element.style[property] = stylejson[property];
		    }
		}